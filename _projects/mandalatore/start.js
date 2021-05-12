

function supportCrossOriginScript(req, res, next) {

res.header("Access-Control-Allow-Headers", "Content-Type");




res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT, HEAD");

res.header("Allow", "POST, GET, OPTIONS, DELETE, PUT, HEAD");




var origin = req.headers.origin;




res.header('Access-Control-Allow-Origin', origin);

res.header('Access-Control-Allow-Credentials', true);




//console.log("[supportCrossOriginScript] setting up headers");




res.status(200);

next();

}
