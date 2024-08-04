"use client";
import { get } from "http";
import Image from "next/image";
import styled from "styled-components";
import { getImageHeight, getImageSize } from "../lib/utils/getImageSizes";

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
  cursor: pointer;
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
  coffeeName?: string;
  imageAlt?: string;
  expandPanelOptions?: string[];
  size?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const PrimaryButton = ({
  coffeeName,
  imageAlt,
  expandPanelOptions,
  children,
  size,
  onClick,
}: PrimaryButtonProps) => {
  const imageUrlFallback = `./assets/espresso.svg`;
  const imageUrl = coffeeName
    ? `./assets/${coffeeName.toLowerCase()}.svg`
    : imageUrlFallback;

  return (
    <PrimaryButtonStyled onClick={onClick}>
      <ImageRoundWrapper>
        <Image
          src={imageUrl || imageUrlFallback}
          alt={imageAlt || ""}
          width={getImageSize(size)}
          height={getImageHeight(size)}
        />
      </ImageRoundWrapper>

      {children}
    </PrimaryButtonStyled>
  );
};
