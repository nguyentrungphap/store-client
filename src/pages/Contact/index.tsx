type Props = {};

const Contact = (props: Props) => {
  return (
    <div className="container">
      <div className="px-3.5">
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start page-about-new-main">
          <div className="w-1/2">
            <img
              title="Về Chúng Tôi"
              src="http://bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-1.jpg?1697623334994"
              className="img-fluid"
              alt="Về Chúng Tôi"
            />
          </div>
          <div className="w-1/2 flex flex-col items-start md:pl-10 mt-6 md:my-auto md:items-center">
            <div className="section-title-all">
              <span className="flex items-center">
                <img
                  src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/image_title_all.png?1697623334994"
                  alt=""
                />{" "}
                Về Chúng Tôi
              </span>
              <p>
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
        <div className="page-about-new-main-item">
          <div className="page-about-new-main-item-left">
            <img
              title="Liên hệ"
              src="//bizweb.dktcdn.net/100/488/521/themes/913255/assets/page-about-new-image-2.jpg?1697623334994"
              className="img-fluid"
              alt="Liên hệ"
            />
          </div>
          <div className="page-about-new-main-item-right">
            <div className="section-title-all">
              <span>Liên hệ</span>
              <p>
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
        <div className="page-about-new-contact">
          <form
            method="post"
            action="/postcontact"
            id="contact"
            acceptCharset="UTF-8"
          >
            <input name="FormType" type="hidden" defaultValue="contact" />
            <input name="utf8" type="hidden" defaultValue="true" />
            <input
              type="hidden"
              id="Token-d837de247820463a945f99a9ecd12645"
              name="Token"
              defaultValue="0cAFcWeA4mI3C9Jc4Sa2G5yNdDebnLDmrVS4JgnZ-ZCNd8LO4lDVA47AYXH9c4_gXShDqVoSjS3peotcP_3yi4n2WxzfOlPm6TnxpMDKUjWWq3ZabZK1hLnzyLyE1uMB7-OswgW5OlvID6vpncMALxlV4A11FPiQExK_TrVMdwJovrpFmMcqeeImHd_cDKPW_1VmN4V1BXTtoPA5D9NECO9WN18C3v1HZvnu908F7Mg7yM67PnZwT1zKsLfYp5gT28hz0gnY1495S-FESI_tsFkiVigfA3aQnQRmcmfk-pOKcCOKUk7_r-1niLUwhgT6REy8HK-5ygl6w2cQVSAtpsQkVcJCV2uiOfFd-8OMgtGAce4Qy21plJwRbLido01ixaqskyTYX3tRZlAC3J36UlCY8lWcyVz9hOAj1CwTErkrAHs3aGn9iKbKoKX9J62_plGt1D3m9D0Ep67SNL5riw7C6YoFoR7VjBKuYHfn38K2N0KrKyyuB0cCmCyfnUt3hzGAQIpZ-uj4YpvLTZQCCTPey7qhp_k4xAacRhyUZ3w5eB7O_O0fCOgzNejPuC2aJHeDBI3ybisY3ZOqGZ0sCzv-FYFvqhuT3QeSnWwU9mFhnZSNs_DYg-49jfthiHuQOUwYWNeJKLhii8Un35BKidG61-oXHM2bsRg3pauJcY-zT5nTyZyIqyi45z4vtgLm8GPJOAtBl8TOW4CGerhchi3lKoywAmdXZ-5_V5Yq0CGAV3uJ02RxpoAXLYKsAXoQqv9EhMGtSKlHEjwgcXCvNMHbx4_41GOEPtDDizF4sJ11M1owdczhF2aomdo_A7tS41tS3bUXpwzOKcV0RMRm4M_jQ9JHzouAOuJzXUe5BHctHMG4g-MnXYies"
            />{" "}
            <div className="section-title-all">
              <span>Kết nối ngay với chúng tôi</span>
              <h1>Liên hệ</h1>
            </div>
            <input
              type="text"
              id="contactFormName"
              className="form-control input-lg"
              name="contact[name]"
              placeholder="Tên của bạn"
              autoCapitalize="words"
              defaultValue=""
            />
            <input
              type="number"
              id="contactFormPhone"
              className="form-control input-lg"
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
              className="form-control input-lg"
              autoCapitalize="off"
              defaultValue=""
            />
            <textarea
              rows={6}
              name="contact[body]"
              className="form-control"
              placeholder="Viết bình luận"
              id="contactFormMessage"
              defaultValue={""}
            />
            <button
              type="submit"
              className="btn btn-outline insButton"
              title="Gửi thông tin"
            >
              Gửi thông tin
            </button>
            <ul className="shop-social">
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
          </form>{" "}
          <div className="page-about-new-contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6177130569445!2d106.6541090152164!3d10.763917262366853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec413c9d8d%3A0xfd53ac27a1acd021!2zMTgyIMSQLiBMw6ogxJDhuqFpIEjDoG5oLCBQaMaw4budbmcgMTUsIFF14bqtbiAxMSwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1666321027665!5m2!1svi!2s"
              width={900}
              height={450}
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
