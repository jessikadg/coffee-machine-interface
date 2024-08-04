"use client";
import { PageLayout } from "./components/PageLayout";
import { PrimaryButton } from "./components/PrimaryButton";
import { useGetCoffeeOptions } from "./hooks/useGetCoffeeOptions";

export default function Home() {
  const coffeeOptions = useGetCoffeeOptions();

  console.log({ coffeeOptions });

  return (
    <main>
      <PageLayout
        pageTitle="Select your style"
        backButtonText="Brew with Lex"
        isInitialPage
      >
        <PrimaryButton coffeeName="Lungo" />
      </PageLayout>
    </main>
  );
}
