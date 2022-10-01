import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./themes/theme";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Create/>} />
        </Routes>
        <Routes>
          <Route path="/event" element={<EventPage/>} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
