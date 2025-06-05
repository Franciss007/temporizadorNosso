import React, { useEffect, useState } from "react";

const images = ["/images/foto1.jpg", "/images/foto2.jpg", "/images/foto3.jpg"];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ marginTop: 30 }}>
      <img src={images[index]} alt="momentos" style={{ maxWidth: "90%", borderRadius: 12 }} />
    </div>
  );
};

export default Carousel;
