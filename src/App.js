
import { useState } from "react";
import FetchCard from "./components/FetchCard";
import Lifecycle from "./components/Lifecycle";
import ResizeApp from "./components/ResizeApp";

function App() {

const [show, setShow] = useState(false)

  return (
    <div>
      <h1>Lifecycle</h1>
      <Lifecycle />
      <hr />
      <FetchCard />
      <hr />
      <button onClick={()=> setShow(!show) } >show/hide</button>
      { show && <ResizeApp /> }
      
    </div>
  );
}

export default App;
