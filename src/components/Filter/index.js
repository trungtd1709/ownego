import React from "react";

const Filter = ({ selectedToppings, onToppingChange, onSortChange, sortCriteria }) => {
  const filterContainerStyle = {
    marginBottom: "20px",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    display: "flex",
    gap: "20px",
    flexDirection: "row",
  };

  const headingStyle = {
    marginBottom: "10px",
    textAlign: "left",
    fontSize: "18px",
    color: "#333",
  };

  const toppingItemStyle = {
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
  };

  const checkboxStyle = {
    marginRight: "10px",
    width: "18px",
    height: "18px",
    cursor: "pointer",
    appearance: "none",
    backgroundColor: "#fff",
    border: "2px solid #1A2A47",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const labelStyle = {
    fontSize: "16px",
    color: "#555",
    cursor: "pointer",
    fontWeight: "600",
  };

  const checkedStyle = {
    backgroundColor: "#1A2A47",
    color: "#fff",
  };

  const dropdownStyle = {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    width: "120px",
    border: "2px solid #1A2A47",
    cursor: "pointer",
    color: "#1A2A47",
    backgroundColor: "white",
  };

  const toppings = ["Pearl", "Milk foam", "Aloe", "Banana"];

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom:"10px"
        }}
      >
        <span style={{ ...headingStyle, textAlign: "start" }}>Toppings </span>
        <select
          style={dropdownStyle}
          value={sortCriteria}
          onChange={(e) => onSortChange(e.target.value)}
        >
          <option value="nameAsc">Name (Asc)</option>
          <option value="nameDsc">Name (Dsc)</option>
          <option value="priceAsc">Price (Asc)</option>
          <option value="priceDsc">Price (Dsc)</option>
        </select>
      </div>
      <div style={filterContainerStyle}>
        {toppings.map((topping) => (
          <div key={topping} style={toppingItemStyle}>
            <input
              type="checkbox"
              id={topping}
              value={topping}
              checked={selectedToppings.includes(topping)}
              onChange={() => onToppingChange(topping)}
              style={{
                ...checkboxStyle,
                ...(selectedToppings.includes(topping) && checkedStyle),
              }}
            />
            <label htmlFor={topping} style={labelStyle}>
              {topping}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
