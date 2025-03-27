import City from "../../models/City.js";

const createCity = async (req, res, next) => {
    try {
        const cityInfo = req.body;
        
        const requiredFields = [
            'name', 'photo', 'country', 'description', 
            'Continente', 'Descripción', 'population', 
            'currency', 'borders'
        ];
        
        const missingFields = requiredFields.filter(field => !cityInfo[field]);
        
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields',
                missingFields,
                example: {  
                    name: 'String (required)',
                    photo: 'String (URL required)',
                    country: 'String (required)',
                    description: 'String (required)',
                    Continente: 'String (required)',
                    Descripción: 'String (required)',
                    population: 'Number (required)',
                    currency: 'String (required)',
                    borders: 'String (required)'
                }
            });
        }
        const newCity = await City.create(cityInfo);
        
        return res.status(201).json({ 
            success: true,
            response: newCity
        });
        
    } catch (error) {
        next(error);
    }
}

const createManyCities = async (req, res, next) => {
    try {
        const citiesData = req.body;
        
        if (!Array.isArray(citiesData)) {
            return res.status(400).json({
                success: false,
                message: "Se esperaba un array de ciudades",
                example: [
                    {
                        name: "Ejemplo Ciudad 1",
                        photo: "https://ejemplo.com/foto1.jpg",
                        country: "Ejemplo País",
                        description: "Descripción breve",
                        Continente: "América",
                        Descripción: "Descripción detallada",
                        population: 1000000,
                        currency: "Moneda",
                        borders: "Frontera1, Frontera2"
                    },
                    {
                        name: "Ejemplo Ciudad 2",
                        photo: "https://ejemplo.com/foto2.jpg",
                        country: "Ejemplo País 2",
                        description: "Descripción breve 2",
                        Continente: "Europa",
                        Descripción: "Descripción detallada 2",
                        population: 2000000,
                        currency: "Moneda 2",
                        borders: "Frontera3, Frontera4"
                    }
                ]
            });
        }
        const createdCities = await City.insertMany(citiesData);

        return res.status(201).json({
            success: true,
            count: createdCities.length,
            response: createdCities
        });

    } catch (error) {
        next(error);
    }
};

export {createCity,createManyCities}; 