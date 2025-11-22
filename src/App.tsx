import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Download, MapPin, ChevronRight, ArrowRight } from 'lucide-react';

// 模擬圖片 (Unsplash High-End Architecture)
const IMAGES = {
  hero: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
  lobby: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
  pool: "https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop",
  interior: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop",
  view: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop"
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 監聽 Scroll 黎變 Header 色
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '項目理念', href: '#concept' },
    { name: '尊尚會所', href: '#amenities' },
    { name: '銷售文件', href: '#downloads' },
    { name: '預約參觀', href: '#contact', primary: true },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#2C2C2C] font-sans selection:bg-[#C5A065] selection:text-white">
      
      {/* --- Header --- */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className={`text-2xl font-serif tracking-widest font-bold ${isScrolled ? 'text-[#2C2C2C]' : 'text-white'}`}>
            ONE PARK <span className="text-[#C5A065]">PEAK</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm tracking-widest uppercase transition-colors duration-300 ${
                  link.primary 
                    ? 'bg-[#C5A065] text-white px-6 py-2 hover:bg-[#B08D55]' 
                    : isScrolled ? 'text-[#2C2C2C] hover:text-[#C5A065]' : 'text-white hover:text-[#C5A065]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-[#2C2C2C]' : 'text-white'}`}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 md:hidden border-t border-gray-100">
             {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm tracking-widest uppercase ${
                  link.primary ? 'text-[#C5A065] font-bold' : 'text-[#2C2C2C]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* --- Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="Luxury Building" 
            className="w-full h-full object-cover brightness-75 scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-10">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase mb-4 text-[#C5A065] animate-fade-in-up">
            The Pinnacle of Luxury
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-6 tracking-wide animate-fade-in-up delay-100">
            柏景峯
          </h1>
          <p className="text-lg md:text-xl font-light tracking-widest opacity-90 animate-fade-in-up delay-200 border-t border-b border-white/30 py-4 inline-block">
            ONE PARK PEAK
          </p>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
          <span className="text-xs tracking-widest">SCROLL</span>
        </div>
      </section>

      {/* --- Concept Section (Text Heavy, Serif) --- */}
      <section id="concept" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] mb-8">
            城中綠洲 · 頂峰之作
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A065] mx-auto mb-10"></div>
          <p className="text-gray-600 leading-loose text-justify md:text-center font-light mb-6">
            柏景峯傲據城市核心，盡覽繁華景致與翠綠山巒。由國際頂尖建築團隊精心打造，
            融合現代美學與自然元素，締造無與倫比的尊貴生活體驗。
            每一處細節，皆為追求卓越品味的您而設。
          </p>
          <p className="text-gray-500 text-sm italic font-serif">
            "Where Urban Sophistication Meets Natural Serenity"
          </p>
        </div>
      </section>

      {/* --- Gallery / Amenities Grid --- */}
      <section id="amenities" className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 shadow-2xl">
            {/* Item 1 */}
            <div className="relative group overflow-hidden h-[400px]">
              <img src={IMAGES.lobby} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Lobby" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-widest border border-white/50 px-8 py-3 backdrop-blur-sm">
                  瑰麗大堂
                </h3>
              </div>
            </div>
            
            {/* Text Block */}
            <div className="bg-white p-12 flex flex-col justify-center items-center text-center h-[400px]">
              <h3 className="text-2xl font-serif mb-4 text-[#C5A065]">尊尚會所</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                配備特大恆溫泳池、私人宴會廳及頂級健身設施。<br/>
                盡顯名門望族氣派。
              </p>
              <button className="text-xs tracking-widest border-b border-[#2C2C2C] pb-1 hover:text-[#C5A065] hover:border-[#C5A065] transition-colors uppercase">
                Explore Amenities
              </button>
            </div>

            {/* Text Block */}
            <div className="bg-[#2C2C2C] p-12 flex flex-col justify-center items-center text-center h-[400px] text-white md:order-3 order-4">
              <h3 className="text-2xl font-serif mb-4 text-[#C5A065]">天際景觀</h3>
              <p className="text-gray-400 leading-relaxed text-sm mb-6">
                戶戶向南，飽覽維港璀璨夜景。<br/>
                私隱度極高，專屬電梯大堂。
              </p>
              <button className="text-xs tracking-widest border-b border-white pb-1 hover:text-[#C5A065] hover:border-[#C5A065] transition-colors uppercase">
                View Floor Plans
              </button>
            </div>

            {/* Item 2 */}
            <div className="relative group overflow-hidden h-[400px] md:order-4 order-3">
              <img src={IMAGES.view} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="View" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center">
                <h3 className="text-white text-2xl font-serif tracking-widest border border-white/50 px-8 py-3 backdrop-blur-sm">
                  天際視野
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Downloads Section (Wix Style) --- */}
      <section id="downloads" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-center font-serif mb-16">銷售文件</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: '售樓說明書', sub: 'Sales Brochure' },
              { title: '價單', sub: 'Price List' },
              { title: '銷售安排', sub: 'Sales Arrangements' }
            ].map((item, idx) => (
              <div key={idx} className="border border-gray-200 p-8 text-center hover:shadow-xl transition-shadow duration-300 bg-[#FDFDFD] group cursor-pointer">
                <div className="w-12 h-12 bg-[#F4F4F4] rounded-full flex items-center justify-center mx-auto mb-6 text-[#C5A065] group-hover:bg-[#C5A065] group-hover:text-white transition-colors">
                  <Download size={20} />
                </div>
                <h3 className="text-lg font-medium mb-1">{item.title}</h3>
                <p className="text-xs text-gray-400 uppercase tracking-wide mb-6">{item.sub}</p>
                <span className="text-xs border border-gray-300 px-4 py-2 text-gray-500 group-hover:bg-[#2C2C2C] group-hover:text-white group-hover:border-[#2C2C2C] transition-all">
                  點擊下載
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Registration Form (Critical for Conversion) --- */}
      <section id="contact" className="py-24 bg-[#2C2C2C] text-white relative">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          
          <div className="w-full md:w-1/2 pl-0 md:pl-12">
            <p className="text-[#C5A065] tracking-widest uppercase mb-4 text-sm">Make a Reservation</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
              預約參觀<br/>示範單位
            </h2>
            <p className="text-gray-400 font-light mb-8 leading-relaxed max-w-md">
              登記預約成功後，我們的銷售顧問將會盡快與閣下聯絡，安排專屬參觀時間。
            </p>
            <div className="flex items-center space-x-4 text-[#C5A065]">
              <Phone size={20} />
              <span className="text-xl tracking-widest font-serif">852 8888 8888</span>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white text-[#2C2C2C] p-8 md:p-12 shadow-2xl max-w-md">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">姓名 / Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A065] transition-colors bg-transparent" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">電話 / Mobile</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A065] transition-colors bg-transparent" placeholder="+852" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">電郵 / Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#C5A065] transition-colors bg-transparent" placeholder="example@email.com" />
              </div>
              <button className="w-full bg-[#C5A065] text-white py-4 uppercase tracking-[0.2em] text-sm hover:bg-[#B08D55] transition-colors flex items-center justify-center gap-2 group mt-4">
                立即登記 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* --- Footer (Disclaimers are crucial for vibes) --- */}
      <footer className="bg-[#1a1a1a] text-gray-500 py-12 text-xs border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-8 mb-8 tracking-widest uppercase text-gray-400">
            <a href="#" className="hover:text-white">免責聲明</a>
            <a href="#" className="hover:text-white">私隱政策</a>
            <a href="#" className="hover:text-white">版權所有</a>
          </div>
          <p className="leading-relaxed opacity-60 max-w-4xl mx-auto">
            本廣告/宣傳資料內載列的相片、圖像、繪圖或素描顯示純屬畫家對有關發展項目之想像。有關相片、圖像、繪圖或素描並非按照比例繪畫及/或可能經過電腦修飾處理。
            準買家如欲了解發展項目的詳情，請參閱售樓說明書。賣方亦建議準買家到有關發展地盤作實地考察，以對該發展地盤、其周邊地區環境及附近的公共設施有較佳了解。
          </p>
          <p className="mt-8 font-serif text-[#C5A065]">© 2024 ONE PARK PEAK. All Rights Reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default App;