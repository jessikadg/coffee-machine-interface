"use client";
import { get } from "http";
import Image from "next/image";
import styled from "styled-components";
import { getImageHeight, getImageSize } from "../lib/utils/getImageSizes";
import exp from "constants";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";
import { setMilk, setSugar } from "../lib/features/order";

const PrimaryButtonStyled = styled.button`
  display: flex;
  flex-direction: column;
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
  itemName: string;
  imageAlt?: string;
  expandPanelOptions?: string[];
  size?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MainButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ExpandedPanel = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border-top: 1px white solid;
  width: 85%;
  text-align: left;
  padding: 24px;
`;

// if we wanted to make these functionalities air-tight and more dynamic,
// instead of using switch statements, we could hard-type options on the
// API types, on CoffeeOptionsDataType, then map those same times here,
// and for each of those cases, create a 'dispatch' accordingly. That way,
// if the back end changes the extras, we don't risk any issues.
export const handleExtraSelection = (
  option: string,
  itemName: string,
  dispatch: Dispatch<UnknownAction>
) => {
  switch (itemName) {
    case "sugar":
      dispatch(setSugar(option));
      break;
    case "milk":
      dispatch(setMilk(option));
      break;

    default:
      // Here set a default for sugar and milk if the selected option
      // contains it as an extra. Currently if the user doesn't select it,
      // the overview page won't display it.

      break;
  }
};

export const PrimaryButton = ({
  itemName,
  imageAlt,
  children,
  size,
  expandPanelOptions,
  onClick,
}: PrimaryButtonProps) => {
  const [expandPanel, setExpandPanel] = useState<boolean>(false);
  const dispatch = useDispatch();

  const imageUrlFallback = `./assets/espresso.svg`;
  const imageUrl = itemName
    ? `./assets/${itemName.toLowerCase()}.svg`
    : imageUrlFallback;

  return (
    <PrimaryButtonStyled onClick={onClick}>
      <MainButtonArea
        onClick={() => (expandPanelOptions ? setExpandPanel(!expandPanel) : {})}
      >
        <ImageRoundWrapper>
          <Image
            src={imageUrl || imageUrlFallback}
            alt={imageAlt || ""}
            width={getImageSize(size)}
            height={getImageHeight(size)}
          />
        </ImageRoundWrapper>
        {children}
      </MainButtonArea>

      {expandPanel && (
        <ExpandedPanel>
          {expandPanelOptions &&
            expandPanelOptions.map((option) => (
              <label key={option}>
                <input
                  type="radio"
                  value={option}
                  name={itemName}
                  onClick={() =>
                    handleExtraSelection(option, itemName, dispatch)
                  }
                />
                {option}
              </label>
            ))}
        </ExpandedPanel>
      )}
    </PrimaryButtonStyled>
  );
};
