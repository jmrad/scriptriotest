/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="422" inline="false" x="71" y="-26"><value name="return"><block type="scriptr_callhttp" id="583" inline="false"><field name="url">https://api.scriptr.io/test</field><field name="method">GET</field><value name="headers"><block type="dicts_create_with" id="600" inline="false"><mutation items="1"></mutation><field name="KEY0">Authorization</field><value name="INPUT0"><block type="text" id="618"><field name="TEXT">bearer TDIyODI2REM5MQ==</field></block></value></block></value></block></value></block></xml>*#*#*/
return require("http").request({"url": "https://api.scriptr.io/test" , "method": "GET", "params": null, "headers": {"Authorization": 'bearer TDIyODI2REM5MQ=='}})			