
import './App.css'
import Index from './routes/Index'
import {HeroUIProvider} from "@heroui/react";
function App() {
  return (
    <>
    <HeroUIProvider>
        <Index/>
    </HeroUIProvider>
  
     
    </>
  )
}

export default App
