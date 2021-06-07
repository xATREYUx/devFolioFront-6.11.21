import React, { useContext, useEffect, useState } from "react";
import PostListCard from "./PostListCard";
import { Pagination } from "./posts.styles";

const PostList = ({ posts, dataLimit, pageLimit, title }) => {
  console.log("post length", posts.length);
  const [pages, setPages] = useState();
  console.log("pages: ", pages);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("PostList posts: ", posts);
    console.log("PostList pages: ", pages);
    setPages(Math.round(posts.length / dataLimit));
  }, [posts, currentPage, pages]);

  const goToNextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage((page) => page - 1);
  };
  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };
  const getPaginatedData = () => {
    console.log("getPaginatedData currentPage", currentPage);
    console.log("getPaginatedData pages", pages);
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return posts.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  console.log("getPaginatedData getPaginatedData", getPaginatedData());
  console.log("getPaginationGroup getPaginationGroup", getPaginationGroup());

  return (
    <>
      <div>
        <h1>{title}</h1>

        {/* show the posts, 10 posts at a time */}
        <div className="dataContainer">
          {getPaginatedData().map((post) => (
            <PostListCard key={post.id} post={post} />
          ))}
        </div>

        {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers, in our case, 5 page
        numbers at a time
    */}
        <Pagination>
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? "disabled" : ""}`}
          >
            prev
          </button>

          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${
                currentPage === item ? "active" : null
              }`}
            >
              <span>{item}</span>
            </button>
          ))}

          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? "disabled" : ""}`}
          >
            next
          </button>
        </Pagination>
      </div>
      {/* {posts.length > 0
        ? posts.map((post) => {
            console.log("post list item", post);
            return <PostListCard key={post.id} post={post} />;
          })
        : "No Posts Yet"} */}
    </>
  );
};

export default PostList;
