import s from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onClickNextPage: () => void;
  onClickPrevPage: () => void;
}

const Pagination = ({
  currentPage,
  lastPage,
  onClickNextPage,
  onClickPrevPage,
}: PaginationProps) => {
  return (
    <nav className={s.Pagination} aria-label="пагинация">
      <ul className={s.list}>
        <li className={s.item}>
          <button
            className={s.button}
            disabled={currentPage === 1}
            onClick={() => onClickPrevPage()}
          >
            {"<"}
          </button>
        </li>
        <li className={s.item}>
          <button className={s.button}>{currentPage}</button>
        </li>
        <li className={s.item}>
          <button
            className={s.button}
            onClick={() => onClickNextPage()}
            disabled={currentPage === lastPage}
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { Pagination };
