import React, { useState } from "react"

const Table= ({contacts})=>{
    const [filter, setFilter] = useState("all")
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange =(e)=>{
        setFilter(e.target.value)
    }

    const search =  (contact)=>(
      contact.name.includes(searchTerm) ||
      contact.email.includes(searchTerm)
    )


    let filteredContacts = []
    if(filter === "all"){
        filteredContacts = searchTerm ? contacts.filter(search) : contacts
    }else{
      filteredContacts = contacts.filter((contact)=>contact.group === filter && search(contact))
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

            <input type="text" value={searchTerm}
            placeholder="Search..."
            onChange={e=>setSearchTerm(e.target.value)} />
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