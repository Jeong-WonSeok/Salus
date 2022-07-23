import React, { Fragment, useState } from 'react';
import styled from 'styled-components';

const ProfileImgForm = () => {
  const [image, setImage] = useState("https://via.placeholder.com/150");
  const ProfileImgDiv = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 5px;
    
    
  `
  return (
    <ProfileImgDiv>
      
    </ProfileImgDiv>
  );
};

export default ProfileImgForm;