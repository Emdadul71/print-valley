import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";
interface propsTypes {
  isLayoutColumn?: boolean;
  classes?: {
    root?: any;
    iconStyle?: any;
  };
  data?: any;
}

const SocialLinks = ({ isLayoutColumn = false, classes, data }: propsTypes) => {
  const dummyData = [
    {
      icon: <FiFacebook className="text-sm lg:text-lg" />,
      link: "https://www.facebook.com/mieducationsydney/",
    },
    {
      icon: <FiLinkedin className="text-sm lg:text-lg" />,
      link: "https://www.linkedin.com/company/moves-international/",
    },
    {
      icon: <FiInstagram className="text-sm lg:text-lg" />,
      link: "https://www.instagram.com/moves_international_/",
    },
  ];
  return (
    <div>
      <div
        className={`flex items-center gap-2 ${
          classes?.root ? classes.root : ``
        }`}
      >
        <ul
          className={`flex items-center gap-3 lg:gap-2 ${
            isLayoutColumn ? "flex-col gap-0" : ""
          }`}
        >
          {dummyData?.map((item: any, i: any) => {
            return (
              <li key={i}>
                <a
                  target="_blank"
                  className={`block px-1 text-lg pt-1 hover:text-secondary cursor-pointer ${
                    classes?.iconStyle ? classes.iconStyle : ``
                  }`}
                  href={item?.link}
                  rel="nofollow"
                >
                  {item?.icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SocialLinks;
