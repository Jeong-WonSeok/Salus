import React from "react";
import { Div, CustomDiv } from "../styles/web.style";
import MenuTabBar from './../components/Equipments/MenuTabBar';

const EquipmentListPage = () => {

  return (
    <CustomDiv ml="327px" mt="200px" divWidth="100%" divHeight="100%">
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
    </CustomDiv>
  );
};

export default EquipmentListPage;
