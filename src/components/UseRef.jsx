import { useEffect, useRef } from "react";

const UseRef = () => {
  const match = {
    argentina: 2,
    brazil: 1,
  };

  const argentinaRef = useRef(null);
  const brazilRef = useRef(null);

  useEffect(() => {
    if (match.argentina > match.brazil) {
      argentinaRef.current.style.color = "skyblue";
    } else {
      brazilRef.current.style.color = "seagreen";
    }
  }, []);

  return (
    <div>
      <h1 ref={argentinaRef}>Argentina: {match.argentina}</h1>
      <h1 ref={brazilRef}>Brazil: {match.brazil}</h1>
    </div>
  );
};

export default UseRef;
