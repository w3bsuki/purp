"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const typingSpeed = 100; // Speed for typing
    const deletingSpeed = 50; // Speed for deleting
    const pauseDuration = 2000; // Pause between words

    const type = async () => {
      if (!isDeleting) {
        if (currentCharIndex < words[currentWordIndex].text.length) {
          setCurrentCharIndex((prev) => prev + 1);
          await controls.start({
            opacity: 1,
            transition: { duration: 0.1 },
          });
        } else {
          await new Promise((resolve) => setTimeout(resolve, pauseDuration));
          setIsDeleting(true);
        }
      } else {
        if (currentCharIndex > 0) {
          setCurrentCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentWordIndex, isDeleting, words, controls]);

  return (
    <div className={cn("flex gap-1 sm:gap-2", className)}>
      {words.map((word, idx) => {
        const isCurrentWord = idx === currentWordIndex;
        const shouldDisplay = isCurrentWord;
        const text = shouldDisplay
          ? word.text.substring(0, currentCharIndex)
          : "";

        return (
          <motion.div
            key={word.text}
            className={cn(
              "relative",
              shouldDisplay ? "visible" : "invisible",
              word.className
            )}
            initial={{ opacity: 0 }}
            animate={shouldDisplay ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              {text}
            </motion.span>
            {isCurrentWord && (
              <motion.span
                className={cn(
                  "ml-1 inline-block h-full w-[2px]",
                  cursorClassName || "bg-white"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside of words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""),
    };
  });
  const renderWords = () => {
    return (
      <div>
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`dark:text-white text-black `, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {renderWords()}{" "}
        </div>{" "}
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px]  h-4 sm:h-6 xl:h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
}; 