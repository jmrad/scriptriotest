/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_sendmail" id="1" inline="true" x="1" y="-3"><value name="to"><block type="text" id="2"><field name="TEXT">julien.mrad@elementn.com</field></block></value><value name="from"><block type="text" id="3"><field name="TEXT">Julz</field></block></value><value name="subject"><block type="text" id="4"><field name="TEXT">testing blockly subject</field></block></value><value name="body"><block type="text" id="5"><field name="TEXT">testing blockly body</field></block></value></block></xml>*#*#*/
sendMail ('julien.mrad@elementn.com', 'Julz', 'testing blockly subject', 'testing blockly body');
;
   							