'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async home() {
    const list = await this.ctx.service.student.list();
    await this.ctx.render('home', { list });
  }

  async homelist() {
    const sublist = await this.ctx.service.userList.list();
    await this.ctx.render('homelist', { sublist });
  }

  async submit() {
    await this.ctx.service.userList.addUser(this.ctx.request.body);
    this.ctx.body = {
      status: 200,
      msg: '提交成功！',
    };
  }
}

module.exports = HomeController;
