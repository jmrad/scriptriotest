/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=anonymous 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"GoogleCharts","plugindata":{"scriptName":null,"wrapperData":"{\"containerId\":\"chartContainer\",\"options\":{\"legend\":\"right\",\"title\":\"Chart Title\",\"animation\":{\"duration\":500},\"lineWidth\":0,\"booleanRole\":\"certainty\",\"pointSize\":7,\"vAxes\":[{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true},{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true}],\"hAxis\":{\"viewWindow\":{\"max\":null,\"min\":null},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null},\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"ScatterChart\"}"},"scriptrdata":[{"filename":"null_chart.html","filecontent":"\n<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n\t<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\t<script type=\"text/javascript\" src='https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n         \"packages\":[\"charteditor\", \"corechart\"]\n         }] \n      }'></script> \n      <script src=\"https://www.scriptr.io/src/js/ScriptrClient.js\"></script>\n  </head>\n  <script>\n\n  \tgoogle.setOnLoadCallback(loadChart);\n\n    var wrapper;\n\n   \tvar scriptrClient =  new $.ScriptrClient({\"url\": \"https://test-sandbox.apstrata.com/apsdb/rest/r\", \"token\": \"TDIyODI2REM5MQ==\", \"anon_token\": \"TDIyODI2REM5MQ==\"});\n\n \tfunction loadChart() {\n   \t\twrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\":{\"legend\":\"right\",\"title\":\"Chart Title\",\"animation\":{\"duration\":500},\"lineWidth\":0,\"booleanRole\":\"certainty\",\"pointSize\":7,\"vAxes\":[{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true},{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true}],\"hAxis\":{\"viewWindow\":{\"max\":null,\"min\":null},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null},\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"ScatterChart\"});\n   \t\tscriptrClient.callApi(\"\", {}, function(\n\t\t\tresponse, context) {\n\t   \t\tsetDataSource(response.response.result);\n\t\t}, function(response, context) {\n\t\t}, null);\n  \t}\n\t\n\n    function setDataSource(data) {\n\t  \twrapper.setDataTable(data);\n\t  \tif(wrapper.getChartType() != null) {\n\t  \t\twrapper.draw();\n\t  \t}\n    }\n\n    function drawChart() {\n        wrapper.draw();\n    }\n\n    </script>\n  <body>\n\t  <div id=\"chartContainer\"></div>\n  </body>\n</html>\n"}]}}*#*#*/
var content= '\n\
<!DOCTYPE html>\n\
<html>\n\
  <head>\n\
    <meta charset=\"utf-8\">\n\
	<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js\"></script>\n\
	<script type=\"text/javascript\" src=\'https://www.google.com/jsapi?autoload={\"modules\":[{ \"name\":\"visualization\",\"version\":\"1\", \n\
         \"packages\":[\"charteditor\", \"corechart\"]\n\
         }] \n\
      }\'></script> \n\
      <script src=\"https://www.scriptr.io/src/js/ScriptrClient.js\"></script>\n\
  </head>\n\
  <script>\n\
\n\
  	google.setOnLoadCallback(loadChart);\n\
\n\
    var wrapper;\n\
\n\
   	var scriptrClient =  new $.ScriptrClient({\"url\": \"https://test-sandbox.apstrata.com/apsdb/rest/r\", \"token\": \"TDIyODI2REM5MQ==\", \"anon_token\": \"TDIyODI2REM5MQ==\"});\n\
\n\
 	function loadChart() {\n\
   		wrapper = new google.visualization.ChartWrapper({\"containerId\":\"chartContainer\",\"options\":{\"legend\":\"right\",\"title\":\"Chart Title\",\"animation\":{\"duration\":500},\"lineWidth\":0,\"booleanRole\":\"certainty\",\"pointSize\":7,\"vAxes\":[{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true},{\"viewWindow\":{\"max\":null,\"min\":null},\"minValue\":null,\"maxValue\":null,\"useFormatFromData\":true}],\"hAxis\":{\"viewWindow\":{\"max\":null,\"min\":null},\"useFormatFromData\":true,\"minValue\":null,\"maxValue\":null},\"width\":600,\"height\":371},\"state\":{},\"view\":{},\"isDefaultVisualization\":false,\"chartType\":\"ScatterChart\"});\n\
   		scriptrClient.callApi(\"\", {}, function(\n\
			response, context) {\n\
	   		setDataSource(response.response.result);\n\
		}, function(response, context) {\n\
		}, null);\n\
  	}\n\
	\n\
\n\
    function setDataSource(data) {\n\
	  	wrapper.setDataTable(data);\n\
	  	if(wrapper.getChartType() != null) {\n\
	  		wrapper.draw();\n\
	  	}\n\
    }\n\
\n\
    function drawChart() {\n\
        wrapper.draw();\n\
    }\n\
\n\
    </script>\n\
  <body>\n\
	  <div id=\"chartContainer\"></div>\n\
  </body>\n\
</html>\n\
'; var response = apsdb.httpRespond(); response.write(content);response.close();			