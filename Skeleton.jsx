import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import styles from "./Post.module.scss";

export const PostSkeleton = () => {
  return (
    <div className={styles.skeleton}>
      1
      <Stack spacing={1}>
        2
        <Skeleton variant="rectangular" width="100%" height={300} />3
        <div className={styles.skeletonContent}>
          4
          <div className={styles.skeletonUser}>
            5
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              style={{ marginRight: 10 }}
            />6
            <div className={styles.skeletonUserDetails}>
              <Skeleton variant="text" width={60} height={20} />
              text2
              <Skeleton variant="text" width={100} height={15} />
              text
            </div>
          </div>
          <div className={styles.skeletonInfo}>
            <Skeleton variant="text" width="80%" height={45} />
            <div className={styles.skeletonTags}>
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
              <Skeleton variant="text" width={40} height={30} />
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};
