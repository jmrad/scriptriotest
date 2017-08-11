 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="false" x="1" y="2"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_callhttp" id="2" inline="false"><field name="url">https://api.scriptr.io/http/getRequestDetails</field><field name="method">GET</field><value name="parameters"><block type="dicts_create_with" id="3" inline="false"><mutation items="3"></mutation><field name="KEY0">start</field><field name="KEY1">end</field><field name="KEY2">sQuery</field><value name="INPUT0"><block type="text" id="4"><field name="TEXT">1</field></block></value><value name="INPUT1"><block type="text" id="5"><field name="TEXT">23</field></block></value><value name="INPUT2"><block type="text" id="6"><field name="TEXT">scriptr.io blog</field></block></value></block></value><value name="headers"><block type="dicts_create_with" id="7" inline="false"><mutation items="2"></mutation><field name="KEY0">Pragma</field><field name="KEY1">Authorization</field><value name="INPUT0"><block type="text" id="8"><field name="TEXT">no-cache</field></block></value><value name="INPUT1"><block type="text" id="9"><field name="TEXT">bearer TDIyODI2REM5MTpzY3JpcHRyOjBCMERBNzgyOTRFRTQwODI0RjdGM0ZGMjU5QzgwREVG</field></block></value></block></value></block></value><next><block type="scriptr_return" id="10" inline="false"><value name="return"><block type="variables_get" id="11"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (require("http").request({"url": "https://api.scriptr.io/http/getRequestDetails" , "method": "GET", "params": {"start": '1',
	"end": '23',
	"sQuery": 'scriptr.io blog'}, "headers": {"Pragma": 'no-cache',
	"Authorization": 'bearer TDIyODI2REM5MTpzY3JpcHRyOjBCMERBNzgyOTRFRTQwODI0RjdGM0ZGMjU5QzgwREVG'}}));
return item			