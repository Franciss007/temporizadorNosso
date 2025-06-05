import React, { useEffect, useState } from "react";
import RomanticMessage from "./RomanticMessage";
import Timer from "./Timer";
import Carousel from "./Carousel";
import { saveStartDate, getStartDate, getStartDateFromURL } from "./storage";


const App = () => {
  const [started, setStarted] = useState(false);
  const [startDate, setStartDate] = useState(null);

  useEffect(() => {
    const saved = getStartDate();
    if (saved) {
      setStartDate(saved);
      setStarted(true);
    } else {
      const fromURL = getStartDateFromURL();
      if (fromURL) {
        setStartDate(fromURL);
        setStarted(true);
        saveStartDate(fromURL);
      }
    }
  }, []);

  const handleStart = () => {
    const date = new Date(); // pega a data e hora do momento do clique
    saveStartDate(date);
    setStartDate(date);
    setStarted(true);
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: 20 }}>
      <h1>Nosso Tempo Juntos 💖</h1>
      {!started ? (
        <>
          <RomanticMessage />
          <button onClick={handleStart} style={{ marginTop: 20, padding: 10, fontSize: 18 }}>
            Começar nossa história
          </button>
        </>
      ) : (
        <>
          <Timer startDate={startDate} />
          <p style={{ marginTop: 20 }}>
            Link de backup:{" "}
            <a href={`?start=${startDate.toISOString().split("T")[0]}`}>
              ?start={startDate.toISOString().split("T")[0]}
            </a>
          </p>
          <Carousel />
        </>
      )}
    </div>
  );
};

export default App;
