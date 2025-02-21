import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./app/Home";
import Student from "./app/students/Students";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="students" Component={Student} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
