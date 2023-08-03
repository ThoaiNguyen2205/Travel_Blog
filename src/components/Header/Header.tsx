"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import "../../style/base/base.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faTwitter,
  faInstagram,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { DropDestinationProps } from "antd/es/menu/menu";

const Header: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isHomeDropdownOpen, setHomeDropdownOpen] = useState(false);
  const [isDestinationDropdownOpen, setDestinationDropdownOpen] =
    useState(false);

  const handleHomeDropdownOpenChange = (flag: boolean) => {
    setHomeDropdownOpen(flag);
  };

  const handleDestinationDropdownOpenChange = (flag: boolean) => {
    setDestinationDropdownOpen(flag);
  };

  const items: MenuProps["items"] = [
    {
      label: <Link href={"/#posts"}>Bài viết mới.</Link>,
      key: "1",
    },
    {
      label: <Link href={"/#tours"}>Điểm du lịch.</Link>,
      key: "2",
    },
    {
      label: <Link href={"/#library"}>Thư viện.</Link>,
      key: "3",
    },
  ];
  const dropDestination: DropDestinationProps["items"] = [
    {
      label: <Link href={"/destinations#daNang"}>Đà Nẵng</Link>,
      key: "1",
    },
    {
      label: <Link href={"/destinations#yenBai"}>Yên Bái</Link>,

      key: "2",
    },
    {
      label: <Link href={"/destinations#quangNinh"}>Quảng Ninh</Link>,

      key: "3",
    },
    {
      label: <Link href={"/destinations#nhaTrang"}>Nha Trang</Link>,

      key: "4",
    },
    {
      label: <Link href={"/destinations#quyNhon"}>Quy Nhơn</Link>,

      key: "5",
    },
    {
      label: <Link href={"/destinations#dakNong"}>Đắk Nông</Link>,

      key: "6",
    },
  ];
  useEffect(() => {
    const handleScroll = () => {
      // Lấy vị trí cuộn hiện tại của trang
      const scrollY = window.scrollY;

      // Nếu vị trí cuộn lớn hơn 250 (tùy chỉnh theo yêu cầu của bạn)
      if (scrollY > 250) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="header container-fluid">
      <div
        className={`header__title ${isHeaderVisible ? "visible" : ""} ${
          isHeaderVisible ? "" : "header-change"
        }`}
      >
        <div
          className={`header__title-link ${isHeaderVisible ? "" : "hidden"}`}
        >
          <Link href={"/"}>
            <h2>Travel is my life !!!</h2>
          </Link>
        </div>
        <div
          className={`header__title-navbar d-flex justify-content-between align-items-center ${
            isHeaderVisible ? "" : "navbar-change"
          }`}
        >
          <div className="header__navbar-link d-flex">
            <div>
              <Link href={"/"} className="navbar__link first-link">
                TRANG CHỦ
              </Link>
              <Dropdown
                menu={{
                  items,
                }}
                onOpenChange={handleHomeDropdownOpenChange}
                open={isHomeDropdownOpen}
                placement={"bottomRight"}
              >
                <span onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined
                      className={`navbar__icons ${
                        isHeaderVisible ? "" : "hidden"
                      }`}
                    />
                  </Space>
                </span>
              </Dropdown>
            </div>
            <div>
              <Link className="navbar__link" href={"/destinations"}>
                ĐIỂM DU LỊCH
              </Link>
              <Dropdown
                menu={{
                  items: dropDestination,
                }}
                onOpenChange={handleDestinationDropdownOpenChange}
                open={isDestinationDropdownOpen}
                placement={"bottomRight"}
              >
                <span onClick={(e) => e.preventDefault()}>
                  <Space>
                    <DownOutlined
                      className={`navbar__icons ${
                        isHeaderVisible ? "" : "hidden"
                      }`}
                    />
                  </Space>
                </span>
              </Dropdown>
            </div>
            <div>
              <Link className="navbar__link" href={"/contact"}>
                LIÊN HỆ
              </Link>
            </div>
          </div>
          <div className="header__navbar-icons">
            <Link href="/">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ width: 22, height: 22 }}
                className="ms-4 navbar__link"
              />
            </Link>
            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ width: 22, height: 22 }}
                className="ms-4 navbar__link"
              />
            </Link>

            <Link href={"/"}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ width: 22, height: 22 }}
                className="ms-4 navbar__link"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={`header__banner `}>
        <img
          src="https://anhnendep.net/wp-content/uploads/2015/07/hinh-nen-italy-venice-2.jpg"
          alt=""
          className={`w-100 ${isHeaderVisible ? "" : "blur"}`}
          style={{ height: "80vh" }}
        />
      </div>
    </div>
  );
};

export default Header;
