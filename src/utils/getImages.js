import IMAGE2 from "../assets/img/img_2.png";
import IMAGE3 from "../assets/img/img_3.png";
import IMAGE4 from "../assets/img/img_4.png";
import IMAGE5 from "../assets/img/img_5.png";
import IMAGE6 from "../assets/img/img_6.png";
import IMAGE7 from "../assets/img/img_7.png";
import IMAGE8 from "../assets/img/img_8.png";
import IMAGE9 from "../assets/img/img_9.png";
import IMAGE10 from "../assets/img/img_10.png";
import LOGO from "../assets/img/logo_m3.png";
import PADLOCK from "../assets/img/padlock.png";

const getImages = (image) => {
  const images = {
    img_2: IMAGE2,
    img_3: IMAGE3,
    img_4: IMAGE4,
    img_5: IMAGE5,
    img_6: IMAGE6,
    img_7: IMAGE7,
    img_8: IMAGE8,
    img_9: IMAGE9,
    img_10: IMAGE10,
    logo_m3: LOGO,
    padlock: PADLOCK,
  };

  return images[image];
};

export default getImages;
