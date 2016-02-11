/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="26" inline="false" x="8" y="19"><value name="return"><block type="scriptr_headers" id="13"><field name="header">Authorization</field></block></value></block></xml>*#*#*/
return request.headers["Authorization"]   							