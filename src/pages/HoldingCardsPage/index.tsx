import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import Button from '../../components/common/Button';

import { PlusIcon } from '../../assets/svgs';
import { ROUTES } from '../../constants/routes';
import type { CardData } from '../../types/card';

import styles from './holdingCardsPage.module.css';

interface Props {
  cards: CardData[];
}

const HoldingCardsPage = ({ cards }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${ROUTES.CARD_INFO_REGISTER}`);
  };

  return (
    <>
      <Header title="보유 카드" />
      <main>
        {cards.length === 0 && (
          <h2 className={styles.subTitle}>새로운 카드를 등록해주세요.</h2>
        )}
        <section className={styles.cardContainer}>
          {cards.length > 0 && (
            <ul className={styles.cardList}>
              {cards.map((card, index) => (
                <li
                  key={`${card.number.first}-${index}`}
                  className={styles.cardItem}
                >
                  <CardItem cardData={card} />
                  <p>{card.name}</p>
                </li>
              ))}
            </ul>
          )}
          <Button type="button" size="card" color="gray" onClick={handleClick}>
            <PlusIcon width={16} height={16} />
          </Button>
        </section>
      </main>
    </>
  );
};

export default HoldingCardsPage;
