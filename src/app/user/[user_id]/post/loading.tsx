"use client";
import React from "react";
import { ContentHeader } from "@/components/ContentHeader/ContentHeader";
import { PostSkeleton } from "@/components/post/PostSkeleton";
import PostListView from "@/views/posts/PostList.view";

export default function PostLoading() {
  return (
    <React.Fragment>
      <ContentHeader>게시글 목록</ContentHeader>
      <PostListView isSkeleton posts={[]} />
    </React.Fragment>
  );
}
