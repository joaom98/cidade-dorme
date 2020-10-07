const {Jogador} = require('./jogador');

class Anjo extends Jogador {

    votacaoAnjo(jogador) {
        jogador.salva(); 
    }

}

module.exports = {Anjo};