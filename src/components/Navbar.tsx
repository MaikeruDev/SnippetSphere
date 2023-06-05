import React, { useState } from 'react';
import ForLoopContent from './Python/Loops/ForLoopContent';
import WhileLoopContent from './Python/Loops/WhileLoopContent';
import DoWhileLoopContent from './Python/Loops/DoWhileLoopContent';

const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleLanguage = (languageId: any) => {
    if (activeLanguage === languageId) {
      setActiveLanguage(null);
      setActiveCategory(null);
      setActiveSubcategory(null);
    } else {
      setActiveLanguage(languageId);
      setActiveCategory(null);
      setActiveSubcategory(null);
    }
  };

  const toggleCategory = (categoryId: any) => {
    if (activeCategory === categoryId) {
      setActiveCategory(null);
      setActiveSubcategory(null);
    } else {
      setActiveCategory(categoryId);
      setActiveSubcategory(null);
    }
  };

  const toggleSubcategory = (subcategory: any) => {
    if (activeSubcategory === subcategory) {
      setActiveSubcategory(null);
    } else {
      setActiveSubcategory(subcategory);
    }
  };

  const programmingLanguages = [
    {
      id: 1,
      name: 'JavaScript',
      categories: [
        {
          id: 1,
          name: 'Loops',
          subcategories: ['For Loop', 'While Loop', 'Do-While Loop'],
        },
        {
          id: 2,
          name: 'Conditional Statements',
          subcategories: ['If Statement', 'Switch Statement'],
        },
        // Other categories
      ],
    },
    // Other programming languages
  ];

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  const renderPageContent = () => {
    const subcategoryContent = {
      'For Loop': <ForLoopContent />,
      'While Loop': <WhileLoopContent />,
      'Do-While Loop': <DoWhileLoopContent />,
      // Add more subcategories and their respective content components
    };

    if (!sidebarOpen) {
      return activeSubcategory ? subcategoryContent[activeSubcategory] : null;
    }

    return null;
  };

  return (
    <div className="flex flex-col w-full">
      <nav className="md:hidden bg-white shadow w-full h-min">
        <div className="flex items-center justify-between px-4 py-2">
          <span className="text-gray-800 text-lg font-bold">SnippetSphere</span>
          <button
            className="text-gray-600 dark:text-gray-400"
            onClick={toggleMobileNav}
          >
            {/* Mobile menu icon */}
            {showMobileNav ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        {showMobileNav && (
          <ul className="py-2 px-4">
            {programmingLanguages.map((language) => (
                <li key={language.id}>
                  <button
                    className={`flex items-center p-2 text-base font-normal rounded-lg w-full ${
                      activeLanguage === language.id ? 'bg-purple-100 text-purple-800' : 'bg-white text-black dark:bg-gray-800'
                    }`}
                    onClick={() => toggleLanguage(language.id)}
                  >
                    <span className="ml-3">{language.name}</span>
                  </button>
                  {activeLanguage === language.id && (
                    <ul className="py-2 space-y-2 pl-4">
                      {language.categories.map((category) => (
                        <li key={category.id}>
                          <button
                            className={`flex items-center p-2 text-base font-normal rounded-lg w-full ${
                              activeCategory === category.id ? 'bg-purple-100 text-purple-800' : 'bg-white text-black dark:bg-gray-800'
                            }`}
                            onClick={() => toggleCategory(category.id)}
                          >
                            <span className="ml-3">{category.name}</span>
                          </button>
                          {activeCategory === category.id && (
                            <ul className="py-2 space-y-2 pl-8">
                              {category.subcategories.map((subcategory) => (
                                <li key={subcategory}>
                                  <button
                                    className={`flex items-center w-full p-2 text-base font-normal rounded-lg transition duration-75 ${
                                      activeSubcategory === subcategory
                                        ? 'bg-purple-100 text-purple-800'
                                        : 'bg-white text-black dark:bg-gray-800'
                                    } pl-6`}
                                    onClick={() => toggleSubcategory(subcategory)}
                                  >
                                    <span>{subcategory}</span>
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
          </ul>
        )}
      </nav>
      <main className="flex-1">
        {renderPageContent()}
      </main>
    </div>
  );
};

export default Navbar;
