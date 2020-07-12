/*
QX:
^https://sp\.kaola\.com/api/openad$ url script-response-body Kaola.js
Surge4:
http-request ^https://sp\.kaola\.com/api/openad$ script-path=Kaola.js
[MITM]
hostname = sp.kaola.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});