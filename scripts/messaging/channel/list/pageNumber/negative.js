/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var count = request.parameters["count"];
var resultsPerPage = request.parameters["resultsPerPage"];
var pageNumber = -10;

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.list(count, resultsPerPage, pageNumber);
log.debug(result);

return result;    							