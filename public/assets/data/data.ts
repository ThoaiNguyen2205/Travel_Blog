import { Image } from "@/redux/reducers/travelReducer";
export interface TypePost {
  name: string;
  title: string;
  image: Image[];
  description: string[];
  day: string;
  figcaption: string[];
  id: string;
}

export const arrPost: TypePost[] = [
  {
    id: "GEORGIA",
    name: "GEORGIA",
    title: "GEORGIA – LỊCH TRÌNH VÀ KINH NGHIỆM",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/DSC06981_petit4000-960x384.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/DSC06952_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/DSC02237_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/DSC02209_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/20230513_134055_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2023/05/DJI_0621_signe_petit2048.jpg",
      },
    ],
    figcaption: [
      "Cảnh dọc đường trên Military Road. Đỉnh Shani 4451 m",
      "Tbilisi",
      "Sighnaghi – thành phố tình yêu",
      " Bên trong tu viện Shiomgvime",
    ],
    description: [
      "Azerbaijan chủ yếu theo đạo Hồi. Còn Georgia và Armenia ngày xưa là hai vương quốc đầu tiên trên thế giới theo đạo Thiên Chúa. Vì thế những di sản nghệ thuật tôn giáo, nhà thờ, tu viện cổ vừa là kho báu của hai đất nước này, vừa là điểm nhấn của khung cảnh thiên nhiên tuyệt mỹ. Dải Caucasus, tổng độ dài 700 km, với nhiều đỉnh núi cao trên 5000 m, ngăn giữa Nga và Georgia, Azerbaijan vẫn còn hoang sơ. Chỉ có ba tuyến đường cho xe cơ giới nối hai phía Bắc Nam, trong đó tuyến Military Road nối Nga và Georgia, ngang qua chân núi Kazbek cao 5047 m là nổi tiếng nhất",
      "Nói đến Georgia thì hẳn phải nhắc tới chữ Georgia, với bảng chữ cái một mình một kiểu, kí hiệu nào cũng tròn xinh chúm chím. Sau mấy ngày ở Georgia thì mình cũng học được ba từ: “ma đ lốp bà” – cám ơn, “ki” – có, và “ara” – không.Còn mấy từ như taxi, hotel, toilet thì ai cũng hiểu nên may quá không phải học.",
      "Tuy ở lề châu Á nhưng văn hóa, tập quán đến mặt mũi người Georgia giống châu Âu hơn. Họ vẫn tốt bụng nhưng không vồ vập, tức là sẽ không có chuyện đi một chuyến có vài người hỏi cưới như ở Ấn Độ, Pakistan. Cá nhân mình thấy du lịch ở Georgia rất dễ chịu và an toàn cho mọi đối tượng nam, nữ, bà già, trẻ nhỏ.Thậm chí là an toàn hơn phần lớn các nước Tây Âu bây giờ. ",
      "Nếu bạn là người đã nhìn phong cảnh châu Âu, Bắc Mỹ, Bắc Ấn, Tân Cương đến quen mắt thì mình phải nói trước là cảnh Georgia không quá đẹp đến ngỡ ngàng. Nhưng Georgia có cái “vibes” rất quyến rũ, vừa cổ điển vừa chân phương đến mức mình vừa về đã muốn quay lại ngay. Cái này khó tả, bạn phải đến mới biết được.",
    ],
    day: "31/05/2023",
  },
  {
    id: "EURO",
    name: "EURO",
    title: "10 BÍ QUYẾT GIẢM KINH PHÍ KHI DU LỊCH CHÂU ÂU",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2022/09/DSC07431_signe_petit2048-2-960x384.jpg",
      },
      {
        url: "	https://cherrytree.fr/wp-content/uploads/2022/09/DSC08336_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2022/09/DSC03888_signe_petit2048.jpg",
      },
      {
        url: "	https://cherrytree.fr/wp-content/uploads/2022/09/DSC03464_signe_petit2048.jpg",
      },
      {
        url: "	https://cherrytree.fr/wp-content/uploads/2022/09/DJI_0278_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2022/09/DSC08165_signe_petit2048.jpg",
      },
    ],
    figcaption: [
      "Mùa xuân rợp hoa ở châu Âu - Toulouse  Pháp",
      "Mùa xuân ở châu Âu là khoảng thời gian thích hợp để có một chuyến đi hoàn hảo – Tuscany Italy",
      "Nếu đi du lịch trái mùa, bạn sẽ dễ tìm được những chỗ như thế này cho riêng mình hơn.",
      "Châu Âu có rất nhiều các tuyến bay của các hãng hàng không giá rẻ đến các đảo du lịch ấm áp quanh năm. Ảnh chụp tại Sicily – Italy",
    ],
    description: [
      "Cách đây vài năm, từng có mốt giật tít giá du lịch châu Âu kiểu “1 tháng 40 tr” hay 30 tr 2 tuần Bắc Âu” … Toàn các con số nghe khó tin, nhưng du lịch châu Âu giá rẻ là có thật. Mọi thứ đều có thể, phụ thuộc vào phong cách du lịch của bạn và thêm vài bí quyết đơn giản nữa.Mình không theo xu hướng tằn tiện, ngủ nhờ, đi nhờ xe, ăn uống dè sẻn … mà mình sẽ liệt kê 10 bí quyết du lịch châu Âu mình hay dùng. Hi vọng giúp bạn bớt chi phí nhưng vẫn tận hưởng được chuyến đi nhé.",
      "Ai ở châu Âu hay đã tới đây một vài lần hẳn biết du lịch châu Âu có mùa rất rõ rệt. Vào mùa cao điểm, giá phòng khách sạn có thể đắt gấp 2, 3 lần. Giá thuê xe tự lái, vé tàu, vé bus có thể tăng 3-5 lần. Đặc biệt là vé máy bay có thể gấp 10 lần.Đấy, chẳng biết trẻ con Tây đi học lúc nào luôn. Được ba bữa lại nghỉ. Tùy vào từng nước mà các kì nghỉ này có thể xê xịch ít nhiều. Chỉ cần vào google “School holiday” kèm tên nước sẽ ra ngay lịch nghỉcủa học sinh. Trong số các kì nghỉ này, “dễ sợ” nhất là tầm 15/7 đến 15/8, và kì nghỉ xuân vì tháng 4 còn có Tuần Lễ Thánh, là lễ hội quan trọng ở một số nước Nam Âu.",
      "Châu Âu có rất nhiều các hãng hàng không giá rẻ và khách du lịch nên tìm cách tận dụng các đợt khuyến mại của các hãng này để nhanh tay vớt được vé bèo nhất. Ví dụ đợt trước covid, mình thường đi chơi cuối tuần với vé máy bay chỉ 30 €/2 chiều, hoặc kinh điển nhất là mình từng đi từ Pháp sang Venice chỉ với 2 €/2 chiều, rẻ hơn cả vé bus đi ra sân bay. Ở châu Âu mà phải bay với giá trên 50 €/1 lượt là hơi cao rồi đấy.",
      "Ở châu Âu dễ vợt được vé rẻ nhưng các hãng bay cũng hay giở “trò mèo”. Đã bao giờ bạn thấy rõ ràng hôm trước mới xem thấy vé giá khá ngon mà cuối tuần rảnh rỗi vào mua thì nó vọt lên gấp mấy lần chưa? Đó là vì các hãng cứ đến thứ 7, Chủ Nhật sẽ nâng giá vé lên. Đừng lo, cứ đợi đến thứ 3 tuần sau, vé sẽ giảm trở lại. Thời điểm tốt nhất để vào mạng xem vé máy bay và chọn mua là thứ ba, thứ tư trong tuần. Chú ý là bí quyết trên chỉ áp dụng khi bạn mua vé sớm. Nếu sát ngày thì giá sẽ chỉ lên chứ không xuống nữa nhé.",
    ],
    day: "25/03/2023",
  },
  {
    id: "MIMOSA",
    name: "FRANCE",
    title: "CON ĐƯỜNG MIMOSA - ĐIỂM ĐẾN THÚ VỊ CHO THÁNG 2",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/02/DSC03799_signe_petit2048-960x384.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/02/DSC04238_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2018/02/5D3_5649_signe_petit.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/02/DSC04085_signe_petit2048-2.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2018/02/5D3_5586_signe_petit.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/02/DSC03992_signe_petit2048.jpg",
      },
    ],
    figcaption: [
      "Một mùa hoa rực rỡ",
      " Duyên hải Corniches des Maures ",
      "Hoa mimosa, tròn bông bông, là mặt trời sưởi ấm mùa đông",
      " Bormes-les-mimosas, điểm đến đầu tiên trên 130km của con đường Mimosa",
    ],
    description: [
      "Khi nhắc tới Provence, miền Đông Nam nước Pháp, hẳn ai cũng nghĩ về những cánh đồng oải hương ngát thơm và tím lịm trong những chiều hè tháng 7. Mùa hè ở vùng đất này đẹp như một bức tranh và lãng mạn như một bản tình ca. Cherry Tree on the Moon .đã có nhiều bài viết và album ảnh giới thiệu mùa hè Provence. Tuy vậy, nếu có cơ hội ghé qua đây dịp cuối đông, bạn sẽ bắt gặp một miền Nam rất khác. Thành phố và làng mạc đều vắng bóng du khách, trầm lắng hơn, chân thực hơn, nhưng vẫn rực rỡ theo một cách rất riêng.",
      "Trong làn gió lạnh tháng 2, các cánh rừng mimosa trên sườn núi cận Alpes sẽ trổ những bông đầu tiên, như những mặt trời nhỏ sưởi ấm vùng bờ biển Địa Trung Hải. Những chùm hoa nhỏ tròn xoe, vàng ruộm, tập trung nhiều trong các khu vườn và khoảng rừng dọc «&nbsp,Con đường Mimosa&nbsp,», đưa hương theo gió và lung linh như những đốm nắng dịu dàng. «&nbsp,Con đường Mimosa&nbsp,» là cái tên người ta hay gọi chặng đường dài 130 km, một phần men theo đường duyên hải Corniches des Maures trước khi hướng lên phía Bắc, bắt đầu ở làng cổ Bornes-les-mimosas và kết thúc tại Grasse, thủ đô nước hoa của thế giới.",
      "Mimosa không phải là loài cây có nguồn gốc châu Âu, càng không đến từ Pháp mà có xuất xứ từ bên kia thế giới – nước Úc. Những nhánh mimosa đầu tiên tới châu Âu sau một chuyến thám hiểm của thuyền trưởng người Anh James Cook, và được giới quí tộc Anh đưa tới miền Nam nước Pháp từ cuối thế kỉ XIX. Từ đó, nhờ khí hậu mùa hè nóng và khô, mùa đông ẩm và ấm áp, lại hợp chất đất chua và ráo nước, một vài cây mimosa ban đầu đã phát triển thành rừng, lấn át cả những loại cây bản địa. Người Pháp sau đó lại mang mimosa sang Việt Nam,trồng nhiều ở Đà Lạt, và gọi tên «&nbsp,trinh nữ vàng&nbsp,».",
      "Ngày nay, hàng trăm giống mimosa khác nhau đã được lai tạo và nhân giống trong các khu vườn trên vùng núi Tanneron, phía Bắc thành phố Cannes. Mimosa trở thành cây cảnh, hoa cắt cành, và hơn hết là nguyên liệu cho rất nhiều loại nước hoa nổi tiếng. Trong tự nhiên, các giống mimosa của Provence có mùi hương cổ điển, ngọt ngào và rạng rỡ. Khi vào nước hoa, mimosa được kết hợp với nhiều hương liệu khác để trở nên hiện đại hơn nhưng tinh tế và gợi cảm hơn.",
    ],
    day: "14/02/2023",
  },
  {
    id: "ARAGON",
    name: "TÂY BAN NHA",
    title: "ARAGON, TÂY BAN NHA – PHẦN 1: VÙNG HỒ MEDIANO VÀ GRADO",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC05121_signe_petit20482-960x384.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04867_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC05066_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC08950_signe_petit2048-1.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC00314_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC05065_signe_petit2048.jpg",
      },
    ],
    figcaption: [
      "Sa mạc  Bardenas Reales, vùng Navarre, giáp biên giới với Aragon",
      " Mùa hạnh nhân ở Aragon vào cuối tháng 2",
      "Chiều xuống bình yên ở vùng rừng núi",
      " Hồ Mediano mùa xuân",
    ],
    description: [
      "Tuy ngày nay Aragon là một vùng thuộc Tây Ban Nha, gồm 3 tỉnh Huesca, Zaragoza và Téruel, nhưng trước đây là một vương quốc. Ai quan tâm một chút đến lịch sử châu Âu có lẽ biết tới vị vua nổi tiếng nhất của Aragon, Fernando II de Aragón, thời thế kỉ XV-XVI. Cuộc hôn nhân giữa Fernando và nữ hoàng tương lai xứ Castilla – Isabel I de Castilla, là cột mốc rất lớn trong lịch sử Tây Ban Nha. Fernando và Isabel cùng nhau trị vì haivương quốc. Họ đem quân xuống phía Nam, tái chiếm vùng Andalusia và chấm dứt sự  cai trị của vác vị vua Hồi giáo trên bán đảo Iberia. Sau này, cháu của họ,Charles Quint, trở thành Hoàng Đế nhà Habsburg, quyền lực nhất Châu Âu thời bấy giờ và hoàn thành quá trình thống nhất Tây Ban Nha vào thế kỉ XVI.",
      "Aragon hiếm khi được khách du lịch theo đoàn để mắt tới. Những người yêu thiên nhiên thường đến đây một mình hoặc theo nhóm nhỏ để tận hưởng núi rừng tĩnh lặng, men theo những dòng suối chảy từ sông băng xanh mê hoặc, lạc bước trên những đồi hoa hạnh nhân nở trắng mùa xuân. Những người thích leo núi sẽ dành nhiều thời gian chinh phục một vài cung trek trong tổng số 20 ngàn km đường mòn. Còn những người yêu kiến trúc cổ sẽ say đắm những ngôi làng nhỏ đẹp như một bài thơ, không quản đường dài ghé thăm những tu viện xa xôi và những lâu đài phong cách ",
      "Tôi yêu Aragon vì vẻ trầm lắng của mảnh đất này. Quang cảnh nơi đây nhuộm màu ghi xám hoài cổ, nom như tấm bưu thiệp cũ kẹp trong một cuốn sách đã bạc màu. Ở đây, giữa thiên nhiên rộng lớn và không gian thoáng đạt, người ta như sống ngoài thời gian. Trên các triền đá hoang sơ, ta vẫn có thể nghe thấy tiếng hát của những chú mục đồng, tiếng những chú chó lùa cừu xuống núi. Cây hương thảo và húng tây tỏa hương trên các cao nguyên, dưới bóng những cây sồi trăm tuổi. Các con đường mòn dẫn ta đến những thôn xóm nhỏ bên bờ suối. Khói lam từ chái bếp quyện lấy nắng chiều nhạt dần. Giản dị và bình yên.",
      "Vùng núi quanh hồ Mediano và Grado là một phần chân dải núi Pyrénées, trước khi nó thoải dần về phía hoang mạc phía Nam. Vào thời Trung Cổ, khi giao thông chưa phát triển, vùng núi hiểm trở này là nơi ẩn dật của các nhà tu khổ hạnh. Vì thế, khắp nơi trong vùng, ta có thể bắt gặp các tu viện từ lớn đến nhỏ, có lịch sử từ thế kỉ X, XI, như Torreciudad, santuario de Bruis, Ermita de San Clemente, Ermita de San Bartolomé, ermita San Juan … Trong đó nổi bật nhất là santuario de  Torreciudad. Ngoài ý nghĩa tôn giáo quan trọng, thu hút hàng ngàn người hành hương mỗi năm, Torreciudad còn là một công trình kiến trúc đẹp. Khung cảnh sơn thủy hữu tình của nơi đây là sự kết hợp hài hòa của những đỉnh núi cao trắng tuyết đầy bí ẩn của dải Pyrénées và làn nước xanh mê hoặc của dòng Cinca.",
    ],
    day: "10/12/2022",
  },
  {
    id: "DOLOMITES",
    name: "ITALYA",
    title: "HIKING DOLOMITES – CADINI DI MISURINA TRONG CÔNG VIÊN TRE CIME",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04048_signe_petit2048-960x384.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04338_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04542_signe_petit2048.jpg",
      },
      {
        url: "	https://cherrytree.fr/wp-content/uploads/2020/09/DSC04035_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04083_signe_petit2048.jpg",
      },
      {
        url: "https://cherrytree.fr/wp-content/uploads/2020/09/DSC04116_signe_petit2048.jpg",
      },
    ],
    figcaption: [
      "Tre Cime, 3 đỉnh núi nổi tiếng vùng Dolomites, Bắc Ý",
      "Refugio Auronzo nhìn từ 1 góc parking khổng lồ",
      "Tre Cime di Lavaredo và rifugio Auronzo",
      " Sương xuống rất nhanh khi mặt trời vừa lặn",
    ],
    description: [
      " Giống như tôi nghĩ, đường mòn này rất dễ đi, chỉ cần lần theo các kí hiệu vẽ bằng 2 màu sơn đỏ, trắng trên đá. Chốc chốc, lại có thêm những ụ đá cao do những người leo núi đi trước để lại. Bạn có thể chọn đường ngắn nhất, dọc theo “sống lưng”, nối giữa phần cao nhất của các đỉnh đồi, lên xuống theo địa hình. Hoặc bạn cũng có thể chọn đường vòng dưới chân đồi, bằng phẳng hơn nhưng sẽ có đoạn đường hơi hẹp và một bên là vực sâu. Tóm lại đường nào cũng được, miễn là đi về hướng Cadini di Misurina thì kiểu gì cũng tới cái viewpoint nổi tiếng",
      "Ba phía còn lại, những rặng núi nhấp nhô như răng cưa chuyển sang màu tím thẫm, rồi dần dần biến hình thành những bóng đen ma mị in trên nền trời tối dần. Thật khó tin rằng các dãy núi kia cách đây hàng triệu năm đã từng là những rặng san hô chìm dưới đáy biển. Sau này, chúng là những pháo đài, những bức tường thành tự nhiên bảo vệ người Ladin trong vùng khỏi ngoại xâm, bảo tồn văn hóa, giúp ngôn ngữ của họ không bị mai một và lưu giữ các truyền thuyết cổ từ hàng ngàn năm. Đến tận bây giờ, khi hầu hết các tộc người nhỏ ở châu Âu dã biến mất từ rất lâu thì vẫn còn hơn 30 ngàn người Ladin sinh sống trong các thung lũng xa xôi vùng Dolomites. ",
      " Mặt trời xuống cũng cùng lúc Trăng lên. Ánh Trăng sáng bạc tản trong sương nhắc tôi nhớ lại một truyền thuyết của người Ladin về nàng công chúa Mặt Trăng. Nàng vì tình yêu với một hoàng tử mà rời cung Trăng xuống Trái Đất sống cùng chàng. Hoàng tử đã nhờ các Người Lùn biến các đỉnh núi vùng Dolomites thành màu Trăng bạc để mong công chúa nguôi đi nỗi nhớ nhà. Núi non vùng Dolomites từ đó được gọi là  'pale mountains' - núi nhạt màu.Nhưng sương xuống nhanh chóng, che mờ mặt Trăng. Không còn nguồn sáng nào giúp tôi định hướng nữa, ngay cả ánh đèn của refugio  Auronzo cũng không thấy. Tôi còn ở cách đó quá xa. Cái bóng to sừng sững của Tre Cime chìm dần vào bóng đêm. Tôi cắm đầu tiến về hướng đó trong ánh sáng trắng đục và đặc quánh. Với tầm nhìn xa chỉ vài mét, tôi vừa đi vừa chăm chú nhìn dưới chân trước khi bước, vì hồi chiều tôi đã thấy một phía sườn đồi có vực khá sâu, mà chỉ có Trời mới biết tôi đang đứng chính xác ở chỗ nào.",
      " Đá trên bề mặt ở khu vực này có hình thù kì lạ, mà tôi chưa từng thấy ở nơi nào khác. Chúng có màu như can xi, trắng nhởn trong luồng sáng mờ ảo và có cạnh nhẵn, tròn, lồi lõm như những khúc xương. Tôi có cảm giác như đang đi giữa nghĩa địa của một loài quái vật. Bỗng tôi chợt hiểu vì sao người xưa luôn coi núi rừng như một nguồn sức mạnh siêu nhiên. Họ tưởng tượng ra nhiều thế lực hắc ám và đưa chúng vào truyền thuyết. Do đó, truyện cổ của người Ladin vùng Dolomites nghe cứ như những bản báo cáo của các vụ án hình sự. Kiểu như: bác tiều phu say rượu bị người khổng lồ túm chân quăng vào gốc cây, hay các cô gái trẻ bị phù thủy bỏ bùa dắt vào rừng … Đại loại cứ bước chân ra khỏi cửa là bạn sẽ có nguy cơ bị một kẻ vô hình hay hữu hình nào đó “bắt nạt”.",
    ],
    day: "10/12/2022",
  },
  {
    id: "ALSACE",
    name: "FRANCE",
    title: "TỚI THĂM CHỢ CỔ TÍCH VÙNG ALSACE",
    image: [
      {
        url: "https://cherrytree.fr/wp-content/uploads/2019/11/DSC07298_signe_petit2048-2-960x384.jpg",
      },
      {
        url: "http://cherrytree.fr/wp-content/uploads/2019/11/DSC07523_signe_petit2048.jpg",
      },
      {
        url: "http://cherrytree.fr/wp-content/uploads/2019/11/DSC07531_signe_petit2048.jpg",
      },
      {
        url: "http://cherrytree.fr/wp-content/uploads/2019/11/DSC07353_signe_petit2048.jpg",
      },
      {
        url: "http://cherrytree.fr/wp-content/uploads/2019/11/DSC07336_signe_petit2048.jpg",
      },
      {
        url: "http://cherrytree.fr/wp-content/uploads/2019/11/DSC07319_signe_petit2048-2.jpg",
      },
    ],
    figcaption: [
      "Eguisheim rất đẹp vào ban đêm",
      "Các loại bánh truyền thống được bày bán khắp nơi",
      "Các cửa hàng được trang trí thật đẹp",
      "Những ngôi làng nhỏ ở Alsace còn giữ được nguyên vẹn lối kiến trúc nhà khung gỗ cổ",
    ],
    description: [
      "Không biết từ bao giờ, vùng đất Alsace miền Đông Bắc nước Pháp, nằm giáp biên giới Đức, đã được mệnh danh là Xứ sở của Giáng Sinh. Từ cuối tháng 11 đến cuối tháng 12, các thành phố nhỏ và những ngôi làng cổ trong vùng mở cửa Christkindelsmärik – «&nbsp,Chợ của cậu bé Jesus&nbsp,» trong tiếng Alsace, hay quen thuộc hơn, là chợ Giáng Sinh. Vào dịp ấy, hàng triệu du khách từ khắp nơi lại vượt đường xa để đến đây. Ai cũng muốn được chạm vào sự huyền diệu của Giáng Sinh, thả mình trong không khí rộn ràng, ngắm nhìn những dải ánh sáng và màu sắc làm say đắm lòng người.",
      "Mặt trời vừa lặn, khí lạnh sẽ bắt đầu len lỏi qua từng hơi thở. Lúc ấy, không còn gì tuyệt vời hơn là được nhâm nhi một ly rượu vang nóng hay thưởng thức một chiếc bánh gừng thơm phức. Đây đó, làn gió Đông mang đến hương quế và vỏ cam tỏa ra từ những ly rượu vang nóng nồng đượm, hòa cùng với mùi nến thơm từ những ngôi nhà ấm cúng, xua bớt cái lạnh thấu xương. Quả thật, đây đúng là một trong những thời khắc đẹp nhất ở châu Âu. Mọi nẻo đường đều được phép nhiệm màu nào đó biến hóa thành một bữa tiệc ngoài trời, ngập tràn ánh sáng, màu sắc, âm thanh và mùi vị. ",
      " Chợ Giáng Sinh trên quảng trường Broglie của Strasbourg, thủ phủ vùng Alsace, ra đời đầu tiên, từ năm 1570, vàcũng là chợ nổi tiếng nhất.&nbsp, Sau đó, các khu chợ cuối năm được tổ chức trên toàn vùng Alsace, từ Wissembourg đến Thann,và rồi lan tỏa khắp châu Âu. Giờ đây, chợ Giáng sinh đã trở thành một trong những nét đẹp tuyệt vời của văn hóa châu Âu mùa Lễ hội.Trong những khu chợ lộng lẫy, người ta có thể tìm thấy rất nhiều đồ trang trí cây thông đẹp mắt, đồ chơi làm bằng gỗ gợi nhớ tuổi thơ. Các quầy bán bánh kẹo, món ăn và đồ uống truyền thống thơm lừng một góc phố. ",
      " Strasbourg ở phía Bắc, Colmar ở phía Nam, là hai thành phố có những khu chợ Giáng Sinh được khách du lịch ghé thăm nhiều nhất vùng Alsace. Vào bất kì thời điểm nào trong năm, đây luôn là hai thành phố tuyệt đẹp, có khu trung tâm vô cùng lãng mạn với những cây cầu nhỏ, những dòng kênh đan xen giữa các dãy nhà khung gỗ. Trong mùa lễ hội, các mặt tiền thiết kế ánh sáng rực rỡ soi bóng xuống mặt nước, lung linh bội phần. Tất cả đều xứng đáng cho một chuyến du ngoạn đến đây vào những ngày cuối năm nhộn nhịp.Tôi từng sống ở Alsace trong vào những tháng năm đẹp nhất của tuổi trẻ và yêu mảnh đất này tha thiết. Các năm trước, đã có 2 bài blog ghi mọi chi tiết về Strasbourg và Colmar&nbsp,được lên sóng. Hôm nay, mình thử đi những nơi khác trong vùng Alsace xem sao nhé.",
    ],
    day: "18/11/2022",
  },
];
export const arrTours = [
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
      "Vịnh Nha Trang có diện tích khoảng 507 km² bao gồm 19 hòn đảo lớn nhỏ, trong đó Hòn Tre là đảo lớn nhất, với diện tích 32,5 km², đảo nhỏ nhất là Hòn Nọc chỉ khoảng 4 ha. Vịnh có khí hậu hai mùa rõ rệt Mùa khô kéo dài từ tháng giêng đến tháng 8, mùa mưa từ tháng 9 đến tháng 12, nhiệt độ bình quân hàng năm là 26⁰C, nóng nhất 39⁰C, lạnh nhất 14,4⁰C. Về mặt sinh thái, vịnh Nha Trang là một trong những hình mẫu tự nhiên hiếm có của hệ thống vũng, vịnh trên thế giới bởi nó có hầu hết các hệ sinh thái điển hình, quý hiếm của vùng biển nhiệt đới. Đó là hệ sinh thái đất ngập nước, rạn san hô, rừng ngập mặn, thảm cỏ biển, hệ sinh thái cửa sông, hệ sinh thái đảo biển, hệ sinh thái bãi cát ven bờ. Đặc biệt khu vực Hòn Mun của Vịnh Nha Trang có đa dạng sinh học cao nhất với 350 loài rạn san hô chiếm 40% san hô trên thế giới.",
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
];
