import { useState, useEffect, useCallback } from 'react';
import { quotes } from '../data/quotes';

export default function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  );
  const [fade, setFade] = useState(true);

  const rotateQuote = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % quotes.length);
      setFade(true);
    }, 400);
  }, []);

  useEffect(() => {
    const timer = setInterval(rotateQuote, 12000);
    return () => clearInterval(timer);
  }, [rotateQuote]);

  const quote = quotes[currentIndex];

  return (
    <section
      className="py-10 md:py-14 px-6 md:px-8 lg:px-16 cursor-pointer"
      onClick={rotateQuote}
    >
      <div
        className={`max-w-4xl mx-auto text-center transition-opacity duration-400 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <blockquote className="font-masthead italic text-xl sm:text-2xl md:text-3xl text-ink dark:text-walnut-text leading-relaxed">
          <span className="text-4xl md:text-5xl leading-none text-ink-light/40 dark:text-walnut-line/60 font-masthead select-none">"</span>
          {quote.text}
          <span className="text-4xl md:text-5xl leading-none text-ink-light/40 dark:text-walnut-line/60 font-masthead select-none">"</span>
        </blockquote>
        <p className="mt-4 font-sans-cn text-sm text-ink-light dark:text-walnut-text-secondary tracking-wide">
          — {quote.source}
        </p>
      </div>
    </section>
  );
}
