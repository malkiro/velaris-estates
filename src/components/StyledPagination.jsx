import React from "react";
import Link from "next/link";
import clsx from "clsx";

const StyledPagination = ({
  currentPage = 1,
  totalPageCount = 1,
  firstPage = "/",
}) => {
  const isTooLarge = totalPageCount > 4;
  if (!totalPageCount || totalPageCount < 2) return null;
  return (
    <div className={"py-3"}>
      <ul className={"flex items-center justify-center *:m-1"}>
        <li>
          <Link href={firstPage}>First</Link>
        </li>
        <li>
          <Link
            href={
              currentPage < 3
                ? firstPage
                : `${firstPage}/page/${Math.max(currentPage - 1, 1)}`
            }
          >
            Prev
          </Link>
        </li>

        {isTooLarge && currentPage > 2 && <li>&middot;&middot;&middot;</li>}

        {[...Array(totalPageCount).keys()].map((i) => {
          if (isTooLarge && currentPage > 2 && i < currentPage - 3) return null;
          if (isTooLarge && i > currentPage + 1) return null;
          if (!i) {
            return (
              <li key={i} className={"m-2"}>
                <Link
                  href={firstPage}
                  className={clsx({
                    "block px-2 text-center rounded-[2px]": true,
                    "bg-transparent": i + 1 === currentPage,
                    "bg-gray-400": i + 1 !== currentPage,
                  })}
                >
                  {i + 1}
                </Link>
              </li>
            );
          }
          return (
            <li key={i} className={"m-2"}>
              <Link
                href={`${firstPage}/page/${i + 1}`}
                className={clsx({
                  "block px-2 text-center rounded-[2px]": true,
                  "bg-transparent": i + 1 === currentPage,
                  "bg-gray-400": i + 1 !== currentPage,
                })}
              >
                {i + 1}
              </Link>
            </li>
          );
        })}
        {isTooLarge && currentPage < totalPageCount - 1 && (
          <li>&middot;&middot;&middot;</li>
        )}
        <li>
          <Link
            href={`${firstPage}/page/${Math.min(currentPage + 1, totalPageCount)}`}
          >
            Next
          </Link>
        </li>
        <li>
          <Link href={`${firstPage}/page/${totalPageCount}`}>Last</Link>
        </li>
      </ul>
    </div>
  );
};

export default StyledPagination;
