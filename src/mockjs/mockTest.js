/*
* Created by crish on 2018/3/13
* */

import Mock from 'mockjs';
const Random = Mock.Random;

Random.cname();
Random.email();
Random.date();
Random.city();

Mock.mock('http://www.table.com/init',{
  'data|50': [{
    'Id|+1': 1,
    'Name': '@cname',
    'Email': '@email',
    'Date': '@date',
    'City': '@city',
  }],
});
