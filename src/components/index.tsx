import { styled } from 'linaria/react';
export const Component = () => <Button data-testid="test">Hello</Button>;

const Button = styled.button`
  color: red;
`;
