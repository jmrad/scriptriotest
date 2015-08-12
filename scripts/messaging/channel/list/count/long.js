/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var count = 2147483648;
var resultsPerPage = request.parameters["resultsPerPage"];
var pageNumber = request.parameters["pageNumber"];

var log = require("log");
log.setLevel("DEBUG");

var messaging = require("messaging");
var result = messaging.channel.list(count, resultsPerPage, pageNumber);
log.debug(result);

return result;   							