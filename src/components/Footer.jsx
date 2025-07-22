import { FaFacebookF, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer
            id="contact"
            className="bg-gray-500 text-black py-10 px-6 md:px-16 border-t border-white/10"
        >
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Contact Info */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                    <div className="space-y-2 text-sm text-black/90">
                        <p className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-lg" />
                            Lapu-Lapu City College, B. Benedicto St., Lapu-Lapu City, Cebu
                        </p>
                        <p className="flex items-center gap-2">
                            <FaPhoneAlt className="text-lg" />
                            (049) 501 7435
                        </p>
                        <p className="flex items-center gap-2">
                            <FaEnvelope className="text-lg" />
                            llccadmin@llcc.edu.ph
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm text-black/90">
                        <li>
                            <a href="#coed" className="hover:underline">College of Education</a>
                        </li>
                        <li>
                            <a href="#cot" className="hover:underline">College of Technology</a>
                        </li>
                        <li>
                            <a href="#cohtm" className="hover:underline">College of Hospitality & Management</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <div className="flex items-center gap-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=100063828024588"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white p-2 rounded-full hover:scale-110 transition"
                        >
                            <FaFacebookF />
                        </a>
                        {/* Add other social icons here */}
                    </div>
                </div>
            </div>

            {/* Footer bottom */}
            <div className="mt-10 text-center text-xs text-black/50">
                &copy; {new Date().getFullYear()} LLCC. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
