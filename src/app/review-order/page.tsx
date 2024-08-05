"use client";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { useSelector } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import Link from "next/link";
import ReviewOrderButton from "../components/ReviewOrderButton";

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

export default function SelectExtrasPage() {
  const { error, isLoading } = useGetCoffeeOptionsQuery();
  const userOrder = useSelector((state: any) => state.userOrder);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  const extrasOnOrder = Object.keys(userOrder.extras).filter(
    (key) => userOrder.extras[key] !== null
  );

  return (
    <PageLayout
      pageTitle="Review your order"
      backButtonText="Brew with Lex"
      isInitialPage
    >
      {userOrder && (
        <>
          <PrimaryButton itemName={userOrder.coffeeStyle}>
            {userOrder.coffeeStyle}
          </PrimaryButton>
          <PrimaryButton itemName={userOrder.coffeeStyle} size={userOrder.size}>
            {userOrder.size}
          </PrimaryButton>
          {extrasOnOrder.map((extra: string) => (
            <PrimaryButton itemName={extra} key={`${extra}-button`}>
              {extra + " - " + userOrder.extras[extra] || extra + " - default"}
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
