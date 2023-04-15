import { styled } from "..";

export const HomeContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  alignItems: "flex-start",
});

export const BodyContainer = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const HeaderHome = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "$3",
  h1: {
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$short",
    color: "$gray100",
  },
});

export const ContentContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "flex-start",
  justifyContent: "space-around",
});

export const FirstColumn = styled("div", {});

export const SecondColumn = styled("div", {});
