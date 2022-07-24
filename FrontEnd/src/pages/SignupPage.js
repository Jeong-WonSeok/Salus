import React from "react";
import AuthWrapper from "../layout-wrapper/AuthWrapper";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";
import ProfileImgForm from "../components/ProfileImgForm";

// 로고 사진 대신 사용하는 임시 Div 스타일
const DivStyle = styled.div`
  width: 462px;
  height: 100%;
  background-color: blue;
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
`;

// 회원가입 페이지에서 사용할 div 스타일
const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + "px" : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + "px" : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + "px" : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + "px" : 0)};
`;

const FormContainer = styled.form`
  width: 830px;
  height: 100%;
`;


const SignupPage = () => {
  const classList = ["d-flex"];
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };


  return (
    <AuthWrapper classList={classList}>
      <DivStyle className="main-theme-bg"></DivStyle>
      <FormContainer onSubmit={SubmitHandler} autocomplete="off">
        <Div mt={100}>
          <div className="d-flex justify-content-around mb-1">
            <Div>
              <Div ml={100} mb={50}>
                <ProfileImgForm></ProfileImgForm>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputLabel="이름(성)"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputLabel="이름"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputLabel="생년월일"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
            </Div>

            <Div mt={20} mr={25}>
              <Div mb={65}>
                <InputComponent
                  inputLabel="이메일"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputLabel="비밀번호"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputLabel="비밀번호 확인"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div>
                <InputComponent
                  inputLabel="휴대전화"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
              <Div>
                <InputComponent
                  inputLabel="성별"
                  inputHeight="25px"
                  inputWidth={50}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </Div>
            </Div>
          </div>

          <div className="d-flex justify-content-center">
            <div>
              <ButtonComponent
                inputWidth={358}
                buttonHeigh={50}
                buttonText="회원 가입"
              ></ButtonComponent>
              <div className="d-flex justify-content-center mt-3">
                다른 아이디로 로그인 하기
              </div>
            </div>
          </div>
        </Div>
      </FormContainer>
    </AuthWrapper>
  );
};

export default SignupPage;
