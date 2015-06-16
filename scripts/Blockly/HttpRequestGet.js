/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="26" inline="false" x="33" y="19"><value name="return"><block type="scriptr_callhttp" id="13"><field name="method">GET</field><field name="url">http://scriptr.io/documentation</field></block></value></block></xml>*#*#*/
return require("http").request({"url": "http://scriptr.io/documentation" , "method": "GET"})   							