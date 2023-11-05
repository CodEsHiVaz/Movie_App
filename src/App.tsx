import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { Home } from "./components/home/Home";
import { ProtectedRoute } from "./ProtectedRoutes";
export type UserType = {
  name?: string;
  phone?: string;
  profession?: string;
  email: string;
  password: string;
};
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
