import React from "react";
import styled from "styled-components";
import AdminComponent from "../components/Admin/AdminComponent";

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  width: 85%;
  height: 15%;
  font-size: 34px;
  line-height: 36px;
  font-weight: 600;
  text-align: center;
  margin: 0 auto;

  &div {
    margin-top: 2rem;
  }
`;

const AdminPage = () => {
  return (
    <Div>
      <Title>Admin Page</Title>

      <AdminComponent />
    </Div>
  );
};

export default AdminPage;
