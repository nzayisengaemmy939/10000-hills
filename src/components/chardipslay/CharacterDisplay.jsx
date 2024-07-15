import React, { useState, useEffect } from 'react';

const sentences = [
  "1000 Hills Solicitors",
  "Building bridges to justice",
];

const CharacterSlideshow = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= sentences[currentSentenceIndex].length) {
        setDisplayedText(sentences[currentSentenceIndex].substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        }, 3000); // Delay before switching to the next sentence
      }
    }, 90); // Typing speed (adjust as needed)

    return () => clearInterval(typingInterval); // Clean up interval on component unmount
  }, [currentSentenceIndex]);

  return (
    <div className="character-slideshow" >
      <h1>{displayedText}</h1>
    </div>
  );
};

export default CharacterSlideshow;
