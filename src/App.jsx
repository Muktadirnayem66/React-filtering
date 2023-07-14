import { useState } from "react"
import ContactForm from "./components/ContactForm"
import Table from "./components/Table"



function App() {
  const [contacts, setContacts] =useState([])

  const getContact=(contact)=>{
    setContacts([].concat(contacts,contact))

  }

  return (
    <>
      <h1>filtering app</h1>
      <ContactForm getContact={getContact}/>
      <Table contacts={contacts}/>
    </>
  )
}

export default App
