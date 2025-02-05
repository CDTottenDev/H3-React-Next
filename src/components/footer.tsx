import {
  FaEnvelope,
  FaFacebook,
  FaMapMarkerAlt,
  FaPhone,
} from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:5414198077"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <FaPhone className="text-blue-400" />
                <span>541 419 8077</span>
              </a>
              <a
                href="mailto:H3excavationandconst@gmail.com"
                className="flex items-center gap-3 hover:text-gray-300"
              >
                <FaEnvelope className="text-blue-400" />
                <span>H3excavationandconst@gmail.com</span>
              </a>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Oregon, USA</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {['Services', 'Projects', 'About'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="transition-colors hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="mb-4 text-xl font-semibold">Connect With Us</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100068112309615"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-blue-400"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; 2024 H3 Construction. CCB #235020. DEQ #39492. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
