'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const conn = app.mongooseDB.get('db1');
  const ArticleSchema = new Schema({
    id: {
      type: String,
    },
    subject: {
      type: String,
    },
    subjectArray: {
      type: Array,
    },
  }, { versionKey: false });
  return conn.model('InvestigaList', ArticleSchema, 'investigations'); // 我的理解：Article是指定查找的入口，随便取；ArticleSchema是参数；article是你数据集合表的名称
};
