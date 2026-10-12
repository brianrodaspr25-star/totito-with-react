import "./DarkMode.css"
import { useState } from "react"

function DarkMode () {

    const [isDark, setIsDark] = useState(false)

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