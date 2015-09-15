/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="38" inline="true" x="7" y="-33"><field name="VAR">temperature</field><value name="VALUE"><block type="dict_get" id="67" inline="true"><field name="ITEM">temp</field><value name="DICT"><block type="scriptr_request" id="80"><field name="request">parameters</field></block></value></block></value><next><block type="scriptr_Console_log" id="93" inline="true"><field name="level">info</field><value name="message"><block type="text_join" id="111" inline="true"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="129"><field name="TEXT">request.parameters["temp"] = </field></block></value><value name="ADD1"><block type="variables_get" id="134"><field name="VAR">temperature</field></block></value></block></value><next><block type="controls_if" id="8" inline="false"><value name="IF0"><block type="logic_compare" id="16" inline="true"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="135"><field name="VAR">temperature</field></block></value><value name="B"><block type="math_number" id="35"><field name="NUM">30</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="140" inline="true"><field name="VAR">message</field><value name="VALUE"><block type="text_join" id="141" inline="true"><mutation items="3"></mutation><value name="ADD0"><block type="text" id="142"><field name="TEXT">It's </field></block></value><value name="ADD1"><block type="variables_get" id="143"><field name="VAR">temperature</field></block></value><value name="ADD2"><block type="text" id="166"><field name="TEXT">°C in here!</field></block></value></block></value><next><block type="procedures_callnoreturn" id="216" inline="true"><mutation name="sendEmail"><arg name="temp"></arg></mutation><value name="ARG0"><block type="variables_get" id="217"><field name="VAR">temperature</field></block></value></block></next></block></statement></block></next></block></next></block><block type="procedures_defnoreturn" id="170" x="16" y="251"><mutation><arg name="temp"></arg></mutation><field name="NAME">sendEmail</field><statement name="STACK"><block type="scriptr_return" id="186" inline="false"><value name="return"><block type="scriptr_sendmail" id="199" inline="true"><value name="to"><block type="text" id="218"><field name="TEXT">julien.mrad@elementn.com</field></block></value><value name="from"><block type="text" id="219"><field name="TEXT">Office</field></block></value><value name="subject"><block type="text" id="220"><field name="TEXT">It's Hot!</field></block></value><value name="body"><block type="variables_get" id="229"><field name="VAR">temp</field></block></value></block></value></block></statement></block></xml>*#*#*/
var temperature;
var temp;
var message;

function sendEmail(temp) {
  return sendMail ('julien.mrad@elementn.com', 'Office', 'It\'s Hot!', temp)}


temperature = (request.parameters)["temp"];
(function(){ console.info(String('request.parameters["temp"] = ') + String(temperature))})();if (temperature >= 30) {
  message = ['It\'s ',temperature,'°C in here!'].join('');
  sendEmail(temperature);
}
   							