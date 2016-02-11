/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="42" inline="true" x="-5" y="61"><field name="VAR">jsonObject</field><value name="VALUE"><block type="scriptr_jsonparse" id="39" inline="true"><value name="jsonString"><block type="text" id="75"><field name="TEXT">{ "metadata": { "requestId": "6679c263-dc0f-40c5-a90c-e616015d2766", "status": "success", "statusCode": "200" 	}, 	"result": "tatatatest" }</field></block></value></block></value><next><block type="variables_set" id="50" inline="true"><field name="VAR">jsonString</field><value name="VALUE"><block type="scriptr_jsonstringify" id="13" inline="true"><value name="stringJson"><block type="variables_get" id="45"><field name="VAR">jsonObject</field></block></value></block></value><next><block type="scriptr_return" id="26" inline="false"><value name="return"><block type="variables_get" id="57"><field name="VAR">jsonString</field></block></value></block></next></block></next></block></xml>*#*#*/
var jsonObject;
var jsonString;


jsonObject = ((function(){var obj = '{ "metadata": { "requestId": "6679c263-dc0f-40c5-a90c-e616015d2766", "status": "success", "statusCode": "200" 	}, 	"result": "tatatatest" }'; if(typeof obj == "object") return obj; else return JSON.parse(obj)})());
jsonString = ((function(){var obj = jsonObject; if(typeof obj == "object") return JSON.stringify(obj); else return obj;})());
return jsonString   							