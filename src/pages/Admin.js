import styled from "styled-components/macro";
import { Outlet } from "react-router-dom";
import Navigation from "./AdminNav";

const Admin = () => {
  return (
    <Container className="app">
      <Navigation>
        <Outlet />
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

// const Content = styled.div`
//   flex: auto;
// `;
