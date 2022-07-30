import React from "react";
import { Div, CustomDiv } from "../styles/web.style";
import MenuTabBar from './../components/Common/MenuTabBar';

const EquipmentListPage = () => {

  return (
    <Div ml="327px" mt="200px">
      <CustomDiv
        borderRadius={10}
        divWidth="1392px"
        divHeight="900px"
        ml="50px"
        mr="50px"
      >
        <Div className="scarlet-200-bg" mb="30px">
          검색 바
        </Div>
        <Div borderRadius="10px 10px 0px 0px">
          <MenuTabBar/>
        </Div>
      </CustomDiv>
    </Div>
  );
};

export default EquipmentListPage;
