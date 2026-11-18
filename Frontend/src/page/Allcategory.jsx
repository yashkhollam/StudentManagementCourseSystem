import React, { useState } from "react";
import { categories } from "../components/data/categoryicon";
import { FaArrowRight, FaMagnifyingGlass } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import '../css/Allcategory.css';

const AllCategories = () => {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleCategoryClick = (name) => {
    const slug = name.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-");

    navigate(`/categories/${slug}`);
  };

  return (
    <section className="all-categories-section">

      <div className="container">

        {/* Heading */}

        <div className="all-categories-heading text-center">

          <span className="categories-tag">
            Explore Learning
          </span>

          <h2>
            Explore All <span>Categories</span>
          </h2>

          <p>
            Discover courses across different technologies
            and find the perfect learning path for you.
          </p>

        </div>


        {/* Search */}

        <div className="category-search-box">

          <FaMagnifyingGlass />

          <input
            type="text"
            placeholder="Search categories..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>


        {/* Category Count */}

        <div className="category-result-info">
          <h5>
            All Categories ({filteredCategories.length})
          </h5>
        </div>


        {/* Categories Grid */}

        <div className="row g-4">

          {filteredCategories.length > 0 ? (

            filteredCategories.map((category) => {

              const Icon = category.icon;

              return (

                <div
                  className="col-12 col-sm-6 col-lg-4 col-xl-3"
                  key={category.id}
                >

                  <div className="all-category-card">

                    <div
                      className="all-category-icon"
                      style={{
                        backgroundColor: category.bgColor,
                        color: category.fontColor
                      }}
                    >
                      <Icon />
                    </div>

                    <h5>{category.name}</h5>

                    <p>
                      {category.coursesCount} Courses Available
                    </p>

                    <button
                      onClick={() => handleCategoryClick(category.name)}
                    >
                      Explore Category <FaArrowRight />
                    </button>

                  </div>

                </div>

              );

            })

          ) : (

            <div className="col-12 text-center py-5">
              <h5>No categories found!</h5>
              <p>Try searching with a different keyword.</p>
            </div>

          )}

        </div>

      </div>

    </section>
  );
};

export default AllCategories;