import React, { InputHTMLAttributes, LegacyRef, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { CSSProperties } from 'styled-components';
import { InputContainer, InputLabel } from './styles'; 

type CustomInputRefProps = InputHTMLAttributes<HTMLInputElement> & {
  refr: LegacyRef<HTMLInputElement>;
  inputType: string; 
  maxLength?: number;
  placeholder?: string;
  visibilityButton?: boolean;
  disabled?: boolean;
  label?: string;
  style?: CSSProperties;
};

const CustomInputRef: React.FC<CustomInputRefProps> = ({
  refr,
  inputType,
  maxLength,
  placeholder = '',
  visibilityButton = false,
  disabled = false,
  label = '',
  style,
  ...rest
}) => {
  const [textVisibility, setTextVisibility] = useState(false);

  const toggleTextVisibility = () => setTextVisibility(!textVisibility);

  return (
    <InputContainer style={style}> {}
      {label && <InputLabel>{label}</InputLabel>} {}
      <input
        ref={refr}
        autoComplete="off"
        spellCheck="false"
        type={visibilityButton && textVisibility ? 'text' : inputType}
        maxLength={maxLength}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {visibilityButton && (
        textVisibility
          ? <FiEyeOff onClick={toggleTextVisibility} color='#c4c4c4' size={20} />
          : <FiEye onClick={toggleTextVisibility} color='#c4c4c4' size={20} />
      )}
    </InputContainer>
  );
};

export default CustomInputRef;
