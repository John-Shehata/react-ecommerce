import React, { useState } from "react";
import productsData from "../products.json";

import PageHeader from "../components/PageHeader";
import ProductCards from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategories from "./ShopCategories";
import PopularPosts from "../components/PopularPosts";
import Tags from "../components/Tags";

const Shop = () => {
  const [gridOrList, setGridOrList] = useState(true);
  const [products, setProducts] = useState(productsData);

  // Pagination Logic
  const [currentPage, setCurrentPage] = useState(1); // know number of page now
  const productsPerPage = 12; // Number of products in single page

  const indexOfLastProduct = currentPage * productsPerPage;
  // Index of last product ( plus 1 ) in a page to slice it
  //example: currentPage = 1 , productsPerPage = 12 => indexOfLastProduct = 1 * 12 = 12 (11+1)
  // this is last product in first page plus one ( real index of first product in a secnod page )
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // Index of first product in a page to slice it
  //example: currentPage = 2 , productsPerPage = 12 => indexOfLastProduct = 2 * 12 = 24 (23+1)
  // indexOfFirstProduct = 24 -12 = 12 => this is real index of first product in a secnod page

  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // slice from 12 to 23 (not including the end (24) )

  // Fuction to change the current page
  const paginatePages = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  ////////////////////////////////
  // filter products based on catrgory
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ];

  const filterCategory = (curCategory) => {
    const filteredProducts = productsData.filter(
      (product) => product.category === curCategory
    );
    setSelectedCategory(curCategory);
    setCurrentPage("1");
    if (curCategory === "All") {
      setProducts(productsData);
    } else {
      setProducts(filteredProducts);
    }
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            {/* Left Side */}
            <div className="col-lg-8 col-12">
              <article>
                {/* Layout and title here */}
                <div className="shop-title d-flex justify-content-between">
                  <p>
                    Showing{" "}
                    {`${
                      indexOfFirstProduct < 10
                        ? "0" + (indexOfFirstProduct + 1)
                        : indexOfFirstProduct + 1
                    }`}
                    -{" "}
                    {`${
                      currentProducts.length < 12
                        ? products.length
                        : indexOfLastProduct
                    }`}{" "}
                    of {products.length} Results
                  </p>
                  {/* Button to switch view between grid and list  */}
                  <div
                    className={`product-view-mode ${
                      gridOrList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a
                      className="grid"
                      onClick={() => setGridOrList(!gridOrList)}
                    >
                      <i className="icofont-ghost"></i>
                    </a>
                    <a
                      className="list"
                      onClick={() => setGridOrList(!gridOrList)}
                    >
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* Products cards here */}
                <div>
                  <ProductCards
                    gridOrList={gridOrList}
                    products={currentProducts}
                  />
                </div>
                {/* Paginagion is here */}
                <Pagination
                  currentPage={currentPage}
                  numOfProducts={products.length}
                  productsPerPage={productsPerPage}
                  paginatePages={paginatePages}
                />
              </article>
            </div>
            {/* Right Side */}
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridOrList={gridOrList} />
                <ShopCategories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  filterCategory={filterCategory}
                  setProducts={setProducts}
                  setSelectedCategory={setSelectedCategory}
                />
                <PopularPosts />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
