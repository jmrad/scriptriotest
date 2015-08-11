/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="15" inline="true" x="-5" y="2"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_sendmail" id="12" inline="false"><value name="to"><block type="text" id="48"><field name="TEXT">julien.mrad@elementn.com</field></block></value><value name="from"><block type="text" id="51"><field name="TEXT">jul@elementn.com</field></block></value><value name="subject"><block type="text" id="49"><field name="TEXT">hello again</field></block></value><value name="body"><block type="text" id="50"><field name="TEXT">tralla\</field></block></value></block></value><next><block type="scriptr_return" id="30" inline="false"><value name="return"><block type="variables_get" id="18"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (sendMail ('julien.mrad@elementn.com', 'jul@elementn.com', 'hello again', 'tralla\\'));
return item   							