"use client";
import { ServiceState, arrServices } from "@/api/fakeApi";
import servicesApi from "@/api/servicesApi";
import axios from "axios";
import { useEffect, useState } from "react";
import "../../style/pages/service/service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/configStore";
import {
  ToursState,
  TypeService,
  getAllServices,
  sortAscending,
  sortDecrease,
} from "@/redux/reducers/travelReducer";
function Services() {
  const [search, setSearch] = useState("");
  const { arrServices } = useSelector(
    (state: RootState) => state.travelReducer
  );
  const dispatch = useDispatch();
  const getAllServicerApi = async () => {
    try {
      const res: any = await servicesApi.getAllServicer();
      const action = getAllServices(res);
      dispatch(action);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllServicerApi();
  }, []);
  const handleSortAscending = () => {
    dispatch(sortAscending());
  };
  const handleSortDecrease = () => {
    dispatch(sortDecrease());
  };
  const renderService = (): JSX.Element[] => {
    return arrServices
      .filter((item) => {
        return search.toLowerCase() === ""
          ? item
          : item.name.toLowerCase().includes(search.toLowerCase());
      })
      .map((ser: ServiceState, index) => {
        return (
          <tr className="" key={index}>
            <td>{ser.id}</td>
            <td>{ser.name}</td>
            <td>
              <img src={ser.image} alt="" width={150} height={100} />
            </td>
            <td>
              <table className="table table-bordered text-center">
                <thead>
                  <tr className="">
                    <th className="colum-1">Dịch vụ</th>
                    <th className="colum-2">Giá tiền</th>
                    <th className="colum-3">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  {ser.service.map((serDetai, index) => {
                    return (
                      <tr>
                        <td>{serDetai.sName}</td>
                        <td>{serDetai.price.toLocaleString()} VNĐ</td>
                        <td>{serDetai.desc}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </td>
            <td>
              <button>Sửa</button>
            </td>
          </tr>
        );
      });
  };
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    console.log(value);
    setSearch(value);
    // const action = searchName(value);
    // dispatch(action);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <section className="service container">
      <div className="service__title title">
        <h2>Bảng giá 1 số dịch vụ du lịch</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          itaque.
        </p>
      </div>
      <div className="service__search">
        <form className="service__search-form" onSubmit={handleSubmit}>
          <input
            id="myInput"
            placeholder="Địa điểm cần tìm ...."
            className="form-control w-25"
            onChange={handleChange}
          />
        </form>
      </div>
      <table className="service__table table align-middle table-bordered">
        <thead>
          <tr className="text-center">
            <th className="table__col-id">
              <span>Mã số</span>
              <FontAwesomeIcon
                icon={faArrowDown}
                className="service__table-icons"
                onClick={handleSortDecrease}
              />
              <FontAwesomeIcon
                icon={faArrowUp}
                className="service__table-icons"
                onClick={handleSortAscending}
              />
            </th>
            <th className="table__col-destination">
              <span>Điểm du lịch</span>
              <FontAwesomeIcon icon={faFilter} />
            </th>
            <th className="table__col-img">Hình ảnh</th>
            <th className="table__col-service">Bảng giá dịch vụ</th>
            <th className="table__col-note">Ghi chú</th>
          </tr>
        </thead>
        <tbody>{renderService()}</tbody>
      </table>
    </section>
  );
}
export default Services;
