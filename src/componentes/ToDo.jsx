import { useEffect, useRef, useState } from "react";
import "./ToDo.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
gsap.registerPlugin(ScrollTrigger);

function ToDo() {
  return <section className="todo"></section>;
}

export default ToDo;
