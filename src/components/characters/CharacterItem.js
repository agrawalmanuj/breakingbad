import React from 'react'
import {Link} from 'react-router-dom'

const CharacterItem = ({ item }) => {
 
  return (
    <Link to={{
      pathname:"/about",
      data:item
    }}>
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            
              <li>
                <button className="about_me"><strong>About Me</strong></button>
              </li>
              
           
          </ul>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default CharacterItem