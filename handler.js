'use strict';

const winston = require('winston');
require('winston-transport-rollbar').Rollbar;

winston.add(winston.transports.Rollbar, {
  rollbarAccessToken: process.env.rollbarServerAccessToken,
});

module.exports.happyEndpoint = (event, context, callback) => {
  const summary = {
    message: 'You have hit the happyEndpoint :)',
    input: event,
  };

  winston.info('You have hit the happyEndpoint', { summary });
  const response = {
    statusCode: 200,
    body: JSON.stringify(summary),
  };

  callback(null, response);
};

module.exports.unhappyEndpoint = (event, context, callback) => {
  const summary = {
    message: 'Oh no!  You hit the unhappyEndpoint!',
    input: event,
  };

  winston.info('You have hit the unhappyEndpoint', { summary });
  const response = {
    statusCode: 500,
    body: JSON.stringify(summary),
  };

  winston.error('unhappyEndpoint error level message', { summary });
  callback(null, response);
};
