const NOMBRE = "diego";
let edad = 30;

function saludarAlPublico(){
    console.log("Estoy saludando...");
    miFuncion();
}

function miFuncion(){
    console.log("otra funcion!");
}

export default {
    Nom : NOMBRE, 
    funcionSaludar:saludarAlPublico, 
}