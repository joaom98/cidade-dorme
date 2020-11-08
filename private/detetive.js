const {Jogador} = require('./jogador');
const { Personagem } = require('./personagem');

class Detetive extends Personagem {

    investiga(jogador) {
        return ( jogador.pegaPapel() === 'Assassino' ) ;
    }
}

module.exports = {Detetive};