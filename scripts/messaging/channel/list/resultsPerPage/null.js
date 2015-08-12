/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var count = request.parameters["count"];
var resultsPerPage = null;
var pageNumber = request.parameters["pageNumber"];

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.list(count, resultsPerPage, pageNumber);
log.debug(result);

return result;    							