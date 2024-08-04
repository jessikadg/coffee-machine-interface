import { CoffeeOptionsType } from "@/app/types/coffeeOptions";
import { CoffeeOptionsDataType } from "@/app/types/data";

export const organizeData = (data: CoffeeOptionsDataType) => {
  const transformedData: CoffeeOptionsType = data.types.map((type) => ({
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

  return transformedData;
};
