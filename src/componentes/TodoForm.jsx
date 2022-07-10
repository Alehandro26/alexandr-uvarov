import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  useEffect(() => {
    gsap.to(".fade-todo", {
      scrollTrigger: {
        trigger: ".fade-todo",
        start: "0 65%",
      },
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    });
  }, []);

  return (
    <section className="todo">
      <div className="todo__wrapper">
        <form action="" className="todo-form" onSubmit={handleSubmit}>
          {props.edit ? (
            <>
              <input
                type="text"
                value={input}
                placeholder="Update your plan"
                name="text"
                className="todo-input edit"
                onChange={handleChange}
                ref={inputRef}
              />
              <button className="todo-button edit">Update</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={input}
                placeholder="your plan?"
                name="text"
                className="todo-input anim fade-todo"
                onChange={handleChange}
                ref={inputRef}
              />
              <button className="todo-button anim fade-todo">Add plan</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

export default TodoForm;
