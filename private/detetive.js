const {Jogador} = require('./jogador');
const { Personagem } = require('./personagem');

class Detetive extends Personagem {

    constructor(){
        super();
        this.votoParaInvestigar;
    }

    votarParaInvestigar(personagem){
        this.votoParaInvestigar = personagem;
    }

    acao(){
        this.votoParaInvestigar.investigado(); // investiga e retorna o alinhamento do personagem
    }
    
    // investiga(jogador) {
    //     return ( jogador.pegaPapel() === 'Assassino' ) ;
    // }
}

module.exports = {Detetive};