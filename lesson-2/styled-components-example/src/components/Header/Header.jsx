import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  padding: 20px;
`

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Page title</h1>
      <p>Greatest site in the world.</p>
    </HeaderWrapper>
  )
};

export default Header;

