/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */

const path = require('path');

module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578451533050_4759';

  // add your middleware config here
  config.middleware = [];

  // 数据库连接
  config.mongoose = {
    clients: {
      db1: {
        url: 'mongodb://127.0.0.1:27017/investigation',
        // 链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
        options: {},
      },
      db2: {
        url: 'mongodb://127.0.0.1:27017/users',
        // 链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
        options: {},
      },
    },
  };

  config.security = {
    csrf: {
      headerName: 'x-csrf-token', // 通过 header 传递 CSRF token 的默认字段为 x-csrf-token
    },
  };

  // 模板配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  config.nunjucks = {
    cache: true,
  };

  // 静态资源配置
  config.static = {
    prefix: '/',
    dir: path.join(appInfo.baseDir, 'app/public'),
  };


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
