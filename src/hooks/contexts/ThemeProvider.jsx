import { createContext, useContext, useEffect ,useState} from 'react';
const ThemeContext = createContext('');
export const ThemeProvider = ({children}) => {
      const [DarkMode, setDarkMode] = useState(localStorage.getItem("theme")==="dark");
      useEffect(()=>{
        if(DarkMode){
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme","dark")
        }else{
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme","light")

        }
      },[DarkMode])

  return (
    <ThemeContext.Provider value={{DarkMode,setDarkMode}}>
      {children}
    </ThemeContext.Provider>
    )
}

export const useDarkMode = ()=>useContext(ThemeContext)