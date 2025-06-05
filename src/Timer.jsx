import React, { useEffect, useState } from "react";

const Timer = ({ startDate }) => {
  const [duration, setDuration] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - new Date(startDate);
      const seconds = Math.floor(diff / 1000);

      const y = Math.floor(seconds / (365.25 * 24 * 60 * 60));
      const m = Math.floor((seconds % (365.25 * 24 * 60 * 60)) / (30.44 * 24 * 60 * 60));
      const d = Math.floor((seconds % (30.44 * 24 * 60 * 60)) / (24 * 60 * 60));
      const h = Math.floor((seconds % (24 * 60 * 60)) / 3600);
      const min = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;

      setDuration(`${y} anos, ${m} meses, ${d} dias, ${h}h ${min}min ${s}s`);
    }, 1000);
    return () => clearInterval(interval);
  }, [startDate]);

  return <h2 style={{ marginTop: 30 }}>Estamos juntos há: {duration}</h2>;
};

export default Timer;
