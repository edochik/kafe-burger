import { useRef, useState } from "react";
import { CloseIcon } from "../../shared/ui/SVGIcons/CloseIcons";
import s from "./ModalForm.module.scss";
import { data } from "./ModalForm";
interface ModalFormProps {
  setToggleModalForm: (value: boolean) => void;
}
const ModalForm = (props: ModalFormProps) => {
  const { setToggleModalForm } = props;
  const [receiving, setReceiving] = useState("pickup");
  // const overlayRef = useRef(null);
  return (
    <div className={s.overlay} onClick={() => setToggleModalForm(false)}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.column}>
          <img className={s.image} src="./images/donut.png" alt="donut" />
        </div>
        <div className={s.column}>
          <h2 className={s.title}>Доставка</h2>
          <form className={s.form}>
            <input
              className={s.name}
              type="text"
              placeholder="Ваше имя"
              required
            />
            <input
              className={s.phone}
              type="text"
              placeholder="Телефон"
              required
            />
            <div className={s.wrapper_radio}>
              {data.map((item, index) => (
                <label
                  key={item.id}
                  className={s.label}
                  onClick={() => setReceiving(item.nameEn)}
                >
                  <input
                    className={s.receiving}
                    name="receiving"
                    type="radio"
                    value={item.nameEn}
                    defaultChecked={index === 0}
                    required
                  />
                  <span className={s.radio}></span>
                  <span className={s.text}>{item.nameRu}</span>
                </label>
              ))}
            </div>
            {receiving === "pickup" ? (
              <>
                <input
                  className={s.address}
                  type="text"
                  placeholder="Улица, дом, квартира"
                  required
                />
                <div className={s.wrapper}>
                  <input
                    className={s.floor}
                    type="text"
                    placeholder="Этаж"
                    required
                  />
                  <input
                    className={s.intercom}
                    type="text"
                    placeholder="Домофон"
                    required
                  />
                </div>
              </>
            ) : (
              ""
            )}
            <button className={s.button}>Оформить</button>
          </form>
        </div>
        <div className={s.close} onClick={() => setToggleModalForm(false)}>
          <CloseIcon></CloseIcon>
        </div>
      </div>
    </div>
  );
};

export { ModalForm };
