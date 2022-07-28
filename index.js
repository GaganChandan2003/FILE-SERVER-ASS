const http=require("http");
let fs=require('fs');


const server=http.createServer((req,res)=>
{
    if(req.url==="/")
    {
        fs.readdir(__dirname,{encoding:"utf-8"},(err,files)=>
        {
            res.setHeader("content-type","text/html")
            files.map((el)=>
            { 
                if(el==="public")
                {
                    res.write(`<li><a href="./public">${el}</a></li>`); 
                }
                else{
                    res.write(`<li>${el}</li>`); 
                }
               
            })
            res.end();
        })
    }
    else if(req.url==="/public")
    {
        fs.readdir("public",{encoding:"utf-8"},(err,files)=>
        {
            res.setHeader("content-type","text/html")
            files.map((el)=>
            { 
                res.write(`<li><a href="./public/others">${el}</a></li>`); 
            })
            res.end();
        })
    }
    else if(req.url==="/public/others")
    {
        fs.readdir("public/others",{encoding:"utf-8"},(err,files)=>
        {
            res.setHeader("content-type","text/html")
            files.map((el)=>
            { 
                res.write(`<li>${el}</li>`); 
            })
            res.end();
        })
    }
})
server.listen(8080)