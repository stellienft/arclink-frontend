import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <img src="/Arclink_v3--orange_symbol_white_text%20copy.svg" alt="Arclink" className="h-7 w-auto" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="text-[#E7E6E6]/25 hover:text-[#E7E6E6]/50 font-body text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-[#E7E6E6]/25 hover:text-[#E7E6E6]/50 font-body text-xs transition-colors">
              Terms of Service
            </Link>
            <Link to="/refunds" className="text-[#E7E6E6]/25 hover:text-[#E7E6E6]/50 font-body text-xs transition-colors">
              Refund Policy
            </Link>
          </div>
          <p className="text-[#E7E6E6]/20 font-body text-xs">
            &copy; {new Date().getFullYear()} ArcLink. Built by ArcLink. Run by Raven.
          </p>
        </div>
      </div>
    </footer>
  );
}
