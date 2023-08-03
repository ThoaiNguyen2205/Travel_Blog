"use client";
import { RootState } from "@/redux/configStore";
import { TypeTours } from "@/redux/reducers/travelReducer";
import React from "react";
import { useSelector } from "react-redux";

import "../../style/pages/destinations/destinations.scss";
import Link from "next/link";
export default function Destination() {
  const { arrTours } = useSelector((state: RootState) => state.travelReducer);
  const renderDestination = (): JSX.Element[] => {
    return arrTours.map((des: TypeTours, index: number) => {
      return (
        <div key={index} className="destinations__list-item" id={des.id}>
          <div className="destinations__item-title">
            <h3>
              <Link href={`/details/${des.id}`}>{des.name}</Link>
            </h3>
          </div>
          <div className="destinations__item-img">
            {des.image.map((img, index) => {
              return (
                <figure>
                  <img src={img.url} alt="" />
                  <figcaption>{des.shortdesc}</figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      );
    });
  };
  return (
    <section className="destinations container">
      <div className="destinations__title title">
        <h2>ĐIỂM DU LỊCH</h2>
        <p>Những địa điểm du lịch chắc hẳn bạn không thể bỏ qua !!!</p>
      </div>
      <div className="destinations__list row">{renderDestination()}</div>
    </section>
  );
}
