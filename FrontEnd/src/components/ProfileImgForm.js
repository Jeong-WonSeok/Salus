import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  position: ${(props) =>
  props.imagePosition ? props.imagePosition : "relative"};
  width: ${(props) => (props.imageWidth ? props.imageWidth : 150 + "px")};
  height: ${(props) => (props.imageWidth ? props.imageWidth : 150 + "px")};
  border-radius: ${(props) => (props.imageWidth ? props.br : 5 + "px")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "")};
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : 0)};
  background: ${(props) => props.imagePreview ? `url("${props.imagePreview}") no-repeat center/cover`: ""};
  cursor: ${props => props.cursor ? props.cursor : 'default'};
  border: ${props => props.border ? props.border : ''};

  & div input {
    display: none;
  }

  & div label {
    visibility: ${(props) => (props.imagePreview ? "hidden" : "visible")};
  }
  & div label img {
    cursor: pointer;
  }
`;

const ProfileImgForm = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(false);
  
  //이미지 업로드 함수
  //이미지를 URL로 변환 후 업로드
  const ImageUploader = (e) => {
    const imageSelected = e.target.files[0];
    const types = ["image/png", "image/jpeg", "image/jpg"];
    if (imageSelected && types.includes(imageSelected.type)) {
      let ImgReader = new FileReader();
      ImgReader.readAsDataURL(imageSelected);
      ImgReader.onloadend = (e) => {
        setImage(e.target.result);
      };
    } else {
      setError(true);
    }
  };
  //이미지를 지우는 함수
  const ImageRemover = () => {
    setImage(null)
  }
  return (
    <Div>
      <Div
        imageWidth="170px"
        imageHeight="170px"
        imagePreview={image}
        br="13px"
      >
        {error && <p>File not supported</p>}
        <Div className="d-flex justify-content-center align-items-center">
          <div>
            <label htmlFor="fileUpload">
              <img
                src="https://icons-for-free.com/download-icon-profile+profile+page+user+icon-1320186864367220794_512.png"
                alt=""
              />
            </label>
            <input type="file" id="fileUpload" onChange={ImageUploader} />
          </div>
          {image && (
            <Div
              imageWidth="40px"
              imageHeight="40px"
              br="50px"
              imagePreview="https://pngroyale.com/wp-content/uploads/2022/05/Red-Minus-Symbol-Transparent-Image.png"
              imagePosition="absolute"
              ml={170}
              mt={170}
              onClick={ImageRemover}
              cursor="pointer"
            ></Div>
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default ProfileImgForm;
