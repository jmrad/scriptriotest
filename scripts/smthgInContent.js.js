/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"public int giveMeSomeMoney(){\n  return \"5$\";\n}"},"scriptrdata":[]}}*#*#*/
var content= 'public int giveMeSomeMoney(){\
  return \"5$\";\
}'; var response = apsdb.httpRespond(); response.write(content);response.close();			