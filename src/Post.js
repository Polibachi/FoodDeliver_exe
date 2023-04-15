import React from "react";
import clsx from "clsx";
import IconButton from "./node_modules/@mui/material/IconButton/IconButton.js";
import DeleteIcon from "./node_modules/@mui/icons-material/Clear.js";
import EditIcon from "./node_modules/@mui/icons-material/Edit.js";
import EyeIcon from "./node_modules/@mui/icons-material/RemoveRedEyeOutlined.js";
import CommentIcon from "./node_modules/@mui/icons-material/ChatBubbleOutlineOutlined.js";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "./UserInfo.jsx";
import { PostSkeleton } from "./Skeleton.jsx";
import { addItem } from "./KorzSlice.js";

export const Post = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  text,
  vaha,
  price,
  viewsCount,
  tags,
  search,
  children,
  isFullPost,
  isLoading,
  isEditable
}) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, serActiveSize] = React.useState(0);
  const dispatch = useDispatch();
  const addToKorz = () => {
    console.log("item added");
    const item = {
      _id,
      title,
      price,
      imageUrl,
      type: activeType,
      size: activeSize
    };
    dispatch(addItem(item));
  };
  const onClickRemove = () => {};

  if (_id) {
    if (search) {
      if (title.toLowerCase().includes(search.toLowerCase())) {
        return (
          <div key={_id}>
            <div>{title}</div>
            <div>{text}</div>
            <div>
              {price} грн, {vaha} грам
            </div>
            <img style={{ width: "150", height: "100" }} src={imageUrl} />
            <div>
              {tags[0]} {tags[1]} {tags[2]} {tags[3]} {tags[4]}{" "}
            </div>
            <button value="kupiti" onClick={addToKorz}>
              Додати в корзину
            </button>
            <div>""</div>
          </div>
        );
      } else {
        return <></>;
      }
    } else {
      return (
        <>
          <div>{title}</div>
          <div>{text}</div>
          <div>
            {price} грн, {vaha} грам
          </div>
          <img style={{ width: "150", height: "100" }} src={imageUrl} />
          <div>
            {tags[0]} {tags[1]} {tags[2]} {tags[3]} {tags[4]}{" "}
          </div>
          <div>
            <button value="kupiti" onClick={addToKorz}>
              Додати в корзину
            </button>
          </div>
          <div>""</div>
        </>
      );
    }
  }
};
