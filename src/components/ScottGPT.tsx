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
      const prompt = input;
      const { choices } = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        max_tokens: 150,
      });

      const generatedText = choices[0]?.message?.content || "No response from the assistant.";
      setOutput(generatedText);
    } catch (error) {
      console.error("Error calling ChatGPT API:", error);
      setOutput("Error calling ChatGPT API.");
    }
  };

  return (
    <div>
      <label htmlFor="gpt">Ask about Scott:</label>
      <input id="gpt" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleSubmit}>
        Submit
      </button>
      <div>
        <strong>Generated Output:</strong>
        <p>{output}</p>
      </div>
    </div>
  );
}
