'use strict';

// Purpose: replaces /s/ with /static/ in the beginning of URIs
// Event type: Origin Request
exports.handler = (event, context, callback) => {
  try{
    const request = event.Records[0].cf.request;
    if (request.uri.startsWith("/s/")) {
      request.uri = request.uri.replace("/s/", "/static/");
    }
    callback(null, request);
  } catch (error) {
      console.error('AcmRewriteCacheControlHeader: CloudFront requestId='+event.Records[0].cf.config.requestId+ ", error.message: "+error.message+
      ", error.stack: "+error.stack);
      throw (error);
  }
}
