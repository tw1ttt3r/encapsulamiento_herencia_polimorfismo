import HeroeHumano from "./clases/HeroeHumano.mjs";
import HeroeNoHumano from "./clases/HeroeNoHumano.mjs";
import Habilidad from "./clases/Habilidad.mjs";

// Nuevo Registro
const registro1 = new HeroeHumano("", "Batman");
console.log("Superheroe registrado: " + registro1.getAlias());
console.log("se agregan habilidades");
registro1.agregaHabilidad(new Habilidad("ser millonario"));
registro1.agregaHabilidad(new Habilidad("ser estratega"));
registro1.agregaHabilidad(new Habilidad("volar", false));
console.log("se listan habilidades");
console.log("acceso desde metodo: ", registro1.listarHabilidad(0));
console.log("obtener tipo: " + registro1.getTipo());
console.log("obtener nombre: " + registro1.nombre);
console.log("saludar: " + registro1.saludar());

// Nuevo Registro
const registro2 = new HeroeNoHumano("", "Superman", "Krypton");
console.log("Superheroe registrado: " + registro2.getAlias());
console.log("se agregan habilidades");
registro2.agregaHabilidad(new Habilidad("volar"));
registro2.agregaHabilidad(new Habilidad("vision calorifica"));
registro2.agregaHabilidad(new Habilidad("inmortalidad", false));
console.log("se listan habilidades");
console.log("acceso desde metodo: ", registro2.listarHabilidad(0));
console.log("obtener tipo: " + registro2.getTipo());
console.log("obtener nombre: " + registro2.nombre);
console.log("saludar: " + registro2.saludar());