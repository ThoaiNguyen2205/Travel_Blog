"use client";
import "../../../style/pages/details/details.scss";
import { RootState } from "@/redux/configStore";
import { Related, TypeTours } from "@/redux/reducers/travelReducer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
interface TypeParams {
  slug: string;
}
export default function Details({ params }: { params: TypeParams }) {
  const { slug } = params;
  const { arrTours } = useSelector((state: RootState) => state.travelReducer);

  const toursDetail: TypeTours | undefined = arrTours.find(
    (tours: TypeTours) => tours.id === String(slug)
  );
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  if (!toursDetail) {
    return (
      <div className="text-center mt-5">
        <h1>Không tìm thấy dữ liệu</h1>
        <button className="btn btn-success" onClick={handleClick}>
          Quay về trang chủ
        </button>
      </div>
    );
  }
  const renderToursRelated = (): JSX.Element[] => {
    return toursDetail.related.map((reTours, index) => {
      return (
        <div
          className="related__list-item col-lg-4 col-md-6 col-12"
          key={index}
        >
          <Link href={`/details/${String(reTours.id)}`}>
            <div className="related__item-img ">
              <img src={reTours.image[0].url} alt="" className="w-100" />
            </div>
            <div className="related__item-title">
              <h5>{reTours.shortdesc}</h5>
            </div>
          </Link>
        </div>
      );
    });
  };

  return (
    <div>
      <section className="details container">
        <div className="details__title">
          <h3 className="text-center">{toursDetail?.shortdesc}</h3>
          <img src={toursDetail?.image[0].url} alt="" />
        </div>
        <div className="details__item row">
          <div className="details__item-img col-6">
            <img src={toursDetail?.image[1].url} alt="" />
          </div>
          <div className="details__item-text col-6">
            <p>{toursDetail?.description[0]}</p>
          </div>
        </div>
        <div className="details__item row">
          <div className="details__item-text col-6">
            <p>{toursDetail?.description[1]}</p>
          </div>
          <div className="details__item-img col-6">
            <img src={toursDetail?.image[2].url} alt="" />
          </div>
        </div>
      </section>
      <section className="related container">
        <div className="related__title">
          <h3>Có thể bạn quan tâm</h3>
        </div>
        <div className="related__list row">{renderToursRelated()}</div>
      </section>
    </div>
  );
}
