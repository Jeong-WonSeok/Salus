import React from "react";
import AuthWrapper from "../layout-wrapper/AuthWrapper";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";

const SignupPage = () => {
  const classList = ["d-flex"];
  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const DivStyle = styled.div`
    width: 462px;
    height: 100%;
    background-color: blue;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  `;

  const DivButton = styled.div`
    margin-bottom: 76px;
  `;

  const DivLarge = styled.div`
    margin-top: 80px;
    margin-bottom: 50px;
    margin-right: 30px;
  `;
  const FormContainer = styled.form`
    width: 830px;
    height: 100%;
  `;

  return (
    <AuthWrapper classList={classList}>
      <DivStyle className="main-theme-bg"></DivStyle>
      <FormContainer onSubmit={SubmitHandler}>
        <DivLarge>
          <div className="d-flex justify-content-around mb-1">
            <div>
              <div className="ms-5 mb-5">
                <img src="https://via.placeholder.com/150" alt="" />
              </div>
              <DivButton>
                <InputComponent
                  inputLabel="이름(성)"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="이름"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="이름"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
            </div>

            <div>
              <DivButton>
                <InputComponent
                  inputLabel="이메일"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="비밀번호"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="비밀번호 확인"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="휴대전화"
                  inputHeight={25}
                  inputWidth={330}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
              <DivButton>
                <InputComponent
                  inputLabel="성별"
                  inputHeight={25}
                  inputWidth={50}
                  inputValid={true}
                  labelTop={1.3}
                ></InputComponent>
              </DivButton>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div>
              <ButtonComponent
                inputWidth={358}
                buttonHeigh={50}
              ></ButtonComponent>
              <div className="d-flex justify-content-center mt-3">
                다른 아이디로 로그인 하기
              </div>
            </div>
          </div>
        </DivLarge>
      </FormContainer>
    </AuthWrapper>
  );
};

export default SignupPage;
