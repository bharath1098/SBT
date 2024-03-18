import media1 from "./ultratech_cement..jpg";
import media2 from "./nerolacPaint.webp";
import media3 from "./Bricks.jpg";
import media4 from "./tataSteel.png";

export const media = [media1, media2, media3, media4];
export const search = ["cement", "paint", "brick", "rod"];
export const searchByIndex = (index) => search[index % search.length];
export const mediaByIndex = (index) => media[index % media.length];
