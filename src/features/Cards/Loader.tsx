import s from "./Cards.module.scss";
import { SkeletonLoaderCard } from "@shared/ui/SVGIcons/SkeletonLoaderCard";

const Loader = () => {
  return (
    <section className={s.Cards}>
      <h2 className={s.title}>...загрузка</h2>
      <ul className={s.list}>
        {Array(6)
          .fill(null)
          .map((_, index) => (
            <SkeletonLoaderCard className={s.SkeletonLoaderCard} key={index} />
          ))}
      </ul>
    </section>
  );
};

export { Loader };
