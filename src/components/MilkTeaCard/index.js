import { appColor } from "../../shared/constant";
import "./style.css";

export const MilkTeaCard = (props) => {
  const { product, isTrending = true } = props;
  const { id, name, price, toppings } = product;
  return (
    <div className="milk-tea-card" style={{ color: appColor.primaryColor }}>
      <span className="milk-tea-id">MT-0{id}</span>
      <span className="milk-tea-name">{name}</span>
      <span className="milk-tea-toppings-title">Toppings</span>
      <span className="milk-tea-toppings">{toppings}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        {isTrending && (
          <div
            style={{
              backgroundColor: appColor.primaryColor,
              padding: "5px 8px 5px 8px",
              position: "relative",
              left: "-12px",
            }}
          >
            <span style={{ color: "white" }}>Trending</span>
          </div>
        )}
        <span
          className=""
          style={{ justifySelf: "end", fontWeight: "600", fontSize: "16px" }}
        >
          ${price}
        </span>
      </div>
    </div>
  );
};
