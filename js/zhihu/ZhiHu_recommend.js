/*
QX:
^https:\/\/api\.zhihu\.com\/answers\/.*\/comments\/featured-comment url reject-img
^https:\/\/api\.zhihu\.com\/appview\/api\/v4\/answers\/.*\/recommendations url reject-img
^https:\/\/api\.zhihu\.com\/topstory\/recommend url script-response-body ZhiHu_recommend.js
[MITM]
hostname = api.zhihu.com
*/

let body = $response.body
body=JSON.parse(body)
body['data'].forEach((element, index)=> {
    if(element['card_type']=='slot_event_card'||element.hasOwnProperty('ad')){      
       body['data'].splice(index,1)  
    }
})
body=JSON.stringify(body)
$done({body})