import { useEffect, useState } from 'react';

export const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    //API calls
  }, []);

  return (
    <div className="user-card">
      <h1 onClick={() => setCount((prev) => prev + 1)}>Count: {count}</h1>
      <h1 onClick={() => setCount2((prev) => prev + 1)}>Count2: {count2}</h1>
      <h1>Name: {name}</h1>
      <h2>Dehradun</h2>
    </div>
  );
};
