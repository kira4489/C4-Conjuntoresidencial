document.getElementById("btn-guardar-inmueble").addEventListener('click', (e) =>{
	let nombre_almacenado, documento_almacenado, 
            genero_almacenado, fecha_nac_almacenada,mt_inmueble_almacenado,tipo_inmueble_almacenado, 
            num_habitantes_inmueble_almacenado, fech_men_inmueble_almacenado;
    let inmueble = {
        datos_propietario : {
            nombre : null, 
            documento : null, 
            genero : null, 
            fech_nac : null
        }, 
        datos_inmueble : {
            metos_cuadrados : null, 
            tipo : null, 
            numero_habitantes : 0, 
            fech_mensualidad : null
        }
    };
	if(document.getElementById("frm-mensualidad").reportValidity()){
        
        inmueble.datos_propietario.nombre = document.getElementById("nombre-propietario").value;
        inmueble.datos_propietario.documento = document.getElementById("doc-propietario").value;
        inmueble.datos_propietario.fech_nac = document.getElementById("fecha-nac-propietario").value;
        inmueble.datos_propietario.genero = document.getElementById("genero-propietario").value;
        
        inmueble.datos_inmueble.metos_cuadrados = document.getElementById("metros-cuadrados").value;
        inmueble.datos_inmueble.numero_habitantes = document.getElementById("numero-habitantes").value;
        inmueble.datos_inmueble.fech_mensualidad = document.getElementById("fecha-mensualidad").value;
        
        if(document.getElementById("tipo_apartamento").checked){
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_apartamento").value;
        }else{
            inmueble.datos_inmueble.tipo = document.getElementById("tipo_casa").value;
        }

    }else{
        alert("Error de validación de campos.")
    }
    
    console.log(inmueble);
});
   	
$(document).ready((e) => {
    $("#btn-adicionar").click((e) => {
        $('#modal-adicionar').modal('toggle');
    });
});