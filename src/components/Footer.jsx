import { contact, socials } from "../constants";
import XIcon from "../assets/icon/X.svg";
import LinkedInIcon from "../assets/icon/LinkedIn.svg";
import InstagramIcon from "../assets/icon/Instagram.svg";
import Location from "../assets/icon/Location.svg";
import Mail from "../assets/icon/Mail.svg";
const Footer = () => {
  const socialIcons = {
    X: XIcon,
    LinkedIn: LinkedInIcon,
    Instagram: InstagramIcon,
  };

  const contactIcons = {
    Location: Location,
    Email: Mail,
  };

  return (
    <footer className="w-full bg-grey px-80 pt-8 pb-8">
      <div className="flex justify-between items-center w-full">
        {/* Company Info */}
        <div>
          <h2 className="text-lg leading-8">
            <strong>Solvetera</strong> <br />
            © 2025 by Solvetera
          </h2>
          <div className="flex gap-3 mt-5">
            {/* Social Media Icons */}
            {socials.map((social) => (
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                key={social.label}
                className="hover-effect"
              >
                <div className="flex items-center justify-center bg-black rounded-full w-10 h-10">
                  <img
                    src={socialIcons[social.label]}
                    alt={`${social.label} icon`}
                    className="w-5 h-5 hover:scale-110 transition-transform items-center"
                  />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col w-1/3 items-start gap-5 pl-12 sm:flex-wrap mt-8">
          {contact.map((contactItem) => (
            <div key={contactItem.label} className="flex items-center gap-3">
              <div
                className="flex items-center justify-center bg-black rounded-full hover-effect"
                style={{ width: '40px', height: '40px', padding: '10px' }} // 10px circle padding
              >
                <img
                  src={contactIcons[contactItem.label]}
                  alt={`${contactItem.label} icon`}
                  className="w-5 h-5"
                />
              </div>
              <p className="text-lg">{contactItem.value}</p>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
