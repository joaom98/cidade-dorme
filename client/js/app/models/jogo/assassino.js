class Assassino extends Personagem {

    constructor(){
        super();
        this.votoParaMatar;
        this.alinhamento = 'mau'
    }

    votarParaMatar(personagem){
        this.votoParaMatar = personagem;
    }

    acao() {
        this.votoParaMatar.marcadoParaMorrer();
    }
}