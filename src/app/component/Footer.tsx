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
                  className="h-6 w-8"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  strokeWidth="5"
                  stroke="currentColor"
                  fill="none"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"></path>
                    <path d="M37.86,51.1A47,47,0,0,1,32,56.7"></path>
                    <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"></path>
                    <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"></path>
                    <line x1="10.37" y1="19.9" x2="53.75" y2="19.9"></line>
                    <line x1="32" y1="6.99" x2="32" y2="56.7"></line>
                    <line x1="11.05" y1="45.48" x2="37.04" y2="45.48"></line>
                    <line x1="7.14" y1="32.46" x2="56.86" y2="31.85"></line>
                    <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"></path>
                  </g>
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
