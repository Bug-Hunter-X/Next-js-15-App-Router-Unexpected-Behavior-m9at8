```javascript
// pages/index.js
export default function Home() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```