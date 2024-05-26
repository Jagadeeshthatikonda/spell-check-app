import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () => {
  const [inputText, setInputText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    if (text.trim() === "") {
      setSuggestedText("");
      return;
    }

    const words = text.split(" ");
    let correctionFound = false;

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (customDictionary[word]) {
        const correctedWord = customDictionary[word];
        setSuggestedText(`Did you mean: ${correctedWord}?`);
        correctionFound = true;
        break;
      }
    }

    if (!correctionFound) {
      setSuggestedText("");
    }
  };

  return (
    <div>
      <h1>Spell Check and Auto-Correction</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      {suggestedText && (
        <p>{suggestedText}</p>
      )}
    </div>
  );
};

export default SpellCheckApp;
