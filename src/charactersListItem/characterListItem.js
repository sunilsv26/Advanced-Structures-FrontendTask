import React from 'react';
import './characterListItem.module.css';

const characterListItem=(props)=>{
    return(
        <tr>
        <td>{props.name}</td>
        <td>{props.birthday}</td>
        <td>
          <img src={props.image} width='60' height='70'alt="img" />
        </td>
        <td>
          {props.occupation.map((el, idx) => {
            return idx === props.occupation.length - 1 ? el : `${el}, `;
          })}
        </td>
        <td>{props.nickName}</td>
        <td>
          {props.appearance.map((el, idx) => {
            return idx === props.appearance.length - 1 ? el : `${el}, `;
          })}
        </td>
        <td>{props.portrayed}</td>
        <td>{props.status}</td>
      </tr>
    );
}

export default characterListItem