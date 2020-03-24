'use strict';

const Service = require('egg').Service;

class UserListService extends Service {
  async addUser(data) {
    this.ctx.model.Users.create({
      names: data.names,
      position: data.position,
      answerArr: data.answerArr,
      time_data: data.time_data,
    });
  }

  async list() {
    const ctx = this.ctx;
    return ctx.model.Users.find({});
  }
}

module.exports = UserListService;
