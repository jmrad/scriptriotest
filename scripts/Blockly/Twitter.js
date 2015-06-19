/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 /*#*beginblockly*#*<xml xmlns="http://www.w3.org/1999/xhtml"><block type="scriptr_return" id="30" inline="false" x="59" y="17"><value name="return"><block type="scriptr_tweet" id="15" inline="true"><value name="tweetString"><block type="text" id="48"><field name="TEXT">testing test</field></block></value></block></value></block></xml>*#*#*/
return tweet ('testing test');
   							