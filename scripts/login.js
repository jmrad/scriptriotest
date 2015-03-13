/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var l = require("log");
l.setLevel("debug");
l.error("this is a test error log message");
l.info(request.parameters["myparam"]);
return "<b>html</b>";   							