import React from 'react';

const UserHistory = ({histories}) => {
  if(histories === undefined || histories.count === 0) return null;
  const hist = histories.map((el, idx) => {
    return(
      <li className='history-box' key={idx}>
        <div className='hist-sym'>{el.symbol}</div>
        <div className='hist-name'>{el.name}</div>
      </li>
    );
  });

  return(
    <ul className='history'>
      {hist}
    </ul>
  );
};

export default UserHistory
