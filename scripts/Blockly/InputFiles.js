/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="13" inline="false" x="12" y="32"><value name="return"><block type="scriptr_files" id="26"><field name="files">myFile</field></block></value></block></xml>*#*#*/
return request.files["myFile"]   							