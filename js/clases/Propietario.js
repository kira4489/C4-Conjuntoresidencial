import Inmueble from './Inmueble.js';
export default class Propietario{
    constructor(nombre, documento, genero, fecha_nacimiento){
        this.nombre = nombre;
        this.documento = documento;
        this.genero = genero;
        this.fecha_nacimiento = fecha_nacimiento;
        this.inmueble = new Inmueble();
    }
    
    getDocumento(){
        return this.documento;
    }
    
    asignarInmueble(metros_cuadrados, tipo_inmueble, num_habitantes, fecha_mensualidad){
        this.inmueble.setMetrosCuadrados(metros_cuadrados);
        //this.inmueble.metros_cuadrados = metros_cuadrados;
        this.inmueble.setTipoInmueble(tipo_inmueble);
        this.inmueble.setNumeroHabitantes(num_habitantes);
        this.inmueble.setFechaMensualidad(fecha_mensualidad);
    }
    
    calcularEdad(){
        let ageDifMs = Date.now() - this.fecha_nacimiento.getTime();
        let ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}