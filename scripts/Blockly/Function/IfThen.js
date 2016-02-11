/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="variables_set" id="41" inline="true" x="5" y="-33"><field name="VAR">temperature</field><value name="VALUE"><block type="dict_get" id="58" inline="true"><field name="ITEM">temp</field><value name="DICT"><block type="scriptr_request" id="71"><field name="request">parameters</field></block></value></block></value><next><block type="scriptr_Console_log" id="292" inline="true"><field name="level">info</field><value name="message"><block type="text_join" id="301" inline="true"><mutation items="2"></mutation><value name="ADD0"><block type="text" id="302"><field name="TEXT">request.parameters["temp"] = </field></block></value><value name="ADD1"><block type="variables_get" id="303"><field name="VAR">temperature</field></block></value></block></value><next><block type="controls_if" id="8" inline="false"><value name="IF0"><block type="logic_compare" id="16" inline="true"><field name="OP">GTE</field><value name="A"><block type="variables_get" id="76"><field name="VAR">temperature</field></block></value><value name="B"><block type="math_number" id="35"><field name="NUM">30</field></block></value></block></value><statement name="DO0"><block type="variables_set" id="81" inline="true"><field name="VAR">message</field><value name="VALUE"><block type="text_join" id="99" inline="true"><mutation items="3"></mutation><value name="ADD0"><block type="text" id="122"><field name="TEXT">It's </field></block></value><value name="ADD1"><block type="variables_get" id="129"><field name="VAR">temperature</field></block></value><value name="ADD2"><block type="text" id="147"><field name="TEXT">°C in here!</field></block></value></block></value><next><block type="procedures_callnoreturn" id="233" inline="true"><mutation name="sendEmail"><arg name="emailBody"></arg></mutation><value name="ARG0"><block type="variables_get" id="373"><field name="VAR">message</field></block></value></block></next></block></statement><next><block type="scriptr_return" id="334" inline="false"><value name="return"><block type="text" id="364"><field name="TEXT">Done!</field></block></value></block></next></block></next></block></next></block><block type="procedures_defnoreturn" id="182" x="3" y="236"><mutation><arg name="emailBody"></arg></mutation><field name="NAME">sendEmail</field><statement name="STACK"><block type="scriptr_return" id="220" inline="false"><value name="return"><block type="scriptr_sendmail" id="207" inline="true"><value name="to"><block type="text" id="268"><field name="TEXT">julien.mrad@elementn.com</field></block></value><value name="from"><block type="text" id="269"><field name="TEXT">Office</field></block></value><value name="subject"><block type="text" id="270"><field name="TEXT">It's Hot!</field></block></value><value name="body"><block type="variables_get" id="387"><field name="VAR">emailBody</field></block></value></block></value></block></statement></block></xml>*#*#*/
var temperature;
var emailBody;
var message;

function sendEmail(emailBody) {
  return sendMail ('julien.mrad@elementn.com', 'Office', 'It\'s Hot!', emailBody)}


temperature = (request.parameters)["temp"];
(function(){ console.info(String('request.parameters["temp"] = ') + String(temperature))})();if (temperature >= 30) {
  message = ['It\'s ',temperature,'°C in here!'].join('');
  sendEmail(message);
}
return 'Done!'			