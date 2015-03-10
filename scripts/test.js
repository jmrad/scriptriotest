/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 var l = require("log");
l.setLevel("debug");
l.info("{ \"<b>name</b>\" : \"julien\" }");
return { "name" : "julien" };   							