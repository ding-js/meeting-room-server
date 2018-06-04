FROM node:carbon

WORKDIR /home/node/app

COPY .  ./

RUN npm install --production --registry=https://registry.npm.taobao.org

CMD ["npm","start"]

EXPOSE 7001