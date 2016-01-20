/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"GoogleCharts","plugindata":{"scriptName":null,"wrapperData":"{\"containerId\":\"chartContainer\",\"dataTable\":{\"cols\":[{\"id\":\"\",\"label\":\"Time of Day\",\"pattern\":\"\",\"type\":\"timeofday\"},{\"id\":\"\",\"label\":\"Motivation Level\",\"pattern\":\"\",\"type\":\"number\"},{\"id\":\"\",\"label\":\"Energy Level\",\"pattern\":\"\",\"type\":\"number\"}],\"rows\":[{\"c\":[{\"v\":[8,0,0],\"f\":\"8 am\"},{\"v\":1},{\"v\":0.25}]},{\"c\":[{\"v\":[9,0,0],\"f\":\"9 am\"},{\"v\":2},{\"v\":0.5}]},{\"c\":[{\"v\":[10,0,0],\"f\":\"10 am\"},{\"v\":3},{\"v\":1}]},{\"c\":[{\"v\":[11,0,0],\"f\":\"11 am\"},{\"v\":4},{\"v\":2.25}]},{\"c\":[{\"v\":[12,0,0],\"f\":\"12 pm\"},{\"v\":5},{\"v\":2.25}]},{\"c\":[{\"v\":[13,0,0],\"f\":\"1 pm\"},{\"v\":6},{\"v\":3}]},{\"c\":[{\"v\":[14,0,0],\"f\":\"2 pm\"},{\"v\":7},{\"v\":4}]},{\"c\":[{\"v\":[15,0,0],\"f\":\"3 pm\"},{\"v\":8},{\"v\":5.25}]},{\"c\":[{\"v\":[16,0,0],\"f\":\"4 pm\"},{\"v\":9},{\"v\":7.5}]},{\"c\":[{\"v\":[17,0,0],\"f\":\"5 pm\"},{\"v\":10},{\"v\":10}]}]},\"options\":{\"title\":\"Chart Title\",\"focusTarget\":\"category\",\"hAxis\":{\"title\":\"Time of Day\",\"viewWindow\":null,\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null,\"viewWindowMode\":null},\"vAxis\":{\"title\":\"Axis title\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":false,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false}},\"colors\":[\"#EE8300\",\"#777\"],\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"isStacked\":false,\"animation\":{\"duration\":500},\"booleanRole\":\"certainty\",\"legend\":\"right\",\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":true,\"chartType\":\"ColumnChart\"}"},"scriptrdata":[{"filename":"null_chart.html","filecontent":"\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<script type=\"text/javascript\" src='https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n         \"packages\":[\"charteditor\", \"corechart\"]\n         }] \n      }'></script> \n      <script src=\"https://www.scriptr.io/src/js/ScriptrClient.js\"></script>\n  </head>\n  <script>\n\n  \tgoogle.setOnLoadCallback(loadChart);\n\n    var wrapper;\n\n   \tvar scriptrClient =  new $.ScriptrClient({\"url\": \"https://testapi.scriptrapps.io\", \"token\": \"TDIyODI2REM5MQ==\", \"anon_token\": \"TDIyODI2REM5MQ==\"});\n\n \tfunction loadChart() {\n   \t\twrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\":{\"title\":\"Chart Title\",\"focusTarget\":\"category\",\"hAxis\":{\"title\":\"Time of Day\",\"viewWindow\":null,\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null,\"viewWindowMode\":null},\"vAxis\":{\"title\":\"Axis title\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":false,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false}},\"colors\":[\"#EE8300\",\"#777\"],\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"isStacked\":false,\"animation\":{\"duration\":500},\"booleanRole\":\"certainty\",\"legend\":\"right\",\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":true,\"chartType\":\"ColumnChart\"});\n   \t\tscriptrClient.callApi(\"\", {}, function(\n\t\t\tresponse, context) {\n\t   \t\tsetDataSource(response.response.result);\n\t\t}, function(response, context) {\n\t\t}, null);\n  \t}\n\t\n\n    function setDataSource(data) {\n\t  \twrapper.setDataTable(data);\n\t  \tif(wrapper.getChartType() != null) {\n\t  \t\twrapper.draw();\n\t  \t}\n    }\n\n    function drawChart() {\n        wrapper.draw();\n    }\n\n    </script>\n  <body>\n\t  <div id=\"chartContainer\"></div>\n  </body>\n</html>\n"}]}}*#*#*/
var content= '\
<!DOCTYPE html>\
<html>\
  <head>\
    <meta charset=\"utf-8\">\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\
	<script type=\"text/javascript\" src=\'https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \
         \"packages\":[\"charteditor\", \"corechart\"]\
         }] \
      }\'></script> \
      <script src=\"https://www.scriptr.io/src/js/ScriptrClient.js\"></script>\
  </head>\
  <script>\
\
  	google.setOnLoadCallback(loadChart);\
\
    var wrapper;\
\
   	var scriptrClient =  new $.ScriptrClient({\"url\": \"https://testapi.scriptrapps.io\", \"token\": \"TDIyODI2REM5MQ==\", \"anon_token\": \"TDIyODI2REM5MQ==\"});\
\
 	function loadChart() {\
   		wrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\":{\"title\":\"Chart Title\",\"focusTarget\":\"category\",\"hAxis\":{\"title\":\"Time of Day\",\"viewWindow\":null,\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":true,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null,\"viewWindowMode\":null},\"vAxis\":{\"title\":\"Axis title\",\"textStyle\":{\"fontSize\":12,\"color\":\"#EE8300\",\"bold\":false,\"italic\":false},\"titleTextStyle\":{\"fontSize\":14,\"color\":\"#777\",\"bold\":true,\"italic\":false}},\"colors\":[\"#EE8300\",\"#777\"],\"vAxes\":[{\"title\":null,\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null}},{\"useFormatFromData\":true,\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null}],\"isStacked\":false,\"animation\":{\"duration\":500},\"booleanRole\":\"certainty\",\"legend\":\"right\",\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":true,\"chartType\":\"ColumnChart\"});\
   		scriptrClient.callApi(\"\", {}, function(\
			response, context) {\
	   		setDataSource(response.response.result);\
		}, function(response, context) {\
		}, null);\
  	}\
	\
\
    function setDataSource(data) {\
	  	wrapper.setDataTable(data);\
	  	if(wrapper.getChartType() != null) {\
	  		wrapper.draw();\
	  	}\
    }\
\
    function drawChart() {\
        wrapper.draw();\
    }\
\
    </script>\
  <body>\
	  <div id=\"chartContainer\"></div>\
  </body>\
</html>\
'; var response = apsdb.httpRespond(); response.write(content);response.close();			