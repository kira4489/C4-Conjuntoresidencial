class Inmueble{
    constructor(metros, tipo_inmueble, num_habitantes, fecha_mensualidad){
        this.metros_cuadrados = metros;
        this.tipo_inmueble = tipo_inmueble;
        this.num_habitantes = num_habitantes;
        this.fecha_mensualidad = fecha_mensualidad;
    }
    
    totalPagarAdministracion(){
        return 0;
    }
    
    setMetrosCuadrados(metros_cuadrados){
        this.metros_cuadrados = metros_cuadrados;
    }
    
    setTipoInmueble(tipo_inmueble){
        this.tipo_inmueble = tipo_inmueble;
    }
    
    setNumeroHabitantes(num_habitantes){
        this.num_habitantes = num_habitantes;
    }
    
    setFechaMensualidad(fecha_mensualidad){
        this.fecha_mensualidad = fecha_mensualidad;
    }
    
    getMetrosCuadrados(){
        return this.metros_cuadrados;
    }
    
    getFechaMensualidad(){
        return this.fecha_mensualidad;
    }
    
}
export default Inmueble;