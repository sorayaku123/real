



export default function ContactForm() {
  return (
    <section className="bg-white text-gray-800 py-10 px-4 xl:px-20">
      <h2 className="text-3xl font-bold text-center text-yellow-600 mb-10 uppercase">
        Liên hệ nhận thông tin
      </h2>

      {/* Phần layout 2 cột */}
      <div className="flex flex-col xl:flex-row gap-8">



        {/* Form bên phải */}
        <form
          action="https://formsubmit.co/your@email.com"
          method="POST"
          className="xl:w-2/3 w-full space-y-4"
        >
          <input type="text" name="name" required placeholder="Họ tên" className="w-full border px-4 py-2 rounded-md" />
          <input type="tel" name="phone" required placeholder="Số điện thoại" className="w-full border px-4 py-2 rounded-md" />
          <input type="email" name="email" placeholder="Email (nếu có)" className="w-full border px-4 py-2 rounded-md" />
          <textarea name="message" rows="4" placeholder="Nhu cầu của bạn" className="w-full border px-4 py-2 rounded-md" />
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-md w-full font-semibold uppercase">
            Gửi thông tin
          </button>
                  <p> * Bằng việc gửi thông tin cho chúng tôi, Quý khách hàng đã xác nhận đồng ý với Chính sách bảo mật dữ liệu cá nhân của Công ty Cổ phần Tập đoàn Masterise </p>
        <a href="https://masterisehomes.com/chinh-sach-bao-mat" className="mt-2 underline"> theo đường link này </a>
        </form>

                {/* Thông tin bên trái */}
       <div className="contact mt-4">
         <h1> Địa chỉ </h1>
         <p> Trụ sở chính - Hồ Chí Minh TMDV số 19-23, Masteri An Phú, 179 Xa Lộ Hà Nội, Phường Thảo Điền, Thành phố Thủ Đức</p>
         <h1> Văn phòng Hà Nội </h1>
         <p> Tầng 1, Tòa nhà T26, Times City, 458 Minh Khai, Quận Hai Bà Trưng, Hà Nội</p>
         <h1> Email </h1>
         <p> sales@masterisehomes.com </p>
         <h1>Điện thoại </h1>
         <p> 0828 159 159</p>
      </div>
      </div>

      {/* Map ở dưới, full width */}
      <div className="mt-12" id="location">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.424035422406!2d106.7008064!3d10.777232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1742a63bb9%3A0xe9ef67887f6b56e3!2sLandmark%2081!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md w-full"
        ></iframe>
      </div>
    </section>
  )
}
