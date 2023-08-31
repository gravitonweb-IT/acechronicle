import React, { useEffect, useState } from "react";
import './ScrollUpButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp} from '@fortawesome/free-solid-svg-icons';

export default function ScrollUpButton() {
  const [top, setTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setTop(true);
      } else {
        setTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  };
  return (
    <>
      <div>
        {top && (
          <button
            className="scroll-up-button"
            onClick={scrollUp}
          >
          <FontAwesomeIcon icon={faArrowUp}/>
          </button>
        )}
      </div>
    </>
  );
}
