type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="xl:max-w-[80%] mx-auto">
      <div className="px-3.5">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start">
          <div className="w-1/2">
            <img
              title="Về Chúng Tôi"
              src="http://bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-1.jpg?1697623334994"
              className="img-fluid"
              alt="Về Chúng Tôi"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start md:pl-10 mt-6 md:my-auto md:items-center">
            <div className="px-[50px]">
              <span className="flex items-center uppercase text-red-600 font-bold text-xl mb-4">
                <img
                  src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/image_title_all.png?1697623334994"
                  alt=""
                  className="h-5"
                />
                Về Chúng Tôi
              </span>
              <p className="text-gray-500 text-sm">
                F1GENZ BABIE chính là nơi hội tụ những thương hiệu uy tín, những
                sản phẩm dành cho mẹ và bé chính hãng, chất lượng hàng đầu tại
                Việt Nam. Không những thế, F1GENZ BABIE mang đến cho Ba/mẹ những
                trải nghiệm mua sắm tuyệt vời, đáng tin cậy và cam kết cung cấp
                các dịch vụ chăm sóc khách hàng, tư vấn bán hàng, tư vấn sử dụng
                sản phẩm và các dịch vụ giao nhận hàng tốt nhất.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center md:items-start ">
          <div className="w-1/2">
            <img
              title="Liên hệ"
              src="//bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-2.jpg?1697623334994"
              className="img-fluid"
              alt="Liên hệ"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start md:pl-10 mt-6 md:my-auto md:items-center">
            <div className="px-[50px]">
              <span className="flex items-center uppercase text-red-600 font-bold text-xl mb-4">
                <img
                  src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/image_title_all.png?1697623334994"
                  alt=""
                  className="h-5"
                />
                Liên hệ
              </span>
              <p className="text-gray-500 text-sm">
                Con càng lớn lên, thời gian con ở bên cha mẹ ngày càng ít dần,
                những người bạn bên cạnh chơi đùa cùng con ngày nào dần bị thay
                thế bằng những trò chơi, video trên các sản phẩm công nghệ. Khi
                con bước sang độ tuổi thôi nôi, là lúc con bị cuốn hút nhiều hơn
                từ những Video, trò chơi trên ipad. Thời gian tiếp xúc với con
                đã ít rồi lại còn ít hơn nữa và dần dần con chỉ có thể tìm được
                những người bạn, niềm vui từ những trò công nghệ này. Tình cảm,
                kỹ năng, sự năng động của đứa bé 1 tuổi cũng dần giảm xuống thay
                vì phát triển như những đứa trẻ bình thường khác. Rất may mắn
                cho gia đình, khi chúng tôi sớm nhìn nhận ra được vấn đề với
                con. Nhờ những tư vấn, lời khuyên từ bạn bè, người thân tôi cũng
                đã nhận ra được mình phải làm gì để mang lại niềm vui và tuổi
                thơ cho con trẻ.
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center md:items-start ">
          <form
            method="post"
            action="/postcontact"
            id="contact"
            acceptCharset="UTF-8"
            className="w-1/2"
          >
            <span className="flex items-center uppercase text-red-600 font-bold text-xl mb-4">
              <img
                src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/image_title_all.png?1697623334994"
                alt=""
                className="h-5"
              />
              Kết nối ngay với chúng tôi
            </span>
            <div>
              <input
                type="text"
                id="contactFormName"
                className="w-full border-[1px] border-gray-300 rounded-md p-2 font-medium mb-3"
                name="contact[name]"
                placeholder="Tên của bạn"
                autoCapitalize="words"
                defaultValue=""
              />
              <input
                type="number"
                id="contactFormPhone"
                className="w-full border-[1px] border-gray-300 rounded-md p-2 font-medium mb-3"
                name="contact[phone]"
                placeholder="Số điện thoại của bạn"
                autoCapitalize="words"
                defaultValue=""
              />
              <input
                type="email"
                name="contact[email]"
                placeholder="Email của bạn"
                id="contactFormEmail"
                className="w-full border-[1px] border-gray-300 rounded-md p-2 font-medium mb-3"
                autoCapitalize="off"
                defaultValue=""
              />
              <div className="flex">
                <textarea
                  rows={2}
                  name="contact[body]"
                  className="border border-gray-300 rounded-md p-2 font-medium mb-3 w-[70%] h-[70px]"
                  placeholder="Viết bình luận"
                  id="contactFormMessage"
                  defaultValue=""
                />
                <button
                  type="submit"
                  className="bg-[#2e3192] text-white ml-3 rounded-md w-[calc(30%-10px)] h-[70px]"
                  title="Gửi thông tin"
                >
                  Gửi thông tin
                </button>
              </div>
              <ul className="flex gap-6">
                <li>
                  <a
                    href="/collections/all"
                    target="_blank"
                    aria-label="F1GENZ Babie - Facebook"
                    title="F1GENZ Babie - Facebook"
                  >
                    <img
                      width={30}
                      height={30}
                      loading="lazy"
                      title="F1GENZ Babie - Facebook"
                      src="https://file.hstatic.net/200000588277/file/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.png"
                      alt="F1GENZ Babie - Facebook"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/all"
                    target="_blank"
                    aria-label="F1GENZ Babie - Youtube"
                    title="F1GENZ Babie - Youtube"
                  >
                    <img
                      width={30}
                      height={30}
                      loading="lazy"
                      title="F1GENZ Babie - Youtube"
                      src="https://file.hstatic.net/200000588277/file/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.png"
                      alt="F1GENZ Babie - Youtube"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/all"
                    target="_blank"
                    aria-label="F1GENZ Babie - Pinterest"
                    title="F1GENZ Babie - Pinterest"
                  >
                    <img
                      width={30}
                      height={30}
                      loading="lazy"
                      title="F1GENZ Babie - Pinterest"
                      src="https://file.hstatic.net/200000588277/file/pinterest_a1a15995132a4275845412deba5f1193_icon.png"
                      alt="F1GENZ Babie - Youtube"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/all"
                    target="_blank"
                    aria-label="F1GENZ Babie - TikTok"
                    title="F1GENZ Babie - TikTok"
                  >
                    <img
                      width={30}
                      height={30}
                      loading="lazy"
                      title="F1GENZ Babie - TikTok"
                      src="https://file.hstatic.net/200000588277/file/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.png"
                      alt="F1GENZ Babie - TikTok"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="/collections/all"
                    target="_blank"
                    aria-label="F1GENZ Babie - Instagram"
                    title="F1GENZ Babie - Instagram"
                  >
                    <img
                      width={30}
                      height={30}
                      loading="lazy"
                      title="F1GENZ Babie - Instagram"
                      src="https://file.hstatic.net/200000588277/file/instagram__3__7de3ebbce1f24003b516ca6c1d7c24d5_icon.png"
                      alt="F1GENZ Babie - Instagram"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </form>
          <div className="w-1/2 pl-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6177130569445!2d106.6541090152164!3d10.763917262366853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec413c9d8d%3A0xfd53ac27a1acd021!2zMTgyIMSQLiBMw6ogxJDhuqFpIEjDoG5oLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666321027665!5m2!1svi!2s"
              width={700}
              height={320}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
