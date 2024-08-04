"use client";
import Image from "next/image";
import styled from "styled-components";

const PrimaryButtonStyled = styled.button`
  display: flex;
  align-items: center;
  height: fit-content;
  width: 100%;
  min-height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  margin-bottom: 8px;
`;

const ImageRoundWrapper = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 46px;
  height: 46px;
  background-color: ${({ theme }) => theme.colors.secondary};
  margin: 24px;
`;

interface PrimaryButtonProps {
  coffeeName:
    | "Lungo"
    | "Espresso"
    | "Ristretto"
    | "Americano"
    | "Cappuccino"
    | "Latte Machiato"
    | string;
  imageAlt?: string;
  expandPanelOptions?: string[];
  onClick?: () => void;
}

export const PrimaryButton = ({
  coffeeName,
  imageAlt,
  expandPanelOptions,
  onClick,
}: PrimaryButtonProps) => {
  const imageUrl = `./assets/${coffeeName.toLowerCase()}.svg`;
  const imageUrlFallback = `./assets/espresso.svg`;

  return (
    <PrimaryButtonStyled>
      <ImageRoundWrapper>
        <Image
          src={imageUrl || imageUrlFallback}
          alt={imageAlt || ""}
          width={28}
          height={65}
        />
      </ImageRoundWrapper>

      {coffeeName}
    </PrimaryButtonStyled>
  );
};
