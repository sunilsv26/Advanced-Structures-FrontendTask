import React, { useState, useEffect } from "react";
import classes from "./homePage.module.css";
import axios from "axios";

const MainPage = (props) => {
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [listOfEpisodes, setListOfEpisodes] = useState([]);
  const [loadBycharacterList, setLoadByCharacterList] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  let charactersList;

  useEffect(() => {
    getCharacterList();
    getEpisodesList();
  },[]);

  const getCharacterList = () => {
    const fetchList = async () => {
      const resp = await axios.get(
        "https://www.breakingbadapi.com/api/characters"
      );
      setListOfCharacters(resp.data);
      console.log(resp.data);
    };
    fetchList();
    
  };

  const getEpisodesList = () => {
    const fetchList = async () => {
      const resp = await axios.get(
        "https://www.breakingbadapi.com/api/episodes"
      );
      setListOfEpisodes(resp.data);
      console.log(resp.data);
    };
    fetchList();
  };
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

export default MainPage;
