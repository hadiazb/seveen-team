import styled from 'styled-components';

const WrapperInputLabel = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  margin-right: 10px;
`;

const Label = styled.label`
  font-size: 24px;
  margin: 10px 0;
`;

const Input = styled.input`
  border-radius: 5px;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  outline: none;
  padding: 5px;
`;

export { WrapperInputLabel, Label, Input };
