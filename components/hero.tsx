"use client";

import { useState, useRef } from "react";

const YOUR_NAME = "Vinnie";

export default function Hero() {
  const [accepted, setAccepted] = useState(false);
  const audioRef = useRef(null);

  const handleYes = () => {
    setAccepted(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-linear-gradient from-pink-50 via-white to-pink-50 overflow-hidden">
      {/* Floating Hearts */}
      {[...Array(9)].map((_, i) => (
        <span
          key={i}
          className="heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ❤️
        </span>
      ))}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {!accepted ? (
          <>
            <h1 className="text-5xl md:text-7xl font-extrabold text-pink-500">
              Will You Be My
            </h1>

            <h2 className="text-6xl md:text-8xl font-extrabold text-pink-500 mt-2">
              Valentine? 💖
            </h2>

            <p className="mt-8 text-xl md:text-2xl text-pink-400">
              A simple question, from a very full heart.
            </p>

            <div className="mt-12 flex gap-6 justify-center">
              <button
                onClick={handleYes}
                className="px-12 py-4 text-xl font-semibold bg-rose-400 text-white rounded-full shadow-xl hover:scale-110 transition"
              >
                Yes 💕
              </button>

              <button
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.transform =
                    `translate(${Math.random() * 180 - 90}px, ${
                      Math.random() * 180 - 90
                    }px)`)
                }
                className="px-12 py-4 text-xl font-semibold bg-white text-rose-600 rounded-full shadow-xl transition"
              >
                No 🙈
              </button>
            </div>
          </>
        ) : (
          /* Reveal */
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-extrabold text-rose-600">
              You Said Yes 💘
            </h2>

            <p className="mt-8 text-2xl text-pink-600 leading-relaxed">
              I don’t know what the future holds, but I know I want every version
              of it to include you.
            </p>

            <p className="mt-6 text-xl text-pink-800">
              With love, always —
              <span className="block font-semibold mt-2">
                {YOUR_NAME} ❤️
              </span>
            </p>
          </div>
        )}
      </div>
    </section>
  );
                          }

