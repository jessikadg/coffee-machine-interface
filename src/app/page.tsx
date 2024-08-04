"use client";
import { useSelector } from "react-redux";
import { PageLayout } from "./components/PageLayout";
import { PrimaryButton } from "./components/PrimaryButton";
import { useGetCoffeeOptionsQuery } from "@/api/coffeeApi";

export default function Home() {
  const { data: coffeeOptions, error, isLoading } = useGetCoffeeOptionsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <main>
      <PageLayout
        pageTitle="Select your style"
        backButtonText="Brew with Lex"
        isInitialPage
      >
        {coffeeOptions ? (
          coffeeOptions.map((coffeeOption) => (
            <PrimaryButton
              key={coffeeOption._id}
              coffeeName={coffeeOption.name}
            />
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
