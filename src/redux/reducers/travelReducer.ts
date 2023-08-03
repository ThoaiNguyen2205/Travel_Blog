import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ToursState = {
  arrTours: [
    {
      id: "daNang",
      name: "Đà Nẵng",
      shortdesc: "Cầu vàng - Biểu tượng mới của du lịch Đà Nẵng",
      description: [
        "Cầu Vàng Đà Nẵng là công trình nằm trong quần thể du lịch Sun World Bà Nà Hills Đà Nẵng. Cây cầu này tọa lạc ở vị trí lưng chừng núi và ở độ cao hơn 1400m so với mực nước biển. Cầu Vàng gây “chấn động” không chỉ bởi vị trí độc đáo mà còn bởi thiết kế vô cùng ấn tượng.Cây cầu nối liền ga Marseille với vườn hoa Thiên Thai, được thiết kế dài 150m với 8 nhịp, 7 trụ và 2 mố. Nhìn toàn cảnh, cây cầu uốn lượn mềm mại như một dải lụa óng vàng vắt ngang chừng núi và được nâng niu bởi bàn tay phật khổng lồ.",
        "Đứng trên cây cầu duy nhất không bắc qua sông của thành phố Đà Nẵng này, du khách có thể thu vào tầm mắt cảnh núi non hùng vĩ với những cánh rừng nguyên sinh trùng điệp. Xa xa là toàn cảnh Đà Thành xinh đẹp. Vào những ngày nắng đẹp và nhiều mây, khung cảnh nơi đây lung linh, huyền ảo tựa tiên cảnh chốn trần gian khó bút nào tả xiết. Bởi vậy, Cầu Vàng Đà Nẵng nhận được cơn mưa lời khen, hàng loạt danh hiệu và những ghi nhận kỷ lục hiếm có",
      ],

      image: [
        {
          url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg?tr=dpr-2,w-675",
        },
        {
          url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-5.jpg?tr=dpr-2,w-675",
        },
        {
          url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-9.jpeg?tr=dpr-2,w-675",
        },
      ],
      related: [
        {
          id: "yenBai",
          name: "Yên Bái",
          shortdesc: "Mù Cang Chải - Điểm đến hấp dẫn du khách",
          image: [
            {
              url: "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg",
            },
          ],
        },
        {
          id: "quangNinh",
          name: "Quảng Ninh",
          shortdesc: "Vịnh Hạ Long - Di sản thiên nhiên Thế giới",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-2.jpg?tr=dpr-2,w-675",
            },
          ],
        },
        {
          id: "nhaTrang",
          name: "Nha Trang",
          shortdesc: "Vinpearland Nha Trang - Thiên đường du lịch",
          image: [
            {
              url: "https://tourvinpearllandnamhoian.com/uploads/images/images/kinh-nghiem-du-lich-vinpearl-nha-trang.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "yenBai",
      name: "Yên Bái",
      shortdesc: "Mù Cang Chải - Điểm đến hấp dẫn du khách",
      description: [
        'Đến với Mù Cang Chải dù chỉ một lần, du khách cũng cảm nhận được sự trù phú của thiên nhiên, sự đặc sắc của văn hóa, sự ấm áp tình người. Đường lên Mù Cang Chải tuy xa và khó khăn song lại rất thú vị. Quang cảnh thay đổi liên tục trên đường, du khách chưa kịp ngắm hết những ngôi nhà sàn Thái trên cánh đồng Mường Lò rộng lớn với bạt ngàn hoa ban trắng đã được đến với những con đường quanh co, uốn khúc trên các sườn đồi dốc đứng. Các vận động địa chất đã tạo cho Mù Cang Chải những đỉnh núi cao như: Púng Luông (2.985m), Phu Ba (2.512m), Mồ Dề (2.100m)… Qua đèo Khau Phạ (cao 2.100m), đây là đỉnh núi cao nhất trong "tứ đại đỉnh đèo" Tây Bắc được bao phủ trong biển mây bồng bềnh, khí hậu mát mẻ quanh năm. Đỉnh đèo Cao Phạ còn là địa điểm đẹp đứng thứ 4 trên thế giới để cho các phi công bay dù lượn, cho những ai ưa thích cảm giác mạnh, trò chơi mạo hiểm để chinh phục bầu trời và cùng được thỏa sức chiêm ngưỡng, khám phá vẻ đẹp thiên nhiên hùng vĩ của đất trời từ trên không trung qua trò chơi dù lượn. Từ đây, cứ từ đèo này qua đèo khác, núi này qua núi khác, du khách sẽ cảm nhận rõ nét sự thay đổi của độ cao, hai bên đường là những triền ruộng bậc thang đẹp mê hồn khiến mỗi chúng ta đều thấy choáng ngợp. ',
        "Mù Cang Chải là huyện vùng cao phía Tây của tỉnh Yên Bái, cách trung tâm thành phố Yên Bái 180km, cách thủ đô Hà Nội hơn 300km về phía Tây Bắc. Vùng đất này nằm dưới chân của dãy núi Hoàng Liên Sơn, ở độ cao trên 2.000m so với mặt biển. Đến Mù Cang Chải, du khách có thể đi đường Quốc lộ 32 bằng hai hướng. Nếu từ Hà Nội, sẽ lên Yên Bái, từ Yên Bái đến Mường Lò 70km, ngủ tại đây để sáng sớm mai đi xe từ Mường Lò, xế trưa sẽ đến Mù Cang Chải. Đoạn này dài gần 100km, nhưng hơn 80km là đường đèo dốc tiến lên liên tục, chừng nào leo đến độ cao 1.750m, sương mây mù mịt là sắp đến thị trấn Mù Cang Chải. Chặng giữa đèo có một miền đất phẳng, hãy nghỉ chân ở đây để thưởng thức thứ cơm lam nếp Tú Lệ dẻo thơm nức tiếng khắp vùng. ",
      ],

      image: [
        {
          url: "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg",
        },
        {
          url: "https://thesinhtouristhanoi.vn/wp-content/uploads/2022/09/Mu-Cang-Chai-thang-9-thang-10-vo-cung-tuyet-dep.jpg",
        },
        {
          url: "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi6.jpg.gif",
        },
      ],
      related: [
        {
          id: "quangNinh",
          name: "Quảng Ninh",
          shortdesc: "Vịnh Hạ Long - Di sản thiên nhiên Thế giới",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-2.jpg?tr=dpr-2,w-675",
            },
          ],
        },
        {
          id: "nhaTrang",
          name: "Nha Trang",
          shortdesc: "Vinpearland Nha Trang - Thiên đường du lịch",
          image: [
            {
              url: "https://tourvinpearllandnamhoian.com/uploads/images/images/kinh-nghiem-du-lich-vinpearl-nha-trang.jpg",
            },
          ],
        },
        {
          id: "quyNhon",
          name: "Quy Nhơn",
          shortdesc: "Kỳ Co - Thiên đường biển đảo của Đất võ",
          image: [
            {
              url: "https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_04_28/dao-nhon-ly1-7487.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "quangNinh",
      name: "Quảng Ninh",
      shortdesc: "Vịnh Hạ Long - Di sản thiên nhiên Thế giới",
      description: [
        "Còn tên gọi Hạ Long ( với ý nghĩa nơi rồng hạ xuống) thì không biết có từ bao giờ chi biết được lần đầu tiên thấy tên Hạ Long là vào cuối thế kỷ 19 trong một số bản đồ hằng hải của quân đội Pháp. và một lần trong tờ tin tức của thành phố Hải Phòng xưa được xuất bản bằng tiếng Pháp. Trong đó có 1 bài viết. Sự xuất hiện của một đôi sinh vật lạ có hình dáng giống với hình tượng con rồng của người Việt. Và được nhìn thấy trên vùng biển của Vịnh Hạ Long ngày nay với tiêu đề ”rồng xuất hiện trên Vịnh Hạ Long”  khi mà  một thiếu úy người Pháp có tên Legderin, là thuyền trưởng của tầu Avalence cùng một số thủy thủ trên tàu bắt gặp một đôi rắn biển khổng lô ba lần ( vào các năm 1898, 1900, 1902) có lẽ những người trên tầu đã liên tưởng đến hình tượng con rồng của người Việt.",
        "Hàng trăm đảo đá, mỗi đảo mang một hình dáng khác nhau hết sức sinh động: hòn Đầu Người, hòn Rồng, hòn Lã Vọng, hòn Cánh Buồm, hòn Gà Chọi, hòn Lư Hương… Tiềm ẩn trong lòng các đảo đá ấy là những hang động tuyệt đẹp gắn với nhiều truyền thuyết thần kỳ như động Thiên Cung, hang Đầu Gỗ, hang Sửng Sốt, hang Trinh Nữ, động Tam Cung… Đó thực sự là những lâu đài của tạo hoá giữa chốn trần gian. Từ xưa, Hạ Long đã được đại thi hào dân tộc Nguyễn Trãi mệnh danh là “kỳ quan đất dựng giữa trời cao”.",
      ],

      image: [
        {
          url: "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-2.jpg?tr=dpr-2,w-675",
        },
        {
          url: "https://golden-lotus-hotel.s3.ap-southeast-1.amazonaws.com/uploads/2021/04/013d407166ec4fa56eb1e1f8cbe183b9/images1089892_1.jpg",
        },
        {
          url: "https://www.dulichhalong.net/images/slide/hang-sung-sot.jpg",
        },
      ],
      related: [
        {
          id: "nhaTrang",
          name: "Nha Trang",
          shortdesc: "Vinpearland Nha Trang - Thiên đường du lịch",
          image: [
            {
              url: "https://tourvinpearllandnamhoian.com/uploads/images/images/kinh-nghiem-du-lich-vinpearl-nha-trang.jpg",
            },
          ],
        },
        {
          id: "quyNhon",
          name: "Quy Nhơn",
          shortdesc: "Kỳ Co - Thiên đường biển đảo của Đất võ",
          image: [
            {
              url: "https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_04_28/dao-nhon-ly1-7487.jpg",
            },
          ],
        },
        {
          id: "dakNong",
          name: "Đắk Nông",
          shortdesc: "Tà Đùng – Khám phá vẻ đẹp đại ngàn ở Đắk Nông",
          image: [
            {
              url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-1.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "nhaTrang",
      name: "Nha Trang",
      shortdesc: "Vinpearland Nha Trang - Thiên đường du lịch",
      description: [
        "Trải dài trên vịnh biển đẹp nhất thế giới, Vinpearl Nha Trang là quần thể nghỉ dưỡng và điểm đến hấp dẫn hiện nay. Hệ thống Vinpearl tại Nha Trang sở hữu hệ thống khách sạn & resort sang trọng, đẳng cấp, công viên giải trí VinWonders Nha Trang, sân golf cùng hệ sinh thái dịch vụ tất cả trong một, đáp ứng trọn vẹn nhu cầu từ nghỉ dưỡng, ẩm thực, vui chơi giải trí, mua sắm đến hội họp chuyên nghiệp.",
        "Vịnh Nha Trang có diện tích khoảng 507 km² bao gồm 19 hòn đảo lớn nhỏ, trong đó Hòn Tre là đảo lớn nhất, với diện tích 32,5 km²; đảo nhỏ nhất là Hòn Nọc chỉ khoảng 4 ha. Vịnh có khí hậu hai mùa rõ rệt Mùa khô kéo dài từ tháng giêng đến tháng 8, mùa mưa từ tháng 9 đến tháng 12; nhiệt độ bình quân hàng năm là 26⁰C; nóng nhất 39⁰C, lạnh nhất 14,4⁰C. Về mặt sinh thái, vịnh Nha Trang là một trong những hình mẫu tự nhiên hiếm có của hệ thống vũng, vịnh trên thế giới bởi nó có hầu hết các hệ sinh thái điển hình, quý hiếm của vùng biển nhiệt đới. Đó là hệ sinh thái đất ngập nước, rạn san hô, rừng ngập mặn, thảm cỏ biển, hệ sinh thái cửa sông, hệ sinh thái đảo biển, hệ sinh thái bãi cát ven bờ. Đặc biệt khu vực Hòn Mun của Vịnh Nha Trang có đa dạng sinh học cao nhất với 350 loài rạn san hô chiếm 40% san hô trên thế giới.",
      ],

      image: [
        {
          url: "https://tourvinpearllandnamhoian.com/uploads/images/images/kinh-nghiem-du-lich-vinpearl-nha-trang.jpg",
        },
        {
          url: "https://img3.thuthuatphanmem.vn/uploads/2019/07/13/anh-bai-da-o-nha-trang_085935594.jpg",
        },
        {
          url: "https://img3.thuthuatphanmem.vn/uploads/2019/07/13/anh-dao-hon-tam-nha-trang_085935719.jpg",
        },
      ],
      related: [
        {
          id: "quyNhon",
          name: "Quy Nhơn",
          shortdesc: "Kỳ Co - Thiên đường biển đảo của Đất võ",
          image: [
            {
              url: "https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_04_28/dao-nhon-ly1-7487.jpg",
            },
          ],
        },
        {
          id: "dakNong",
          name: "Đắk Nông",
          shortdesc: "Tà Đùng – Khám phá vẻ đẹp đại ngàn ở Đắk Nông",
          image: [
            {
              url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-1.jpg",
            },
          ],
        },
        {
          id: "daNang",
          name: "Đà Nẵng",
          shortdesc: "Cầu vàng - Biểu tượng mới của du lịch Đà Nẵng",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg?tr=dpr-2,w-675",
            },
          ],
        },
      ],
    },
    {
      id: "quyNhon",
      name: "Quy Nhơn",
      shortdesc: "Kỳ Co - Thiên đường biển đảo của Đất võ",
      description: [
        "Kỳ Co nằm cách trung tâm thành phố Quy Nhơn hơn 20 km về phía đông nam. Đây được coi là một địa điểm du lịch lý thú nhất tại Quy Nhơn với 2 mặt giáp núi và một mặt giáp biển. Rất thích hợp cho các dân phượt bằng xe máy. Bạn có thể di chuyển bằng ô tô nhưng đi bằng xe máy sẽ tiện hơn cho việc tham thú và khám phá nơi này.Quy Nhơn có khí hậu ôn hòa thế nên bạn có thể đến đây vào bất cứ thời gian nào trong năm nhưng để thuận tiện nhất thì bạn nên đi vào thời gian khoảng từ tháng 2 đến tháng 8. Lúc này thời tiết mát mẻ, ít mưa hơn dễ dàng cho việc đi lại và thăm quan.",
        "Vào buổi sáng khi mặt trời vừa ló rạng  nước biển Kỳ Co trong xanh như một tấm gương phản chiếu của bầu trời. Bạn có thể ra biển sớm để ngắm nhìn cảnh hoàng hôn thơ mộng. Những giọt sương mai còn đọng lại trên những phiến lá rơi nhỏ từng giọt vào lòng cát mịn. Thật yên tĩnh, thật thanh bình dễ chịu. Ánh mặt trời đỏ lừ, dần dần hiện ra sau đám sương mây mờ ảo. Những con thuyền chập trùng trên biển với câu hát khoan hò cho một ngày rạng rỡ bội thu.",
      ],

      image: [
        {
          url: "https://images2.thanhnien.vn/Uploaded/minhnguyet/2022_04_28/dao-nhon-ly1-7487.jpg",
        },
        {
          url: "https://lh5.googleusercontent.com/hiTsVJVFB-gHAFPfDiAV61_ER0HEHjtGp4H_w-k0ZDlrqzCxWrd7wkAVu1XFvKGCYjk5RPMKEW7R9psY2rIduhb9A378RI5eiRLUogyWxd1TFe4xJhKl7sfwKa2cAhYq0hYRBVLN",
        },
        {
          url: "https://lh4.googleusercontent.com/5Qi1vuhR_LPF5frRgUQ9h_XPE8BuLGyUh43i7Srx4DNagiQ9kea4fjQC6mr89fGPwW60oyqn_GhgCo5KJnwMzW_3BITkAaHZkcKfxBMwKab2Sp0uzoJgvKrh5dKK3hiGWHBHsAm3",
        },
      ],
      related: [
        {
          id: "dakNong",
          name: "Đắk Nông",
          shortdesc: "Tà Đùng – Khám phá vẻ đẹp đại ngàn ở Đắk Nông",
          image: [
            {
              url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-1.jpg",
            },
          ],
        },
        {
          id: "daNang",
          name: "Đà Nẵng",
          shortdesc: "Cầu vàng - Biểu tượng mới của du lịch Đà Nẵng",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg?tr=dpr-2,w-675",
            },
          ],
        },
        {
          id: "yenBai",
          name: "Yên Bái",
          shortdesc: "Mù Cang Chải - Điểm đến hấp dẫn du khách",
          image: [
            {
              url: "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "dakNong",
      name: "Đắk Nông",
      shortdesc: "Tà Đùng – Khám phá vẻ đẹp đại ngàn ở Đắk Nông",
      description: [
        "Giữa mênh mông biển nước là thế, lại nhô lên những quả đồi sừng sững tự như hòn đảo ngọc được kiến tạo từ đất đỏ bazan, ánh lên giữa mặt hồ như một tấm gương khổng lồ, khiến nhiều người không khỏi thốt lên trầm trồ trước cảnh đẹp nên thơ này.Với vẻ đẹp yên bình giữa thiên nhiên khoáng đạt và không kém phần độc đáo của gần hơn 40 cồn đảo với nhiều hình thù khác nhau nhấp nhô mềm mại giữa mặt hồ, Tà Đùng được ví von Như “Vịnh Hạ Long” cũng hoàn toàn hợp lý.",
        "Hồ Tà Đùng gắn liền với đập thuỷ điện Đồng Nai, nằm trong khu bảo tồn thiên nhiên Tà Đùng thuộc tỉnh Đắk Nông. Về mặt địa lý, Hồ Tà Đùng thuộc cả hai địa phận của xã Đắk Som và xã Đắk P’lao.Với diện tích rộng lên đến 5000 ha, bao gồm 40 hòn đảo lớn nhỏ khác nhau, là nơi sinh sống của nhiều loại chim đặc hữu. Diện tích hồ kéo dài đến Tận Bảo Lộc, Lâm Đồng, chính vì thế, nơi đây không chỉ có thiên nhiên tươi đẹp mà còn có tiết trời mát mẻ, dễ chịu rất thích hợp để du lịch, khám phá.",
      ],

      image: [
        {
          url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-1.jpg",
        },
        {
          url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/du-lich-ta-dung-2.jpg",
        },
        {
          url: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2021/01/ho-ta-dung.jpg",
        },
      ],
      related: [
        {
          id: "daNang",
          name: "Đà Nẵng",
          shortdesc: "Cầu vàng - Biểu tượng mới của du lịch Đà Nẵng",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/12/cau-vang-da-nang-3.jpg?tr=dpr-2,w-675",
            },
          ],
        },
        {
          id: "yenBai",
          name: "Yên Bái",
          shortdesc: "Mù Cang Chải - Điểm đến hấp dẫn du khách",
          image: [
            {
              url: "https://yenbai.gov.vn/noidung/tintuc/PublishingImages/Thong-Tin-Tinh/Thang-Canh-Du-Lich/mu-cang-chi.jpg",
            },
          ],
        },
        {
          id: "quangNinh",
          name: "Quảng Ninh",
          shortdesc: "Vịnh Hạ Long - Di sản thiên nhiên Thế giới",
          image: [
            {
              url: "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-2.jpg?tr=dpr-2,w-675",
            },
          ],
        },
      ],
    },
  ],
  arrServices: [],
  originalArrServices: [],
};
export interface ToursState {
  arrTours: TypeTours[];
  arrServices: TypeService[];
  originalArrServices: TypeService[];
}
export interface TypeTours {
  id: string;
  name: string;
  shortdesc: string;
  description: string[];
  image: Image[];
  related: Related[];
}
export interface TypeService {
  id: number;
  name: string;
  image: string;
  service: DetalService[];
}
export interface DetalService {
  sName: string;
  price: number;
  desc: string;
}
export interface Image {
  url: string;
}
export interface Related {
  id: string;
  name: string;
  shortdesc: string;
  image: Image[];
}

const travelReducer = createSlice({
  name: "travelReducer",
  initialState,
  reducers: {
    getAllServices: (
      state: ToursState,
      action: PayloadAction<TypeService[]>
    ) => {
      state.arrServices = action.payload;
      state.originalArrServices = action.payload;
    },
    sortAscending: (state: ToursState, action: PayloadAction) => {
      state.arrServices.sort((a, b) => (a.id > b.id ? 1 : -1));
    },
    sortDecrease: (state: ToursState, action: PayloadAction) => {
      state.arrServices.sort((a, b) => (a.id > b.id ? -1 : 1));
    },
    // searchName: (state: ToursState, action) => {
    //   const key = action.payload.toLowerCase();
    //   state.arrServices = state.originalArrServices.filter((obj) =>
    //     obj.name.toLowerCase().includes(key)
    //   );
    // },
  },
});

export const { getAllServices, sortAscending, sortDecrease } =
  travelReducer.actions;

export default travelReducer.reducer;
