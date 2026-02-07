"use client";

import { useState } from "react";

const YOUR_NAME = "Vinnie";

export default function Hero() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-rose-200 to-pink-300">
      {/* Floating Hearts */}
      {[...Array(14)].map((_, i) => (
        <span
          key={i}
          className="absolute text-2xl animate-float select-none"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-10%`,
            opacity: 0.4 + Math.random() * 0.6,
            filter: Math.random() > 0.7 ? "blur(1px)" : "none",
            animationDuration: `${8 + Math.random() * 8}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          💕
        </span>
      ))}

      {/* Glass Card */}
      <div className="relative z-10 max-w-4xl text-center px-10 py-14 rounded-3xl bg-white/60 backdrop-blur-xl shadow-2xl animate-fade-in">
        {!accepted ? (
          <>
            <h1 className="font-display text-5xl md:text-7xl font-extrabold text-rose-600 drop-shadow-sm">
              Will You Be My
            </h1>

            <h2 className="font-display text-6xl md:text-8xl font-extrabold text-pink-500 mt-2">
              Valentine? 💖
            </h2>

            <p className="font-body mt-8 text-xl md:text-2xl text-rose-500">
              A simple question, from a very full heart.
            </p>

            <div className="mt-12 flex gap-8 justify-center">
              <button
                onClick={() => setAccepted(true)}
                className="px-14 py-4 text-xl font-semibold text-white rounded-full
                bg-gradient-to-r from-rose-400 to-pink-500
                shadow-xl hover:scale-110 hover:shadow-pink-400/60 transition-all animate-pulse-slow"
              >
                Yes 💕
              </button>

              <button
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.transform =
                    `translate(${Math.random() * 180 - 90}px, ${Math.random() * 180 - 90}px)`)
                }
                className="px-12 py-4 text-lg font-semibold bg-white text-rose-500 rounded-full shadow-lg transition"
              >
                No 🙈
              </button>
            </div>
          </>
        ) : (
          <div className="animate-scale-in">
            <h2 className="font-display text-6xl md:text-8xl font-extrabold text-rose-600">
              You Said Yes 💘
            </h2>

            <p className="font-body mt-8 text-2xl text-pink-600 leading-relaxed">
              I don’t know what the future holds,
              <br />
              but I know I want every version of it to include you.
            </p>

            <p className="mt-8 text-xl text-pink-800">
              With love, always —
              <span className="block mt-4 font-script text-4xl text-rose-600">
                {YOUR_NAME} ❤️
              </span>
            </p>
          </div>
        )}
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(-130vh) rotate(360deg);
          }
        }

        .animate-float {
          animation: float linear infinite;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out both;
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scaleIn 1s ease-out both;
        }

        @keyframes pulseSlow {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
      }
      
