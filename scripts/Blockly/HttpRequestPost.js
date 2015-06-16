/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="13" inline="false" x="25" y="61"><value name="return"><block type="scriptr_callhttp" id="26"><field name="method">POST</field><field name="url">http://scriptr.io/documentation</field></block></value></block></xml>*#*#*/
return require("http").request({"url": "http://scriptr.io/documentation" , "method": "POST"})   							