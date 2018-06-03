'use strict';

const Service = require('egg').Service;

const MD5 = require('crypto-js/md5');

const secret = '>odV|]8!IUn.TO)9po';

const encrypt = text => MD5(secret + text).toString();

class UserService extends Service {
  async findAll() {
    return this.ctx.model.User.findAll({
      attributes: ['id', 'username']
    });
  }

  async find(id) {
    return this.ctx.model.User.findById(id);
  }

  async findByUsername(username) {
    return this.ctx.model.User.find({
      where: {
        username
      }
    });
  }

  async create({ username, password }) {
    return this.ctx.model.User.create({ username, password: encrypt(password) });
  }

  async update(id, { username, password }) {
    const room = await this.find(id);

    return room.update({ username, password });
  }

  async delete(id) {
    const room = await this.find(id);

    const users = await this.service.user.findAll();

    if (users.length <= 1) {
      return Promise.reject(new Error('Can not delete all users'));
    }

    return room.destroy();
  }

  async verify({ username, password }) {
    if (!username || !password) {
      return Promise.reject(new Error('Miss username or password'));
    }

    const user = await this.findByUsername(username);

    if (!user) {
      return Promise.reject(new Error('User is not existed'));
    }

    if (user.password === encrypt(password)) {
      return user;
    }

    return Promise.reject(new Error('Username or password incorrect'));
  }
}

module.exports = UserService;
