import React from "react";
import EquipmentCard from "./EquipmentCard";
import { Div } from "./../../styles/web.style";

const EquipmentCardList = ({ equipmentData }) => {


  return (
    <Div displayDiv="flex" flexWrap="wrap" ml="200px">
      {equipmentData.map((val, idx) => (
        <EquipmentCard key={`equipment ${idx}`} equipmentData={val} />
      ))}
    </Div>
  );
};

export default EquipmentCardList;
