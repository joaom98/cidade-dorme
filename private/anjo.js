const {Jogador} = require('./jogador');
const { Personagem } = require('./personagem');

class Anjo extends Personagem {

    constructor(){
        super();
        this.votoParaSalvar;
    }

    votarParaSalvar(personagem){
        this.votoParaSalvar = personagem;
    }


    acao() {
        // seleciona e salva um jogador 
        this.votoParaSalvar.ficaSalvo();
    }

}

module.exports = {Anjo};