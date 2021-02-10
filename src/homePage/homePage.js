import React, { useState, useEffect, Fragment } from "react";
import classes from "./homePage.module.css";
import axios from "axios";
import CharacterListItem from "../charactersListItem/characterListItem";

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
  }, []);

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

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentCharacters = listOfCharacters.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const currentEpisodes = listOfEpisodes.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  charactersList = (
    <Fragment>
      <thead>
        <tr>
          <th>Name</th>
          <th>Birthday</th>
          <th>Image</th>
          <th>Occupation</th>
          <th>Nick-name</th>
          <th>Season Apearance</th>
          <th>Portrayed</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {currentCharacters.map((chr) => {
          return (
            <CharacterListItem
              key={chr.name}
              name={chr.name}
              birthday={chr.birthday}
              image={chr.img}
              occupation={chr.occupation}
              nickName={chr.nickname}
              appearance={chr.appearance}
              portrayed={chr.portrayed}
              status={chr.status}
            />
          );
        })}
      </tbody>
    </Fragment>
  );
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
        {charactersList}
      </table>
    </div>
  );
};

export default MainPage;
