import React, { useEffect, useState } from "react";

const Timer = () => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    // Data fixa: 7 de junho de 2025 às 19h (hora local)
    const start = new Date(2025, 5, 7, 19, 0, 0); 
    const interval = setInterval(() => {
      const now = new Date();
      let diff = now - start;

      if (diff < 0) {
        setDuration("Ainda não começamos 💞");
        return;
      }

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const daysTotal = Math.floor(diff / (1000 * 60 * 60 * 24));

      const years = Math.floor(daysTotal / 365);
      const months = Math.floor((daysTotal % 365) / 30); // aproximação
      const days = (daysTotal % 365) % 30;

      setDuration(
        `${years} anos, ${months} meses, ${days} dias, ${hours}h ${minutes}min ${seconds}s`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 style={{ marginTop: 30 }}>
      Estamos juntos há: {duration}
    </h2>
  );
};

export default Timer;
