import "./DarkMode.css"
import { useState, useEffect } from "react"

function DarkMode () {

    const [isDark, setIsDark] = useState(false)

    useEffect (() => {
        
        document.body.classList.toggle("dark-theme", isDark)

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