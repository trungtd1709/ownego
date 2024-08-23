import { products } from "../../sample-data";
import { MilkTeaCard } from "../MilkTeaCard";
import './style.css';

export const MilkTeaContainer = (props) => {
  const {activeProducts = []} = props;
  return (
    <div className="milk-tea-container">
      {activeProducts.map((product, key) => {
        return <MilkTeaCard key={key} product={product} isTrending={product.name == "Green Milk Tea"} />;
      })}
    </div>
  );
};
