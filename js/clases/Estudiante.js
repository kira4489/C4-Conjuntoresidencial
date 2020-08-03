import Persona from './Persona.js';
	
export default class Estudiante extends Persona{
    constructor(grado, grupo, nombre,  edad){
        super(edad, nombre);
        this.grado = grado;
        this.grupo = grupo;
    }
    
    estudiar(){
        console.log("Estoy estudiante...");
    }
} 

// let X = new Estudiante(11, "11C",  "Diana", "Bedoya");
// console.log(X);

// let x = new Estudiante(11,"11c","Diana","Bdoya")