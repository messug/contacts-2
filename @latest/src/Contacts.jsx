import React from "react";
import Card from "./Card";
import contacts from "./Contacts";

function App() {
 return (
  <div>
    <h1 className="heading">My Contacts</h1>
    <card 
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
    />
     <card 
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
    />
     <card 
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
    />
     <card 
    name={contacts[0].name}
    img={contacts[0].imgURL}
    tel={contacts[0].phone}
    email={contacts[0].email}
    />
  </div>
 )
}

export default App;