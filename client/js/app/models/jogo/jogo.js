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


        this.embaralhaJogadores();

    }

    adicionaJogador(nome) {
        this.jogadores.push(new Jogador(nome));
    }

    executaAcoes(){

        this.jogadores.forEach(jogador => {
            jogador.personagem.acao();
        });

        if ( this.maisVotadoParaMorrer().salvo === false){
            this.maisVotadoParaMorrer().morre();
        }

    }

    votacao(){

        this.jogadores.forEach(jogador => {
            jogador.personagem.zeraVotos();
        });

        this.jogadores.forEach(jogador => {
             if ( jogador.personagem.voto.constructor.name === 'Jogador') {
                jogador.personagem.voto.personagem.recebeVotos();
            }
        });

        this.maisVotado().morre();

    }

    maisVotado(){
        
        let maisVotado = this.jogadores[0].personagem;

        for (let i = 0 , votos = 0 ; i < this.qtdJogadores ; i++ ){
            if ( this.jogadores[i].personagem.votos >= votos ) {
                votos = this.jogadores[i].personagem.votos;
                maisVotado = this.jogadores[i].personagem;
            }
        }

        return maisVotado;
    }

    maisVotadoParaMorrer(){
        let maisVotado = this.jogadores[0].personagem;

        for (let i = 0 , marcacoes = 0 ; i < this.qtdJogadores ; i++ ){
            if ( this.jogadores[i].personagem.marcacoes >= marcacoes ) {
                marcacoes = this.jogadores[i].personagem.marcacoes;
                maisVotado = this.jogadores[i].personagem;
            }
        }

        return maisVotado;
    }

    removeSalvos(){
        this.jogadores.forEach( (jogador) => {
            jogador.salvo = false;
        })
    }

    passaTurno(){
        this.removeSalvos();
        this.votacao();

        this.executaAcoes();
    }

    embaralhaJogadores() {
        for (let i = this.qtdJogadores - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.jogadores[i], this.jogadores[j]] = [this.jogadores[j], this.jogadores[i]];
        }
    }

}