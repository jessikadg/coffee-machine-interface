import styled from "styled-components";

interface PageLayoutProps {
  children?: React.ReactNode;
  pageTitle: string;
  backButtonText: string;
  isInitialPage?: boolean;
}

const PageLayoutWrapper = styled.div`
  max-width: 400px;
  margin: 25px auto;
  padding: 0 5px;
`;

const PageTitle = styled.h2`
  font: 24px;
  line-height: 32.78px;
  letter-spacing: 0.87px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

const BackButtonText = styled.span`
  font-family: ${({ theme }) => theme.fonts.bolder};
`;

export const PageLayout = ({
  children,
  pageTitle,
  backButtonText,
  isInitialPage = false,
}: PageLayoutProps) => {
  return (
    <PageLayoutWrapper>
      <BackButtonText>
        {isInitialPage && "< "} {`${backButtonText}`}
      </BackButtonText>
      <PageTitle>{pageTitle}</PageTitle>
      {children || ""}
    </PageLayoutWrapper>
  );
};
