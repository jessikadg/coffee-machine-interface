"use client";
import { useSelector } from "react-redux";
import { PageLayout } from "./components/PageLayout";
import { PrimaryButton } from "./components/PrimaryButton";
import { useGetCoffeeStyleOptions } from "./hooks/useGetCoffeeOptions";

export default function Home() {
  const { coffeeOptions } = useGetCoffeeStyleOptions();

  const coffeeOptionsReduxState = useSelector(
    (state: { optionsData: { value: Object } }) => state.optionsData.value
  );

  console.log("redux data", coffeeOptionsReduxState);

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
