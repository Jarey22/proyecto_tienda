let mysql = require("mysql");

let conexion = mysql.createConnection({
    host:"localhost",
    database :"bd_ventas",
    user:"root",
    password:""
});
/*comprobacion*/
conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});
//para que finalice la conexion y no gaste memoria ram
//conexion.end(); // crl + c para cerrar la terminal

const categoria ="SELECT * FROM category"

conexion.query(categoria,function(error,lista){
    if(error){
        throw error; //para que muestre los errores
    }else{
        console.log(lista); //con el .length muestra la cantidad de datos dentro de la tabla , [#]si pone el numero llama el numero de la posicion
        conexion.end();
    }
})
