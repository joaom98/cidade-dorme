const {papeis} = require('./enum');

class Jogador {


    constructor(nome) {
        this.nome = nome;
        this.vivo = true;
        this.voto = 'pular';
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

    salva(){
        this.salvo = true;
    }

}

module.exports = {Jogador};