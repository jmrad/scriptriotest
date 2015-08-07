/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="1" inline="false" x="35" y="-2"><value name="IF0"><block type="logic_boolean" id="2"><field name="BOOL">TRUE</field></block></value><statement name="DO0"><block type="variables_set" id="3" inline="true"><field name="VAR">item</field><value name="VALUE"><block type="dict_get" id="4" inline="true"><field name="ITEM">start</field><value name="DICT"><block type="scriptr_request" id="5"><field name="request">parameters</field></block></value></block></value><next><block type="scriptr_storage" id="6" inline="true"><field name="scope">local</field><field name="fieldName">name</field><value name="value"><block type="variables_get" id="7"><field name="VAR">item</field></block></value><next><block type="scriptr_Console_log" id="8" inline="true"><field name="level">log</field><value name="message"><block type="scriptr_readstorage" id="9"><field name="scope">local</field><field name="fieldName">name</field></block></value></block></next></block></next></block></statement><next><block type="scriptr_return" id="10" inline="false"><value name="return"><block type="variables_get" id="11"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


if (true) {
  item = (request.parameters)["start"];
  storage.local.name = item;
  (function(){ console.log(storage.local.name)})();}
return item   							