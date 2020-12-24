'use strict';

// Purpose: removes /images/ from the begining of URIs
// Event type: Origin Request
exports.handler = (event, context, callback) => {
  try{
    const request = event.Records[0].cf.request;
    if (request.uri.startsWith("/images/")) {
      request.uri = request.uri.replace("/images/", "/");
    }
    callback(null, request);
  } catch (error) {
      console.error('AcmRewriteCacheControlHeader: CloudFront requestId='+event.Records[0].cf.config.requestId+ ", error.message: "+error.message+
      ", error.stack: "+error.stack);
      throw (error);
  }
}
