import { useEffect, useState } from "react";
import { CoffeeOptionsDataType } from "../types/data";
import getCoffeeOptions from "@/api/dataFetch";
import { CoffeeOptionsType } from "../types/coffeeOptions";
import { useDispatch } from "react-redux";
import { update } from "../lib/features/data";

const organizeData = (data: CoffeeOptionsDataType) => {
  return data.types.map((type) => ({
    _id: type._id,
    name: type.name,
    sizes: type.sizes.map((sizeId) => {
      const size = data.sizes.find((s) => s._id === sizeId);
      return size ? { _id: size._id, name: size.name } : { _id: "", name: "" };
    }),
    extras: type.extras.map((extraId) => {
      const extra = data.extras.find((e) => e._id === extraId);
      return extra
        ? {
            _id: extra._id,
            extraText: extra.name,
            subselections: extra.subselections.map((subselection) => ({
              _id: subselection._id,
              name: subselection.name,
            })),
          }
        : { _id: "", extraText: "", subselections: [] };
    }),
  }));
};

export const useGetCoffeeStyleOptions = () => {
  const coffeeOptionsDispatch = useDispatch();

  const [coffeeOptions, setCoffeeOptions] = useState<CoffeeOptionsType | null>(
    null
  );

  //fetch coffee options list  on first render:
  useEffect(() => {
    const fetchCoffeeOptions = async () => {
      const response = await getCoffeeOptions();

      const organisedData = organizeData(response);

      setCoffeeOptions(organisedData);
      coffeeOptionsDispatch(update(organisedData));
    };

    fetchCoffeeOptions();
  }, []);

  return { coffeeOptions };
};
