/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="1" inline="false" x="23" y="43"><value name="return"><block type="scriptr_callhttp" id="2" inline="false"><field name="url">http://scriptr.io/documentation</field><field name="method">GET</field><value name="parameters"><block type="dicts_create_with" id="72" inline="false"><mutation items="1"></mutation><field name="KEY0">sQuery</field><value name="INPUT0"><block type="text" id="119"><field name="TEXT">testing</field></block></value></block></value><value name="headers"><block type="dicts_create_with" id="89" inline="false"><mutation items="1"></mutation><field name="KEY0">Pragma</field><value name="INPUT0"><block type="text" id="137"><field name="TEXT">p</field></block></value></block></value></block></value></block></xml>*#*#*/
return require("http").request({"url": "http://scriptr.io/documentation" , "method": "GET", "params": {sQuery: 'testing'}, "headers": {Pragma: 'p'}})   							