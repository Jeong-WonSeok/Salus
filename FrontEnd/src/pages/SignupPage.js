import React, { useState } from "react";
import AuthWrapper from "../layout-wrapper/AuthWrapper";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";
import ProfileImgForm from "../components/ProfileImgForm";
import InputToggleComponent from "../components/InputToggleComponent";
import SignupLogo from "../components/SignupLogo";

// 회원가입 페이지에서 사용할 div 스타일
const Div = styled.div`
  margin-bottom: ${(props) => (props.mb ? props.mb + 'px' : 0)};
  margin-top: ${(props) => (props.mt ? props.mt + 'px' : 0)};
  margin-right: ${(props) => (props.mr ? props.mr + 'px' : 0)};
  margin-left: ${(props) => (props.ml ? props.ml + 'px' : 0)};
`;

const FormContainer = styled.form`
  width: 830px;
  height: 100%;
`;

const SignupPage = () => {
  const classList = ["d-flex"];
  const [password, setPassword] = useState({
    password1: "",
    password2: "",
  });
  const [bodyData, setBodyData] = useState({
    email: "",
    lastName: "",
    firstName: "",
    password: "",
    gender: 0,
    phone: "",
    birthDay: "",
    profileImage: ""
  });

  const imageUploader = (store) => {
    setBodyData({ ...bodyData, birthDay: store.target.value });
  }

  const dataUploader = (store, type) => {
    if (type === "date") {
      let parts = store.target.value.split("-");
      let dateVal = new Date(parts[0], parts[1] - 1, parts[2]);
      setBodyData({ ...bodyData, birthDay: dateVal });
      console.log(bodyData);
    } 
    
    else if (type === "checkbox") {
      setBodyData({ ...bodyData, gender: store.target.checked ? 1 : 0 }); // 남성:1, 여성: 0
    } 
    
    else if (type === "password") {
      if (store.target.name === "password1") {
        setPassword({ ...password, password1: store.target.value });
        if (store.target.value === password.password2) {
          setBodyData({ ...bodyData, password: store.target.value });
        }
      } else if (store.target.name === "password2") {
        setPassword({ ...password, password2: store.target.value });
        if (store.target.value === password.password1) {
          setBodyData({ ...bodyData, password: store.target.value });
        }
      }
    } 
    else {
      setBodyData({ ...bodyData, [store.target.name]:store.target.value });
    }
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target[0]);
  };

  return (
    <AuthWrapper classList={classList}>
      <SignupLogo></SignupLogo>
      <FormContainer onSubmit={SubmitHandler} autocomplete="off">
        <Div mt={100}>
          <div className="d-flex justify-content-around mb-1">
            <Div>
              <Div ml={100} mb={50}>
                <ProfileImgForm imageUploader={imageUploader}></ProfileImgForm>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="lastName"
                  inputId={`${1} inputComponent`}
                  inputLabel="이름(성)"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="firstName"
                  inputId={`${2} inputComponent`}
                  inputLabel="이름"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="birthDay"
                  inputId={`${3} inputComponent`}
                  inputLabel="생년월일"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputType="date"
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
            </Div>

            <Div mt={20} mr={25}>
              <Div mb={65}>
                <InputComponent
                  inputName="email"
                  inputId={`${4} inputComponent`}
                  inputLabel="이메일"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="password1"
                  inputId={`${5} inputComponent`}
                  inputLabel="비밀번호"
                  inputType="password"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="password2"
                  inputId={`${6} inputComponent`}
                  inputLabel="비밀번호 확인"
                  inputType="password"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div mb={65}>
                <InputComponent
                  inputName="phone"
                  inputId={`${7} inputComponent`}
                  inputLabel="휴대전화"
                  inputHeight="25px"
                  inputWidth="330px"
                  inputValid={true}
                  labelTop={1.3}
                  inputEvent={dataUploader}
                ></InputComponent>
              </Div>
              <Div>
                {/* inputName="gender" */}
                <InputToggleComponent></InputToggleComponent>
              </Div>
            </Div>
          </div>

          <div className="d-flex justify-content-center">
            <div>
              <ButtonComponent inputWidth={358} buttonHeigh={50} buttonText="회원 가입"></ButtonComponent>
              <div className="d-flex justify-content-center mt-3">다른 아이디로 로그인 하기</div>
            </div>
          </div>
        </Div>
      </FormContainer>
    </AuthWrapper>
  );
};

export default SignupPage;
