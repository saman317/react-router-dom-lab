import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar'
import MailboxDetails from './components/MailboxDetails'
import MailboxForm from './components/MailBoxForm'
import MailboxList from './components/MailBoxList'


function App() {
  const mailboxExample = {
    _id: 1,
    boxSize: 'Small',
    boxholder: 'Alex',
  };
  const [mailboxes, setMailboxes] = useState([mailboxExample])

  const addBox =(box)=>{
    setMailboxes([...mailboxes, {...box, _id: mailboxes.length +1}])
  }

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<main><h1>Post Office</h1></main>}/>
      <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes}/>}/>
      <Route path="/new-mailbox" element={<MailboxForm addBox={addBox}/>}/>
      <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes}/>}/>


    </Routes>

    </>
  )
}

export default App
