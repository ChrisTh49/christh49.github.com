/*
console.log("Hello World");

//DOM

let variable = document.querySelector("#id\.class\etiqueta");

console.log(variable);

//Para obtener varios

let links = document.querySelectorAll("a");

links.forEach(function(link){
    console.log(link);
});

let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click', function(){
        console.log(this);
    });
});

let links = document.querySelectorAll('.close');

links.forEach(function(link){
    link.addEventListener('click', function(ev){
        ev.preventDefault();
        console.log(":)");
    });
});


let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-star");
    icono.classList.add("fa-star");
});
*/

let links = document.querySelectorAll('.close');

links.forEach(function(link){

    link.addEventListener('click', function(ev){
        ev.preventDefault();
        
        let content = document.querySelector('.content');

        //Quitar clases
        content.classList.remove("animate__animated");
        content.classList.remove("animate__backInLeft");

        //Agregar clases
        content.classList.add("animate__animated");
        content.classList.add("animate__backOutRight");

        //Colocarle un TimeOut
        setTimeout(function(){
            location.href = "/";
        }, 600);
    });
});

