/*
QX:
^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) url script-response-body YouTube.js
Surge:
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=YouTube.js
[MITM]
hostname = *.googlevideo.com
*/

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});