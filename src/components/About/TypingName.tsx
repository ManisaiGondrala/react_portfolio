import React, { useEffect, useState } from 'react';

export default function TypingName() {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Mani Sai Gondrala';
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullName.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullName.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setIsTyping(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isTyping]);

  return (
    <span className="text-blue-600 dark:text-blue-400 relative">
      {displayText}
      <span className={`absolute -right-1 top-0 border-r-2 border-blue-600 dark:border-blue-400 h-full ${isTyping ? 'animate-blink' : 'opacity-0'}`} />
    </span>
  );
}