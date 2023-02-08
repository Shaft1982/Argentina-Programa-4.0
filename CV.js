
var fotomostrada = "Male"

function myFunction() 
{{}
 var imagen = document.getElementById("foto");
 
 if(fotomostrada == "male") {
    imagen.src= "https://randomuser.me/api/portraits/men/41.jpg"; //Fuente de la imagen web randomuser
    fotomostrada ="male2"
 }
 else {imagen.src ="https://randomuser.me/api/portraits/men/79.jpg"; //Fuente de la imagen web randomuser
       fotomostrada = "male"}
 }


 console.log ("Insertar Javascript en HTML. utilización de eventos!")