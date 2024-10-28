import { styled } from "@styled-system/jsx";

const Heading = styled("h1", {
  base: {
    fontFamily: "system-ui, sans-serif",
    fontWeight: 600,
    fontSize: "2rem",
    color: "#000",
  },
});

export const Heading2 = styled("h2", {
  base: {
    fontFamily: "system-ui, sans-serif",
    fontWeight: 400,
    fontSize: "1.5rem",
    color: "#000",
  },
});

export const Paragraph = styled("p", {
  base: {
    fontFamily: "system-ui, sans-serif",
    fontWeight: 300,
    fontSize: "1rem",
    color: "#000",
  },
});

export default Heading;
