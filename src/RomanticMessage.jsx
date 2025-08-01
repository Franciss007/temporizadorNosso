import React, { useEffect, useState } from "react";

const messages = [
  "Você é o começo do meu para sempre.",
  "Cada segundo com você vale mais que mil vidas sem você.",
  "O tempo passa, mas o sentimento só cresce.",
  "Obrigado por dizer sim ao nosso amor.",
  "Dia 07 começou o melhor capítulo da nossa vida",
  "Você é o sonho, que minha sempre falou para eu ir atrás",
  "Se DaVinci suspeitasse que um dia você nasceria, ele nem tentaria fazer a monalisa, pois a obra mais linda já seria você",
  "As vezes me pego ti olhando, sem palavras, apenas apreciando tamanha paisagem",
  "Eu quero ti amar, por todas as estações",
  "Você é o maior motivo de muitos orgulhos meus, seu sucesso é a minha felicidade",
  "Seu sorriso é meu lugar favorito no mundo inteiro.",
  "Você transforma meus dias comuns em momentos inesquecíveis.",
  "Tudo em você é poesia, até o silêncio tem melodia.",
  "Você é a razão pela qual meu coração sorri sem motivo.",
  "Amar você é meu destino favorito.",
  "Com você, eu aprendi o que é amar sem medidas.",
  "Nos seus olhos, encontrei minha casa.",
  "Se eu pudesse escolher de novo, escolheria você, mil vezes.",
  "Te amar é a parte mais bonita da minha rotina.",
  "Você é minha melhor história, meu verso mais bonito.",
  "Quando estou com você, todo o resto perde a importância.",
  "Você é aquela paz que o mundo não consegue dar.",
  "Nada se compara à leveza que sinto quando te abraço.",
  "Minha vida ganhou cor desde que você entrou nela.",
  "Você é a resposta de todas as minhas orações."
];


const RomanticMessage = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const fullText = messages[currentMessageIndex];
    let i = 0;

    const type = () => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
        setTimeout(type, 100);
      }
    };

    type();

    return () => {}; // não precisa limpar timeout porque usamos setTimeout recursivo
  }, [currentMessageIndex]);

  useEffect(() => {
    const changeInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 8000); // 8 segundos

    return () => clearInterval(changeInterval);
  }, []);

  return (
    <p
      style={{
        fontSize: 22,
        marginTop: 30,
        color: "#fff",
        fontStyle: "italic",
        textAlign: "center",
        minHeight: 40 // evita "pular" quando limpa
      }}
    >
      {displayText}
    </p>
  );
};

export default RomanticMessage;
