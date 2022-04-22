const express = require("express");


const app = express();


app.get('/',(request,response)=>{

   
   response.send("respuesta");
});


app.listen(3000);