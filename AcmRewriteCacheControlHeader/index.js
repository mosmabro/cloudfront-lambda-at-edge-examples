'use strict';
// Purpose: rewrites the cache control header
// Event type: Origin Response
 exports.handler = (event, context, callback) => {
     try{
      const response = event.Records[0].cf.response;
      const headers = response.headers;
      headers['cache-control'] = [{
        key: 'Cache-Control',
        value: 'public, max-age=31536000'
        }];
      callback(null, response);
     } catch (error) {
      console.error('AcmRewriteCacheControlHeader: CloudFront requestId='+event.Records[0].cf.config.requestId+ ", error.message: "+error.message+
      ", error.stack: "+error.stack);
      throw (error);
     }    
};
