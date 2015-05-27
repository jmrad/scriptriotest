/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="1" inline="true" x="-871" y="-251"><field name="VAR">myVar</field><value name="VALUE"><block type="text" id="2"><field name="TEXT">1</field></block></value><next><block type="controls_if" id="3" inline="false"><value name="IF0"><block type="logic_compare" id="4" inline="true"><field name="OP">EQ</field><value name="A"><block type="variables_get" id="5"><field name="VAR">myVar</field></block></value><value name="B"><block type="math_number" id="6"><field name="NUM">1</field></block></value></block></value></block></next></block></xml>*#*#*/
var myVar;


myVar = '1';
if (myVar == 1) {
}
   							