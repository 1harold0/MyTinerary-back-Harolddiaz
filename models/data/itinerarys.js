import "dotenv/config.js"
import "../../config/dataBase.js"
import Itinerary from "../Itinerary.js"


let itinerarys = [
    {
      name: "Tour por la Torre Eiffel",
      photo: "https://parisjetaime.com/data/layout_image/1342_Tour-Eiffel-Trocadero-630x405-C-Thinkstock_square_1-1_xl.jpg?ver=1700702671",
      hashtags: ["#paris", "#romantic", "#eiffel"],
      price: 120,
      user: "67fde4a0695497746c8c6941", // Lucía Martínez
      duration: 4,
      comments: "Hermosa experiencia en la cima",
      city: "67e4fbe55214972d2a40fcf5" // Paris
    },
    {
      name: "Comida callejera en Tokyo",
      photo: "https://www.japonalternativo.com/wp-content/uploads/2023/12/comida-tipica-japonesa-callejera.jpg",
      hashtags: ["#tokyo", "#food", "#streetfood"],
      price: 80,
      user: "67fde4a0695497746c8c6943", // María Rodríguez
      duration: 2,
      comments: "Increíble ramen",
      city: "67e4fbe55214972d2a40fcf6" // Tokyo
    },
    {
      name: "Museos en New York",
      photo: "https://static.anuevayork.com/wp-content/uploads/2021/02/18105800/Visitar-el-Museo-de-Historia-Natural-de-Nueva-York-Precios-entradas-y-que-ver-1024x695.jpg",
      hashtags: ["#nyc", "#museum", "#culture"],
      price: 90,
      user: "67fde4a0695497746c8c6942", // Carlos Gómez
      duration: 5,
      comments: "Perfecto para amantes del arte",
      city: "67e4fbe55214972d2a40fcf7" // New York
    },
    {
      name: "Safari urbano en Cape Town",
      photo: "https://www.zicasso.com/static/71022321ae2cc0babe7cb37d244228d9/28a23/71022321ae2cc0babe7cb37d244228d9.jpg",
      hashtags: ["#capetown", "#safari", "#wildlife"],
      price: 150,
      user: "67fde4a0695497746c8c6946", // Andrés Herrera
      duration: 6,
      comments: "Vimos animales increíbles",
      city: "67e4fbe55214972d2a40fcfa" // Cape Town
    },
    {
      name: "Travesía por el Coliseo",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqFHsr1uWXRHWGpmQe-vLxQWA1o--AnScyw&s",
      hashtags: ["#rome", "#colosseum", "#history"],
      price: 100,
      user: "67fde4a0695497746c8c6944", // Juan Pérez
      duration: 3,
      comments: "Volvería sin dudar",
      city: "67e4fbe55214972d2a40fcf8" // Rome
    },
    {
      name: "Puesta de sol en Río",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5ozNW-wNTpiUH5u263z9RVtcXP6nZGqAoqg&s",
      hashtags: ["#rio", "#sunset", "#beach"],
      price: 70,
      user: "67fde4a0695497746c8c6949", // Camila Ruiz
      duration: 2,
      comments: "Mágico",
      city: "67e4fbe55214972d2a40fcfb" // Rio de Janeiro
    },
    {
      name: "Noche en los rascacielos de Dubai",
      photo: "https://img.freepik.com/fotos-premium/impresionante-paisaje-urbano-rascacielos-iluminados-centro-dubai-noche-emiratos-arabes-unidos_136401-2292.jpg",
      hashtags: ["#dubai", "#nightlife", "#luxury"],
      price: 200,
      user: "67fde4a0695497746c8c694c", // Mateo Salazar
      duration: 5,
      comments: "Un lujo total",
      city: "67e4fbe55214972d2a40fcff" // Dubai
    },
   {
      name: "Descubriendo Beijing Antiguo",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy_7IhtNlB6zn9Z23XhdUj8vLj_37CQSPUuQ&s",
      hashtags: ["#beijing", "#china", "#temples"],
      price: 95,
      user: "67fde4a0695497746c8c6945", // Sofía Ramírez
      duration: 4,
      comments: "Interesante recorrido por templos antiguos.",
      city: "67e4fbe55214972d2a40fcfc" // Beijing
    },
    {
      name: "Caminando por Toronto",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpZHacaUxHxi73k6XEOMEOmQmrjuKExbPeCw&s",
      hashtags: ["#toronto", "#canada", "#urban"],
      price: 70,
      user: "67fde4a0695497746c8c694d", // Isabella Navarro
      duration: 2,
      comments: "Perfecto para ver la ciudad a pie.",
      city: "67e4fbe55214972d2a40fcfd" // Toronto
    },
    {
      name: "Berlin Histórico",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUT14RZ0e16OYucsf4h-P4ds74nrePWKulK254NSgQgfkzsUOCAqGtzXynZia47_CQYvI&usqp=CAU",
      hashtags: ["#berlin", "#history", "#europe"],
      price: 85,
      user: "67fde4a0695497746c8c694e", // Fernando Castro
      duration: 3,
      comments: "Museos y lugares icónicos.",
      city: "67e4fbe55214972d2a40fcfe" // Berlin
    },
    {
      name: "Buenos Aires Nocturna",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidAzP0lbXpsoTK58h8N7UCuBikRhfCh9wBQ&s",
      hashtags: ["#baires", "#tango", "#nightlife"],
      price: 65,
      user: "67fde4a0695497746c8c694b", // Ana Torres
      duration: 2,
      comments: "La ciudad cobra vida de noche.",
      city: "67e4fbe55214972d2a40fd00" // Buenos Aires
    },
    {
      name: "Recorrido por el Nilo",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEXVHxZiZux_5RAU1qT5rD6bz7SD0WbcrTkA&s",
      hashtags: ["#cairo", "#nileriver", "#pyramids"],
      price: 110,
      user: "67fde4a0695497746c8c694f", // Paula Vega
      duration: 5,
      comments: "Navegar por el Nilo fue increíble.",
      city: "67e4fbe55214972d2a40fd01" // Cairo
    },
    {
      name: "Moscow Cultural",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmeX16ATXSb1mDGi3pT_aITQccb3RHA2KkQ&s",
      hashtags: ["#moscow", "#kremlin", "#history"],
      price: 100,
      user: "67fde4a0695497746c8c694a", // Luis Mendoza
      duration: 4,
      comments: "Recorrimos el Kremlin y museos.",
      city: "67e4fbe55214972d2a40fd02" // Moscow
    },
    {
      name: "Templos de Bangkok",
      photo: "https://bucket-files.city-sightseeing.com/blog/2023/06/bangkok_temple_on_river-1.jpg ",
      hashtags: ["#bangkok", "#temples", "#culture"],
      price: 75,
      user: "67fde4a0695497746c8c6948", // Diego Torres
      duration: 3,
      comments: "Templos antiguos y cultura local.",
      city: "67e4fbe55214972d2a40fd03" // Bangkok
    },
    {
      name: "Medellín desde el aire",
      photo: "https://flycolombia.com.co/wp-content/uploads/2023/03/Cumuna-13.webp ",
      hashtags: ["#medellin", "#colombia", "#nature"],
      price: 120,
      user: "67fde4a0695497746c8c6947", // Valentina López
      duration: 3,
      comments: "Paseo en metro cable, hermosa vista.",
      city: "67f500c8cc0514524e6c3aee" // Medellín
    },
    {
      name: "Cali de noche",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEr0ltH1AC_UYybabfyqk-SOkGdsUcAtrCiRiNAR09EJN6K9Ig583EXtJWuUJIqZeACrQ&usqp=CAU",
      hashtags: ["#cali", "#salsa", "#nightlife"],
      price: 65,
      user: "67fde4a0695497746c8c6943", // María Rodríguez
      duration: 2,
      comments: "Fiesta, música y alegría.",
      city: "67f500c8cc0514524e6c3aed" // Cali
    },
    {
      name: "Bogotá cultural",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTov506yrh00jsTBmGmh1MI2vc8FUoezTgPCg&s",
      hashtags: ["#bogota", "#art", "#history"],
      price: 80,
      user: "67fde4a0695497746c8c694c", // Mateo Salazar
      duration: 4,
      comments: "Museo del Oro y más.",
      city: "67f500cfcc0514524e6c3af0" // Bogotá
    },
    {
      name: "Recorriendo Roma antigua",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3D_QlLErbHCVgY4lDzkYI6KTa3-QHAP_ecg&s",
      hashtags: ["#rome", "#ancient", "#culture"],
      price: 90,
      user: "67fde4a0695497746c8c6946", // Andrés Herrera
      duration: 4,
      comments: "Coliseo, foros y ruinas.",
      city: "67e4fbe55214972d2a40fcf8" // Roma
    },
    {
      name: "Opera en Sydney",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQ0dREHbke9o777SKyoRjzddacAMrCAcNFg&s",
      hashtags: ["#sydney", "#opera", "#ocean"],
      price: 110,
      user: "67fde4a0695497746c8c6941", // Lucía Martínez
      duration: 3,
      comments: "Noche mágica en la ópera.",
      city: "67e4fbe55214972d2a40fcf9" // Sydney
    },
    {
      name: "Caminata en Cape Town",
      photo: " https://media.tacdn.com/media/attractions-splice-spp-674x446/06/70/0d/8f.jpg",
      hashtags: ["#capetown", "#hiking", "#nature"],
      price: 60,
      user: "67fde4a0695497746c8c6942", // Carlos Gómez
      duration: 2,
      comments: "Montaña de la Mesa impresionante.",
      city: "67e4fbe55214972d2a40fcfa" // Cape Town
    },
    {
      name: "Tarde en París bohemia",
      photo: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScmyRfZHu19jfayO8cKsL_bL3IoNuDqrrisg&s",
      hashtags: ["#paris", "#art", "#streets"],
      price: 85,
      user: "67fde4a0695497746c8c6949", // Camila Ruiz
      duration: 3,
      comments: "Calles de Montmartre llenas de arte.",
      city: "67e4fbe55214972d2a40fcf5" // Paris
    },
    {
      name: "Noche mágica en Dubai",
      photo: "https://example.com/dubai-night.jpg",
      hashtags: ["#dubai", "#skyline", "#luxury"],
      price: 130,
      user: "67fde4a0695497746c8c694f", // Paula Vega
      duration: 4,
      comments: "Vista nocturna desde Burj Khalifa.",
      city: "67e4fbe55214972d2a40fcff" // Dubai
    },
    {
      name: "Relax en Río",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTs1zm-QZdF-QDmNIh0dJsxXYEKbDQXsAAA&s",
      hashtags: ["#rio", "#beach", "#relax"],
      price: 70,
      user: "67fde4a0695497746c8c6948", // Diego Torres
      duration: 2,
      comments: "Playa, sol y tranquilidad.",
      city: "67e4fbe55214972d2a40fcfb" // Rio
    },
    {
      name: "Aventura en Bangkok",
      photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0c/0e/99/c5.jpg",
      hashtags: ["#bangkok", "#adventure", "#food"],
      price: 90,
      user: "67fde4a0695497746c8c694e", // Fernando Castro
      duration: 3,
      comments: "Comida exótica y mucha energía.",
      city: "67e4fbe55214972d2a40fd03" // Bangkok
    },
    {
      name: "Berlin alternativo",
      photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkw8zxlTW4rMDwZ-JJszSRdNMTqtc_Pnk5tQ&s",
      hashtags: ["#berlin", "#underground", "#art"],
      price: 95,
      user: "67fde4a0695497746c8c694a", // Luis Mendoza
      duration: 3,
      comments: "Arte urbano y cafés escondidos.",
      city: "67e4fbe55214972d2a40fcfe" // Berlin
    }
  ];

  Itinerary.insertMany(itinerarys)
  