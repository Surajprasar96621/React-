import React from 'react';
import Card from './Card';

function Cards({ user, handleremove}) {
  return (
    <div className="w-full p-4 flex flex-wrap gap-4 justify-center items-center">
      {user.map((item, index) => (
        <Card user={item} handleremove={()=>handleremove(index)} id={index} key={index} />
      ))}
    </div>
  );
}

export default Cards;
