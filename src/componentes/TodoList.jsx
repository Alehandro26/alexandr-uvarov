import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import "./TodoList.scss";
gsap.registerPlugin(ScrollTrigger);

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodos);
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

    gsap.to(".do__title span", {
      scrollTrigger: {
        trigger: ".do__title span",
        start: "0 65%",
      },
      opacity: 1,
      duration: 1.4,
      ease: "power4.out",
      stagger: {
        amount: 0.8,
      },
    });
  }, []);

  return (
    <section className="do">
      <div className="do__wrapper container">
        <h2 className="do__title">
          <span>What</span> <span>are</span>{" "}
          <span className="do__title_green">your</span>{" "}
          <span className="do__title_green">plans</span> <span>for</span>{" "}
          <span>today</span> <span className="do__title_green">?</span>
        </h2>
        <TodoForm onSubmit={addTodo} />
        <TodoItem
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </section>
  );
}

export default TodoList;
