import { useEffect } from "react";

export function useCloseHandler(
  toggle: boolean,
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
  ref: React.RefObject<HTMLDivElement>
) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setToggle(false);
      }
    };
    const scroll = () => {
      if (toggle) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    window.addEventListener("scroll", scroll);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("scroll", scroll);
    };
  }, [toggle, setToggle, ref]);
}
