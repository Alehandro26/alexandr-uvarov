import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./componentes/Header";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet />
      </main>
      <footer className="footer"></footer>
    </>
  );
}

export default App;
