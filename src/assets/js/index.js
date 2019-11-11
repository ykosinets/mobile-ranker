import userAvatar from "../img/user-avatar.jpg";
import macIphone from "../img/mac-iphone.png";
import line_1 from "../img/circles-line_1.svg";
import line_2 from "../img/circles-line_2.svg";
import logo from "../img/logo.png";
import iphone from "../img/iphone.png";
import iphoneShadow from "../img/iphone-shadow.png";
import imac from "../img/imac.png";
import imacShadow from "../img/imac-shadow.png";
import placeholder from "../img/placeholder.jpg";
import placeholderResponsive from "../img/placeholder-responsive.jpg";
import example from "../img/example.jpg";
import exampleResponsive from "../img/example-responsive.jpg";
import faviconChrome192 from "../img/favicon/android-chrome-192x192.png";
import faviconChrome512 from "../img/favicon/android-chrome-512x512.png";
import faviconAppleTouch from "../img/favicon/apple-touch-icon.png";
import BrowserConfig from "../img/favicon/browserconfig.xml";
import favicon from "../img/favicon/favicon.ico";
import favicon16 from "../img/favicon/favicon-16x16.png";
import favicon32 from "../img/favicon/favicon-32x32.png";
import faviconMSTile70 from "../img/favicon/mstile-70x70.png";
import faviconMSTile144 from "../img/favicon/mstile-144x144.png";
import faviconMSTile150 from "../img/favicon/mstile-150x150.png";
import faviconMSTile310_150 from "../img/favicon/mstile-310x150.png";
import faviconMSTile310 from "../img/favicon/mstile-310x310.png";
import faviconSafariTab from "../img/favicon/safari-pinned-tab.svg";
import manifest from "../img/favicon/site.webmanifest";

import "../scss/style.scss";
import "bootstrap";
import Badge from "./components/notification";
import Navigation from "./components/navigation";
import "./components/chart.js";

window.notification = new Badge('.notification');
notification.setNumber(document.querySelectorAll(".notification-dropdown .dropdown-menu > *:not(.dropdown-divider):not(.mark-as-read)").length);

window.nav = new Navigation();
nav.init();

document.querySelector('.mark-as-read').addEventListener('click', ()=>{
	notification.setNumber(0);
});
