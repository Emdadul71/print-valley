"use client";

import { BsWhatsapp } from "react-icons/bs";
import { FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

interface propsTypes {
  isLayoutColumn?: boolean;
  isShowText?: boolean;
  sharedUrl: string;
}

const SocialShare = ({
  isLayoutColumn = false,
  isShowText = true,
  sharedUrl,
}: propsTypes) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <ul
        className={`flex flex-col items-center gap-1 mt-1 ${
          isLayoutColumn ? "flex-col gap-0" : ""
        }`}
      >
        <li>
          <FacebookShareButton url={sharedUrl}>
            <div className="block px-1 text-base py-2 hover:text-secondary">
              <FiFacebook />
            </div>
          </FacebookShareButton>
        </li>

        <li>
          <TwitterShareButton url={sharedUrl}>
            <div className="block px-1 text-base py-2 hover:text-secondary">
              <FiTwitter />
            </div>
          </TwitterShareButton>
        </li>

        <li>
          <LinkedinShareButton url={sharedUrl}>
            <div className="block px-1 text-base py-2 hover:text-secondary">
              <FiLinkedin />
            </div>
          </LinkedinShareButton>
        </li>

        <li>
          <WhatsappShareButton url={sharedUrl}>
            <div className="block px-1 text-base py-2 hover:text-secondary">
              <BsWhatsapp />
            </div>
          </WhatsappShareButton>
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
