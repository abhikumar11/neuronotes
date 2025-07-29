import React, { useContext } from "react";
import { store } from "../utils/CardContext";


const QuestionForm = () => {
  const { para, setPara, level, setLevel, fetchData, loading } = useContext(store);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Generate Question Flashcards from Your Topic
      </h2>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Write the Topic Paragraph
          </label>
          <textarea
            rows={6}
            placeholder="Enter topic or content..."
            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={para}
            onChange={(e) => setPara(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Select Question Difficulty Level
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            required
          >
            <option value="">Choose a level</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Expert</option>
          </select>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value={loading ? "Generating..." : "Generate Flashcards"}
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
