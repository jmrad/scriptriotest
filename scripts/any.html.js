/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<b>test</b>"},"scriptrdata":[]}}*#*#*/
var content= '<b>test</b>'; var response = apsdb.httpRespond(); response.write(content);response.close();			