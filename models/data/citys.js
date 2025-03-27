import "dotenv/config.js"
import "../../config/dataBase.js"
import City from "../City.js"


let citys= [
    {
      name: "Paris",
      photo: "https://img.static-kl.com/images/media/71BBFEDE-473D-4F4E-82522A2197279310",
      country: "France",
      description: "City of love and lights",
      Continente: "Europe",
      Descripción: "Famous for the Eiffel Tower and Louvre Museum",
      population: 2148000,
      currency: "Euro",
      borders: "Germany, Belgium, Luxembourg"
    },
    {
      name: "Tokyo",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM9zfE92AAeDHcGjO8r3zffHLBDZ7lQyxFNQ&s",
      country: "Japan",
      description: "Futuristic metropolis",
      Continente: "Asia",
      Descripción: "Blend of tradition and cutting-edge technology",
      population: 13960000,
      currency: "Yen",
      borders: "None (island nation)"
    },
    {
      name: "New York",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMobIoayWpuXIJbYEdGAx9H9c5Ck3Q85kSuw&s",
      country: "United States",
      description: "The city that never sleeps",
      Continente: "America",
      Descripción: "Global financial and cultural capital",
      population: 8419000,
      currency: "US Dollar",
      borders: "Canada, Mexico"
    },
    {
      name: "Rome",
      photo: "https://viajes.nationalgeographic.com.es/medio/2025/02/26/roma_d59824b1_250226111509_1280x853.webp",
      country: "Italy",
      description: "Eternal city",
      Continente: "Europe",
      Descripción: "Heart of the ancient Roman Empire",
      population: 2873000,
      currency: "Euro",
      borders: "France, Switzerland, Austria"
    },
    {
      name: "Sydney",
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/bb/8f/8f/photo-credit-hamilton.jpg?w=900&h=500&s=1",
      country: "Australia",
      description: "Iconic harbor city",
      Continente: "Oceania",
      Descripción: "Famous for its Opera House and beaches",
      population: 5312000,
      currency: "Australian Dollar",
      borders: "None (island continent)"
    },
    {
      name: "Cape Town",
      photo: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/f6/3b/99/bo-kaap.jpg?w=500&h=500&s=1",
      country: "South Africa",
      description: "Between mountains and sea",
      Continente: "Africa",
      Descripción: "Legislative capital with stunning nature",
      population: 4337000,
      currency: "South African Rand",
      borders: "Namibia, Botswana, Zimbabwe"
    },
    {
      name: "Rio de Janeiro",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmXcxSj4S5c__bLF18cSmFSEOHM1e3okKkIg&s",
      country: "Brazil",
      description: "City of carnival and beaches",
      Continente: "America",
      Descripción: "Christ the Redeemer statue and Sugarloaf Mountain",
      population: 6748000,
      currency: "Brazilian Real",
      borders: "Argentina, Bolivia, Peru"
    },
    {
      name: "Beijing",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMclpzECyhKmRw9PJpFX5ObVIMLbumBC-Z3Q&s",
      country: "China",
      description: "Ancient capital",
      Continente: "Asia",
      Descripción: "Forbidden City and Great Wall of China",
      population: 21710000,
      currency: "Chinese Yuan",
      borders: "Russia, India, Vietnam"
    },
    {
      name: "Toronto",
      photo: "https://cdn.britannica.com/35/100235-050-CE3936EE/view-CN-Tower-Toronto-skyline-observation-deck.jpg",
      country: "Canada",
      description: "Multicultural hub",
      Continente: "America",
      Descripción: "CN Tower and diverse neighborhoods",
      population: 2732000,
      currency: "Canadian Dollar",
      borders: "United States"
    },
    {
      name: "Berlin",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3tsWB3biAG8-MBrq7vW1A0DDvnPvECtcxZA&s",
      country: "Germany",
      description: "City of history",
      Continente: "Europe",
      Descripción: "Berlin Wall and vibrant art scene",
      population: 3769000,
      currency: "Euro",
      borders: "Poland, Czech Republic"
    },
    {
      name: "Dubai",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPngnbIeVrijPwuMOboFGIdabc9DhqZJj6A&s",
      country: "United Arab Emirates",
      description: "City of luxury",
      Continente: "Asia",
      Descripción: "Burj Khalifa and modern architecture",
      population: 3331000,
      currency: "UAE Dirham",
      borders: "Saudi Arabia, Oman"
    },
    {
      name: "Buenos Aires",
      photo: "https://media.istockphoto.com/id/667138246/es/foto/argentina-buenos-aires-amanecer-en-el-centro-con-hora-punta.jpg?s=612x612&w=0&k=20&c=tpvOrY5aqJBBaqb5X27WjlhDsUB0GHJWc1GRD5Z5icQ=",
      country: "Argentina",
      description: "Paris of South America",
      Continente: "America",
      Descripción: "Tango culture and European architecture",
      population: 2891000,
      currency: "Argentine Peso",
      borders: "Chile, Bolivia, Paraguay"
    },
    {
      name: "Cairo",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvBq1htJNWNm4Lmpg2e7VPWgxnjzkKefK2g&s",
      country: "Egypt",
      description: "City of pharaohs",
      Continente: "Africa",
      Descripción: "Pyramids of Giza and Nile River",
      population: 9500000,
      currency: "Egyptian Pound",
      borders: "Libya, Sudan, Israel"
    },
    {
      name: "Moscow",
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg/800px-Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
      country: "Russia",
      description: "Historic capital",
      Continente: "Europe",
      Descripción: "Kremlin and Red Square",
      population: 12680000,
      currency: "Russian Ruble",
      borders: "China, Mongolia, Ukraine"
    },
    {
      name: "Bangkok",
      photo: "https://elviajista.com/wp-content/uploads/2018/02/bangkokquever.jpg",
      country: "Thailand",
      description: "City of temples",
      Continente: "Asia",
      Descripción: "Floating markets and Buddhist culture",
      population: 8281000,
      currency: "Thai Baht",
      borders: "Myanmar, Laos, Cambodia"
    }
  ]


City.insertMany(citys)