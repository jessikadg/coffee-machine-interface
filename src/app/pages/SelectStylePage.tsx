"use client";
import { useDispatch, useSelector } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { setCoffeeStyle } from "../lib/features/order";
import Link from "next/link";

export default function Home() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();
  const preferences = useSelector((state: any) => state.userOrder);
  const coffeeStyleDispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  console.log({ preferences });

  return (
    <main>
      <PageLayout
        pageTitle="Select your style"
        backButtonText="Brew with Lex"
        isInitialPage
      >
        {coffeeOptions ? (
          coffeeOptions.map((coffeeOption) => (
            <Link href="/select-size" key={coffeeOption._id}>
              <PrimaryButton
                key={coffeeOption._id}
                itemName={coffeeOption.name}
                onClick={() =>
                  coffeeStyleDispatch(setCoffeeStyle(coffeeOption.name))
                }
              >
                {coffeeOption.name}
              </PrimaryButton>
            </Link>
          ))
        ) : (
          // Improvements: proper loading should be handled by useGetCoffeeOptions hook which could return
          // not only the data but also a loading state. Setting here as paragraph for the sake of time.
          <p>Loading...</p>
        )}
      </PageLayout>
    </main>
  );
}
