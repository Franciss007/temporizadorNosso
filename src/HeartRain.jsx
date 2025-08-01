import React, { useEffect, useState } from "react";
import "./rain.css";

const Heart = ({ left, delay }) => {
  const style = {
    left: `${left}%`,
    animationDelay: `${delay}s`,
  };
  return <div className="heart" style={style}></div>;
};

const HeartRain = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const left = Math.random() * 100;
      const delay = Math.random() * 1;

      // Adiciona o novo coração
      setHearts((prev) => [...prev, { id, left, delay }]);

      // Remove o coração após 5 segundos
      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== id));
      }, 5000);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heart-rain">
      {hearts.map((heart) => (
        <Heart key={heart.id} left={heart.left} delay={heart.delay} />
      ))}
    </div>
  );
};

export default HeartRain;
