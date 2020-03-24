'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/home', controller.home.home);
  router.get('/homelist', controller.home.homelist);
  router.post('/submit', controller.home.submit);
};
