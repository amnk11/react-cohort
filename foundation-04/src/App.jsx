import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";



function App() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("idle");
  const [seconds, setSeconds] = useState(10);

  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setSeconds((currentVal) => Math.max(currentVal - 1, 0));
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setStatus("loading");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal },
        );

        const data = await response.json();

        setPosts(data);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request aborted");
          return;
        }
        console.log(error);
        setStatus("error");
      }
    }
    loadPost();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>useEffect</h1>
      {/* <h2>{seconds}</h2> */}

      <section className="post">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
