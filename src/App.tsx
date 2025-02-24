import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./app/Home";
import Student from "./app/students/Students";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api/api";
import { Characters } from "./app/Characters";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" Component={Characters} />
            <Route path="students" Component={Student} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
