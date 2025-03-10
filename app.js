// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let numeroAleatorio;

function agregarAmigo(){

    if( (document.getElementById('amigo').value.trim()) === ``){

        //Mensaje de alerta
        alert(`No estar agregando nada, favor de escribir el nombre de tu amigo en el campo de texto`);

        //Elimina lo que hay en el campo de texto
        document.querySelector(`#amigo`).value = ``;

    }else {
        //Elimina el resultado por si se quiere volver a usar
        document.getElementById(`resultado`).innerHTML = null;
        //Agrega elemento a amigos[] con .push.
        amigos.push((document.getElementById('amigo').value));
        //Elimina lo que hay en el campo de texto
        document.querySelector(`#amigo`).value = ``;
        //Funcion que crea la lista y la pasa al HTML
        crearLista();
        
    }

}

function sortearAmigo(){

    if(amigos.length > 1){
        
        numeroAleatorio = generarNumeroAleatorio();
        console.log (`El tamaño del array es de: ` + amigos.length);
        console.log(`El numero aleatorio es: ` + numeroAleatorio);

        document.getElementById(`resultado`).innerHTML = ("El amigo seleccionado fue: " + amigos[numeroAleatorio-1]);
        document.getElementById(`listaAmigos`).innerHTML = null;
        reiniciarTodo();


    //Si solo tiene 1 amigo en la lista, no seria aleatorio
    } else if(amigos.length == 1){
        alert(`Necesitas mas de 2 amigos, para poder sortearlos.`);


    //Si no tienen amigos, no se puede sortear.
    }else{
        alert(`No tienes ningun amigo agregado, agrega algunos amigos :)`);

    }
} 

//Genera el numero aleatorio correspondiente al tama;o del array
function generarNumeroAleatorio(){

    return Math.floor(Math.random()*amigos.length +1);

}

//Crea la lista, y la agrega al HTML
function crearLista(){
    let lista ="";
    document.getElementById(`listaAmigos`).innerHTML = lista;
    for(let i = 0; i <amigos.length ; i++){
        lista += "<li>" + amigos[i] + "</li>";
    }

    document.getElementById(`listaAmigos`).innerHTML = lista;


}


//Reinicia todo para volver a crear la lista una vez que se da el 
function reiniciarTodo(){
let lista ="";
    document.getElementById(`listaAmigos`).innerHTML = lista;
    amigos = [];
}
