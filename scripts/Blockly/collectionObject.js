/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="1" inline="false" x="10" y="48"><value name="return"><block type="dict_get" id="2" inline="true"><field name="ITEM">kTxt</field><value name="DICT"><block type="dicts_create_with" id="3" inline="false"><mutation items="3"></mutation><field name="KEY0">kTxt</field><field name="KEY1">kTxtNb</field><field name="KEY2">kNb</field><value name="INPUT0"><block type="text" id="4"><field name="TEXT">afsdf hi;l.</field></block></value><value name="INPUT1"><block type="text" id="5"><field name="TEXT">3</field></block></value><value name="INPUT2"><block type="math_number" id="6"><field name="NUM">4</field></block></value></block></value></block></value></block></xml>*#*#*/
return {"kTxt": 'afsdf hi;l.',
	"kTxtNb": '3',
	"kNb": 4}["kTxt"]   							