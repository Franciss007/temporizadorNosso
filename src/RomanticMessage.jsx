import React from "react";

const messages = [
  "Você é o começo do meu para sempre.",
  "Cada segundo com você vale mais que mil vidas sem você.",
  "O tempo passa, mas o sentimento só cresce.",
  "Obrigado por dizer sim ao nosso amor.",
  "Hoje começa o melhor capítulo da minha vida: com você."
];

const RomanticMessage = () => {
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  return <p style={{ fontSize: 18, marginTop: 30 }}>{randomMessage}</p>;
};

export default RomanticMessage;
