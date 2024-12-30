import React from 'react';

function Card({ user, handleremove }) {
  return (
    <div className="w-44 h-full bg-zinc-300 flex flex-col items-center rounded-xl p-2">
      <div className="image w-14 h-14 bg-red-500 rounded-md">
        <img src={user.image} alt="user" className="w-full h-full object-cover" />
      </div>
      <h1 className="mt-1 font-semibold text-xl text-center">{user.name}</h1>
      <h4 className="opacity-60 font-semibold text-xs">{user.email}</h4>
      <p className="mt-1 text-xs text-center leading-none tracking-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatem. Debitis, sit?
      </p>
      <button onClick={handleremove} className="px-4 py-2 text-white bg-blue-500 text-xs font-semibold rounded-xl mt-1">
        Remove it
      </button>
    </div>
  );
}

export default Card;
