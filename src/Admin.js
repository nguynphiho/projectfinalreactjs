import styled from "styled-components/macro";
import { Outlet } from "react-router-dom";
import Navigation from "pages/AdminNav";

const Admin = () => {
  return (
    <Container>
      <Navigation>
        <Content>
          <Outlet />
        </Content>
      </Navigation>
    </Container>
  );
};

export default Admin;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  margin-top: 65px;
`