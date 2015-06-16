/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="1" inline="false" x="-185" y="101"><value name="return"><block type="scriptr_callhttp" id="2" inline="false"><field name="url">http://scriptr.io/</field><field name="method">GET</field><value name="parameters"><block type="lists_create_with" id="3" inline="false"><mutation items="2"></mutation><value name="ADD0"><block type="list_dict" id="4" inline="true"><field name="KEY">key</field><value name="myVALUE"><block type="text" id="65"><field name="TEXT"></field></block></value></block></value></block></value><value name="headers"><block type="lists_create_with" id="12" inline="false"><mutation items="2"></mutation><value name="ADD0"><block type="list_dict" id="13" inline="true"><field name="KEY">key</field><value name="myVALUE"><block type="text" id="14"><field name="TEXT"></field></block></value></block></value></block></value></block></value></block></xml>*#*#*/
return require("http").request({"url": "http://scriptr.io/" , "method": "GET", "params": {"key": ""}, "headers": {"key": ""}})   							