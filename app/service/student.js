'use strict';

const Service = require('egg').Service;

class StudentService extends Service {
  async list() {
    const ctx = this.ctx;
    return ctx.model.Lists.find({});
  }
}

module.exports = StudentService;
