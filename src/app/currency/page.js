"use client";

import { useState } from "react";
import { convertCurrency } from "../lib/currency";

export default function CurrencyConverter() {
  const [have, setHave] = useState("");
  const [want, setWant] = useState("");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await convertCurrency(have, want, amount);
      console.log("API Data:", data); // Debugging line
      setResult(`Converted Amount: ${data.new_amount} ${data.new_currency}`);
      setError(null);
    } catch (error) {
      console.error("API Error:", error); // Debugging line
      setResult(null);
      setError("Error fetching data. Please check the currencies and amount.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-black">
          Currency Converter
        </h1>
        <p className="text-lg mb-6 text-center text-gray-700">
          Convert an amount from one currency to another. Enter the currency
          codes and amount below.
        </p>
        <form
          className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="have"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              From Currency (have):
            </label>
            <input
              id="have"
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={have}
              onChange={(e) => setHave(e.target.value)}
              placeholder="e.g., AUD"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="want"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              To Currency (want):
            </label>
            <input
              id="want"
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              value={want}
              onChange={(e) => setWant(e.target.value)}
              placeholder="e.g., GBP"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              Amount:
            </label>
            <input
              id="amount"
              className="w-full p-3 border border-gray-300 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g., 100"
              required
            />
          </div>
          <button
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="submit"
          >
            Convert
          </button>
          {result && (
            <p className="mt-6 text-center text-lg text-green-600 font-bold">
              {result}
            </p>
          )}
          {error && (
            <p className="mt-6 text-center text-lg text-red-600 font-bold">
              {error}
            </p>
          )}
        </form>
      </main>
    </div>
  );
}
