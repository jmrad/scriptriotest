/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_storage" id="58" inline="true" x="-10" y="200"><field name="scope">local</field><field name="fieldName">testos</field><value name="value"><block type="text" id="76"><field name="TEXT">tatatatest</field></block></value><next><block type="variables_set" id="43" inline="true"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_readstorage" id="12"><field name="scope">local</field><field name="fieldName">testos</field></block></value><next><block type="scriptr_return" id="24" inline="false"><value name="return"><block type="variables_get" id="46"><field name="VAR">item</field></block></value></block></next></block></next></block></xml>*#*#*/
var item;


storage.local.testos = 'tatatatest';
item = (storage.local.testos);
return item   							