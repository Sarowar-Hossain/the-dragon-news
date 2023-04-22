import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(categories);

  return (
    <div className="px-4">
      <h3 className="text-left text-2xl font-bold mb-4">All Caterogy</h3>

      <div className="bg-[#E7E7E7]">
        <h1 className="text-3xl text-[#403F3F] font-bold py-4">
          National News
        </h1>
      </div>
      <div className="text-start">
        {categories.map((categorie) => (
          <h1
            className="text-3xl text-[#403F3F] font-bold py-4"
            key={categorie.id}
          >
            <Link to={`/categorie/${categorie.id}`}>{categorie.name}</Link>
          </h1>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
