import { styled } from "styled-components";

const StyledDateError = styled.p`
  font-size: 1rem;
  font-style: italic;
  color: var(--color-primary-light-red);
  //width: 75px;
`;

function DateError({ children }) {
  return <StyledDateError>{children}</StyledDateError>;
}

export default DateError;
