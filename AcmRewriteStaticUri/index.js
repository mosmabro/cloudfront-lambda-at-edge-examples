'use strict';

// Purpose: replaces /s/ with /static/ in the beginning of URIs
// Event type: Origin Request
exports.handler = (event, context, callback) => {
  const request = event.Records[0].cf.request;

  if (request.uri.startsWith("/s/")) {
    request.uri = request.uri.replace("/s/", "/static/");
    callback(null, request);
  } else {
    callback(null, request);
  }
}
