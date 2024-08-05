"use client";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { setSize } from "../lib/features/order";
import Link from "next/link";

export default function SelectSizePage() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();
  const userOrder = useSelector((state: any) => state.userOrder);
  const coffeeSizeDispatch = useDispatch();

  // PLACEHOLDER - if selectedCoffee.name is "" or undefined, redirect to the previous page

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const selectedCoffee =
    coffeeOptions &&
    coffeeOptions.filter(
      (coffeeOption) => coffeeOption.name === userOrder.coffeeStyle
    )[0];

  console.log({ selectedCoffee });
  console.log({ userOrder });
  return (
    <PageLayout
      pageTitle="Select your size"
      backButtonText="Brew with Lex"
      isInitialPage
    >
      {selectedCoffee ? (
        selectedCoffee.sizes.map((size) => (
          <Link
            href="/select-extras"
            key={`${selectedCoffee.name}-${size.name}-link`}
          >
            <PrimaryButton
              itemName={selectedCoffee.name}
              key={`${selectedCoffee.name}-${size.name}-button`}
              size={size.name}
              onClick={() => coffeeSizeDispatch(setSize(size.name))}
            >
              {size.name}
            </PrimaryButton>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </PageLayout>
  );
}
