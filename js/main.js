//import {saludarAlPublico, NOMBRE,edad} from './modulo.js';
// import jsonModulo from './modulo.js';
import Estudiante from './clases/Estudiante.js';
import Propietario from './clases/Propietario.js';
let propietario_inicial = new Propietario("Juan Perez", "32442343", "H", new Date("1980-10-10"));
propietario_inicial.asignarInmueble(30, "C", 10, new Date("2020-08-06"));
//propietario_inicial.inmueble.setTipoInmueble("C");
const DATOS_FORMULARIO = [
    propietario_inicial
];


/*
numeros.map(function(elemento, p){  
	console.log("=====");
    console.log(p, elemento);
	console.log("=====");
    return "posición: "+elemento;
})
[1,2,3,4,5]
["posición: 1","posición: 2","posición: 3","posición: 4","posición: 5"]
*/
	
document.getElementById("btn-guardar-inmueble").addEventListener('click', e => {
	let propietario = new Propietario();
	if(document.getElementById("frm-mensualidad").reportValidity()){
        
        propietario.nombre = document.getElementById("nombre-propietario").value;
        propietario.documento = document.getElementById("doc-propietario").value;
        propietario.fecha_nacimiento = new Date(document.getElementById("fecha-nac-propietario").value);
        propietario.genero = document.getElementById("genero-propietario").value;
        
        propietario.inmueble.metros_cuadrados = document.getElementById("metros-cuadrados").value;
        propietario.inmueble.num_habitantes = document.getElementById("numero-habitantes").value;
        propietario.inmueble.fecha_mensualidad = new Date(document.getElementById("fecha-mensualidad").value);
        
        if(document.getElementById("tipo_apartamento").checked){
            propietario.inmueble.tipo_inmueble = document.getElementById("tipo_apartamento").value;
        }else{
            propietario.inmueble.tipo_inmueble = document.getElementById("tipo_casa").value;
        }
    }else{
        alert("Error de validación de campos.")
    }
    DATOS_FORMULARIO.push(propietario);
    document.getElementById("frm-mensualidad").reset();
    alert("Los datos fueron almacenados");
    cargarDatosEnTabla();
    $('#modal-adicionar').modal('toggle');
        
});
   	
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});

function cargarDatosEnTabla(){
	document.querySelector("#tbl-mensualidades tbody").innerHTML = "";
    DATOS_FORMULARIO.forEach( propietario => {
        document.querySelector("#tbl-mensualidades tbody").innerHTML += `<tr>
                                                                        <td>${propietario.nombre}</td>
                                                                        <td>${propietario.calcularEdad()} años</td>
                                                                        <td>${propietario.genero === "F" ? "Mujer" : "Hombre"}</td>
                                                                        <td>${0}</td>
                                                                        <td>${propietario.inmueble.getFechaMensualidad()}</td>
                                                                        <td><a>Ver</a></td>
                                                                    <tr/>`;
    });
    
}

function calcularEdad(fecha_nacimiento){
    let ageDifMs = Date.now() - fecha_nacimiento.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function recorrerVector(){
    let arreglo = [3,5,6,8,1];
    // for (let i = 0; i < arreglo.length; i++) {
    //     console.log(arreglo[i]);      
    // }
    //let r =  arreglo.forEach( x => console.log(x) );
    let r =  arreglo.map( x => x + 1);
    console.log(arreglo);
    console.log(r);
}

function condicionalReducido(){
    let x, year = 2020;
    //x = condicion ? valor_que_cumple : valor_alternativo;
    x = year > 2000 ? 5 : 6;
    // if(year > 2000){
    //     x = 5;
    // }else{
    //     x = 6;
    // }
    return x;
}

cargarDatosEnTabla();
//jsonModulo.funcionSaludar();
//console.log("El nombre que se importo fue " + NOMBRE + " y la edad fue "+edad)
	
// let X = new Estudiante(11, "11C",  "Diana", "Bedoya");
console.log(DATOS_FORMULARIO);