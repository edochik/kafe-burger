import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useEscapeHandler = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        navigate("/");
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate]);
};

export { useEscapeHandler };
