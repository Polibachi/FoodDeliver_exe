import postModel from "./postModel.js";
import axios from "./axios.js";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./Slice.js";
import { addItem, removeItem, minusItem, clearItem } from "./KorzSlice.ts";

import Grid from "./node_modules/@mui/material/Grid/Grid.js";

import { Post } from "./Post.js";
import { useState } from "react";
import { useMemo } from "react";

function Test() {
  const { items, totalPrice } = useSelector(state => state.cartReduser);
  const dispatch = useDispatch();
  const { posts } = useSelector(state => state.posts);

  const clear = () => {
    dispatch(clearItem());
  };
  const [searchQuerry, setSearchQuerry] = useState("");
  const isPostLoading = posts.status === "loading";
  const isMounted = React.useRef(false);
  const searchedPosts = useMemo(() => {
    if (searchQuerry & (posts.status != "loading")) {
      return posts.items.filter(posts =>
        posts.items.title.includes(searchQuerry)
      );
    } else return posts;
  });
  React.useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  React.useEffect(
    () => {
      if (isMounted.current) {
        const json = JSON.stringify(items);
        localStorage.setItem("cart", json);
      }

      isMounted.current = true;
    },
    [items]
  );
  if (posts) {
    return (
      <div key={posts.items.title}>
        <input
          placeholder="Пошук"
          value={searchQuerry}
          onChange={e => setSearchQuerry(e.target.value)}
        />
        <Grid xs={8} item>
          {posts.items.map((obj, index) => (
            <Post
              _id={obj._id}
              title={obj.title}
              imageUrl={obj.imageUrl}
              text={obj.text}
              tags={obj.tags}
              search={searchQuerry}
              price={obj.price}
              vaha={obj.vaha}
            />
          ))}
        </Grid>
        <div />
        <div>
          {items.length},{totalPrice}
        </div>
        <div>
          <button onClick={clear}>Очистити корзину</button>
        </div>
        <div>
          <a href="/">Повернутися</a>
        </div>
      </div>
    );
  }
  return (
    <>
      <Grid xs={8} item />

      <div />
    </>
  );
}

export default Test;
