/*
QX:
^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment url reject-img
^https:\/\/api\.zhihu\.com\/appview\/api\/v4\/answers\/.*\/recommendations url reject-img
^https:\/\/api\.zhihu\.com\/v\d\/questions url script-response-body ZhiHu_answer.js
[MITM]
hostname = api.zhihu.com
*/

let body = $response.body
body=JSON.parse(body)
delete body['ad_info']
body['data'].forEach((element, index)=> {
    if(element['author']['name']=="盐选推荐"){ 
          body['data'].splice(index,1)  
     }
 })
body=JSON.stringify(body)
$done({body})