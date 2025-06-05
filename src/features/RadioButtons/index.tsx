import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { useAppSelector } from "@shared/lib/hooks/hooks";
import { useRef, useState } from "react";

const RadioButtons = () => {
  const { categories } = useAppSelector((state) => state.categories);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  let animationFrameId: number | null = null;
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setIsDown(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft); 
      setScrollLeft(scrollRef.current.scrollLeft); 
    }
  };
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.5;
    if (scrollRef.current) {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollLeft = scrollLeft - walk;
        }
      });
    }
  };

  return (
    <div
      className={s.RadioButtons}
      ref={scrollRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      <fieldset className={s.fieldset}>
        {categories.map((category) => (
          <RadioButton key={category.id} {...category} />
        ))}
      </fieldset>
    </div>
  );
};

export { RadioButtons };
