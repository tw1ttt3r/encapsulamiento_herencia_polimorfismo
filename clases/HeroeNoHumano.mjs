import Heroe from "./Heroe.mjs";

class HeroeNoHumano extends Heroe {

    #planeta = null;

    constructor(nombre, alias, planeta = "Desconocido") {
        super(nombre, alias, "Extraterrestre");
        this.#planeta = planeta;
    }

    getPlaneta() {
        return this.#planeta;
    }

    saludar() {
        return `${this.nombre === "" ? "Mi identidad es desconocida" :"Hola soy "+this.nombre} ${this.#planeta === 'Desconocido' ? "No puedo decir de donde vengo" : `Vengo del planeta ${this.#planeta}`}`
    }
}

export default HeroeNoHumano;