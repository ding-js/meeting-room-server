'use strict';

const Service = require('egg').Service;
class OrderService extends Service {
  async find(id) {
    const order = await this.ctx.model.Order.findById(id);

    if (order) {
      return order;
    }

    return Promise.reject(new Error('Invalid order id'));
  }

  async findAll({ scheduledDate }) {
    const options = {};

    if (scheduledDate) {
      Object.assign(options, {
        where: {
          scheduled_date: scheduledDate
        }
      });
    }

    return this.ctx.model.Order.findAll(options);
  }

  async create({ room, scheduledDate, startTime, endTime, orderedBy }) {
    if (!scheduledDate || !startTime || !endTime || !orderedBy) {
      return Promise.reject(new Error('Missing arguments'));
    }

    const r = await this.service.room.find(room);

    const loc = await this.service.location.find(r.location);

    if (startTime < loc.start_time || endTime > loc.end_time) {
      return Promise.reject(new Error('Invalid time'));
    }

    const orders = await this.ctx.model.Order.findAll({
      where: {
        room,
        scheduled_date: scheduledDate
      }
    });

    if (orders.length > 0) {
      if (
        orders.some(order => {
          return (
            (startTime > order.start_time && startTime < order.end_time) ||
            (endTime > order.start_time && endTime < order.end_time) ||
            (startTime === order.start_time && endTime === order.end_time)
          );
        })
      ) {
        return Promise.reject(new Error('Selected time has been ordered'));
      }
    }

    return this.ctx.model.Order.create({
      room,
      scheduled_date: scheduledDate,
      start_time: startTime,
      end_time: endTime,
      ordered_by: orderedBy
    });
  }

  async delete(id) {
    const order = await this.find(id);

    return order.destroy();
  }
}

module.exports = OrderService;
