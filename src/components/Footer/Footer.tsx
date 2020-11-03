import "./scss/index.scss";

import * as React from "react";

import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";


const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <Nav />
  </div>
);

export default Footer;
