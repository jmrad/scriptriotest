/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="19" inline="false" x="33" y="62"><value name="return"><block type="math_arithmetic" id="38" inline="true"><field name="OP">DIVIDE</field><value name="A"><block type="math_number" id="57"><field name="NUM">5</field></block></value><value name="B"><block type="math_number" id="58"><field name="NUM">6</field></block></value></block></value></block></xml>*#*#*/
return 5 / 6			