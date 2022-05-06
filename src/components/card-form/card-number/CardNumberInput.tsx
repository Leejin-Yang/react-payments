import React, { forwardRef } from 'react';
import styled from '@emotion/styled';

type Props = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const CardNumberInput = forwardRef<HTMLInputElement, Props>(({ onChange, value }, ref) => {
  return <Input onChange={onChange} value={value} ref={ref} />;
});
CardNumberInput.displayName = 'CardNumberInput';

const Input = styled.input(() => ({
  backgroundColor: '#ECEBF1',
  height: '47px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
}));

export default CardNumberInput;