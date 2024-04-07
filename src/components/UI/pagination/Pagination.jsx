import React from "react";
import { getPagesArray } from "../../../utils/pages";
import classes from "./Pagination.module.css"

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArray = getPagesArray(totalPages);
  return (
    <div className={classes.wrapper}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? [classes.page, classes.pageCurrent].join(" ") : classes.page}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
