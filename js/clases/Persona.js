/*P00*/
export default class Persona {
  constructor(edad, nom, apellido, genero) {
    // console.log("se creo umna persona y este es la persona ");
    this.edad = edad;
    this.nombre = nom;
    this.apellido = apellido;
    this.genero = genero;
  }
  //metodos
  hablar() {
    console.log("estoy hablando..");
  }
  correr(distancia) {
    return `estoy corriendo una distacnia  ${distancia}`;
  }

  getEdad() {
    return this.edad;
  }

  setEdad(edad) {
    return (this.edad = edad);
  }
}

//herencia

// class Estudiante extends Persona{
//     constructor(grado,grupo,nombre,edad){
//      super(edad,nombre);
//       this.grado = grado;
//       this.grupo = grupo;
//     }
//     estudiar(){
//         console.log ("estoy estudiando")
//     }
// }

