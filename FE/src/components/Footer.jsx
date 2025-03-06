import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";
const socialLinks = [
    { href: "https://discord.com", icon: <FaDiscord /> },
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
    { href: "https://medium.com", icon: <FaMedium /> },
];
const Footer = () => {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy; Nova {new Date().getFullYear()}. All rights reserved
                </p>
                <div className="flex justify-center gap-4 md:justify-start">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="text-black transiton-colors duration-500 ease-in-out hover:text-white"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
                <a
                    href="#privacy-policy"
                    className="text-center text-sm font-light hover:underline md:text-right"
                >
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
};

export default Footer;
