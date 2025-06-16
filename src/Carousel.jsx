import React, { useEffect, useState } from "react";

const totalImages = 4;
const images = Array.from({ length: totalImages }, (_, i) => `/images/foto${i + 1}.jpg`);

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <img src={images[index]} alt="momentos" style={{ maxWidth: "30%", borderRadius: 20 }} />
    </div>
  );
};

export default Carousel;
