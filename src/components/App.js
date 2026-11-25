
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}

        <login
          isLoggedIn={isLoggedIn}
          setIsLoggIn={setIsLoggedIn}
        />
    </div>
  )
}

export default App
