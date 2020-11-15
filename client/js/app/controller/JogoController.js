class JogoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._nome = $('#nome');
        this._jogo = new Jogo();
        
        //cria nova view
        //chama update na view
        // ????
        // repete
        


        

    }
    
    teste(){
        this._jogo.jogadores.forEach(jogador => {
            jogador.personagem.votar(this._jogo.jogadores[2].personagem);
        });
        
        this._jogo.jogadores[1].personagem.voto = this._jogo.jogadores[3].personagem;
        this._jogo.jogadores[6].personagem.voto = "pular";
        
        
        this._jogo.jogadores[0].personagem.votarParaMatar(this._jogo.jogadores[3].personagem);
        this._jogo.jogadores[1].personagem.votarParaMatar(this._jogo.jogadores[3].personagem);
        this._jogo.jogadores[2].personagem.votarParaMatar(this._jogo.jogadores[3].personagem);
        
        this._jogo.jogadores[3].personagem.votarParaSalvar(this._jogo.jogadores[3].personagem);
        
        this._jogo.jogadores[4].personagem.votarParaInvestigar(this._jogo.jogadores[3].personagem);
        
        console.log(this._jogo.jogadores);
        
        this._jogo.passaTurno();
        
        console.log(`
        
        
        Após passar turno: 
        
        
        `);
        
        console.log(this._jogo.jogadores);
    }

    criaJogador(event) {
        event.preventDefault();
        this._jogo.adicionaJogador(this._nome.value);
        console.log(this._jogo);
    }

    iniciaJogo(event) {
        event.preventDefault();
        this._jogo.iniciaJogo();
        console.log(this._jogo);
    }

}