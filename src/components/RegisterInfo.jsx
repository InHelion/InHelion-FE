import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  width: 50%;
  padding: 10px;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  cursor: pointer;
  height: 380px;
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
  width: 60px;
`;

const FormBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 110px;
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
  width: 200px;
  margin-right: 10px;
  text-align: right;
`;

const InlineLabel = styled.label`
  font-weight: bold;
  margin-left: 10px;
  flex-shrink: 0; /* 추가 */
`;

const RegisterInfo = ({
  sleep,
  setSleep,
  medications,
  setMedications,
  exercises,
  setExercises,
  meals,
  setMeals,
}) => {
  const handleNumberInput = (e, setter) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <Wrapper>
      <InfoContainer>
        <Header>
          <TextWrap>필수정보</TextWrap>
        </Header>
        <FormBoxContainer>
          <InputContainer>
            <Label>목표 수면시간은</Label>
            <FormBox
              type="text"
              value={sleep}
              onChange={(e) => handleNumberInput(e, setSleep)}
            />
            <InlineLabel>시간 입니다.</InlineLabel>
          </InputContainer>
          <InputContainer>
            <Label>약 복용횟수는</Label>
            <FormBox
              type="text"
              value={medications}
              onChange={(e) => handleNumberInput(e, setMedications)}
            />
            <InlineLabel>회 입니다.</InlineLabel>
          </InputContainer>
          <InputContainer>
            <Label>목표 운동시간은</Label>
            <FormBox
              type="text"
              value={exercises}
              onChange={(e) => handleNumberInput(e, setExercises)}
            />
            <InlineLabel>분 입니다.</InlineLabel>
          </InputContainer>
          <InputContainer>
            <Label>하루 목표 식사횟수는</Label>
            <FormBox
              type="text"
              value={meals}
              onChange={(e) => handleNumberInput(e, setMeals)}
            />
            <InlineLabel>끼입니다.</InlineLabel>
          </InputContainer>
        </FormBoxContainer>
      </InfoContainer>
    </Wrapper>
  );
};

export default RegisterInfo;
