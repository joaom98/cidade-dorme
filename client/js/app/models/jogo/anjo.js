class Anjo extends Personagem {

    constructor(){
        super();
        this.votoParaSalvar;
    }

    votarParaSalvar(personagem){
        this.votoParaSalvar = personagem;
    }


    acao() {
        // seleciona e salva um jogador 
        this.votoParaSalvar.ficaSalvo();
    }

}