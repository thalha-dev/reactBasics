import React, { useEffect, useState } from "react";

function LifecycleDemo() {
  useEffect(() => {
    console.log("render!");
    return () => console.log("unmounting...");
  }, []);
  console.log("inside LifecycleDemo");

  return "I'm a lifecycle demo";
}

function EffectApp2() {
  const [random, setRandom] = useState(Math.random());
  const [mounted, setMounted] = useState(true);
  const reRender = () => setRandom(Math.random());
  const toggle = () => setMounted(!mounted);

  return (
    <>
      <button onClick={reRender}>Big button{random}</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo />}
    </>
  );
}

function Top() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Top rendered");
  });

  console.log("-----------inside Top");
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Top Level {count}</div>
      <Middle />
    </div>
  );
}

function Middle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Middle rendered");
  });

  console.log("-----------inside Middle");
  return (
    <div>
      <div onClick={() => setCount(count + 1)}>Middle Level {count}</div>
      <Bottom />
    </div>
  );
}

function Bottom() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Bottom rendered");
  }, [count]);
  console.log("-----------inside Bottom");

  return <div onClick={() => setCount(count + 1)}>Bottom Level {count}</div>;
}

function ThreeCounts() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  useEffect(() => {
    console.log("count2 changed!");
  }, [count2]);

  return (
    <div>
      {count1} {count2} {count3}
      <br />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
      <button onClick={() => setCount3(count3 + 1)}>Increment count3</button>
    </div>
  );
}

function PropChangeWatch({ a, b }) {
  useEffect(() => {
    console.log("value of 'a' changed to", a);
  }, [a]);
  console.log("-----------inside PropChangeWatch");
  return (
    <div>
      I've got 2 props: a={a} and b={b}
    </div>
  );
}

function Demo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  console.log("-----------inside Demo");
  return (
    <div>
      <PropChangeWatch a={count1} b={count2} />
      <button onClick={() => setCount1(count1 + 1)}>Increment count1</button>
      <button onClick={() => setCount2(count2 + 1)}>Increment count2</button>
    </div>
  );
}

/* export default EffectApp2; */
/* export default Top; */
/* export default ThreeCounts; */
export default Demo;
