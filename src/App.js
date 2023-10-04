
// // if using json file and useEffect hook to import the car data

// import React, { useState, useEffect } from 'react';
// import './App.css';
// import SearchBar from './modules/search_bar';
// import CarCardContainer from './modules/CarCardContainer';

// function App() {
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const carsPerPage = 6;
//   const totalPages = 10;
//   const [carData, setCarData] = useState([]);

//   useEffect(() => {
//     fetch('./carsData.json')
//       .then((response) => response.json())
//       .then((data) => setCarData(data))
//       .catch((error) => console.error('Error fetching car data:', error));
//   }, []);

//   const handleSearch = (searchTerm) => {
//     const filteredResults = carData
//       .slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage)
//       .filter((car) =>
//         car.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );

//     setSearchResults(filteredResults);
//   };

//   const handlePageChange = (newPage) => {
//     if (newPage >= 1 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   return (
//     <div className="App">
//       <SearchBar onSearch={handleSearch} />

//       <div className="search-results">
//         <CarCardContainer
//           cars={searchResults.length > 0 ? searchResults : carData.slice((currentPage - 1) * carsPerPage, currentPage * carsPerPage)}
//         />
//       </div>

//       <div className="pagination">
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
//           Previous
//         </button>

//         Page {currentPage} of {totalPages}

//         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;


// if adding the data in the app.js

import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './modules/search_bar';
import CarCardContainer from './modules/CarCardContainer';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6;
  const totalPages = 10;

  const carPages = 
  [
    [
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      }
    ],
    [
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      }
    ],
    [
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      }
    ],
    [
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      }
    ],
    [
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      }
    ],
    [
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      }
    ],
    [
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      }
    ],
    [
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      }
    ],
    [
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/ExtraImages/20230819110738_webai_1_.jpg&w=700&q=90&c=1"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      }
    ],
    [
      {
        "name": "Mercedes-AMG GT",
        "year": 2023,
        "fuelType": "Diesel",
        "capacity": 2,
        "rentPerMonth": 700,
        "image": "https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia...0.jpg&w=700&q=90&c=1"
      },
      {
        "name": "BMW iX",
        "year": 2023,
        "fuelType": "Electric",
        "capacity": 5,
        "rentPerMonth": 600,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/BMW/iX/8704/1639388226683/front-left-side-47.jpg"
      },
      {
        "name": "Audi e-Tron",
        "year": 2021,
        "fuelType": "Electric",
        "capacity": 4,
        "rentPerMonth": 400,
        "image": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Audi/e-tron-GT/8340/1678098767884/front-left-side-47.jpg"
      },
      {
        "name": "Lamborghini Urus",
        "year": 2022,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 700,
        "image": "https://imgd.aeplcdn.com/642x361/n/cw/ec/132147/lamborghini-urus-left-front-three-quarter0.jpeg?isig=0&q=80"
      },
      {
        "name": "Range Rover Velar",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 5,
        "rentPerMonth": 550,
        "image": "https://imgd.aeplcdn.com/0X0/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
      },
      {
        "name": "Volkswagen Passat",
        "year": 2023,
        "fuelType": "Gasoline",
        "capacity": 4,
        "rentPerMonth": 300,
        "image": "https://imgd.aeplcdn.com/664x374/cw/ec/22548/Volkswagen-Passat-Headlamps-135233.jpg?wm=0&q=80&q=80"
      }
    ]
  ]
  

  const handleSearch = (searchTerm) => {
    // Filter cars based on search term
    const filteredResults = carPages[currentPage - 1].filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  const handlePageChange = (newPage) => {
    // Check for valid page number
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />

      <div className="search-results">
        <CarCardContainer cars={searchResults.length > 0 ? searchResults : carPages[currentPage - 1]} />
      </div>

      <div className="pagination">
        <button className='prev' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        Page {currentPage} of {totalPages}

        <button className='next' onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
