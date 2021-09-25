/* eslint-disable */

import Link from 'next/dist/client/link';
import { v4 as uuidv4 } from 'uuid';

const Pagination = ({ currentPage, numPages }) => {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = `/blog/page/${currentPage - 1}`;
  const nextPage = `/blog/page/${currentPage + 1}`;

  if (numPages === 1) return <></>;
  return (
    <div className='mt-6'>
      <ul className='flex pl-0 list-none my-2'>
        {!isFirst && (
          <Link href={prevPage}>
            <li
              key={uuidv4()}
              className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'
            >
              Previous
            </li>
          </Link>
        )}
        {Array.from({ length: numPages }, (_, i) => (
          <Link href={`/blog/page/${i + 1}`}>
            <li
              className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'
              key={uuidv4()}
            >
              {i + 1}
            </li>
          </Link>
        ))}
        {!isLast && (
          <Link href={nextPage}>
            <li
              key={uuidv4()}
              className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer'
            >
              Next
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
