import styled from '@emotion/styled';
import { InputHTMLAttributes, useState } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  initialValue?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ initialValue, type, id, placeholder, width, height, onChange, min, max }: Props) {
  const [value, setValue] = useState(initialValue);

  const handleValueChange: React.ChangeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <StyledInput
      type={type}
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      width={width}
      height={height}
      min={min}
      max={max}
      autoComplete="off"
      onChange={handleValueChange}
    />
  );
}

const StyledInput = styled.input(({ width, height }) => {
  return {
    outline: 'none',
    paddingLeft: '10px',
    marginBottom: '20px',
    width,
    height,
  };
});

export default Input;
