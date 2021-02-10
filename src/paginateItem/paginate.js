import React from "react";
import classes from "./paginate.module.css";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.Pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={classes.PageItem}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              className={classes.PageLink}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
