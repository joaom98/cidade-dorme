const {papeis} = require('./enum');

class Jogo {
    constructor() {
        this.jogadores = [];
        this.qtdJogadores = 0;
        this.qtdAssassinos = 1;
        this.turno;
        this.duracaoRodada = 180000; // milisegundos

        this.detetive;
        this.anjo;
        this.assasinos;

    }

    iniciaJogo() {

        this.embaralhaJogadores();

        this.qtdJogadores = this.jogadores.length;

        if (this.qtdJogadores < 5 ) {
            return 3;
        }

        this.qtdAssassinos = Math.floor(Math.sqrt(this.qtdJogadores));

        let assasinosDisponiveis = this.qtdAssassinos;

        this.jogadores.forEach(jogador => {            

            if ( assasinosDisponiveis > 0 ){
                jogador.papel = papeis.ASSASSINO;
                assasinosDisponiveis--;
            }
        });

        this.jogadores[this.qtdAssassinos].papel = papeis.DETETIVE;
        this.jogadores[this.qtdAssassinos+1].papel = papeis.ANJO;

        this.embaralhaJogadores();
        this.embaralhaJogadores();

    }

    adicionaJogadores(jogador) {
        this.jogadores.push(jogador);
    }

    fazAcoes(){
        this.votacaoAssasinos();
        this.votacaoAnjo();
        this.votacaoDetetive();

    }

    removeSalvo(){

    }

    passaTurno(){
        removeSalvo();
        this.votacaoCidade();
    }

    escolheJogador(jogador){

    }

    mataJogador(jogador){
        jogador.vivo = false;
    }

    embaralhaJogadores() {
        for (let i = this.qtdJogadores - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.jogadores[i], this.jogadores[j]] = [this.jogadores[j], this.jogadores[i]];
        }
    }

}

module.exports = {Jogo};