import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProfileContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 540px;
  margin-bottom: 20px;
  margin-top: 50px;
`;

const Header = styled.div`
  width: 100%;
  height: 60px;
  background: linear-gradient(to right, #ff832b, #ffb74d);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  top: 0;
  left: 0;
`;

const TextWrap = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-top: 12px;
  margin-left: 15px;
  line-height: 2;
`;

const FormBox = styled.input`
  height: 45px;
  background-color: #feecdb;
  border-color: #f8efe6;
  border-style: none;
  border-radius: 10px;
  outline-color: #ffe3c8;
  margin: 10px 0;
  padding: 0 10px;
  width: 60%;
`;

const FormBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 70px;
  padding: 70px 10px 10px;
  margin-top: -20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  width: 100px; /* Set a fixed width for consistent alignment */
  margin-right: 10px;
  text-align: right; /* Align text to the right */
`;

const SexButton = styled.button`
  padding: 3px;
  font-size: 15px;
  height: 40px;
  width: 120px;
  background-color: #fee5ce;
  color: #ff832b;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  margin-left: 2px;
  font-weight: bold;
  border: 1px solid #ffe3c8;

  &:hover {
    background-color: #ff832b;
    color: white;
  }
  margin-bottom: 20px;
`;
const SexButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 250px;
`;

const Myinfo = () => {
  return (
    <Wrapper>
      <ProfileContainer>
        <Header>
          <TextWrap>내정보</TextWrap>
        </Header>
        <FormBoxContainer>
          <InputContainer>
            <Label>이름:</Label>
            <FormBox type="text" placeholder="이름을 입력하세요" />
          </InputContainer>
          <InputContainer>
            <Label>아이디:</Label>
            <FormBox type="text" placeholder="아이디를 입력하세요" />
          </InputContainer>
          <InputContainer>
            <Label>비밀번호:</Label>
            <FormBox type="text" placeholder="비밀번호를 입력하세요" />
          </InputContainer>
          <InputContainer>
            <Label>이메일:</Label>
            <FormBox type="text" placeholder="이메일을 입력하세요" />
          </InputContainer>
          <InputContainer>
            <Label>생년월일:</Label>
            <FormBox
              type="text"
              placeholder="생년월일을 입력하세요 (YYMMDD 형식)"
            />
          </InputContainer>
          <SexButtonContainer>
            <Label>성별:</Label>
            <SexButton>남</SexButton>
            <SexButton>여</SexButton>
          </SexButtonContainer>
        </FormBoxContainer>
      </ProfileContainer>
    </Wrapper>
  );
};

export { Myinfo };