import React, { useRef, useEffect, useState } from "react";

import s from "./ContentDisplay.module.css";

const ContentDisplay = ({ images, count }) => {
  const totalAspectRatio = images.reduce((acc, curr) => {
    acc += curr.ratio;
    return acc;
  }, 0);

  const divRef = useRef(null);
  const [divWidth, setDivWidth] = useState(0);

  const [imagesToDisplay, setImagesToDisplay] = useState([]);

  const handleResize = () => {
    if (divRef.current) {
      setDivWidth(divRef.current.offsetWidth);
    }
  };

  useEffect(() => {
    if (divRef) {
      handleResize();
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [divRef.current]);

  useEffect(() => {
    let interval;

    if (imagesToDisplay.length > images.length) {
      setImagesToDisplay([]);
    }

    const timeout = setTimeout(() => {
      if (images.length > imagesToDisplay.length) {
        interval = setInterval(() => {
          setImagesToDisplay([
            ...imagesToDisplay,
            images[imagesToDisplay.length],
          ]);
        }, 200);
      } else {
        clearInterval(interval);
      }
    }, count * 10);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [images, imagesToDisplay]);

  const height = divWidth / totalAspectRatio;

  return (
    <div
      className={s.container}
      ref={divRef}
      style={{ gap: `${3 / (images.length - 1)}em` }}
    >
      {divRef.current &&
        imagesToDisplay.map(({ image, id }) => (
          <img
            key={id}
            className={s.mainImage}
            src={image}
            style={{
              height,
            }}
          />
        ))}
    </div>
  );
};

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  let currentChunk = [];
  let counter = 1;

  if (chunkSize === 3) {
    for (let i = 0; i < array.length; i++) {
      currentChunk.push(array[i]);

      if (counter === chunkSize) {
        counter = 1;
        chunks.push(currentChunk);
        currentChunk = [];
      } else {
        if (i % 5 === 2) {
        } else {
          counter++;
        }
      }
    }

    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      currentChunk.push(array[i]);

      if (counter === chunkSize) {
        counter = 1;
        chunks.push(currentChunk);
        currentChunk = [];
      } else {
        counter++;
      }
    }

    if (currentChunk.length > 0) {
      chunks.push(currentChunk);
    }
  }

  return chunks;
};

const ContentDisplayContainer = ({ images }) => {
  const [chunkSize, setChunkSize] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getChunkSize = () => {
    if (screenWidth <= 800) {
      setChunkSize(1);
    } else if (800 < screenWidth && screenWidth <= 1400) {
      setChunkSize(3);
    } else if (screenWidth >= 1400) {
      setChunkSize(4);
    }
  };

  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getChunkSize();
  }, [screenWidth]);

  const chunkedImages = chunkArray(images, chunkSize);

  return chunkedImages.map((chunk, index) => (
    <ContentDisplay key={chunk[0].id} images={chunk} count={index} />
  ));
};

export default ContentDisplayContainer;
