/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*SCRIPTR_PLUGIN*#*{"metadata":{"name":"CodeMirrorArbitraryFile","plugindata":{"fileData":"<html>\n\t<head>\n\t\t<title>Generic Scriptr File</title>\n\t</head>\n\t<body>\n\t\tThis is my generic Sciptr file.\n\t</body>\n</html>"},"scriptrdata":[]}}*#*#*/
var content= '<html>\n\
	<head>\n\
		<title>Generic Scriptr File</title>\n\
	</head>\n\
	<body>\n\
		This is my generic Sciptr file.\n\
	</body>\n\
</html>'; var response = apsdb.httpRespond(); response.write(content);response.close();			