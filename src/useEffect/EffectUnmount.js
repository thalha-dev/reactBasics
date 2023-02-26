import React, { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("useEffect");
    const interval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      console.log("unmounting");
      clearInterval(interval);
    };
  },);
  /* }, []); */
  /* }, [count]); */
  return <p>and the counter counts {count}</p>;
}
function EffectsDemoUnmount() {
  const [unmount, setUnmount] = useState(false);
  const renderDemo = () => !unmount && <Counter />;
  return (
    <div>
      <button onClick={() => setUnmount(true)}>Unmount child component</button>
      {renderDemo()}
    </div>
  );
}
export default EffectsDemoUnmount;
