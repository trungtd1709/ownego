import React, { useEffect, useState } from "react";
import "./App.css";
import { MilkTeaContainer } from "./components/MilkTeaContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import { products, shopProducts, stores } from "./sample-data";
import Filter from "./components/Filter";

function App() {
  const [activeStore, setActiveStore] = useState();
  const [activeProducts, setActiveProducts] = useState([]);
  const [toppingFilter, setToppingFilter] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("nameAsc");

  useEffect(() => {
    onChangeStore(stores[0]);
  }, []);

  useEffect(() => {
    if (activeStore) {
      const filteredProducts = filterProductsByToppings(
        getProductsByShop(activeStore.id),
        toppingFilter
      );
      setActiveProducts(sortProducts(filteredProducts, sortCriteria));
    }
  }, [toppingFilter, sortCriteria]);

  const onChangeStore = (store) => {
    setActiveStore(store);
    setActiveProducts(getProductsByShop(store.id));
    setToppingFilter([]);
    setSortCriteria("nameAsc"); // Reset sort to default when store changes
  };

  const getProductsByShop = (shopId) => {
    const productIds = shopProducts
      .filter((shopProduct) => shopProduct.shop === shopId)
      .map((shopProduct) => shopProduct.product);
    return products.filter((product) => productIds.includes(product.id));
  };

  const filterProductsByToppings = (products, toppings) => {
    if (toppings.length === 0) return products;
    return products.filter((product) =>
      toppings.every((topping) => product.toppings.includes(topping))
    );
  };

  const handleToppingChange = (topping) => {
    setToppingFilter((prevState) =>
      prevState.includes(topping)
        ? prevState.filter((item) => item !== topping)
        : [...prevState, topping]
    );
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const sortProducts = (products, criteria) => {
    switch (criteria) {
      case "nameAsc":
        return [...products].sort((a, b) => a.name.localeCompare(b.name));
      case "nameDsc":
        return [...products].sort((a, b) => b.name.localeCompare(a.name));
      case "priceAsc":
        return [...products].sort((a, b) => a.price - b.price);
      case "priceDsc":
        return [...products].sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <Sidebar onChangeStore={onChangeStore} />
      <div className="app-content">
        <h1>{activeStore?.name} menu</h1>
        <Filter
          selectedToppings={toppingFilter}
          onToppingChange={handleToppingChange}
          onSortChange={handleSortChange}
          sortCriteria={sortCriteria}
        />
        <MilkTeaContainer activeProducts={activeProducts} />
      </div>
    </div>
  );
}

export default App;
