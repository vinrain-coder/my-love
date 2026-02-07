const YOUR_NAME = "Your Name Here";

export default function LoveNoteSection() {
  return (
    <section className="py-28 bg-pink-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-rose-600">
          A Little Love Note 💌
        </h3>

        <p className="mt-8 text-lg md:text-xl text-rose-500 max-w-3xl mx-auto">
          This page exists for one reason — to remind you how special you are to me.
          Every smile, every moment, every memory means more than words can say.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-14">
          {[
            { emoji: "💗", title: "Your Smile", text: "The reason my bad days disappear." },
            { emoji: "✨", title: "Your Presence", text: "Where I feel calm and complete." },
            { emoji: "🌹", title: "Our Story", text: "My favorite one to tell." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-12 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition"
            >
              <div className="text-6xl mb-4">{item.emoji}</div>
              <h4 className="text-2xl font-semibold text-rose-600">
                {item.title}
              </h4>
              <p className="mt-4 text-rose-500">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-20 text-rose-400 italic">
          Made with love, by {YOUR_NAME} ❤️
        </p>
      </div>
    </section>
  );
      }
          
