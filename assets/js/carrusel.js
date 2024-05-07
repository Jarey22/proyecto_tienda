/*const grande = document.querySelector(".grande");
const punto = document.querySelectorAll(".punto");

// Asignar un click a cada punto
//saber la posicion de ese punto
//transform en el x al grande
//quitar clase activo de todos los puntos
//luego añadirla al punto que se le haga click

//Recorrer todos los puntos
punto.forEach((cadaPunto, i)=>{
    //Asignar el click a cada punto
    punto[i].addEventListener("click",()=>{
        //guardar la posicion de ese punto
        let posicion = i
        // el espacio que debe desplazarse el grande
        let operacion = posicion * -30
        //mover el grande
        grande.style.transform =`translateX(${operacion}%)`
        //recorrer todos los puntos
        punto.forEach((cadaPunto,i)=>{
            //quitar la clase activo a todos los puntos
            punto[i].classList.remove("activo")
        })
        //añadir la clase al activo al punto que tenga el click
        punto[i].classList.add("activo")
    })
}) */ 

function inicializarCarrusel(grandeSelector, puntoSelector) {
    let grandes = document.querySelectorAll(grandeSelector); // Selección de todos los elementos con la clase grande
    let puntos = document.querySelectorAll(puntoSelector); // Selección de todos los elementos con la clase punto

    grandes.forEach(grande => {
        puntos.forEach((punto, i) => {
            punto.addEventListener("click", () => {
                let posicion = i;
                let operacion = posicion * -30;
                grande.style.transform = `translateX(${operacion}%)`;

                puntos.forEach((cadaPunto, j) => {
                    puntos[j].classList.remove("activo");
                });

                puntos[i].classList.add("activo");
            });
        });
    });
}

// Llama a la función inicializarCarrusel con los selectores específicos de cada carrusel
inicializarCarrusel(".grande", ".punto");
inicializarCarrusel(".grande1", ".punto1");
inicializarCarrusel(".grande2", ".punto2");
// Añade más llamadas según sea necesario para cada carrusel
