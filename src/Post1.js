import React from "react";
import clsx from "clsx";
import IconButton from "./node_modules/@mui/material/IconButton/IconButton.js";
import DeleteIcon from "./node_modules/@mui/icons-material/Clear.js";
import EditIcon from "./node_modules/@mui/icons-material/Edit.js";
import EyeIcon from "./node_modules/@mui/icons-material/RemoveRedEyeOutlined.js";
import CommentIcon from "./node_modules/@mui/icons-material/ChatBubbleOutlineOutlined.js";

import styles from "./Post.module.scss";
//import { UserInfo } from "../UserInfo";
import { PostSkeleton } from "./Skeleton.jsx";

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullPost,
  isLoading,
  isEditable
}) => {
  const onClickRemove = () => {};

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <div className={styles.indention}>
          <h2
            className={clsx(styles.title, { [styles.titleFull]: isFullPost })}
          >
            {isFullPost ? title : <a href={`/posts/${_id}`}>{title}</a>}
          </h2>

          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
