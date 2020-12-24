'use strict';
// Purpose: bypass cache for Facebook bots/crawlers
// Event type: Viewer Request
 exports.handler = (event, context, callback) => {
   try {
    const request = event.Records[0].cf.request;
    const headers = request.headers;
    if ('user-agent' in headers && headers['user-agent'][0].value.startsWith('facebookexternalhit')){
      headers['cache-control'] = [{
        key: 'Cache-Control',
        value: 'no-cache, cf-no-cache'
        }];
    }
    callback(null, request);
   } catch (error) {
    console.error('AcmFacebookHeadersBypassCacheRule: CloudFront requestId='+event.Records[0].cf.config.requestId+ ", error.message: "+error.message+
    ", error.stack: "+error.stack);
    throw (error);
   }
};