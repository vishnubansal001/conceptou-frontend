import React from 'react';
import { pages } from '../../database/data';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <img src="logo" alt="img/logo" />
          </div>
          <div>
            {
              pages?.map((item,index) => (
                <div key={index}
                onClick={navigate(`${item.link}`)}
                >
                  <p>{item.name}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
