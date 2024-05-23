import {  BrowserRouter, Route, Routes } from "react-router-dom";
import { Introduce } from "./pages/introduce/Introduce";
import { Quiz } from "./pages/quiz/Quiz";
import "./styles/index.scss";
import ProtectedRoute from "./utils/ProtectedRoute";
import PublicRoute from "./utils/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute/>}>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
          </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path="/" element={<Introduce />} />
          <Route path='/quiz/:category/:difficulty' element={<Quiz />} />
        </Route>
        </Routes>
        </BrowserRouter>
     </AuthProvider>
  );
}

export default App;
