class Personagem {

    constructor() {
        this.vivo = true; // Estado atual do personagem
        this.voto; // Em quem elx votou
        this.salvo = false; // Se está salvo pelo anjo
        this.votos = 0; // Quantos votos recebeu
        this.marcacoes = 0; // Quantos votos de assassino elx recebeu

        this.foiInvestigado = false;
        this.alinhamento = 'bom';
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

    morre(){
        this.vivo = false;
    }

    ficaSalvo(){
        this.salvo = true;
    }

    acao(personagem) {
        // esse metodo precisa ser sobrescrito
        throw Error("Não é pra instanciar um personagem direto!");
    }

    marcadoParaMorrer(){
        this.marcacoes++;
    }

    investigado(){
        this.foiInvestigado = true;
    }

}