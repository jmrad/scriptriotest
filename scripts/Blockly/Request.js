/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="26" inline="false" x="47" y="43"><value name="return"><block type="scriptr_request" id="13"><field name="request">queryString</field></block></value></block></xml>*#*#*/
return request.queryString;
   							