import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  width: 130px;
  background-color: var(--bg-highlight);
  overflow: hidden;
  animation: slide-down 300ms ease-out forwards;

  ${mobile({
    top: "95px",
  })}

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
