import { createContext, useState } from "react";
import OpenAI from "openai";
export const store=createContext();

export const CardProvider=({children})=>{
    const [para,setPara]=useState("");
    const [level,setLevel]=useState("Beginner");
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);

    const fetchData=async()=>{
        if(!para)return;
        setLoading(true);

             try {
        const openai = new OpenAI({
      apiKey: "key",
      dangerouslyAllowBrowser: true,
    });
   
    
        const prompt = `Generate 5 flashcards (question and answer) for the following topic in ${level} level:\n\n${para}\n\nFormat:\n1. Q: ...\n   A: ...`;
            const res = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      });
      const responseText = res.data.choices[0].message.content;

      
      const parsed = responseText.split(/\d+\.\sQ:/).slice(1).map(item => {
        const [qPart, aPart] = item.split("A:");
        return {
          question: qPart.trim(),
          answer: aPart.trim(),
        };
      });
       setData(parsed);

        } catch (err) {
        console.error("OpenAI error:", err);
      alert("Failed to generate flashcards.");
    } finally {
      setLoading(false);
    }
    }

    return(
        <store.Provider value={{
        para,
        setPara,
        level,
        setLevel,
        data,
        loading,
        fetchData,}}>
            {children}
        </store.Provider>
    )
}