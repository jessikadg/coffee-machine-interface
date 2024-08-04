import { useEffect, useState } from "react";
import { CoffeeOptionsDataType } from "../types/data";
import getCoffeeOptions from "@/api/dataFetch";

export const useGetCoffeeOptions = () => {
  const [coffeeOptions, setCoffeeOptions] =
    useState<CoffeeOptionsDataType | null>(null);

  //fetch coffee options on first render:
  useEffect(() => {
    const fetchCoffeeOptions = async () => {
      const response = await getCoffeeOptions();
      setCoffeeOptions(response);
    };

    fetchCoffeeOptions();
  }, []);

  return { coffeeOptions };
};
