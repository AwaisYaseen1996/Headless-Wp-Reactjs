import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../Posts/loading.css';

const Single = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_ROOT}/posts/${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log("res", res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("error:", err.message);
      });
  }, []);

  return (
    <>
      {Object.keys(post).length ? (
        <div className="p-5">
          <div>
            <img src={post.featured_src} alt="Image get from api" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{post.title.rendered}</h1>
          </div>
          <div dangerouslySetInnerHTML={{__html:post.content.rendered}}></div>
        </div>
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
    </>
  );
};

export default Single;
