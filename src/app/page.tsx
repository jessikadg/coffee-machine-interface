"use client";
import { PageLayout } from "./components/PageLayout";
import { PrimaryButton } from "./components/PrimaryButton";

export default function Home() {
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
