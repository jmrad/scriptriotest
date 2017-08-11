 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="-5" y="2"><field name="VAR">myVar</field><value name="VALUE"><block type="scriptr_sendmail" id="2" inline="false"><value name="to"><block type="text" id="3"><field name="TEXT">raja.assaf@elementn.com</field></block></value><value name="from"><block type="text" id="4"><field name="TEXT">rabih.nassar@elementn.com</field></block></value><value name="subject"><block type="text" id="5"><field name="TEXT">what happened with softlayer?</field></block></value><value name="body"><block type="text" id="6"><field name="TEXT">lyom?</field></block></value></block></value><next><block type="scriptr_return" id="7" inline="false"><value name="return"><block type="variables_get" id="8"><field name="VAR">myVar</field></block></value></block></next></block></xml>*#*#*/
var myVar;


myVar = (sendMail ('raja.assaf@elementn.com', 'rabih.nassar@elementn.com', 'what happened with softlayer?', 'lyom?'));
return myVar			
