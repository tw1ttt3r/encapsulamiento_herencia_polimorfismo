import Heroe from "./Heroe.mjs";

class HeroeHumano  extends Heroe {
    constructor(nombre, alias) {
        super(nombre, alias, "Humano");
    }

    saludar() {
        return this.nombre === "" ? "Mi identidad es desconocida" :`Hola soy ${this.nombre}`;
    }
}

export default HeroeHumano;