export type CoffeeOptionsType = {
  _id: string;
  name:
    | "Lungo"
    | "Espresso"
    | "Ristretto"
    | "Americano"
    | "Cappuccino"
    | "Latte Machiato"
    | string;
  sizes: {
    _id: string;
    name: string;
  }[];
  extras: {
    _id: string;
    extraText: string;
    subselections: {
      _id: string;
      name: string;
    }[];
  }[];
}[];

// Creating example for the sake of clarity:
const coffeeSelectionExample = {
  _id: "1",
  name: "Coffee",
  sizes: [
    {
      _id: "1",
      name: "Small",
    },
    {
      _id: "2",
      name: "Medium",
    },
    {
      _id: "3",
      name: "Large",
    },
  ],
  extras: [
    {
      _id: "1",
      extraText: "Select amount of sugar",
      subselections: [
        {
          _id: "1",
          name: "A little",
        },
        {
          _id: "2",
          name: "A Lot",
        },
      ],
    },
    {
      _id: "2",
      extraText: "Select amounf of Milk",
      subselections: [
        {
          _id: "1",
          name: "Whole",
        },
        {
          _id: "2",
          name: "Oat",
        },
        {
          _id: "3",
          name: "Stevia",
        },
      ],
    },
  ],
};
