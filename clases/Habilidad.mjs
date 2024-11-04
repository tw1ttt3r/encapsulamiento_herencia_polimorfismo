class Habilidad {

    #status = true;

    constructor(descripcion) {
        this.descripcion = descripcion;
    }

    getStatus() {
        return this.#status;
    }

}

export default Habilidad;