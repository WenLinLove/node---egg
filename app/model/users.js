'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('db2');
  const ArticleSchema = new Schema({
    names: {
      type: String,
    },
    position: {
      type: String,
    },
    answerArr: {
      type: Array,
    },
    time_data: {
      type: String,
    },
  }, { versionKey: false });
  return conn.model('UsersList', ArticleSchema, 'userlist'); // 我的理解：Article是指定查找的入口，随便取；ArticleSchema是参数；article是你数据集合表的名称
};
