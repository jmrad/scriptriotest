Google analytics give you the ability to track events by the tracking code that you can use to record user interaction with website elements, such as a Flash-driven menu system. This is accomplished by attaching the method call to the particular UI element you want to track or by calling this method in your scripts.. When used this way, all user activity on such elements is calculated and displayed as Events in the Analytics reporting interface. Additionally, pageview calculations are unaffected by user activity tracked using the Event Tracking method. Finally, Event Tracking employs an object-oriented model that you can use to collect and classify different types of interaction with your web page objects.


In order to activate  event tracking by google analytics servers using scriptr you just need to include this library , create an instance by passing your google analytics token as parameter and using the function track.

Example:
var clientModule = require("googleanalytics/client");
var googleAnalytics = new clientModule.GoogleAnalyticsClient("UA-66177855-1");
  var params={"eventCategory":"scriptCall","eventAction":"action","optionalParamsObj":{},"userID":request.user.id,"cid":"35009a79-1a05-49d7-b876-2b884d0f825b","debug":true};
console.log(googleAnalytics.track(params));
