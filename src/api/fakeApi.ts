export interface ServiceState {
  id: number;
  name: string;
  image: string;
  service: ServiceType[];
}
export interface ServiceType {
  sName: string;
  price: number;
  desc: string;
}
export const arrServices: ServiceState[] = [
  {
    id: 1,
    name: "Đà Nẵng",
    image:
      "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg?tr=dpr-2,w-675",
    service: [
      {
        sName: "Khách sạn",
        price: 1500000,
        desc: "Miễn phí Buffet sáng",
      },
      {
        sName: "Xe máy tự lái",
        price: 150000,
        desc: "Nhận xe từ 6h sáng đến 12h đêm",
      },
      {
        sName: "Ô tô tự lái",
        price: 1000000,
        desc: "Nhận xe từ 6h sáng đến 12h đêm",
      },
    ],
  },
  {
    id: 2,
    name: "Yên Bái",
    image:
      "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg",
    service: [
      {
        sName: "Khách sạn",
        price: 1500000,
        desc: "Miễn phí Buffet sáng",
      },
      {
        sName: "Xe máy tự lái",
        price: 150000,
        desc: "Nhận xe từ 6h sáng đến 12h đêm",
      },
      {
        sName: "Ô tô tự lái",
        price: 1000000,
        desc: "Nhận xe từ 6h sáng đến 12h đêm",
      },
    ],
  },
  {
    id: 3,
    name: "Quảng Ninh",
    image:
      "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-2.jpg?tr=dpr-2,w-675",
    service: [
      {
        sName: "Khách sạn",
        price: 1500000,
        desc: "Miễn phí Buffet sáng",
      },
      {
        sName: "Thuê ca nô du lịch",
        price: 2000000,
        desc: "Vòng quanh ngắm các hang động nổi tiếng",
      },
      {
        sName: "Mô tô nước",
        price: 200000,
        desc: "200000k/ 1 lượt/15 phút",
      },
    ],
  },
  {
    id: 4,
    name: "Nha Trang",
    image:
      "https://tourvinpearllandnamhoian.com/uploads/images/images/kinh-nghiem-du-lich-vinpearl-nha-trang.jpg",
    service: [
      {
        sName: "Khách sạn",
        price: 2000000,
        desc: "Miễn phí Buffet sáng",
      },
      {
        sName: "Thuê ca nô du lịch",
        price: 2000000,
        desc: "Vòng quanh ngắm các hang động nổi tiếng",
      },
      {
        sName: "Mô tô nước",
        price: 200000,
        desc: "200000k/ 1 lượt/15 phút",
      },
    ],
  },
  {
    id: 5,
    name: "Quy Nhơn",
    image:
      "https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_04_28/dao-nhon-ly1-7487.jpg",
    service: [
      {
        sName: "Khách sạn",
        price: 1200000,
        desc: "Miễn phí Buffet sáng",
      },
      {
        sName: "Thuê ca nô du lịch",
        price: 1000000,
        desc: "Tham quan Hòn Khô,Kỳ Co",
      },
      {
        sName: "Trọn gói tour Hòn Khô - Kỳ Co - ăn uống",
        price: 400000,
        desc: "Giá đã bao gồm tiền vé và 1 bữa ăn hải sản cho mỗi người",
      },
    ],
  },
  {
    id: 6,
    name: "Đắk Nông",
    image:
      "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-1.jpg",
    service: [
      {
        sName: "Home Stay",
        price: 1500000,
        desc: "View thung lũng được trải nghiệm bình minh và hoàng hôn",
      },
      {
        sName: "Xe máy tự lái",
        price: 150000,
        desc: "Nhận xe từ 6h sáng đến 12h đêm",
      },
      {
        sName: "Trọn gói tour Hòn Khô - Kỳ Co - ăn uống",
        price: 400000,
        desc: "Giá đã bao gồm tiền vé và 1 bữa ăn hải sản cho mỗi người",
      },
    ],
  },
];
