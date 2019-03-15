'use strict';

/* eslint-disable no-param-reassign */

module.exports.hellollers = async (context) => {
  context.log('JavaScript HTTP trigger function processed a request.');

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      msg: 'Go Serverless v1.x! Your function executed successfully!!',
    }
  };
  if (context.req.body) {
    context.res.body.reqbody = context.req.body
    if (context.req.body.challenge){
      context.res.body.challenge = context.req.body.challenge
    }
  }
};