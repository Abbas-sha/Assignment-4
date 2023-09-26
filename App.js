import logo from './logo.svg';
import './App.css';
import './App.css';
import dashboard from './screenwise/Dashboard';  
import detail from './screenwise/Details';
import PostAdd from './screenwise/PostAd';
import CustomBtn from './Components/Custombtn';
import { useState } from 'react'


function App() {
  const [screen, setScreen] = useState()

  function updateScreen(screen) {
    setScreen(screen)
  }

  return (
    <div className="App">
<div>
<button onClick={() => updateScreen('dashboard')}>dashboard</button>
<button onClick={() => updateScreen('details')}>details</button>
<button onClick={() => updateScreen('PostAd')}>PostAd</button>
</div>

{screen === 'dashboard' && <AboutUs />}
{screen === 'details' && <Portfolio />}
{screen === 'PostAd' && <ContactUs />}

</div>

);
}
  


export default App;