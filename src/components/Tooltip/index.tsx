import {
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './tooltip.module.css';

interface Props {
  children: ReactNode;
}

const Tooltip = ({ children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isShow, setIsShow] = useState(false);

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    setIsShow((prev) => !prev);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsShow(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className={styles.container} onClick={handleClick} ref={ref}>
      {children}
      {isShow && (
        <div className={styles.message}>
          <p>카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다.</p>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
