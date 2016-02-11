/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="38" inline="true" x="-1" y="44"><field name="VAR">item</field><value name="VALUE"><block type="dict_get" id="76" inline="false"><field name="ITEM">result</field><value name="DICT"><block type="scriptr_jsonparse" id="12" inline="true"><value name="jsonString"><block type="text" id="59"><field name="TEXT">{ 	"metadata": { 		"requestId": "6679c263-dc0f-40c5-a90c-e616015d2766", 		"status": "success", 		"statusCode": "200" 	}, 	"result": "tatatatest" }</field></block></value></block></value></block></value><next><block type="scriptr_return" id="24" inline="false"><value name="return"><block type="variables_get" id="41"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = ((function(){var obj = '{ 	"metadata": { 		"requestId": "6679c263-dc0f-40c5-a90c-e616015d2766", 		"status": "success", 		"statusCode": "200" 	}, 	"result": "tatatatest" }'; if(typeof obj == "object") return obj; else return JSON.parse(obj)})())["result"];
return item   							