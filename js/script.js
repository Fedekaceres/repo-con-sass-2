class Video_games {
    constructor(id, name, precio, cantidad) {
        this.id = id;
        this.name = name;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}
const my_games_arrays=[];
function getGames() { 
     let gameid = prompt("ingrese un id para el juego"); 
     let namegame = prompt("ingrese el nombre del juego"); 
     let gameprecio= prompt ("precio del juego");
     let gamecantidad= prompt ("cantidad de juegos");
     const gamepyramid= new Video_games(gameid,namegame,gameprecio,gamecantidad);
     my_games_arrays.push(gamepyramid)
     console.log(my_games_arrays)}
     

let comprando = true;
do {
    let respuesta = prompt("Bienvenidos a Pyramid\n elija alguna opcion\n1\n2")
    switch (respuesta) {
        case "terminar proceso":
            comprando = false;
            break;
        case "buscar juego":
            getGames();
            break;
        default:
            alert("a ingresado una opcion incorrecta")
    }
} while (comprando)





