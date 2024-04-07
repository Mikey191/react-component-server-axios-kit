import React, { useEffect, useState } from "react";
import PostService from "../API/PostService";
import { useFetching } from "../hooks/useFetching";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const respons = await PostService.getById(id);
    console.log(respons.data);
    setPost(respons.data);
  });
  
  const [fetchCommentsById, isCommentLoading, commentError] = useFetching(
    async (id) => {
      const respons = await PostService.getCommentsById(id);
      console.log(respons.data);
      setComments(respons.data);
    }
  );
  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, []);
  return (
    <div>
      <h1>Вы открыли страницу поста {params.id}</h1>
      {!isLoading ? (
        <div>
          {post.id}. {post.title}
        </div>
      ) : (
        <Loader />
      )}
      <h2>Комментарии к посту {params.id}</h2>
      {isCommentLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map((comm) => (
            <div key={comm.id} style={{ marginTop: 30 }}>
              <h5>{comm.email}</h5>
              <div>{comm.body}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostIdPage;
