/* 
QX:
^https?:\/\/[\w\.-]*?\.jstucdn\.com\/(?:g3\/|js\/ad) url reject-200
^https?:\/\/[\w\.-]*?\.rrhuodong\.com\/[^\r\n\?&]*?\?[^\r\n\?]*?&a=ad(?=&|$) url reject-200
^https?:\/\/[\w\.-]*?\.playcvn\.com\/app\/(?:ads|init)\? url script-response-body YYets.js
Surge4:
http-response ^https?:\/\/[\w\.-]*?\.playcvn\.com\/app\/(?:ads|init)\? requires-body=1,max-size=-1,script-path=YYets.js
[MITM]
hostname = *.playcvn.com, *.rrhuodong.com, *.jstucdn.com
*/

let body = $response.body;
body = JSON.parse(body);

if (-1 != $request.url.indexOf('init')) {
    body['ad'] = "";
    body['adSwitch'] = [];
    body['adUpdateTime'] += 86400*365;
    body['barrageIp'] = "";
}
if (-1 != $request.url.indexOf('ads')) {
    body['adSwitch'] = [];
    body['ads'] = body['ads'].filter(
        function (item) {
            if (6 != item.adType) {
                return false;
            }
            if (-1 == item.click.indexOf('yyets://')) {
                return false;
            }
            return true;
        }
    );
}

body = JSON.stringify(body);
$done({body});