const {Jogador} = require('./jogador');
const { Personagem } = require('./personagem');

class Anjo extends Personagem {

    votacaoAnjo(jogador) {
        jogador.salva(); 
    }

}

module.exports = {Anjo};