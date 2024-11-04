class Heroe {
    
    nombre = null;
    #alias = null;
    #tipo = null;
    #habilidades = [];

    constructor(nombre, alias, tipo) {
        this.nombre = nombre;
        this.#alias = alias;
        this.#tipo = tipo;
    }

    agregaHabilidad(habilidad) {
        this.#habilidades = [ ...this.#habilidades, habilidad ];
    }

    getAlias() {
        return this.#alias;
    }
    
    getTipo() {
        return this.#tipo;
    }

    listarHabilidad(posicion) {
        return this.#habilidades[posicion].descripcion;
    }

    saludar() {}
}

export default Heroe;