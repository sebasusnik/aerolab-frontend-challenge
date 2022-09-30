import {useEffect, useState} from 'react';

function usePagination(dataLength: number, itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(dataLength / itemsPerPage);

  /*   
  function currentData() {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;

    return data.slice(begin, end);
  }
   */

  useEffect(() => {
    if (dataLength > itemsPerPage) setCurrentPage(1);
    setCurrentPage(1);
  }, [dataLength, itemsPerPage]);

  function next() {
    setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
  }

  function prev() {
    setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
  }

  return {next, prev, currentPage, maxPage};
}

export default usePagination;
