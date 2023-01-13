import styled from '@emotion/styled';
import { useState, ChangeEventHandler, ChangeEvent } from 'react';

interface Props {
  type?: string;
  id: string;
  placeholder: string;
  width?: number;
  height?: number;
}

function Input({ type, id, placeholder, width, height }: Props) {
  const [value, setValue] = useState('');

  const handleValueChange: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInput
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      autoComplete="off"
      onChange={handleValueChange}
    />
  );
}

const StyledInput = styled.input((props) => {
  return {
    outline: 'none',
    paddingLeft: '10px',
    marginBottom: '20px',
    width: props.width,
    height: props.height,
  };
});

export default Input;
