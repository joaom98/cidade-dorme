class Personagem {

    constructor() {
        this.vivo = true; // Estado atual do personagem
        this.voto; // Em quem elx votou
        this.salvo = false; // Se está salvo pelo anjo
        this.votos = 0; // Quantos votos recebeu
        this.marcacoes = 0; // Quantos votos de assassino elx recebeu
        this.vivo = true;
        this.foiInvestigado = false;
    }

    votar(personagem) {
        this.voto = personagem;
    }
    
    recebeVotos(){
        this.votos++;
    }

    zeraVotos(){
        this.votos = 0;
    }

    pegaPapel(){
        return this.constructor.name;
    }

    morre(){
        this.vivo = false;
    }

    ficaSalvo(){
        this.salvo = true;
    }

    acao(jogador) {
        // esse metodo precisa ser sobrescrito
    }

    marcadoParaMorrer(){
        this.marcacoes++;
    }

    investigado(){
        this.foiInvestigado = true;
    }

}

module.exports = {Personagem};