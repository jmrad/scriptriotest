/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var fb = require("facebook");
var currentDate = new Date();
var formattedDate = currentDate.getFullYear()
  + "-" + atLeastTwoDigits(currentDate.getMonth() + 1)
  + "-" + atLeastTwoDigits(currentDate.getDate())
  + "T" + atLeastTwoDigits(currentDate.getHours())
  + ":" + atLeastTwoDigits(currentDate.getMinutes())
  + ":" + atLeastTwoDigits(currentDate.getSeconds());
formattedDate += currentDate.getTimezoneOffset() < 0 ? "+" : "-";
formattedDate += atLeastTwoDigits((Math.abs(currentDate.getTimezoneOffset()) / 60)) + "00";

return fb.post("This is a beautiful posting day, Holla Scriptr! " + formattedDate);
/*
var message = "http://www.google.com/intl/en_ALL/images/logo.gif";

var tokens = {
"consumerKey": "839528096085992",
"consumerSecret": "b008f18d723340aa55eb0d04a968b08d",
"accessToken": "CAAL7i93yNZBgBAKRqAZAFgdsxcfZAyOAFTmEsQrHcnZAXNXPKNKkhrHomXtz9mO8u0rIHjJ42okmaZBPykQFOZCx8woCqFjrZAbR8gGQuyUtZBb13ZCyaVXkTHZADMZASoEREUb7Ix2ihPE6HCdaacUsZBIL6sIuoT03DxY0lS4S1YTcKjt4ZAstCWAUSpJoo1F55t3ituahEEHfMzJFlGBwwAawH",
};

return fb.post(message, tokens);*/


function atLeastTwoDigits (value) {
    return value < 10 ? "0" + value : value;
}   							