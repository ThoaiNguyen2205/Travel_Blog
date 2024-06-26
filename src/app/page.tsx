"use client";
import "../style/pages/home/home.scss";
import { TypePost, arrPost, arrTours } from "../../public/assets/data/data";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/configStore";
// import { TypeTours } from "@/redux/reducers/travelReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { TypeTours } from "@/redux/reducers/travelReducer";

type Props = {};
export default function Home({}: Props) {
  const [isLibraryVisible, setIsLibraryVisible] = useState(false);
  // const { arrTours } = useSelector((state: RootState) => state.travelReducer);

  const renderPost = (): JSX.Element[] => {
    return arrPost.map((post: TypePost, index) => {
      return (
        <Link
          href={`/posts/${post.id}`}
          className="posts__list-item col-lg-4 col-md-6 col-12"
          key={index}
        >
          <div className="posts__item-img">
            <img src={post.image[0].url} alt="" />
          </div>
          <div className="posts__item-text text-center">
            <p>{post.name}</p>
            <h5 className="fw-light">{post.title}</h5>
            <p>{post.day}</p>
          </div>
        </Link>
      );
    });
  };
  const renderTours = (): JSX.Element[] => {
    return arrTours.map((tour: TypeTours, index: any) => {
      return (
        <div className="tours__list-item col-lg-4 col-md-6 col-12">
          <div className="tours__item my-4">
            <div className="tours__item-img">
              <img src={tour.image[0].url} alt="" />
              <div className="tours__item-button text-center">
                <Link href={`/details/${tour.id}`}>
                  <FontAwesomeIcon
                    icon={faEye}
                    style={{ width: 20, height: 20 }}
                  />
                </Link>
              </div>
            </div>
            <div className="tours__item-text text-center mt-3">
              <h4 className="fw-light">{tour.name}</h4>
            </div>
          </div>
        </div>
      );
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".library");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight;
        if (isVisible) {
          setIsLibraryVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call it once on mount in case the component is already visible
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="posts container" id="posts">
        <div className="posts__title title">
          <h2>BÀI VIẾT MỚI</h2>
          <p>Cùng tôi trải nghiệm chuyến đi khó quên.</p>
        </div>

        <div className="posts__list row">{renderPost()}</div>
      </section>
      <section className="tours container" id="tours">
        <div className="tours__title title">
          <h2>DU LỊCH</h2>
          <p>Những địa điểm du lịch trong nước không thể bỏ qua.</p>
        </div>
        <div className="tours__list row">{renderTours()}</div>
      </section>
      <section className="library container" id="library">
        <div className="library__title title">
          <h2>THƯ VIỆN</h2>
          <p>Những tấm ảnh checkin ấn tượng</p>
        </div>
        <div
          className={`library__content  ${isLibraryVisible ? "fadeInUp" : ""}`}
        >
          <div className="library__item">
            <div className="library__item-img">
              <img src="./assets/img/pic1.jpeg" alt="pic1" />
            </div>
            <div className="library__item-overlay ">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
          <div className="library__item ">
            <div className="library__item-img">
              <img src="./assets/img/pic2.jpg" alt="pic2" />
            </div>
            <div className="library__item-overlay ">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
          <div className="library__item ">
            <div className="library__item-img">
              <img src="./assets/img/pic3.jpeg" alt="pic3" />
            </div>
            <div className="library__item-overlay">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
          <div className="library__item">
            <div className="library__item-img">
              <img src="./assets/img/pic4.jpeg" alt="pic4" />
            </div>
            <div className="library__item-overlay">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
          <div className="library__item">
            <div className="library__item-img">
              <img src="./assets/img/pic5.jpeg" alt="pic5" />
            </div>
            <div className="library__item-overlay ">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
          <div className="library__item">
            <div className="library__item-img">
              <img src="./assets/img/pic6.jpeg" alt="pic6" />
            </div>
            <div className="library__item-overlay">
              <div className="overlay__text">
                <p>Ảnh sưu tầm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
