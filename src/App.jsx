import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareLayout from "./components/SharedLayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <section>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<ShareLayout />}>
              <Route index element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </section>
  );
}

export default App;
