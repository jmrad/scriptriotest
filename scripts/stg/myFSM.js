/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"simpleStateMachine","plugindata":{"cells":[{"type":"fsa.StartState","size":{"width":20,"height":20},"position":{"x":50,"y":50},"angle":0,"id":"6edd9547-e31f-4042-a08a-287b21847a26","z":1,"attrs":{"circle":{"fill":"#ff8c00","stroke":"#d87702","stroke-width":3},"text":{"text":"start"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":379,"y":17},"angle":0,"id":"6f80b79b-e3a0-4c8e-8f92-6ecddfcfa51d","z":2,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Sent to Post Office","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":676,"y":33},"angle":0,"id":"d02e9d35-b670-425a-8561-dc8e68fb8667","z":3,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Received by Post Office","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"6edd9547-e31f-4042-a08a-287b21847a26"},"target":{"id":"6f80b79b-e3a0-4c8e-8f92-6ecddfcfa51d"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"PickUpFromSender","font-weight":"bold"}}}],"id":"e19ef661-2b89-435a-8f93-9dd263e43fa6","script":"return true;","z":4,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"6f80b79b-e3a0-4c8e-8f92-6ecddfcfa51d"},"target":{"id":"d02e9d35-b670-425a-8561-dc8e68fb8667"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"DepositInPostOffice","font-weight":"bold"}}}],"id":"67c21982-9d3c-4887-81f9-df3fc355ebb0","script":"return true;","z":5,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":853,"y":189},"angle":0,"id":"34076bcf-1f29-49fd-9436-62ab322514e4","z":6,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Sent to Liban Post","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"d02e9d35-b670-425a-8561-dc8e68fb8667"},"target":{"id":"34076bcf-1f29-49fd-9436-62ab322514e4"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"SendWithTransit","font-weight":"bold"}}}],"id":"fc1e2bad-0dd4-4185-bf1a-8afb6cc1dcb8","script":"return true;","z":7,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"34076bcf-1f29-49fd-9436-62ab322514e4"},"target":{"id":"54c6d130-7a08-4aaf-9413-b13390001e14"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"DepositInLibanPost","font-weight":"bold"}}}],"id":"aa55448a-51db-49bd-8893-c64c0d046fdb","script":"return true;","z":8,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":663,"y":329},"angle":0,"id":"54c6d130-7a08-4aaf-9413-b13390001e14","z":9,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Received by Liban Post","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":313,"y":329},"angle":0,"id":"25c56df7-9acf-4361-a322-263f65b4cd46","z":10,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Sent to Receiver","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"tm.Process","size":{"width":60,"height":60},"position":{"x":85,"y":187},"angle":0,"id":"4cd54ea2-6895-4798-b5c4-fc32645ef0f8","z":11,"attrs":{"text":{"font-weight":"bold","font-size":16,"fill":"#353535","text":"Delivered","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"54c6d130-7a08-4aaf-9413-b13390001e14"},"target":{"id":"25c56df7-9acf-4361-a322-263f65b4cd46"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"PickUpFromLibanPost","font-weight":"bold"}}}],"id":"250f127c-d361-446a-b0cc-036246d28955","script":"return true;","z":12,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"25c56df7-9acf-4361-a322-263f65b4cd46"},"target":{"id":"4cd54ea2-6895-4798-b5c4-fc32645ef0f8"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"Deliver","font-weight":"bold"}}}],"id":"9c0af4f5-ce94-49c9-b267-5905d9a201f6","script":"return true;","z":13,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}},{"type":"link","source":{"id":"d02e9d35-b670-425a-8561-dc8e68fb8667"},"target":{"id":"25c56df7-9acf-4361-a322-263f65b4cd46"},"connector":{"name":"smooth"},"labels":[{"position":0.5,"attrs":{"text":{"text":"SendDirect","font-weight":"bold"}}}],"id":"38cb0108-ec95-40a7-956c-b2b81f206088","script":"return true;","z":14,"attrs":{".connection":{"stroke":"#353535"},".marker-target":{"fill":"#353535","d":"M 10 0 L 0 5 L 10 10 z"},"text":{"fill":"#353535","font-size":16,"font-weight":"bold","font-variant":"small-caps","text-transform":"capitalize"}}}]},"scriptrdata":"\nvar START_STATE = \"start\"\nvar log = require(\"log\");\n//\n// Define Finite State Machine framework\n//\nfunction SimpleStateMachine(machineName, id) {\n\tif(machineName){\n\t\tthis.storage = this.loadStorage(id);\t\n\t\tlog.debug(\"SM constructor for [\" + machineName + \"]\");\n\t}\n\n\n}\nSimpleStateMachine.prototype.getId = function (){\n\treturn this.storage.id;\n}\n\nSimpleStateMachine.prototype.generateId = function(length){\n   \tvar random = \"\";\t\n   \tvar source = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n\tvar numberOfCharacters = source.length;\n   \tfor( var i=0; i < length; i++ )\n       \trandom += source.charAt(Math.floor(Math.random() * 100 % numberOfCharacters));\n   \treturn random;\n}\n\nSimpleStateMachine.prototype.inspect = function () {\n\treturn JSON.stringify(this.storage);\n}\t\n\t\t\t\t\t\nSimpleStateMachine.prototype.event = function (name) {\n\tvar state = this.transitions[this.storage.state]\n\tvar transition = state[name];\n\tif(transition){\n\t      \tlog.debug(\"found transition [\" + name + \"]\");\n\t\tvar branch = transition[\"branch\"];\n\t      \tvar code = transition[\"code\"];\n\t       \tif(code && branch){\n\t\t\tlog.debug('attempting transition: ' + \n\t\t\t\tthis.storage.state + ' -> ' + name)              \n        \tif(code.call(this)){\n\t            \t//  If transition succeeds\n\t            \tlog.debug('successfully set state set to: ' + name)\n\t                // change state\n\t                this.storage.state = branch\n\t\t\t//fields should have been updated by the user directly\n\t                this.persistStorage(this.storage.id)\n\t\t}else{\n\t\t\tlog.debug(\"transition failed by user code\");\n\t        }\n\t} else {\n\t\tlog.debug('transition failed, state: ' + this.storage.state)\n\t} \n\t} else {\n\t\tlog.debug(\"transition '\" + name + \"' doesn't exist!\")\n\t}\n}\t\t\t\t\t\t\n\nSimpleStateMachine.prototype.loadStorage = function (id, storageModel) {\n\tlog.debug(\"loading storage for [\" + id + \"]\")\n\t//based on the model copy from local storage or from GetDocument\n\tif(!id){\n\t    \t//generate new random id\n\t        id = this.generateId(10);\n\t        storage.global[id] = {};\n\t        storage.global[id].state = \"start\";\n\t        storage.global[id].fields = \"\"; //will not be persisted if it remains empty\n\t}\n  \t\n  \tvar fields = null;\n  \tif(storage.global[id][\"fields\"]){\n\t\tfields = JSON.parse(storage.global[id][\"fields\"]);\n\t}else{\n\t\tfields = {};\n\t}\t\n  \t//instance storage\n\tthis.storage = {\n\t\t// mandatory fields \n\t\tid: id,\n\t\tstate: storage.global[id].state,\n\t\tfields: fields\n\t}\n\treturn this.storage;\n}\nSimpleStateMachine.prototype.persistStorage = function (id) {\n  \tlog.debug(\"persisting changes\")\n   \t//based on the model copy to local storage or call SaveDocument\n  \tstorage.global[id] = {};\n  \tstorage.global[id] = {\n      state: this.storage.state,\n      fields: JSON.stringify(this.storage.fields)\n    }\n}\n// Publishing StateMachine constructor\nvar StateMachineImpl = function(id) {\n\t// Call ancestor constructor\n  \tSimpleStateMachine.call (this, \"default\", id)\n}\n\nStateMachineImpl.prototype = new SimpleStateMachine()\nStateMachineImpl.prototype.constructor = StateMachineImpl\n// Define states and transitions\nStateMachineImpl.prototype.transitions = {\n\t\"start\" : {\n\t\t\t\"PickUpFromSender\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Sent to Post Office\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Sent to Post Office\" : {\n\t\t\t\"DepositInPostOffice\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Received by Post Office\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Received by Post Office\" : {\n\t\t\t\"SendWithTransit\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Sent to Liban Post\"\n\t\t\t\t\t\n\t\t\t},\n\t\t\t\"SendDirect\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Sent to Receiver\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Sent to Liban Post\" : {\n\t\t\t\"DepositInLibanPost\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Received by Liban Post\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Received by Liban Post\" : {\n\t\t\t\"PickUpFromLibanPost\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Sent to Receiver\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Sent to Receiver\" : {\n\t\t\t\"Deliver\" : {\n\t\t\t\t\t\"code\": function() {return true;},\n\t\t\t\t\t\"branch\": \"Delivered\"\n\t\t\t\t\t\n\t\t\t}\n\t\t},\n\t\"Delivered\" : {\n\t\t}\n}\n\n//main\nvar parameters;\nif(request.body){\n\tparameters = request.body;\n}else{\n\tparameters = request.parameters;\n}\n\nvar event = parameters.event;//get the required event\nvar id = parameters.id; //could be null, this will be handled by the SimpleStateMachine code\nvar ssmi = new StateMachineImpl(id);\nif(event){\n  ssmi.event(event);\n}\nreturn ssmi.inspect();\n"}}*#*#*/

var START_STATE = "start"
var log = require("log");
//
// Define Finite State Machine framework
//
function SimpleStateMachine(machineName, id) {
	if(machineName){
		this.storage = this.loadStorage(id);	
		log.debug("SM constructor for [" + machineName + "]");
	}


}
SimpleStateMachine.prototype.getId = function (){
	return this.storage.id;
}

SimpleStateMachine.prototype.generateId = function(length){
   	var random = "";	
   	var source = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var numberOfCharacters = source.length;
   	for( var i=0; i < length; i++ )
       	random += source.charAt(Math.floor(Math.random() * 100 % numberOfCharacters));
   	return random;
}

SimpleStateMachine.prototype.inspect = function () {
	return JSON.stringify(this.storage);
}	
					
SimpleStateMachine.prototype.event = function (name) {
	var state = this.transitions[this.storage.state]
	var transition = state[name];
	if(transition){
	      	log.debug("found transition [" + name + "]");
		var branch = transition["branch"];
	      	var code = transition["code"];
	       	if(code && branch){
			log.debug('attempting transition: ' + 
				this.storage.state + ' -> ' + name)              
        	if(code.call(this)){
	            	//  If transition succeeds
	            	log.debug('successfully set state set to: ' + name)
	                // change state
	                this.storage.state = branch
			//fields should have been updated by the user directly
	                this.persistStorage(this.storage.id)
		}else{
			log.debug("transition failed by user code");
	        }
	} else {
		log.debug('transition failed, state: ' + this.storage.state)
	} 
	} else {
		log.debug("transition '" + name + "' doesn't exist!")
	}
}						

SimpleStateMachine.prototype.loadStorage = function (id, storageModel) {
	log.debug("loading storage for [" + id + "]")
	//based on the model copy from local storage or from GetDocument
	if(!id){
	    	//generate new random id
	        id = this.generateId(10);
	        storage.global[id] = {};
	        storage.global[id].state = "start";
	        storage.global[id].fields = ""; //will not be persisted if it remains empty
	}
  	
  	var fields = null;
  	if(storage.global[id]["fields"]){
		fields = JSON.parse(storage.global[id]["fields"]);
	}else{
		fields = {};
	}	
  	//instance storage
	this.storage = {
		// mandatory fields 
		id: id,
		state: storage.global[id].state,
		fields: fields
	}
	return this.storage;
}
SimpleStateMachine.prototype.persistStorage = function (id) {
  	log.debug("persisting changes")
   	//based on the model copy to local storage or call SaveDocument
  	storage.global[id] = {};
  	storage.global[id] = {
      state: this.storage.state,
      fields: JSON.stringify(this.storage.fields)
    }
}
// Publishing StateMachine constructor
var StateMachineImpl = function(id) {
	// Call ancestor constructor
  	SimpleStateMachine.call (this, "default", id)
}

StateMachineImpl.prototype = new SimpleStateMachine()
StateMachineImpl.prototype.constructor = StateMachineImpl
// Define states and transitions
StateMachineImpl.prototype.transitions = {
	"start" : {
			"PickUpFromSender" : {
					"code": function() {return true;},
					"branch": "Sent to Post Office"
					
			}
		},
	"Sent to Post Office" : {
			"DepositInPostOffice" : {
					"code": function() {return true;},
					"branch": "Received by Post Office"
					
			}
		},
	"Received by Post Office" : {
			"SendWithTransit" : {
					"code": function() {return true;},
					"branch": "Sent to Liban Post"
					
			},
			"SendDirect" : {
					"code": function() {return true;},
					"branch": "Sent to Receiver"
					
			}
		},
	"Sent to Liban Post" : {
			"DepositInLibanPost" : {
					"code": function() {return true;},
					"branch": "Received by Liban Post"
					
			}
		},
	"Received by Liban Post" : {
			"PickUpFromLibanPost" : {
					"code": function() {return true;},
					"branch": "Sent to Receiver"
					
			}
		},
	"Sent to Receiver" : {
			"Deliver" : {
					"code": function() {return true;},
					"branch": "Delivered"
					
			}
		},
	"Delivered" : {
		}
}

//main
var parameters;
if(request.body){
	parameters = request.body;
}else{
	parameters = request.parameters;
}

var event = parameters.event;//get the required event
var id = parameters.id; //could be null, this will be handled by the SimpleStateMachine code
var ssmi = new StateMachineImpl(id);
if(event){
  ssmi.event(event);
}
return ssmi.inspect();
			