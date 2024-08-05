// For the purposes of this assignment, I'm creating this silly function just to be able to send the right string
// to get the right image from PrimaryButton component. In a real-world scenario, we would need to have this imageURL
// coming from the API.
export const getExtraItemName = (extraText: string) => {
  switch (extraText) {
    case "Select the amount of sugar":
      return "sugar";
    case "Select type of milk":
      return "milk";
    default:
      return "";
  }
};
