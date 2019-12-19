import React, { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
  portionSize = 10
}) => {
  const pagesCount = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionCount = Math.ceil(pagesCount / portionSize);
  const [portionNumber, setPortionNumber] = useState(1);
  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  const rightPortionPageNamber = portionNumber * portionSize;

  return (
    <div className={styles.paginator}>
      {portionNumber > 1 && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        >
          PREW
        </button>
      )}
      {pages
        .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNamber)
        .map(p => {
          return (
            <span
              className={
                currentPage === p
                  ? `${styles.selectedPage} ${styles.pageNumber} `
                  : styles.pageNumber
              }
              onClick={e => {
                onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}

      {portionCount > portionNumber && (
        <button
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        >
          NEXT
        </button>
      )}
    </div>
  );
};
export default Paginator;
