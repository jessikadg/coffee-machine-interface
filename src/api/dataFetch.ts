"use server";

import { CoffeeOptionsDataType } from "@/app/types/data";

const getCoffeeOptions = async (): Promise<CoffeeOptionsDataType> => {
  try {
    const response = await fetch(
      `https://darkroastedbeans.coffeeit.nl/coffee-machine/60ba1ab72e35f2d9c786c610`,
      {
        next: {
          // assuming new coffe styles aren't added too often, so I'm caching results, and revalidating once every hour.
          revalidate: 3600,
        },
      }
    );

    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching options:", error);
    throw new Error("Failed to fetch options");
  }
};

export default getCoffeeOptions;
