/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="13" inline="false" x="31" y="25"><value name="return"><block type="scriptr_params" id="26"><field name="parameter">myParam</field></block></value></block></xml>*#*#*/
return request.parameters["myParam"]   							