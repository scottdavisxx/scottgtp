import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  organization: "org-vwkn0WTV6ysfdlgUPvEhn2i1",
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});


export default function ScottGPT() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");


  const handleSubmit = async () => {
    try {
      const prompt = input; // You might want to customize this based on your use case
      const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Specify the engine you want to use
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
      });

      const generatedText = choices[0]?.text || "";
      setOutput(generatedText);
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
    }
  };

  return (
    <div className="relative h-[400px] top-12 flex justify-center items-center bg-prim">
      <div className="flex flex-col items-center gap-y-8">
        <label htmlFor="gpt" className="text-6xl text-comp">
          Ask about Scott
        </label>
        <input
          id="gpt"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="button"
          className="w-fit mb-5 bg-comp-light text-2xl rounded-lg px-3 py-1"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <div>
          <strong>Generated Output:</strong>
          <p>{output}</p>
        </div>
        {output && (
          <div>
            <strong>Assistant's Response:</strong>
            <p>{JSON.parse(output)?.choices[0]?.message?.content}</p>
          </div>
        )}
      </div>
    </div>
  );
}
