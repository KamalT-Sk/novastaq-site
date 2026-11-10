import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="pt-20 pb-28 min-h-[70vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-6 text-center">
        <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#4f46e5] bg-[#eef2ff] px-3 py-1 rounded-full mb-4">
          404 Error
        </span>
        <h1 className="heading-xl text-3xl md:text-5xl font-bold mb-3 text-[#0b0b0f]">
          Page Not Found
        </h1>
        <p className="text-[15px] leading-relaxed text-[#71717a] mb-8">
          The page or resource you are looking for does not exist on novastaq.com or has moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="btn-primary h-10 px-5 text-[13px]">
            Return Home
          </Link>
          <Link to="/services" className="btn-secondary h-10 px-5 text-[13px]">
            Our Services
          </Link>
          <Link to="/contact" className="btn-secondary h-10 px-5 text-[13px]">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
