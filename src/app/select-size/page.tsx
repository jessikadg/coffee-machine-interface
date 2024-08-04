"use client";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { useSelector } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";

export default function SelectSizePage() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();
  const userOrder = useSelector((state: any) => state.userOrder);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  console.log({ userOrder });

  const selectedCoffee =
    coffeeOptions &&
    coffeeOptions.filter(
      (coffeeOption) => coffeeOption.name === userOrder.coffeeStyle
    )[0];

  console.log({ selectedCoffee });
  return (
    <PageLayout
      pageTitle="Select your size"
      backButtonText="Brew with Lex"
      isInitialPage
    >
      {selectedCoffee ? (
        selectedCoffee.sizes.map((size) => (
          <PrimaryButton
            coffeeName={selectedCoffee.name}
            key={`${selectedCoffee}-${size}`}
            size={size.name}
          >
            {size.name}
          </PrimaryButton>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </PageLayout>
  );
}
