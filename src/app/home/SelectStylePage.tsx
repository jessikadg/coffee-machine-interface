"use client";
import { useDispatch } from "react-redux";
import { PageLayout } from "../components/PageLayout";
import { PrimaryButton } from "../components/PrimaryButton";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";
import { setCoffeeStyle } from "../lib/features/order";
import Link from "next/link";

export default function Home() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();
  const coffeeStyleDispatch = useDispatch();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <main>
      <PageLayout
        pageTitle="Select your style"
        backButtonText="Brew with Lex"
        isInitialPage
      >
        {coffeeOptions &&
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
          ))}
      </PageLayout>
    </main>
  );
}
