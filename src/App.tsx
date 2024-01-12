import './App.css'
import referralIcon from './assets/referral.png';
import filterIcon from './assets/filter.png';
import messageIcon from './assets/message.png';

//Components
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Feature from './components/Feature';

function App() {

  return (
    <>
      <div className="md:container mx-auto px-4 relative">
        <Navbar />
        <Signup />
        <Feature/>
      </div>
    </>
  )
}

export default App
