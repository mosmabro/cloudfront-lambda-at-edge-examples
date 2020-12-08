'use strict';

// Purpose: removes /images/ from the begining of URIs
// Event type: Origin Request
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;
  if (request.uri.startsWith("/images/")) {
    request.uri = request.uri.replace("/images/", "/");
    callback(null, request);
  } else {
    callback(null, request);
  }
}
