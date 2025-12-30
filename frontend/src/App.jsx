// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel

import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('')

    useEffect(() => {
        fetch('http://localhost:8000/api/hello/')
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error(err))
    }, [])

    return (
        <div className="App">
            <h1>Django + React Hybrid</h1>
            <p>Backend says: {message || 'Loading...'}</p>
            <p style={{ color: '#888' }}>Developed for Anunzio International</p>
        </div>
    )
}

export default App

// Developed for Anunzio International by Anzul Aqeel. Contact +971545822608 or +971585515742. Linkedin Profile: linkedin.com/in/anzulaqeel
