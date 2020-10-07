const {Jogador} = require('./jogador');

class Detetive extends Jogador {

    investiga(jogador) {
        return ( jogador.pegaPapel() === 'Assassino' ) ;
    }
}

module.exports = {Detetive};