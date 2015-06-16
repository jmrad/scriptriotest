/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="16" inline="false" x="96" y="-2"><value name="return"><block type="scriptr_files" id="34"><field name="files">myFile</field></block></value></block></xml>*#*#*/
return request.files["myFile"]   							