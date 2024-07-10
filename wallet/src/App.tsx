import './App.css'
import Wallet from './components/Wallet'
import { useState } from 'react'

function App() {
  const [anchorEl4, setAnchorEl4] = useState(null);

  // const handleClick4 = (event: any) => {
  //   setAnchorEl4(event.currentTarget);
  // };

  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  return (
    <>
      <Wallet handleClose4={handleClose4} anchorEl4={anchorEl4} />
    </>
  )
}

export default App