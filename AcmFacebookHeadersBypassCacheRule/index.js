'use strict';

//Purpose: checks if the request is from Facebook bots/crawlers then bypass the cache
// Event type: Viewer Request 
exports.handler = (event, context, callback) => {
     const request = event.Records[0].cf.request;
     const headers = request.headers;
     const userAgentHeaderVal = headers['user-agent'][0].value;
     if ( userAgentHeaderVal == 'facebookexternalhit/1.0*'
        || userAgentHeaderVal == 'facebookexternalhit/1.1*'
         || userAgentHeaderVal == 'facebookexternalhit/1.0'
         || userAgentHeaderVal == 'facebookexternalhit/1.1'
         || userAgentHeaderVal == 'facebookexternalhit/1.0 (+http://www.facebook.com/externalhit_uatext.php)'
         || userAgentHeaderVal == 'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)'){
         headers['cache-control'] = [{
           key: 'Cache-Control',
           value: 'no-cache'
           }];
     }
     callback(null, request);
};
