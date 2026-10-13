import "./DarkMode.css"
import { useState, useEffect } from "react"

function DarkMode () {

    const [isDark, setIsDark] = useState(() => localStorage.getItem("darkMode") === "true")

    useEffect (() => {
        
        document.body.classList.toggle("dark-theme", isDark)
        localStorage.setItem("darkMode", isDark)

    }, [isDark])

    return (
        <div className="toggle">
            <button 
                className="btn-toggle"
                onClick={() => setIsDark(!isDark)}
            >{isDark ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}

export default DarkMode