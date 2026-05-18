import styled from "styled-components";

const StyledP = styled.p`
  font-size: 1.15rem;
  margin-bottom: 0;
  font-style: italic;
  max-width: 600px;
  color: #fff;
  font-weight: 300;
  text-align: center;
`;

function TestimonialContent({ content }) {
  return (
    <div>
      <StyledP>„{content}”</StyledP>
    </div>
  );
}

export default TestimonialContent;
