/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="23" inline="false" x="21" y="12"><value name="IF0"><block type="logic_boolean" id="31"><field name="BOOL">TRUE</field></block></value><statement name="DO0"><block type="scriptr_return" id="82" inline="false"><value name="return"><block type="scriptr_jsonstringify" id="114" inline="true"><value name="stringJson"><block type="scriptr_jsonparse" id="98" inline="true"><value name="jsonString"><block type="text" id="132"><field name="TEXT">{ 	"response": { 		"metadata": { 			"requestId": "e1d653e2-0d24-4820-8056-e33a5d49bf12", 			"status": "failure", 			"errorCode": "PERMISSION_DENIED", 			"errorDetail": "", 			"statusCode": "403" 		} 	} }</field></block></value></block></value></block></value></block></statement></block></xml>*#*#*/
if (true) {
  return (function(){var obj = (function(){var obj = '{ 	"response": { 		"metadata": { 			"requestId": "e1d653e2-0d24-4820-8056-e33a5d49bf12", 			"status": "failure", 			"errorCode": "PERMISSION_DENIED", 			"errorDetail": "", 			"statusCode": "403" 		} 	} }'; if(typeof obj == "object") return obj; else return JSON.parse(obj)})(); if(typeof obj == "object") return JSON.stringify(obj); else return obj;})()}
			