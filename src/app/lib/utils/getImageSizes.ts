// This was just a quick way I fount to get the right sizes for the images on the Sizes page.
// I wanted to avoid "transforms" for they are known to compromise performance and quality.
// real-case scenario, we could have better adjusted SVGs, seperate URL from the back end, or other solutions.

export const getImageSize = (size: string | undefined) => {
  switch (size) {
    case "Tall":
      return 22;
    case "Venti":
      return 25;
    case "Large":
      return 30;
    default:
      return 28;
  }
};

export const getImageHeight = (size: string | undefined) => {
  switch (size) {
    case "Tall":
      return 70;
    case "Venti":
      return 65;
    case "Large":
      return 60;
    default:
      return 70;
  }
};
