/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var l = require("log");
l.setLevel("debug");
l.info("this is a test info log message");
l.info(request.files["myparam"]);
return "<b>html</b>";   				   							