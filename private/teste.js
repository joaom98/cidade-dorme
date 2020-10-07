const {Jogo} = require('./jogo');
const {Jogador} = require('./jogador')
const {Assassino} = require('./assassino')
const {Detetive} = require('./detetive')
const {Anjo} = require('./anjo')


const jogo = new Jogo();

const jogador1 = new Jogador("1");
const jogador2 = new Jogador("2");
const jogador3 = new Jogador("3");
const jogador4 = new Jogador("4");
const jogador5 = new Jogador("5");
const jogador6 = new Jogador("6");
const jogador7 = new Jogador("7");
const jogador8 = new Jogador("8");
const detetive = new Detetive("detetive");
const assassino = new Assassino("Assassino");

jogo.adicionaJogadores(jogador1);
jogo.adicionaJogadores(jogador2);
jogo.adicionaJogadores(jogador3);
jogo.adicionaJogadores(jogador4);
jogo.adicionaJogadores(jogador5);
jogo.adicionaJogadores(jogador6);
jogo.adicionaJogadores(jogador7);
jogo.adicionaJogadores(jogador8);
jogo.adicionaJogadores(detetive);


jogo.iniciaJogo();


console.log(jogo.jogadores);

console.log(detetive.investiga(assassino));