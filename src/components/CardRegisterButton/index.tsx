import styles from './cardRegisterButton.module.css';

interface Props {
  onClick: () => void;
}

const CardRegisterButton = ({ onClick }: Props) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      <svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.0814 6.55957V9.1084H0.462286V6.55957H15.0814ZM9.13416 0.333984V15.8613H6.4242V0.333984H9.13416Z"
          fill="#575757"
        />
      </svg>
    </button>
  );
};

export default CardRegisterButton;