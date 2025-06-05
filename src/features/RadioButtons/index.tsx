import s from "./RadioButtons.module.scss";
import { RadioButton } from "../RadioButton";
import { useAppSelector } from "../../shared/lib/hooks/hooks";
import { useRef, useState } from "react";

const RadioButtons = () => {
  const { categories } = useAppSelector((state) => state.categories);
  // Ссылки на контейнер
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // Состояние для отслеживания перемещения мыши
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  let animationFrameId: number | null = null;
  // Обработчик начала перетаскивания
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setIsDown(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft); // Начальная позиция
      setScrollLeft(scrollRef.current.scrollLeft); // Текущее положение
    }
  };
  // Обработчик завершения перетаскивания
  const handleMouseLeave = () => setIsDown(false);
  const handleMouseUp = () => setIsDown(false);

  // Обработчик перемещения мыши
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.5; // Уменьшаем множитель для плавности

    if (scrollRef.current) {
      // Используем requestAnimationFrame для плавности
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      animationFrameId = requestAnimationFrame(() => {
        // Теперь мы добавляем проверку на null внутри requestAnimationFrame
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
