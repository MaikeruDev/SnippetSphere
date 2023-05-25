import React, { useState } from 'react';

const Sidebar = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const programmingLanguages = [
    {
      id: 1,
      name: 'JavaScript',
      categories: ['Loops', 'Conditionals', 'Functions'],
    },
    {
      id: 2,
      name: 'Python',
      categories: ['Loops', 'Conditionals', 'Functions'],
    },
    {
      id: 3,
      name: 'Java',
      categories: ['Loops', 'Conditionals', 'Functions'],
    },
    // Add more languages and their respective categories as needed
  ];

  const toggleCategory = (categoryId) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
    } else {
      setActiveCategory(categoryId);
    }
  };

  return (
    <aside className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-4">Programming Languages</h2>
      <ul>
        {programmingLanguages.map((language) => (
          <li key={language.id} className="mb-2">
            <button
              className="flex items-center justify-between w-full py-2 px-4 bg-white rounded-md shadow"
              onClick={() => toggleCategory(language.id)}
            >
              <span>{language.name}</span>
              <svg
                className={`w-4 h-4 text-gray-600 transition-transform duration-300 ${
                  activeCategory === language.id ? 'transform rotate-180' : ''
                }`}
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M9.293 12l4.147-4.146a.501.501 0 0 0-.708-.708l-4.5 4.5a.5.5 0 0 0 0 .708l4.5 4.5a.5.5 0 0 0 .708-.708L9.293 12z"
                />
              </svg>
            </button>
            {activeCategory === language.id && (
              <ul className="pl-4 mt-2">
                {language.categories.map((category, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {category}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
