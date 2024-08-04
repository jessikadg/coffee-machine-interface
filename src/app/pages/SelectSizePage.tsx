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

  return (
    <PageLayout
      pageTitle="Select your size"
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
  );
}
