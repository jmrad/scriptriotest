/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block id="46" type="scriptr_push_notification" inline="true" x="-12" y="61"><field name="deviceType">android</field><field name="isProduction">true</field><value name="tokens"><block id="15" type="lists_create_empty" /></value><value name="message"><block id="33" type="text"><field name="TEXT" /></block></value></block></xml>*#*#*/
push([], '', "android", "true");
;
   							