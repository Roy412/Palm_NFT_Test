import styled from "styled-components";
import { Box } from "components";

export const Wrapper = styled(Box)``;

export const ItemContainer = styled(Box).attrs({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  my: "3px",
})`
  border-bottom: 1px solid blueviolet;
`;
