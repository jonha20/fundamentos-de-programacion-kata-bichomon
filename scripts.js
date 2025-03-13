/*1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".*/
document.getElementById("gen-1").innerHTML = "Generasión 1 Pokimon";
/*2. Cambia el color de fondo de la primera generación de Pokimon.*/
  document.getElementsByClassName("infocard-list infocard-list-pkmn-lg")[0].style.background = "black";
/*3. Imprime por consola la URL de la página.*/
console.log(window.location.href)
/*4. Imprime por consola el dominio de la página.*/
console.log(document.domain);
/*5. Imprime todos los nodos de imagen.*/
const imagenes = document.querySelectorAll("img");
for (let i = 0; i < imagenes.length; i++) {
    console.log(imagenes[i]);

}
/*6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"*/
const enlaces = document.querySelectorAll("img");

for (let i = 0; i < enlaces.length; i++) {
    console.log(enlaces[i].innerHTML);
    enlaces[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
//*Premium:*

/*7. Cambia el fondo de todos los `infocard-lg-data text-muted` para todos los Pokimon voladores `itype flying`*/

//DUDA
/*const pokemon = document.querySelectorAll(".infocard-lg-data.text-muted");
const tipo = document.querySelectorAll(".itype.flying");
for (let i = 0; i < pokemon.length; i++) {
        if (tipo[i].textContent.includes("Flying")) {
            pokemon[i].style.background = "green";
        }
}*/

//childNodes
/*const array = document.querySelectorAll(".infocard-lg-data.text-muted");
const flying = array.children
console.log(flying)*/

//Franco help
document.querySelectorAll(".infocard-lg-data.text-muted").forEach(pokemon => {
    if (pokemon.textContent.includes("Flying")) {
        pokemon.style.background = "green";
    }
});
console.log(document.domain);
console.log(window.location.href);