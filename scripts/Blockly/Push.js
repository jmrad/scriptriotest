/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="-6" y="1"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_push_notification" id="2" inline="false"><mutation isproduction="false"></mutation><field name="deviceType">android</field><value name="message"><block type="text" id="3"><field name="TEXT">{"Content":"Let Julien know when you get this."}</field></block></value><value name="tokens"><block type="lists_create_with" id="4" inline="false"><mutation items="1"></mutation><value name="ADD0"><block type="text" id="5"><field name="TEXT">APA91bFdxhjB1a-9z05ZkHBbs5UOcZ2XMxjg1qUeqP-MYlEn2hL-ESZWjh1SqOaov0iL7g13lR1S-ZSxNHjaoO43ziO_0WLAS33r71xNwSnokMGmghFCOb59JtX52jF5nZwP9XPaTs3Kx-4dDmmCFW3gwgjBPr3vzV1SIaQFk9Qcz5Z76veBhHg</field></block></value></block></value></block></value><next><block type="scriptr_return" id="6" inline="false"><value name="return"><block type="variables_get" id="7"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (push(['APA91bFdxhjB1a-9z05ZkHBbs5UOcZ2XMxjg1qUeqP-MYlEn2hL-ESZWjh1SqOaov0iL7g13lR1S-ZSxNHjaoO43ziO_0WLAS33r71xNwSnokMGmghFCOb59JtX52jF5nZwP9XPaTs3Kx-4dDmmCFW3gwgjBPr3vzV1SIaQFk9Qcz5Z76veBhHg'], '{"Content":"Let Julien know when you get this."}', "android", "null"));
return item   							