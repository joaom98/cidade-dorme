const {papeis} = require('./enum');

class Jogador {


    constructor(nome) {
        this.nome = nome;
        this.personagem;
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

    acao() {
        this.personagem.acao();
    }

}

module.exports = {Jogador};