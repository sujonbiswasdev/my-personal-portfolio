import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./hooks/contexts/ThemeProvider";
import Index from "./routes/Index";
import { HeroUIProvider } from "@heroui/react";
import Preloader from "./components/PreloaderPage/Preloader";
function App() {
  const [preloader, setpreloader] = useState(true);
 window.addEventListener('load',()=>{
  setpreloader(false);
  console.log("false ")
 })
 console.log("true")
  return (
    <>
      {preloader ? (
        <Preloader />
      ) : (
        <HeroUIProvider>
          <ThemeProvider>
            <Index />
          </ThemeProvider>
        </HeroUIProvider>
      )}
    </>
  );
}

export default App;
