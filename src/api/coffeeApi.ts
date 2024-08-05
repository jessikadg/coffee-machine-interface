import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CoffeeOptionsDataType } from "@/app/types/data";
import { CoffeeOptionsType } from "@/app/types/coffeeOptions";
import { organizeData } from "../app/lib/utils/organiseData";

export const coffeeApi = createApi({
  reducerPath: "coffeeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://darkroastedbeans.coffeeit.nl",
  }),
  endpoints: (builder) => ({
    getCoffeeOptions: builder.query<CoffeeOptionsType, void>({
      query: () => "/coffee-machine/60ba1ab72e35f2d9c786c610",
      transformResponse: (
        response: CoffeeOptionsDataType
      ): CoffeeOptionsType => {
        return organizeData(response);
      },
    }),
  }),
});

// Automatically generated hooks for the defined endpoints
export const { useGetCoffeeOptionsQuery } = coffeeApi;
