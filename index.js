// Se usa para importar la libreria
const express =require("express");

//objetos para llamar los metodos de express
const app = express();

//ruta inicial
app.get("/",function(req,resp){
    resp.send("Hola Mundo");
})
// ctrl +  c para apagar el servidor desde terminal

//se configura el puerto usado para el servidor local
app.listen(3000,function(){
    console.log("El servidor http://localhost:3000 esta en linea");
});
