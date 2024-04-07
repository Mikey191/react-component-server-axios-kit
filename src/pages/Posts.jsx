import React, { useEffect, useRef, useState } from "react";
import "../styles/App.css";
import PostsList from "../components/PostsList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isPostsLoading, () => setPage(page + 1));

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <MySelect
        value={limit}
        defaultValue={"Количество"}
        onChange={(value) => setLimit(value)}
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Все посты" },
        ]}
      />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Произошла ошибка ${postError}</h1>}

      <PostsList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Список постов Javascript"}
      />
      <div
        ref={lastElement}
        style={{ height: 20, background: "red", opacity: 0 }}
      ></div>
      {isPostsLoading && <Loader />}
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
