import { BrowserRouter, Route, Routes } from "react-router";

import Home from "./app/Home";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/api/api";
import { CharactersPage } from "./app/characters/CharactersPage";
import { StudentsPage } from "./app/students/StudentsPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" Component={CharactersPage} />
            <Route path="/students" Component={StudentsPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
