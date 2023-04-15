import { styled } from "..";

export const ExplorerContainer = styled("div", {
  display: "flex",
});

export const HeaderContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "26rem",
});

export const HeaderHome = styled("div", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$3",
  h1: {
    fontFamily: "$default",
    fontWeight: "$bold",
    fontSize: "$2xl",
    lineHeight: "$short",
    color: "$gray100",
  },
});

export const ExplorerContent = styled("div", {
  margin: "4.5rem auto 0",
  width: "62.25rem",
});

export const TagsContainer = styled("div", {
  marginTop: "2.5rem",
  marginBottom: "3rem",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$3",
});

export const CardsContainer = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
  flexWrap: "wrap",
});
