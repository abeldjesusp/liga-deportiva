function validarJugador(){
    var nombre = document.querySelector("#nombre");
    var correo = document.querySelector("#correo");
    var telefono = document.querySelector("#telefono");

    if(nombre.value == "" || correo.value == "" || telefono.value == ""){
        document.querySelector("#mensaje").style.color = "red";
        document.querySelector("#mensaje").innerHTML = "ERROR! Hay campos vacios";
    }else{
        document.querySelector("#mensaje").style.color = "green";
        document.querySelector("#mensaje").innerHTML = "Datos enviados correctamente";
        nombre.value = "";
        correo.value = "";
        telefono.value = "";
    }
}

function calcularPromedio(){
    var nombreEquipo = document.querySelector("#equipoNombre").value;
    var juegosGanados = document.querySelector("#juegosGanados").value;
    var juegosPerdidos = document.querySelector("#juegosPerdidos").value;

    var resultado = juegosGanados / (parseInt(juegosGanados) + parseInt(juegosPerdidos));

    document.querySelector("#rowNombreEquipo").innerHTML = nombreEquipo;
    document.querySelector("#rowjuegosGanados").innerHTML = juegosGanados;
    document.querySelector("#rowjuegosPerdidos").innerHTML = juegosPerdidos;
    document.querySelector("#rowPromedio").innerHTML = resultado;

    document.querySelector("#equipoNombre").value = "";
    document.querySelector("#juegosGanados").value = "";
   document.querySelector("#juegosPerdidos").value = "";
}