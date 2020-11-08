class Personagem {

    constructor() {
        this.vivo = true;
        this.voto = 'pular';
        this.salvo = false;
    }

    pegaPapel(){
        return this.constructor.name;
    }

    votar(jogador) {
        this.voto = jogador;
    }

    morre(){
        this.vivo = false;
    }

    ficaSalvo(){
        this.salvo = true;
    }

}

module.exports = {Personagem};