import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MyPage from "./pages/MyPage";
import Detail from "./pages/TodoDetail"

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/myPage" element={<MyPage />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
}

export default App;
