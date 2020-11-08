const {Jogo} = require('./jogo');
const {Jogador} = require('./jogador')
const {Assassino} = require('./assassino')
const {Detetive} = require('./detetive')
const {Anjo} = require('./anjo')


const jogo = new Jogo();

const jogador0 = new Jogador("0"); 
const jogador1 = new Jogador("1");
const jogador2 = new Jogador("2");
const jogador3 = new Jogador("3");
const jogador4 = new Jogador("4");
const jogador5 = new Jogador("5");
const jogador6 = new Jogador("6");
const jogador7 = new Jogador("7");
const jogador8 = new Jogador("8");
const jogador9 = new Jogador("9");
const jogador10 = new Jogador("10");

jogo.adicionaJogadores(jogador0);
jogo.adicionaJogadores(jogador1);
jogo.adicionaJogadores(jogador2);
jogo.adicionaJogadores(jogador3);
jogo.adicionaJogadores(jogador4);
jogo.adicionaJogadores(jogador5);
jogo.adicionaJogadores(jogador6);
jogo.adicionaJogadores(jogador7);
jogo.adicionaJogadores(jogador8);
jogo.adicionaJogadores(jogador9);
jogo.adicionaJogadores(jogador10);

jogo.iniciaJogo();

jogo.jogadores.forEach(jogador => {
    jogador.personagem.votar(jogador2);
});

jogo.jogadores[1].personagem.voto = jogador3;
jogo.jogadores[6].personagem.voto = "pular";


jogo.jogadores[0].personagem.votarParaMatar(jogador4.personagem);
jogo.jogadores[1].personagem.votarParaMatar(jogador4.personagem);
jogo.jogadores[2].personagem.votarParaMatar(jogador4.personagem);

jogo.jogadores[3].personagem.votarParaSalvar(jogador4.personagem);

jogo.jogadores[4].personagem.votarParaInvestigar(jogador3.personagem);

console.log(jogo.jogadores);

jogo.passaTurno();

console.log(`



Após passar turno: 



`);

console.log(jogo.jogadores);