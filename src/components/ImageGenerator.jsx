import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState(null);

  const generateImage = async () => {
    try {
      const genAI = new GoogleGenerativeAI({
        apiKey: process.env.REACT_APP_GEMINI_API_KEY, // Replace with your environment variable
      });

      const model = genAI.getModel('gemini-pro-vision');

      const response = await model.generateImages(prompt);

      setImage(response.generated_images[0].content_id);
    } catch (error) {
      console.error('Error generating image:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your image prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage}>Generate Image</button>

      {image && (
        <img src={`https://storage.googleapis.com/vertex-ai-generated-images/${image}`} alt="Generated Image" />
      )}
    </div>
  );
}

export default ImageGenerator;