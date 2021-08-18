import { faClipboard } from "@fortawesome/free-regular-svg-icons";

const {
  faHome,
  faCopy,
  faTools,
  faWrench,
  faBuilding,
} = require("@fortawesome/free-solid-svg-icons");

const Pages = [
  { title: "Главная", href: "/", icon: faHome },
  { title: "Продукты", href: "/product", icon: faTools },
  { title: "Приём заявок", href: "/joined", icon: faCopy },
  { title: "Сервис", href: "/services", icon: faWrench },
  { title: "О нас", href: "/about", icon: faBuilding },
  { title: "Контакты", href: "/contacts", icon: faClipboard },
];

export default Pages;
