const { Assassino } = require('./assassino');
const { Inocente } = require('./inocente');
const { Anjo } = require('./anjo');
const { Detetive } = require('./detetive');


class Jogo {
    constructor() {
        this.jogadores = [];
        this.qtdJogadores = 0;


        this.qtdAssassinos = 1;
        this.qtdDetetives = 1;
        this.qtdAnjos = 1;
        this.qtdInocentes; 

        
        this.turno;
        this.duracaoRodada = 180000; // milisegundos

        this.detetive;
        this.anjo;
        this.assasinos;

    }

    iniciaJogo() {

        this.qtdJogadores = this.jogadores.length;
        this.qtdAssassinos = Math.floor(Math.sqrt(this.qtdJogadores));
        
        this.qtdInocentes = this.qtdJogadores - (this.qtdAnjos + this.qtdAssassinos + this.qtdDetetives);

        let assassinosDisponiveis = this.qtdAssassinos;
        let inocentesDisponiveis = this.qtdInocentes;
        let detetivesDisponiveis = this.qtdDetetives;
        let anjosDisponiveis = this.qtdAnjos;

        this.jogadores.forEach(jogador => {            

            if ( assassinosDisponiveis > 0 ){
                jogador.personagem = new Assassino();
                assassinosDisponiveis--;
            }

            else if ( anjosDisponiveis > 0 ){
                jogador.personagem = new Anjo();
                anjosDisponiveis--;
            }

            else if ( detetivesDisponiveis > 0 ){
                jogador.personagem = new Detetive();
                detetivesDisponiveis--;
            }

            else if ( inocentesDisponiveis > 0 ){
                jogador.personagem = new Inocente();
                inocentesDisponiveis--;
            }

        });


        //this.embaralhaJogadores();

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