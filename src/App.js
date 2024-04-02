import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduce } from "./pages/introduce/Introduce";
import { Quiz } from "./pages/quiz/Quiz";
import "./styles/index.scss";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Introduce />} />
          <Route path='/quiz/:category/:difficulty' element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
