import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useFocusAndEscape = (ref: React.RefObject<HTMLElement>) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, ref]);
};

export { useFocusAndEscape };
