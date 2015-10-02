/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="220" inline="false" x="-25" y="7"><value name="return"><block type="scriptr_fb_post" id="101" inline="true"><comment pinned="false" h="80" w="160">Testing facebook post
</comment><value name="message"><block type="text" id="238"><field name="TEXT">Hello World</field></block></value></block></value></block></xml>*#*#*/
// Testing facebook post
return facebookPost ('Hello World')			