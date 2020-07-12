/*
QX:
^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment url reject-img
^https:\/\/api\.zhihu\.com\/appview\/api\/v4\/answers\/.*\/recommendations url reject-img
^https:\/\/api\.zhihu\.com\/people\/ url script-response-body ZhiHu_people.js
[MITM]
hostname = api.zhihu.com
*/

let body = $response.body 
body=JSON.parse(body)
delete body['mcn_user_info']
body=JSON.stringify(body)
$done({body})