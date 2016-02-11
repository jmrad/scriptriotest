/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="6" inline="true" x="22" y="31"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_tweet" id="2" inline="true"><value name="tweetString"><block type="text" id="3"><field name="TEXT">testing test</field></block></value></block></value><next><block type="scriptr_return" id="1" inline="false"><value name="return"><block type="variables_get" id="9"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (tweet ('testing test'));
return item   							