import { styled } from "..";

export const ExplorerContainer = styled("div", {
  display: "flex",
  width: "100%",
  ".modal": {
    width: "100%",
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
    minHeight: "100vh",
    background: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ".modalContent": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      marginLeft: "auto",
      background: "$gray800",
      minHeight: "100vh",
      width: "41.25rem",
      padding: "4rem 3rem",
      boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.5)",
      ".close": {
        position: "absolute",
        top: "1rem",
        right: "2.5rem",
        background: "none",
        border: "none",
      },
      "&::-webkit-scrollbar": {
        width: 15,
      },
      "&::-webkit-scrollbar-thumb": {
        background: "$green300",
        borderRadius: 10,
        width: 0,
        backgroundClip: "padding-box",
        border: "3px solid transparent",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        backgroundColor: "$green200",
        width: 0,
        borderRadius: 10,
        backgroundClip: "padding-box",
        border: "3px solid transparent",
      },
    },
  },
  ".none": {
    display: "none",
  },
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

export const DetailsBookModal = styled("div", {
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "1.5rem 2rem 1rem",
  backgroundColor: "$gray700",
  borderRadius: "$md",
});

export const Stars = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "0.375rem",
  marginTop: "6.875rem",
});

export const ToAssess = styled("div", {
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  fontSize: "1rem",
  lineHeight: "160%",
  color: "#8381D9",
  border: `1px solid transparent`,
  cursor: "pointer",
  "&:hover": {
    borderBottomColor: "#8381D9",
  },
});

export const ContainerComments = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.75rem",
});
