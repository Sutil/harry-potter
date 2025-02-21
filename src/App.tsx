import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./app/Home";
import Student from "./app/students/Students";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api/api";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="students" Component={Student} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
