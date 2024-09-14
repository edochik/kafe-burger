import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import { ToggleProductButton } from "../../shared/ui/ToggleProductButton/";
import s from "./ModalCard.module.scss";

const ModalCard = () => {
  return (
    <div className={s.overlay}>
      <div className={s.modal}>
        <h2 className={s.title}>Мясная бомба</h2>
        <div className={s.box}>
          <img className={s.image} src="./images/meat-bomb.jpg" alt="" />
          <div className={s.info}>
            <p className={s.description}>
              Супер мясное наслаждение! Большая рубленая котлета из свежего
              говяжего мяса покорит вас своей сочностью, а хрустящие листья
              салата добавят свежести.
            </p>
            <p className={s.composition}>Состав:</p>
            <ul className={s.list}>
              <li className={s.item}>Пшеничная булочка</li>
              <li className={s.item}>Котлета из говядины</li>
              <li className={s.item}>Красный лук</li>
              <li className={s.item}>Листья салата</li>
              <li className={s.item}>Соус горчичный</li>
            </ul>
            <div className={s.nutritional_info}>520г, ккал 430</div>
          </div>
          <div className={s.button}>Добавить</div>
          <div className={s.inner}>
            <ToggleProductButton />
            <p className={s.price}>689₽</p>
          </div>
        </div>
        <div className={s.close}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export { ModalCard };

