/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="21" inline="false" x="23" y="7"><value name="return"><block type="scriptr_callhttp" id="37" inline="false"><field name="url">https://www.google.com.lb/?gws_rd=cr&amp;ei=eLZtVfm5MoHmyQOAqIK4Cg</field><field name="method">GET</field><value name="parameters"><block type="lists_create_with" id="52" inline="false"><mutation items="2"></mutation><value name="ADD0"><block type="list_dict" id="68" inline="true"><field name="KEY">gws_rd</field><value name="myVALUE"><block type="text" id="86"><field name="TEXT">ssl</field></block></value></block></value><value name="ADD1"><block type="list_dict" id="87" inline="true"><field name="KEY">q</field><value name="myVALUE"><block type="text" id="88"><field name="TEXT">asdf</field></block></value></block></value></block></value></block></value></block></xml>*#*#*/
return require("http").request({"url": "https://www.google.com.lb/?gws_rd=cr&ei=eLZtVfm5MoHmyQOAqIK4Cg" , "method": "GET"})   							