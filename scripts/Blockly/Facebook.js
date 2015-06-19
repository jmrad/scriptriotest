/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="30" inline="false" x="34" y="2"><value name="return"><block type="scriptr_fb_post" id="15" inline="true"><value name="message"><block type="text" id="48"><field name="TEXT">Testing the Facebook Blockly block from scriptr.io</field></block></value></block></value></block></xml>*#*#*/
return facebookPost ('Testing the Facebook Blockly block from scriptr.io');
   							