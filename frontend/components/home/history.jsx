import React from 'react';
import { Link } from 'react-router-dom';

const UserHistory = ({histories}) => {
  if(histories === undefined || histories.count === 0) return null;
  const hist = histories.map((el, idx) => {
    return(
      <li className='history-box' key={idx}>
        <Link to={"/etf/" + el.symbol} >
          <div className='hist-sym'>{el.symbol}</div>
          <div className='hist-name'>{el.name}</div>
        </Link>
      </li>
    );
  });

  return(
    <ul className='history'>
      <p>History</p>
      <div className='hist-list'>
        {hist}
      </div>
    </ul>
  );
};

export default UserHistory
