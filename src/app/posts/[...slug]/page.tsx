"use client";
import React from "react";
import { TypePost, arrPost } from "../../../../public/assets/data/data";
import { useRouter } from "next/navigation";
import "../../../style/pages/posts/posts.scss";
interface TypeParams {
  slug: string;
}
export default function Posts({ params }: { params: TypeParams }) {
  const { slug } = params;
  console.log(slug);
  const postDetail: TypePost | undefined = arrPost.find(
    (post: TypePost) => post.id === String(slug)
  );
  const router = useRouter();
  const handleError = () => {
    router.push("/");
  };
  if (!postDetail) {
    return (
      <div>
        <h1>Không tìm thấy dữ liệu</h1>
        <button className="btn btn-dark" onClick={handleError}>
          Quay về trang chủ
        </button>
      </div>
    );
  }
  console.log(postDetail);
  return (
    <div className="postDetail container-fluid">
      <div className="postDetail__title">
        <h4>{postDetail?.name}</h4>
        <h3>{postDetail?.title}</h3>
        <p className="postDetail__title-date">{postDetail.day}</p>
        <img src={postDetail?.image[1].url} alt="" />
      </div>
      <div className="postDetail__info">
        <div className="postDetail__info-item">
          <p>{postDetail?.description[0]}</p>
          <figure>
            <img src={postDetail.image[2].url} alt="" />
            <figcaption>{postDetail.figcaption[0]}</figcaption>
          </figure>
        </div>
        <div className="postDetail__info-item">
          <p>{postDetail?.description[1]}</p>
          <figure>
            <img src={postDetail.image[3].url} alt="" />
            <figcaption>{postDetail.figcaption[1]}</figcaption>
          </figure>
        </div>
        <div className="postDetail__info-item">
          <p>{postDetail?.description[2]}</p>
          <figure>
            <img src={postDetail.image[4].url} alt="" />
            <figcaption>{postDetail.figcaption[2]}</figcaption>
          </figure>
        </div>
        <div className="postDetail__info-item">
          <p>{postDetail?.description[3]}</p>
          <figure>
            <img src={postDetail.image[5].url} alt="" />
            <figcaption>{postDetail.figcaption[3]}</figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}
