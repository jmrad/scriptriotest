/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="339" inline="false" x="6" y="58"><value name="return"><block type="scriptr_params" id="152"><field name="parameter">location</field></block></value></block></xml>*#*#*/
return request.parameters["location2"]   							