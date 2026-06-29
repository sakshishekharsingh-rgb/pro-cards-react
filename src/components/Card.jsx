import React from "react";
import {Building2, SquareUser} from "lucide-react";
const Card = ({name, role, price, image, company, description, skill1, skill2, skill3, more, type }) => {

  return (
    <div className='card'>
        <div className='top'>
            <p className="available">available</p> 
            <p>{price}</p>
        </div>
            
            <img src={image} alt='profile' />
            <div className="content">
              <h2>{name}</h2>
              <p>{role}</p>
            </div>

            <p className="company"
            style={{color: type === "company" ? "blue" : "green"}}
            >
              {type === "company" ? (
                <Building2 size={14} color="blue"/>
              ) :(
                <SquareUser size={14} color="green"/>
              )}
              <span> {company} </span>
            </p>

            <div className='skills'>
              <span>{skill1}</span>
              <span>{skill2}</span> 
              <span>{skill3}</span> 
              <span className="more">{more}</span>
              </div>
              
            <p className="text">{description}</p>
            <div className="line"></div>
            <button className="button">VIEW PROFILE</button>

    </div>

  )
}

export default Card
