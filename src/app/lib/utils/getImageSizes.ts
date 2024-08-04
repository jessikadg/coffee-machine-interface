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
