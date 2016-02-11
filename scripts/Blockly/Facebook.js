/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="6" inline="true" x="11" y="73"><field name="VAR">item</field><value name="VALUE"><block type="scriptr_fb_post" id="2" inline="true"><value name="message"><block type="text" id="3"><field name="TEXT">Testing the Facebook Blockly block from www.scriptr.io!</field></block></value></block></value><next><block type="scriptr_return" id="1" inline="false"><value name="return"><block type="variables_get" id="20"><field name="VAR">item</field></block></value></block></next></block></xml>*#*#*/
var item;


item = (facebookPost ('Testing the Facebook Blockly block from www.scriptr.io!'));
return item   							