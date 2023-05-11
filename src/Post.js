import React from "react";
import clsx from "clsx";
import IconButton from "@mui/material/IconButton/IconButton.js";
import DeleteIcon from "@mui/icons-material/Clear.js";
import EditIcon from "@mui/icons-material/Edit.js";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined.js";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined.js";
import { useDispatch, useSelector } from "react-redux";
import { UserInfo } from "./UserInfo.jsx";
import { PostSkeleton } from "./Skeleton.jsx";
import { addItem } from "./KorzSlice.ts";

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
      size: activeSize,
      vaha
    };
    dispatch(addItem(item));
  };
  //React.useEffect(() => {}, []);
  if (_id) {
    console.log(123);
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
      console.log(321);
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
