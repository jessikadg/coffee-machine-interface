"use client";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import Link from "next/link";
import ReviewOrderButton from "../components/ReviewOrderButton";

// For the purposes of this assignment, I'm creating this silly function just to be able to send the right string
// to get the right image from PrimaryButton component. In a real-world scenario, we would need to have this imageURL
// coming from the API.
const getExtraItemName = (extraText: string) => {
  switch (extraText) {
    case "Select the amount of sugar":
      return "sugar";
    case "Select type of milk":
      return "milk";
    default:
      return "";
  }
};

export default function SelectExtrasPage() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();
  const userOrder = useSelector((state: any) => state.userOrder);

  // PLACEHOLDER - if userOder.coffeeStyle and userOrder.size are both "" or undefined, redirect to the previous page

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const selectedCoffee =
    coffeeOptions &&
    coffeeOptions.filter(
      (coffeeOption) => coffeeOption.name === userOrder.coffeeStyle
    )[0];

  return (
    <PageLayout
      pageTitle="Select your size"
      backButtonText="Brew with Lex"
      isInitialPage
    >
      {selectedCoffee && (
        <>
          {selectedCoffee.extras.map((extra) => (
            <PrimaryButton
              itemName={getExtraItemName(extra.extraText)}
              key={`${selectedCoffee.name}-${extra.extraText}-button`}
              expandPanelOptions={extra.subselections.map(
                (subselection) => subselection.name
              )}
            >
              {extra.extraText}
            </PrimaryButton>
          ))}
          <Link href="/review-order">
            <ReviewOrderButton />
          </Link>
        </>
      )}
    </PageLayout>
  );
}
