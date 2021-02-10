import React, { useState } from "react";
import classes from "./homePage.module.css";

const mainPage = () => {
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [listOfEpisodes,setListOfEpisodes]=useState([]);
  const[loadBycharacterList,setLoadByCharacterList]=useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(4);

  let charactersList;

  const getCharacterList=()=>{

  }

  const getEpisodesList=()=>{
      
  }
  const updateList = (ev) => {};
  return (
    <div className={classes.MainPage}>
      <label>Select by : </label>
      <select onChange={(ev) => updateList(ev)}>
        <option>Characters</option>
        <option>Episodes</option>
      </select>
      <table className={classes.Table}>
        <caption>Breaking Bad</caption>
      </table>
    </div>
  );
};

export default mainPage;
