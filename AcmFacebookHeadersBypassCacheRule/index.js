'use strict';

 exports.handler = (event, context, callback) => {
     const request = event.Records[0].cf.request;
     const headers = request.headers;
     if ( headers['user-agent'][0].value.startsWith('facebookexternalhit')){
         headers['cache-control'] = [{
           key: 'Cache-Control',
           value: 'no-cache, cf-no-cache'
           }];
     }
     callback(null, request);
};
