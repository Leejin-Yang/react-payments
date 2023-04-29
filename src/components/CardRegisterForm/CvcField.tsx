import type { ChangeEventHandler } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';

import useCardFormValue from '../../hooks/useCardFormValue';

interface Props {
  handleNumberChange: ChangeEventHandler<HTMLInputElement>;
}

const CvcField = ({ handleNumberChange }: Props) => {
  const { cvc } = useCardFormValue();

  return (
    <TextField
      label="보안코드(CVC/CVV)"
      size="small"
      tooltipMessage="카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다."
    >
      <Input
        type="password"
        minLength={3}
        maxLength={3}
        required
        tabIndex={8}
        value={cvc}
        onChange={handleNumberChange}
        //ref={inputRefs[7]}
        align="center"
        data-set-value="setCvc"
      />
    </TextField>
  );
};

export default CvcField;