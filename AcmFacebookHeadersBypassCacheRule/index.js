'use strict';

//Purpose: checks if the request is from Facebook bots/crawlers then bypass the cache
// Event type: Viewer Request 
exports.handler = (event, context, callback) => {
     const request = event.Records[0].cf.request;
     const uri = request.uri;
     const headers = request.headers;
     const userAgentHeaderName = 'User-Agent';
     const cacheControlHeaderName = 'Cache-Control';
     const cacheControlHeaderValue = 'no-cache';
     console.log('Host name is '+headers['host'][0].value);
     if ( headers['user-agent'][0].value == 'facebookexternalhit/1.0*'
        || headers['user-agent'][0].value == 'facebookexternalhit/1.1*'
         || headers['user-agent'][0].value == 'facebookexternalhit/1.0'
         || headers['user-agent'][0].value == 'facebookexternalhit/1.1'
         || headers['user-agent'][0].value == 'facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)'
         || headers['user-agent'][0].value == 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'){
         headers[cacheControlHeaderName.toLowerCase()] = [{
           key: cacheControlHeaderName,
           value: cacheControlHeaderValue
           }];
     }
     callback(null, request);
};