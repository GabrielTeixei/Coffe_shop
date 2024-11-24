import { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import assets from './assets/imgs/assets';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


function Coffee() {
  const [nav, setNav] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const items = [
    "Argentino",
    "Caramelo",
    "Cappuccino",
    "Preto",
    "Americano",
    "Mocha",
    "Macchiato",
    "Flat White",
    "Cold Brew",
    "Baunilha",
  ];

  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchInput(input);

    if (input.length > 0) {
      const filteredSuggestions = items.filter((item) =>
        item.toLowerCase().includes(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  const coffees = [
    { id: 1, name: 'Café Argentino', price: 6.50, img: assets.Coffe_Argentino },
    { id: 2, name: 'Café Caramelo', price: 7.00, img: assets.Coffe_Caramelo },
    { id: 3, name: 'Café Preto', price: 5.00, img: assets.Coffe_preto },
    { id: 4, name: 'Café Tradicional', price: 4.50, img: assets.coffe },
    { id: 5, name: 'Café Gourmet', price: 8.00, img: assets.coffe1 },
    { id: 6, name: 'Café Baunilha', price: 7.50, img: assets.Coffee_Baunilha },
  ];

  return (
    <>
      <nav className="nav_style text-white lg:flex items-center p-5 justify-between absolute top-0 left-0 w-full z-20">
        <div className="flex items-center justify-between">
          <div className="flex border-1 gap-2 p-1 items-center bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 rounded-md relative bg-gray-900">
            <CiSearch size={35} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none bg-transparent"
              value={searchInput}
              onChange={handleSearchChange}
            />
            {suggestions.length > 0 && (
              <ul className="absolute top-[3rem] left-0 w-full bg-white text-black rounded-md shadow-lg z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="cursor-pointer lg:hidden">
            <GiHamburgerMenu onClick={() => setNav(!nav)} size={35} />
          </div>
        </div>
        <ul className="lg:flex gap-20 text-[0.9rem] hidden">
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT US</li>
          <li className="cursor-pointer">MENU</li>
          <li className="cursor-pointer">DELIVERY</li>
        </ul>
        <div className="cursor-pointer mr-[1rem] hidden lg:block">
          <CiShoppingCart size={35} />
        </div>
      </nav>
      <div>
        <ul
          className={
            nav
              ? 'lg:flex-row flex flex-col gap-5 mx-auto text-center lg:gap-20 p-[2.3rem] text-[3rem] lg:text-[0.9rem] absolute bg-black top-0 left-0 h-screen w-full md:w-[70%] duration-1000 '
              : 'duration-1000 top-[-100%] hidden'
          }
        >
          <li className="ml-[90%] top-[-1rem] cursor-pointer">
            <RxCross1 onClick={() => setNav(!nav)} />
          </li>
          <li className="cursor-pointer">HOME</li>
          <li className="cursor-pointer">ABOUT US</li>
          <li className="cursor-pointer">MENU</li>
          <li className="cursor-pointer">DELIVERY</li>
        </ul>
      </div>

      <div className="relative w-full h-[33vh] bg-gray-50 flex items-center justify-center">
        <div
          className="absolute top-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.grao})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-white text-2xl sm:text-5xl font-bold z-20 text-center">
              Todos os melhores cafés estão aqui!!
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-[6rem]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {coffees.map((coffee) => (
            <div key={coffee.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={coffee.img}
                alt={coffee.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex justify-between items-center">
                <h3 className="text-lg font-bold text-gray-800">{coffee.name}</h3>
                <span className="text-lg font-bold text-gray-800">€{coffee.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer
        className="text-white py-0.5"
        style={{ backgroundImage: `url(${assets.grao})`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">@Coffee</h3>
            <p className="text-xs text-gray-300">Siga-nos nas redes sociais!</p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition duration-300"
            >
              <FaLinkedinIn size={20} />
            </a>
          </div>
          
        </div>
       
      </footer>
    </>
  );
}

export default Coffee;
