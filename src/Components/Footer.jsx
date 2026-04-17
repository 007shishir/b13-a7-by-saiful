
import Link from 'next/link';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3d32] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Name */}
        <h2 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">
          KeenKeeper
        </h2>

        {/* Tagline */}
        <p className="max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and nurture 
          the relationships that matter most.
        </p>

        {/* Social Section */}
        <div className="flex flex-col items-center gap-4 mb-16">
          <span className="text-[#d4af37] font-semibold text-sm tracking-widest uppercase">
            Social Links
          </span>
          <div className="flex gap-4">
            <Link href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <BsInstagram size={20} />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <FaFacebook size={20} />
            </Link>
            <Link href="#" className="bg-white p-2 rounded-full text-[#1a3d32] hover:bg-gray-200 transition-colors">
              <BsTwitter size={20} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="w-full pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          <p>© {currentYear} KeenKeeper. All rights reserved.</p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;