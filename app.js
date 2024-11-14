// Se usa para importar la librerias
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs")

//objetos para llamar los metodos de express y mysql
const app = express();
const conexion = mysql.createConnection({
    host:"localhost",
    database :"bd_usuarios",
    user:"root",
    password:""
})
// ctrl +  c para apagar el servidor desde terminal

//Aqui se le explica a express la extension de los archivos
app.set("view engine", "ejs");
//ruta a la pagina las 2 funciones de un servidor siempre es requerir informacion y responder (req,res)


app.get("/",function(req,res){
    res.render("index")
});
app.get("/login",function(req,res){
    res.render("login");
});

app.get("/registro",function(req,res){
    res.render("registro");
});
//middleware hace que todo se vea que no sea ejs
app.use(express.static("public"));

//para que los datos no se lean de manera indefinida se usan estos metodos
app.use(express.json()); //para que pueda reconocer esos objetos con esta extension
app.use(express.urlencoded({extended:false})); //para que codifique todo lo que venga del html

//Consultas y conexion al formulario
app.post("/validar", function(req,resp){
    const datos = req.body;
    //traer cada uno de los datos y guardarlos en una variable, no importa el orden
    /*
    let nombre_encuesta = datos.nom;
    let apellido_encuesta = datos.apell;
    let email_encuesta = datos.email;
    let puntuacion_encuesta = datos.punt;
    let comentario_encuesta = datos.comentario;*/
    let cedula = datos.cedula_registro;
    let nombreusuario = datos.usuario_registro;
    let nombrecompleto= datos.nombre_registro;
    let email = datos.email_registro;
    let passw = datos.passw_registro;
    let passw_encriptado=bcrypt.hashSync(passw,5);

    // la consulta contiene todos los datos para que sean almancenados en la base de datos
    //let registrar = "INSERT INTO tabla_usuarios (cedula,nombre,apellido,email,password) VALUES ('"+null+"''"+nombre_encuesta +"','"+apellido_encuesta+"','"+puntuacion_encuesta+"','"+email_encuesta+"','"+comentario_encuesta+"')"
    
    //variables de consulta con funcion de envio de datos
    let registrar1 = "INSERT INTO registro (cedula,nombreusuario,nombrecompleto,email,password) VALUES ('"+cedula+"','"+nombreusuario+"','"+nombrecompleto+"','"+email+"','"+passw_encriptado+"')"
    //funcion para evitar duplicidades
    let coincidencias = "SELECT * FROM registro WHERE cedula = '"+cedula+"'";
    /*conexion.query(registrar, function(error){
        if(error){
            throw error;
        }else{
            console.log("La encuesta fue almacenada correctamente :D");
        }
    })*/
    conexion.query(coincidencias,function(error,row){
        if(error){
            throw error;
        }else{
            if(row.length>0){
                console.log("El dato no se puede registrar :C")
            }else{
                conexion.query(registrar1, function(error){
                    if(error){
                        throw error;
                    }else{
                        console.log("Datos almacenados correctamente :D");
                    }
                });
            }
        }
    });
})
//ruta del servidor
app.listen(3000,function(){
    console.log("El servidor http://localhost:3000 esta en linea");
});