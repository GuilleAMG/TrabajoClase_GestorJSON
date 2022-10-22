const FS= require('fs')
const RUTA='./DB/data.json'

const [,,parametro1,parametro2]=process.argv
const [,accion] = parametro1.split('=')
if(parametro2) {
    var [,msj] = parametro2.split('=')
}

// let data={};

switch(accion){
    case '1':
        //Crea un archivo JSON Vacio
        crearVacioJSON()
        break
    case '2':
        //Escribir en un archivo
        EscribirJSON()
        break
    case '3':
        //Sobrescribir el contenido de un archivo
        SobrescribirJSON()
        break
    case '4':
        //Eliminar archivo
        eliminarJSON()
        break
    case '5':
        //Leer archivo
        leerJSON()
        break
    case '6':
        //Buscar y mostrar archivo
        buscarmostrarJSON()
        break
    default:
        console.log('Opcion incorrecta')
        break
}

//FUNCIONES para manipular un archivo JSON
function crearVacioJSON(){
    FS.open(RUTA, 'w', function (err) {
        if (err) throw err;
        console.log(`Archivo creado ${RUTA}`);
      }
    )
}

function EscribirJSON(){
    FS.appendFile(RUTA, msj, function (err) {
        if (err) throw err;
        console.log('Archivo actualizado');
      });
}

function SobrescribirJSON(){
    FS.writeFile(RUTA, msj, function (err) {
        if (err) throw err;
        console.log('Archivo se sobrescribio correctamente');
      });
}

function eliminarJSON(){
    FS.unlink(RUTA, function (err) {
        if (err) throw err;
        console.log('Archivo Eliminado!');
      });
}

function leerJSON(){
   let data2= FS.readFile(RUTA, function(err, data) {
        console.log(JSON.parse(data))
        
        this.data=JSON.parse(data)

        console.log(`Esto es un objeto: ${this.data.nombre}`)
      });
    }

    // No pude llegar a la solucion de esta funcion Ing. Ivan, le dejo en forma de comentario lo que pude hacer antes de que se acabara el tiempo.
/* function buscarmostrarJSON(){
    
    INTENTO 1:
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    let data3= FS.readline(RUTA, function(err, data) {
        console.log(JSON.parse(data))
        
        this.data=JSON.parse(data)

        console.log(`Esto es el objeto que busca: ${this.data.tarea}`)
      });
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    INTENTO 2:
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
      }); 
      readline.question(`¿Que objeto desea ver? \n`, object => {
        if(object === 'tarea1' ){
            let actividad = data.json;

            console.log(JSON.parse(data))
        
            this.data=JSON.parse(data)

            console.log(`Esto es el objeto que busca: ${this.data.tarea}`)          
         }
         else{
            console.log("Objeto no encontrado.");
         }
        readline.close();
      });
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
}
*/
