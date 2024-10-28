import { styled } from "@styled-system/jsx";

const Button = styled("button", {
  base: {
    border: "1px solid #1f1f1f",
    backgroundColor: "#dbdbdb",
    color: "#1f1f1f",
    padding: "0.5rem 1rem",
    borderRadius: "0.25rem",
    "&:hover": {
      backgroundColor: "#b3b3b3",
    },
  },
});

export default Button;
