import "../scss/style.scss";
import userAvatar from "../img/user-avatar.jpg";
import macIphone from "../img/mac-iphone.png";
import line_1 from "../img/circles-line_1.svg";
import line_2 from "../img/circles-line_2.svg";
import "bootstrap";
import Badge from "./components/notification";
import Navigation from "./components/navigation";
import "./components/chart.js";



window.notification = new Badge('.notification');
notification.setNumber(4);

window.nav = new Navigation();
nav.init();

document.querySelector('.mark-as-read').addEventListener('click', ()=>{
	notification.setNumber(0);
});
