import React, { useState } from 'react';
import './index.css';
import Cards from './components/Cards';
import Form from './components/Form';

function App() {
  const [user, setuser] = useState([]);

  const handlefromsubmitdata = (data) => {
    setuser([...user, data]); 
  };

  const handleremove = (id)=>{
    console.log(id);
    setuser(()=>user.filter((item, index)=> index !== id))
  }

  return (
    <div className="w-full h-screen bg-slate-500 p-4 flex flex-wrap overflow-auto justify-center items-center">
      <div className="container mx-auto">
        <Cards handleremove = {handleremove} user={user} />
        <Form handlefromsubmitdata={handlefromsubmitdata} />
      </div>
    </div>
  );
}

export default App;
