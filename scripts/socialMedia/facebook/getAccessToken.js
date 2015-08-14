/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 
 
 var fb = require("facebook");

var callbackUrl = "http://www.scriptr.io/";

var oauthVerifier = "AQBHLV7gVpGVCfuZifMP1UTPlNMR96h8fBwo94MbEWb9BE34zB9JM8lFFRdICx5Vsz1ERvdj0tNPqcOS94F5ygICDCOqS2-oRALYcqfWASsHnmhHzL4xstsozpFVLJpAh--tkpScQ_LUi3GM6VabwFRC6O4uHXJ6eaAJS4_gi3L96O758x7giv9g46-BJ8px1sWtdIFCTStA3p-3NStb_XJOWDvOOO3Gcvfve6M_roQuNSOSnQy5X5ER4Q-VQ7FKn0Z0k-3ZCSJ0WDX1UazOBXys64-x7tj7JuAVTm5NLAJaBS2TMtDBALe_lDVDREPwEsXv7i7UtQoHXgJ_GkT4IsU6";

var credentials = {
  "apiKey": "341726685895718",
  "apiSecret": "62d55f6f76433f42c644ef2e9caf91bf"
};

return fb.getAccessToken(callbackUrl, oauthVerifier, credentials);   				   				   				   				   				   				   							