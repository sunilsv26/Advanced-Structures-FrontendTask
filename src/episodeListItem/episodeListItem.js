import React from 'react';

const episodeListItem=(props)=>{
    return (
        <tr>
          <td>{props.series}</td>
          <td>{props.season}</td>
          <td>{props.episode}</td>
          <td>{props.title}</td>
          <td>{props.airDate}</td>
          <td>
            {props.characters.map((el, idx) => {
              return idx === props.characters.length - 1 ? el : `${el},`;
            })}
          </td>
        </tr>
      );
}

export default episodeListItem