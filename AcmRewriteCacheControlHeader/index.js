'use strict';
// Purpose: rewrites the cache control header
// Event type: Origin Response
 exports.handler = (event, context, callback) => {
     const response = event.Records[0].cf.response;
     const headers = response.headers;
      headers['cache-control'] = [{
        key: 'Cache-Control',
        value: 'public, max-age=31536000'
        }];
     callback(null, response);
};
