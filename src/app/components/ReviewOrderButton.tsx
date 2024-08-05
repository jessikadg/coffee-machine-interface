import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  bottom: 20px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: 300px;
  min-height: 80px;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 20px;
`;

const ReviewOrderButton: React.FC = () => {
  return <StyledButton>Review Order</StyledButton>;
};

export default ReviewOrderButton;
