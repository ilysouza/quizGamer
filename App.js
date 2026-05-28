// useState é uma ferramenta que cria memória
// quando o valor muda, a tela atualiza
// automáticamente
import React, {useState} from "react";

// View -> é como uma caixa que organiza os elementos
// Text -> é o único jeito de mostrar o texto na tela
// TouchableOpacity -> botãoque podemos personalizar
// StyleSheet -> onde criamos os estilos (css sem js)
// Animated -> permite criar animações suaves
// Easing -> controla o ritmo das animações
import {View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

// Banco de perguntas
// uma lista de (array) de objetos
// Cada objeto é uma pergunta com suas opções de respostas
// e a resposta correta
const PERGUNTAS = [
  {
    pergunta: 'Qual empresa criou o React?',
    opcoes: ['Google', 'Meta', 'Microsoft', 'Apple'],
    correta: 'Meta',
    emoji: '⚛️',
  },
  {
    pergunta: 'Qual linguagem o React Native usa?',
    opcoes: ['Python', 'Java', 'JavaScript', 'PHP'],
    correta: 'JavaScript',
    emoji: '💛',
  },
  {
    pergunta: 'Qual hook usamos para criar estado?',
    opcoes: ['useEffect', 'useState', 'useRouter', 'useHtml'],
    correta: 'useState',
    emoji: '🐱‍👤',
  },
  {
    pergunta: 'O que JSX significa?',
    opcoes: ['Java Style Extension', 'JavaScript XML', 'JSON Syntax eXtra', 'Just Some eXample'],
    correta: 'JavaScript XML',
    emoji: '🏷️',
  },
  {
    pergunta: 'Como chamamos as "caixinhas de memória" do React?',
    opcoes: ['Props', 'Hooks', 'Estado (State)', 'Componentes'],
    correta: 'Estado (State)',
    emoji: '🧠',
  },
  {
    pergunta: 'O que é um componente no React?',
    opcoes: ['Um banco de dados', 'Um pedaço reutilizável da tela', 'Um servidor', 'Um arquivo CSS'],
    correta: 'Um pedaço reutilizável da tela',
    emoji: '🧩',
  },
  {
    pergunta: 'Como passamos informações para um componente filho?',
    opcoes: ['useState', 'Props', 'StyleSheet', 'import'],
    correta: 'Props',
    emoji: '📦',
  },
  {
    pergunta: 'Qual hook executa algo quando a tela carrega?',
    opcoes: ['useState', 'useRef', 'useEffect', 'useContext'],
    correta: 'useEffect',
    emoji: '⚡',
  },
  {
    pergunta: 'O que o .map() faz em um array?',
    opcoes: ['Apaga os itens', 'Encontra um item', 'Percorre e transforma cada item', 'Ordena a lista'],
    correta: 'Percorre e transforma cada item',
    emoji: '🔄',
  },
  {
    pergunta: 'No React Native, qual componente usamos para mostrar texto?',
    opcoes: ['Label', 'p', 'Text', 'span'],
    correta: 'Text',
    emoji: '✍️',
  },
];