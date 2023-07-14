import React, { useState } from "react"

const Table= ({contacts})=>{
    const [filter, setFilter] = useState("all")
    const handleChange =(e)=>{
        setFilter(e.target.value)
    }

    let filteredContacts = []
    if(filter === "all"){
        filteredContacts = contacts
    }else{
      filteredContacts = contacts.filter((contact)=>contact.group === filter)
    }

    return(
        <>
        <div>
            <br />
            Filters:
            <select value={filter} onChange={handleChange}>
                <option value="all">All</option>
                <option value="">None</option>
                <option value="home">Home</option>
                <option value="office">Office</option>
            </select>
        </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Group</th>
          </tr>
        </thead>
        <tbody>
        {filteredContacts.map((contact, i)=>(
          <tr key={i}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.group}</td>
          </tr>
        ))}
        </tbody>
      </table>

      </>
    )
  }
  

  export default Table