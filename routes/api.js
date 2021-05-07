const express =require("express")
const router =express.Router();
var request =require("request");
const dotenv =require("dotenv");
dotenv.config();
const USER =process.env.RPC_USER;
const PASS =process.env.RPC_PASSWORD;
const headers ={
"content-type":"text/plain;"
};
router.get("/test",(req,res)=>res.json({msg:"backend works"}));
router.get ("/getblockcount",(req, res)=>{
var dataString ='{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}';
var options ={
url :'http://${USER}:${PASS}@127.0.0.1:8332/',
method:"POST",
headers: headers,
body:dataString
};
callback =(error,responce,body)=>{
if(!error && responce.statusCode==200)
{
const data =JSON.parse(body);
res.send(data);
}
};
request(options,callback);
});
module.exports=router;
