const { Jogador } = require('./jogador');
const { Personagem } = require('./personagem');

class Assassino extends Personagem {

    constructor(){
        super();
        this.votoParaMatar;
    }

    votarParaMatar(personagem){
        this.votoParaMatar = personagem;
    }

    acao() {
        this.votoParaMatar.marcadoParaMorrer();
    }
}

module.exports = { Assassino };