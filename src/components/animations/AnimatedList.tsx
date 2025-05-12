"use client";
import React, {
  useRef,
  useState,
  useEffect,
  MouseEventHandler,
  UIEvent,
  useLayoutEffect,
} from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

interface AnimatedItemProps {
  delay?: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  ans?: string;
  qn?: string;
}

const AnimatedItem: React.FC<AnimatedItemProps> = ({
  delay = 0,
  ans,
  qn,
  onMouseEnter,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState(0);

  const inView = useInView(cardRef, { amount: 0.5, once: false });

  const handleClick = () => setIsOpen((prev) => !prev);

  // Dynamically measure maxHeight when the content is open
  useLayoutEffect(() => {
    if (isOpen && answerRef.current) {
      setMaxHeight(answerRef.current.scrollHeight);
    } else {
      setMaxHeight(0); // Reset when closed
    }
  }, [isOpen, ans]); // also recalculate on ans change

  return (
    <motion.div
      ref={cardRef}
      onClick={handleClick}
      initial={{ scale: 0.7, opacity: 0 }}
      animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
      transition={{ duration: 0.2, delay }}
      onMouseEnter={onMouseEnter}
      className="mb-4 cursor-pointer bg-[#FAF9F6] rounded-xl"
      style={{ overflow: "hidden" }}
    >
      {/* Question */}
      <div className="flex items-center justify-between pr-8 bg-[#FAF9F6] rounded-xl">
        <div className="px-8 py-6 text-black text-xl font-medium">{qn}</div>
        {/* Arrow */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 32 32"
          initial={false}
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
          className="origin-center fill-black"
        >
          <path d="m26.707 12.707-10 10a1 1 0 0 1-1.415 0l-10-10a1 1 0 1 1 1.416-1.415L16 20.586l9.293-9.294a.999.999 0 0 1 1.631.325 1 1 0 0 1-.216 1.09Z" />
        </motion.svg>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{
              maxHeight,
              opacity: 1,
            }}
            exit={{
              maxHeight: 0,
              opacity: 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
            className="px-8 text-black text-lg"
          >
            <div className="pb-4" ref={answerRef}>
              {ans}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
type FAQ = {
  question: string;
  answer: string;
};
interface AnimatedListProps {
  items?: FAQ[];
  onItemSelect?: (item: string, index: number) => void;
  showGradients?: boolean;
  enableArrowNavigation?: boolean;
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  initialSelectedIndex?: number;
}

const AnimatedList: React.FC<AnimatedListProps> = ({
  items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
  ],
  onItemSelect,
  showGradients = true,
  enableArrowNavigation = true,
  className = "",
  displayScrollbar = true,
  initialSelectedIndex = -1,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);
  const [keyboardNav, setKeyboardNav] = useState<boolean>(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState<number>(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState<number>(1);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } =
      e.target as HTMLDivElement;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  // Keyboard navigation: arrow keys, tab, and enter selection
  useEffect(() => {
    if (!enableArrowNavigation) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || (e.key === "Tab" && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
      } else if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === "Enter") {
        if (selectedIndex >= 0 && selectedIndex < items.length) {
          e.preventDefault();
          if (onItemSelect) {
            onItemSelect(
              typeof items[selectedIndex] === "string"
                ? items[selectedIndex]
                : items[selectedIndex].question,
              selectedIndex
            );
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

  // Scroll the selected item into view if needed
  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(
      `[data-index="${selectedIndex}"]`
    ) as HTMLElement | null;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: "smooth" });
      } else if (
        itemBottom >
        containerScrollTop + containerHeight - extraMargin
      ) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: "smooth",
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full ${className}`}>
      <div
        ref={listRef}
        className={`max-h-full overflow-y-auto ${displayScrollbar
          ? "[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-[#060606] [&::-webkit-scrollbar-thumb]:bg-[#222] [&::-webkit-scrollbar-thumb]:rounded-[4px]"
          : "scrollbar-hide"
          }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#222 #060606",
        }}
      >
        {items.map((item, index) => (
          <AnimatedItem
            key={index}
            delay={0.1}
            ans={typeof item === "object" ? item.answer : undefined}
            qn={typeof item === "object" ? item.question : undefined}
            onMouseEnter={() => setSelectedIndex(index)}
          ></AnimatedItem>
        ))}
      </div>
    </div>
  );
};

export default AnimatedList;
