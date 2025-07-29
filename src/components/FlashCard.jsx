import React, { useContext } from 'react';
import { store } from '../utils/CardContext';


const FlashCard = () => {
  const { data, loading } = useContext(store);

  return (
    <div className="max-w-5xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Your Question Flashcards
      </h2>

      {loading ? (
        <p className="text-center text-blue-500 font-semibold">Generating flashcards...</p>
      ) : data.length === 0 ? (
        <p className="text-center text-gray-500">No flashcards generated yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((card, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-blue-600 mb-2">
                Q{index + 1}: {card.question}
              </h3>
              <p className="text-gray-700 mt-2">
                <span className="font-medium text-green-600">A:</span> {card.answer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FlashCard;
