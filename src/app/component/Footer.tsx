import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="Sprouting Tech Academy Logo"
                width={40}
                height={40}
                className="h-10 w-auto mr-3"
              />
              <span className="text-xl font-bold kanit-bold">
                Sprouting Tech Academy
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              สถาบันเทคโนโลยีที่มุ่งเน้นการพัฒนาทักษะด้าน AI Automation
              และเทคโนโลยีสมัยใหม่เพื่อการเติบโตทางธุรกิจ
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 kanit-bold">Contact Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/sproutingtechacademy"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.sproutingtechacademy.com/"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Website"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Sprouting Tech Academy. สงวนลิขสิทธิ์ทั้งหมด
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                นโยบายความเป็นส่วนตัว
              </a>
              <a
                href="#terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                ข้อกำหนดการใช้งาน
              </a>
              <a
                href="#cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                นโยบายคุกกี้
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
