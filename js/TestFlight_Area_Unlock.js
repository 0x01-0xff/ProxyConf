/*
该订阅仅适用于QuantumultX, 用于更新TestFlight App时, 提示"APP不可用"问题. 解除区域限制.

^https?:\/\/testflight\.apple\.com\/v\d\/accounts\/.+?\/install$ url script-request-body TestFlight_Area_Unlock.js

hostname = testflight.apple.com

*/

$done({ 
body: $request.body
.replace(/storefrontId\" ?: ?\".+?\"/,'storefrontId" : "143441-1,29"')
})