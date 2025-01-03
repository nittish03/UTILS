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
    <div className="w-full h-[88vh] flex flex-col justify-center items-center content-center">

    <div>
      <input
      className='border-2 p-1 rounded-md border-green-950 m-2'
        type="text"
        placeholder="Enter your image prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button className='bg-yellow-400 p-1 rounded-md' onClick={generateImage}>Generate Image</button>

      {image && (
        <img src={`https://storage.googleapis.com/vertex-ai-generated-images/${image}`} alt="Generated Image" />
      )}
    </div>
    </div>
  );
}

export default ImageGenerator;