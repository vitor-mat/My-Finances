import React from 'react';

import { LoginPage } from './pages/login/index';


function App() {
  let name = "world"
  const titulo = <h1>Hello, {name}</h1>
  return (
    <div className="App">
      		{titulo}
    </div>
  )
}

export default App;
