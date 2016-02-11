/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="5" inline="true" x="1" y="1"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_request" id="2"><field name="request">id</field></block></value><next><block type="scriptr_return" id="1" inline="false"><value name="return"><block type="variables_get" id="8"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (request.id);
return item   							