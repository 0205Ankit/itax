import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import FallBack from "./fallBack";
import Navigation from "./navigation";



const HomePage = lazy(() => import("./pages/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUsPage"));
const Carrer = lazy(() => import("./pages/CarrerPage"));
const Services = lazy(() => import("./pages/ServicesPage"));
const Journey = lazy(() => import("./pages/JourneyPage"));
const NotFound=lazy(()=>import('./NotFound'))

function App() {
  return (
    <Suspense fallback={<FallBack />}>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/career" element={<Carrer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Suspense>
  );
}

export default App;
