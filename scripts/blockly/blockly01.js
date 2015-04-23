/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="controls_if" id="8" inline="false" x="18" y="3"><value name="IF0"><block type="logic_compare" id="62" inline="true"><field name="OP">EQ</field><value name="A"><block type="math_number" id="27"><field name="NUM">0</field></block></value><value name="B"><block type="text" id="80"><field name="TEXT">0</field></block></value></block></value><statement name="DO0"><block type="scriptr_return" id="102" inline="false"><value name="return"><block type="text" id="120"><field name="TEXT">blockly compares values without variable types</field></block></value></block></statement></block></xml>*#*#*/
if (0 == '0') {
  return 'blockly compares values without variable types'}
   							