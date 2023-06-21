import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./loading.css";

const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts`;
    axios.get(url).then((res) => {
      setPost(res.data);
    });
  }, []);
  console.log("post", post);
  return (
    <>
      <h1 className="text-2xl font-bold pl-5 underline page_title">Posts</h1>
      <div className="cards_page w-4/5 flex flex-wrap justify-between align-middle m-auto py-10 gap-10">
        {Object.keys(post).length ? (
          post.map(({ id, title, excerpt }) => {
            return (
              <div
                key={id}
                className="my-5 p-5 card shadow-lg w-[330px] rounded-lg"
              >
                <Link to={`/posts/${id}`}>
                  <img
                    src="https://via.placeholder.com/500"
                    alt={title.rendered}
                    className="pb-5"
                  />
                  <h1 className="pb-3 text-lg font-bold text-center">
                    {title.rendered}
                  </h1>
                  <p dangerouslySetInnerHTML={{ __html: excerpt.rendered }}></p>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="custom_loading flex flex-wrap justify-center align-middle">
            <div className="container">
              <div className="line"></div>
              <div className="loader">
                <div className="one-loader first">
                  <div className="v-line first-line"></div>
                  <div className="circle first-circle"></div>
                </div>
                <div className="one-loader">
                  <div className="v-line middle-line"></div>
                  <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader">
                  <div className="v-line middle-line"></div>
                  <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader">
                  <div className="v-line middle-line"></div>
                  <div className="circle middle-circle"></div>
                </div>
                <div className="one-loader last">
                  <div className="v-line last-line"></div>
                  <div className="circle last-circle"></div>
                </div>
              </div>
              <h1 className="load">Loading</h1>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Posts;
