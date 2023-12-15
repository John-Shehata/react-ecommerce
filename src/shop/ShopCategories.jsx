import React from "react";

const ShopCategories = ({
  categories,
  selectedCategory,
  filterCategory,
}) => {
  // Map of alll categories and render it
  const renderCategories = categories.map((category, idx) => {
    return (
      <button
        key={idx}
        className={`ms-2 mt-2 ${selectedCategory == category ? "bg-warning" : ""}`}
        onClick={() => filterCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div>
        <button
          className={`ms-2  ${selectedCategory == "All" ? "bg-warning" : ""}`}
          onClick={() => filterCategory("All")}
        >
          All
        </button>
        {renderCategories}
      </div>
    </>
  );
};

export default ShopCategories;
