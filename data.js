// --- TABLA DE RACIONES (BÁSICOS) ---
const basicFoods = [
    // CEREALES Y DERIVADOS (Originales)
    { name: "Pan blanco (Barra)", gramsPerRation: 40, carbsPerRation: 20, category: "Panes" },
    { name: "Pan integral", gramsPerRation: 40, carbsPerRation: 20, category: "Panes" },
    { name: "Pan de molde blanco", gramsPerRation: 40, carbsPerRation: 20, category: "Panes" },
    { name: "Pan de molde integral", gramsPerRation: 40, carbsPerRation: 18, category: "Panes" },
    { name: "Pan tostado", gramsPerRation: 30, carbsPerRation: 20, category: "Panes" },
    { name: "Pan de Centeno", gramsPerRation: 45, carbsPerRation: 20, category: "Panes" },
    { name: "Pan de Maíz", gramsPerRation: 40, carbsPerRation: 22, category: "Panes" },
    { name: "Pan de Pueblo (Hogaza)", gramsPerRation: 40, carbsPerRation: 20, category: "Panes" },
    { name: "Pan Chapata", gramsPerRation: 40, carbsPerRation: 20, category: "Panes" },
    { name: "Pan de Hamburguesa", gramsPerRation: 50, carbsPerRation: 25, category: "Panes", unit: "ud" },
    { name: "Pan de Perrito", gramsPerRation: 40, carbsPerRation: 20, category: "Panes", unit: "ud" },
    { name: "Picos / Regañás", gramsPerRation: 25, carbsPerRation: 20, category: "Panes" },
    // BOLLERÍA (Originales)
    { name: "Croissant (Normal)", gramsPerRation: 50, carbsPerRation: 25, category: "Bollería", unit: "ud" },
    { name: "Croissant (Chocolate)", gramsPerRation: 60, carbsPerRation: 30, category: "Bollería", unit: "ud" },
    { name: "Napolitana (Crema)", gramsPerRation: 100, carbsPerRation: 50, category: "Bollería", unit: "ud" },
    { name: "Napolitana (Chocolate)", gramsPerRation: 100, carbsPerRation: 55, category: "Bollería", unit: "ud" },
    { name: "Donut (Glaseado)", gramsPerRation: 50, carbsPerRation: 25, category: "Bollería", unit: "ud" },
    { name: "Donut (Chocolate)", gramsPerRation: 60, carbsPerRation: 30, category: "Bollería", unit: "ud" },
    { name: "Ensaimada", gramsPerRation: 50, carbsPerRation: 25, category: "Bollería", unit: "ud" },
    { name: "Palmera (Azúcar)", gramsPerRation: 80, carbsPerRation: 50, category: "Bollería", unit: "ud" },
    { name: "Palmera (Chocolate)", gramsPerRation: 100, carbsPerRation: 60, category: "Bollería", unit: "ud" },
    { name: "Magdalena", gramsPerRation: 40, carbsPerRation: 20, category: "Bollería", unit: "ud" },
    { name: "Churros (4-5 ud)", gramsPerRation: 100, carbsPerRation: 40, category: "Bollería", unit: "ración" },
    { name: "Caña de Crema/Chocolate", gramsPerRation: 80, carbsPerRation: 45, category: "Bollería", unit: "ud" },
    // CEREALES (Originales)
    { name: "Arroz cocido", gramsPerRation: 75, carbsPerRation: 15, category: "Cereales" },
    { name: "Arroz integral cocido", gramsPerRation: 75, carbsPerRation: 15, category: "Cereales" },
    { name: "Pasta cocida", gramsPerRation: 70, carbsPerRation: 15, category: "Cereales" },
    { name: "Pasta integral cocida", gramsPerRation: 70, carbsPerRation: 15, category: "Cereales" },
    { name: "Harina de trigo", gramsPerRation: 15, carbsPerRation: 15, category: "Cereales" },
    { name: "Copos de avena", gramsPerRation: 25, carbsPerRation: 15, category: "Cereales" },
    { name: "Cuscús cocido", gramsPerRation: 70, carbsPerRation: 15, category: "Cereales" },
    { name: "Quinoa cocida", gramsPerRation: 70, carbsPerRation: 15, category: "Cereales" },
    { name: "Maíz dulce (lata)", gramsPerRation: 80, carbsPerRation: 15, category: "Cereales" },
    // LEGUMBRES Y TUBÉRCULOS (Originales)
    { name: "Lentejas cocidas", gramsPerRation: 100, carbsPerRation: 15, category: "Legumbres" },
    { name: "Garbanzos cocidos", gramsPerRation: 100, carbsPerRation: 15, category: "Legumbres" },
    { name: "Judías blancas cocidas", gramsPerRation: 100, carbsPerRation: 15, category: "Legumbres" },
    { name: "Guisantes cocidos", gramsPerRation: 100, carbsPerRation: 10, category: "Legumbres" },
    { name: "Patata cocida", gramsPerRation: 100, carbsPerRation: 20, category: "Tubérculos" },
    { name: "Patata frita", gramsPerRation: 60, carbsPerRation: 20, category: "Tubérculos" },
    { name: "Boniato asado", gramsPerRation: 70, carbsPerRation: 20, category: "Tubérculos" },
    // VERDURAS (Originales)
    { name: "Zanahoria cruda", gramsPerRation: 100, carbsPerRation: 7, category: "Verduras" },
    { name: "Zanahoria cocida", gramsPerRation: 100, carbsPerRation: 5, category: "Verduras" },
    { name: "Tomate", gramsPerRation: 100, carbsPerRation: 3.5, category: "Verduras" },
    { name: "Pimiento rojo/verde", gramsPerRation: 100, carbsPerRation: 4, category: "Verduras" },
    { name: "Cebolla", gramsPerRation: 100, carbsPerRation: 7, category: "Verduras" },
    { name: "Lechuga / Especias", gramsPerRation: 100, carbsPerRation: 1, category: "Verduras" },
    { name: "Espinacas", gramsPerRation: 100, carbsPerRation: 1, category: "Verduras" },
    { name: "Brócoli", gramsPerRation: 100, carbsPerRation: 4, category: "Verduras" },
    { name: "Calabacín", gramsPerRation: 100, carbsPerRation: 2, category: "Verduras" },
    { name: "Berenjena", gramsPerRation: 100, carbsPerRation: 3, category: "Verduras" },
    { name: "Champiñones", gramsPerRation: 100, carbsPerRation: 0.5, category: "Verduras" },
    // FRUTAS (Originales)
    { name: "Manzana", gramsPerRation: 100, carbsPerRation: 12, category: "Frutas" },
    { name: "Plátano", gramsPerRation: 100, carbsPerRation: 20, category: "Frutas" },
    { name: "Naranja", gramsPerRation: 100, carbsPerRation: 9, category: "Frutas" },
    { name: "Mandarina", gramsPerRation: 100, carbsPerRation: 9, category: "Frutas" },
    { name: "Pera", gramsPerRation: 100, carbsPerRation: 12, category: "Frutas" },
    { name: "Fresas", gramsPerRation: 100, carbsPerRation: 6, category: "Frutas" },
    { name: "Uvas", gramsPerRation: 100, carbsPerRation: 16, category: "Frutas" },
    { name: "Sandía", gramsPerRation: 100, carbsPerRation: 5, category: "Frutas" },
    { name: "Melón", gramsPerRation: 100, carbsPerRation: 6, category: "Frutas" },
    { name: "Kiwi", gramsPerRation: 100, carbsPerRation: 11, category: "Frutas" },
    { name: "Piña", gramsPerRation: 100, carbsPerRation: 12, category: "Frutas" },
    { name: "Melocotón", gramsPerRation: 100, carbsPerRation: 9, category: "Frutas" },
    // LÁCTEOS Y HUEVOS (Originales)
    { name: "Leche entera/semi/desnatada", gramsPerRation: 100, carbsPerRation: 5, category: "Lácteos", unit: "ml" },
    { name: "Yogur natural", gramsPerRation: 125, carbsPerRation: 5, category: "Lácteos", unit: "ud" },
    { name: "Yogur de sabores", gramsPerRation: 125, carbsPerRation: 15, category: "Lácteos", unit: "ud" },
    { name: "Queso fresco", gramsPerRation: 100, carbsPerRation: 3, category: "Lácteos" },
    { name: "Queso curado/semi", gramsPerRation: 100, carbsPerRation: 0, category: "Lácteos" },
    { name: "Huevo", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas", unit: "ud" },
    // CARNES, PESCADOS Y FIAMBRES (Originales)
    { name: "Pollo (Pechuga/Muslo)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    { name: "Ternera / Cerdo (Magro)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    { name: "Pescado Blanco/Azul", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    { name: "Jamón Serrano", gramsPerRation: 100, carbsPerRation: 0, category: "Fiambres" },
    { name: "Jamón York / Pavo", gramsPerRation: 100, carbsPerRation: 1, category: "Fiambres" },
    { name: "Chorizo / Salchichón", gramsPerRation: 100, carbsPerRation: 1, category: "Fiambres" },
    { name: "Atún (lata)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    // CARNES GRASAS Y ASADOS (Originales)
    { name: "Panceta / Bacon", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
    { name: "Chorizo Frito / Parrillero", gramsPerRation: 100, carbsPerRation: 1, category: "Grasas" },
    { name: "Morcilla (Arroz)", gramsPerRation: 100, carbsPerRation: 15, category: "Grasas" },
    { name: "Morcilla (Cebolla)", gramsPerRation: 100, carbsPerRation: 5, category: "Grasas" },
    { name: "Torreznos", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
    { name: "Costillas de Cerdo (Asadas/BBQ)", gramsPerRation: 100, carbsPerRation: 5, category: "Grasas" },
    { name: "Cochinillo Asado", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    { name: "Cordero Asado", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
    { name: "Salchichas Frankfurt", gramsPerRation: 100, carbsPerRation: 2, category: "Fiambres" },
    // GRASAS Y CONDIMENTOS (Originales)
    { name: "Aceite de Oliva", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas", unit: "ml" },
    { name: "Vinagre", gramsPerRation: 100, carbsPerRation: 0.5, category: "Condimentos", unit: "ml" },
    { name: "Mantequilla", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
    { name: "Mayonesa", gramsPerRation: 100, carbsPerRation: 1, category: "Salsas" },
    { name: "Ketchup", gramsPerRation: 100, carbsPerRation: 25, category: "Salsas" },
    // DULCES Y SNACKS (Originales)
    { name: "Galletas tipo María", gramsPerRation: 100, carbsPerRation: 70, category: "Dulces" },
    { name: "Chocolate con leche", gramsPerRation: 100, carbsPerRation: 55, category: "Dulces" },
    { name: "Chocolate negro (>70%)", gramsPerRation: 100, carbsPerRation: 35, category: "Dulces" },
    { name: "Azúcar", gramsPerRation: 10, carbsPerRation: 10, category: "Dulces" },
    { name: "Miel", gramsPerRation: 100, carbsPerRation: 80, category: "Dulces" },
    { name: "Patatas chips", gramsPerRation: 100, carbsPerRation: 50, category: "Snacks" },
    { name: "Frutos secos (Nueces/Almendras)", gramsPerRation: 100, carbsPerRation: 5, category: "Snacks" },
    // BEBIDAS (Originales)
    { name: "Cerveza (Caña 200ml)", gramsPerRation: 1, carbsPerRation: 7, category: "Bebidas", unit: "ud" },
    { name: "Cerveza (Tercio 330ml)", gramsPerRation: 1, carbsPerRation: 12, category: "Bebidas", unit: "ud" },
    { name: "Cerveza (Pinta 500ml)", gramsPerRation: 1, carbsPerRation: 18, category: "Bebidas", unit: "ud" },
    { name: "Cerveza Sin Alcohol (Tercio)", gramsPerRation: 1, carbsPerRation: 15, category: "Bebidas", unit: "ud" },
    { name: "Vino (Copa 150ml)", gramsPerRation: 1, carbsPerRation: 0.5, category: "Bebidas", unit: "ud" },
    { name: "Refresco (Lata 330ml)", gramsPerRation: 1, carbsPerRation: 35, category: "Bebidas", unit: "ud" },
    { name: "Refresco Zero (Lata 330ml)", gramsPerRation: 1, carbsPerRation: 0, category: "Bebidas", unit: "ud" },
    { name: "Zumo Naranja (Vaso 200ml)", gramsPerRation: 1, carbsPerRation: 20, category: "Bebidas", unit: "ud" },
    { name: "Cubata (Copa)", gramsPerRation: 1, carbsPerRation: 21, category: "Bebidas", unit: "ud" },

    // --- DATOS AÑADIDOS DEL PDF (Platos Pequeños y Medianos) ---
    // CEREALES Y TUBÉRCULOS (PDF)
    { "name": "Arroz blanco, hervido (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 30, "category": "Cereales" },
    { "name": "Arroz blanco, hervido (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 60, "category": "Cereales" },
    { "name": "Arroz integral, hervido (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 25, "category": "Cereales" },
    { "name": "Arroz integral, hervido (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 50, "category": "Cereales" },
    { "name": "Pasta, hervida (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 18, "category": "Cereales" },
    { "name": "Pasta, hervida (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 36, "category": "Cereales" },
    { "name": "Pasta integral, hervida (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 18, "category": "Cereales" },
    { "name": "Pasta integral, hervida (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 36, "category": "Cereales" },
    { "name": "Patatas, en puré (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Tubérculos" },
    { "name": "Patatas, en puré (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 30, "category": "Tubérculos" },
    { "name": "Patatas, cocidas (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Tubérculos" },
    { "name": "Patatas, cocidas (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 30, "category": "Tubérculos" },
    { "name": "Patatas, fritas (Plato pequeño)", "gramsPerRation": 50, "carbsPerRation": 15, "category": "Tubérculos" },
    { "name": "Patatas, fritas (Plato mediano)", "gramsPerRation": 100, "carbsPerRation": 30, "category": "Tubérculos" },
    // LEGUMBRES (PDF)
    { "name": "Lentejas, hervidas (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Legumbres" },
    { "name": "Lentejas, hervidas (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 30, "category": "Legumbres" },
    { "name": "Garbanzos, hervidos (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Legumbres" },
    { "name": "Garbanzos, hervidos (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 30, "category": "Legumbres" },
    { "name": "Judías blancas, hervidas (Plato pequeño)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Legumbres" },
    { "name": "Judías blancas, hervidas (Plato mediano)", "gramsPerRation": 200, "carbsPerRation": 30, "category": "Legumbres" },
    // BEBIDAS (PDF)
    { "name": "Refresco con azúcar (Lata 330ml)", "gramsPerRation": 330, "carbsPerRation": 35, "category": "Bebidas", "unit": "ml" },
    { "name": "Refresco con azúcar (Vaso 200ml)", "gramsPerRation": 200, "carbsPerRation": 21, "category": "Bebidas", "unit": "ml" },
    { "name": "Refresco sin azúcar (Lata 330ml)", "gramsPerRation": 330, "carbsPerRation": 0, "category": "Bebidas", "unit": "ml" },
    { "name": "Cerveza (Caña 200ml)", "gramsPerRation": 200, "carbsPerRation": 7, "category": "Bebidas", "unit": "ml" },
    { "name": "Cerveza (Tercio 330ml)", "gramsPerRation": 330, "carbsPerRation": 12, "category": "Bebidas", "unit": "ml" },
    { "name": "Cerveza (Pinta 500ml)", "gramsPerRation": 500, "carbsPerRation": 18, "category": "Bebidas", "unit": "ml" },
    { "name": "Cerveza sin alcohol (Tercio 330ml)", "gramsPerRation": 330, "carbsPerRation": 15, "category": "Bebidas", "unit": "ml" },
    // OTROS (PDF)
    { "name": "Ketchup (Cucharada sopera)", "gramsPerRation": 20, "carbsPerRation": 5, "category": "Salsas" },
    { "name": "Mayonesa (Cucharada sopera)", "gramsPerRation": 20, "carbsPerRation": 0.5, "category": "Salsas" },
    { "name": "Pizza (Porción 1/8)", "gramsPerRation": 100, "carbsPerRation": 25, "category": "Comida Rápida" },
    { "name": "Hamburguesa (Genérica)", "gramsPerRation": 150, "carbsPerRation": 30, "category": "Comida Rápida" },
    { "name": "Patatas fritas (Ración pequeña)", "gramsPerRation": 80, "carbsPerRation": 25, "category": "Comida Rápida" },
    { "name": "Patatas fritas (Ración mediana)", "gramsPerRation": 120, "carbsPerRation": 38, "category": "Comida Rápida" },
    { "name": "Nuggets de pollo (6 unidades)", "gramsPerRation": 100, "carbsPerRation": 15, "category": "Comida Rápida" }
];

// --- COMIDA RÁPIDA (FAST FOOD) ---
const fastFoods = [
    // BURGER KING (Originales)
    {
        id: "bk_whopper", name: "Whopper", brand: "Burger King", baseCarbs: 49, unit: "hamburguesa", components: [
            { name: "Pan", carbs: 38, type: "removable", default: true },
            { name: "Salsas", carbs: 6, type: "removable", default: true },
            { name: "Verduras", carbs: 5, type: "removable", default: true },
            { name: "Carne", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "bk_long_chicken", name: "Long Chicken", brand: "Burger King", baseCarbs: 55, unit: "hamburguesa", components: [
            { name: "Pan Largo", carbs: 40, type: "removable", default: true },
            { name: "Pollo Rebozado", carbs: 12, type: "fixed", default: true },
            { name: "Mayonesa", carbs: 3, type: "removable", default: true },
            { name: "Lechuga", carbs: 0, type: "removable", default: true }
        ]
    },
    {
        id: "bk_patatas_med", name: "Patatas Medianas", brand: "Burger King", baseCarbs: 43, unit: "ración", components: [
            { name: "Patatas", carbs: 43, type: "fixed", default: true }
        ]
    },
    // MCDONALD'S (Originales)
    {
        id: "mcd_bigmac", name: "Big Mac", brand: "McDonald's", baseCarbs: 42, unit: "hamburguesa", components: [
            { name: "Pan (3 piezas)", carbs: 35, type: "removable", default: true },
            { name: "Salsa Big Mac", carbs: 4, type: "removable", default: true },
            { name: "Verduras", carbs: 3, type: "removable", default: true },
            { name: "Carne/Queso", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "mcd_mcpoll", name: "McPollo", brand: "McDonald's", baseCarbs: 45, unit: "hamburguesa", components: [
            { name: "Pan", carbs: 30, type: "removable", default: true },
            { name: "Pollo Rebozado", carbs: 12, type: "fixed", default: true },
            { name: "Salsa", carbs: 3, type: "removable", default: true }
        ]
    },
    {
        id: "mcd_nuggets_6", name: "McNuggets (6 ud)", brand: "McDonald's", baseCarbs: 26, unit: "ración", components: [
            { name: "Nuggets", carbs: 15, type: "fixed", default: true },
            { name: "Salsa Barbacoa", carbs: 11, type: "removable", default: false }
        ]
    },
    // KFC (Originales)
    {
        id: "kfc_tiras", name: "Tiras de Pechuga (3 ud)", brand: "KFC", baseCarbs: 12, unit: "ración", components: [
            { name: "Rebozado", carbs: 12, type: "fixed", default: true }
        ]
    },
    {
        id: "kfc_burger", name: "BBC Burger", brand: "KFC", baseCarbs: 50, unit: "hamburguesa", components: [
            { name: "Pan", carbs: 35, type: "removable", default: true },
            { name: "Pollo", carbs: 10, type: "fixed", default: true },
            { name: "Salsa BBQ", carbs: 5, type: "removable", default: true }
        ]
    },
    // PIZZA TELEPIZZA / DOMINO'S (Originales)
    {
        id: "pizza_med_bbq", name: "Pizza Barbacoa (Mediana)", brand: "Telepizza/Domino's", baseCarbs: 120, unit: "pizza", components: [
            { name: "Masa", carbs: 100, type: "fixed", default: true },
            { name: "Salsa BBQ", carbs: 20, type: "removable", default: true },
            { name: "Carne/Queso", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "pizza_slice", name: "Porción Pizza (1/8)", brand: "Genérico", baseCarbs: 15, unit: "porción", components: [
            { name: "Masa+Ingredientes", carbs: 15, type: "fixed", default: true }
        ]
    },
    // KEBAB (Originales)
    {
        id: "kebab_completo", name: "Kebab Completo", brand: "Genérico", baseCarbs: 50, unit: "kebab", components: [
            { name: "Pan", carbs: 40, type: "removable", default: true },
            { name: "Salsas", carbs: 7, type: "removable", default: true },
            { name: "Verduras", carbs: 3, type: "removable", default: true },
            { name: "Carne", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "durum_completo", name: "Durum Completo", brand: "Genérico", baseCarbs: 60, unit: "durum", components: [
            { name: "Tortilla", carbs: 50, type: "removable", default: true },
            { name: "Salsas", carbs: 7, type: "removable", default: true },
            { name: "Verduras", carbs: 3, type: "removable", default: true },
            { name: "Carne", carbs: 0, type: "fixed", default: true }
        ]
    },
    // TACO BELL (Originales)
    {
        id: "tb_taco", name: "Taco Supreme", brand: "Taco Bell", baseCarbs: 18, unit: "taco", components: [
            { name: "Tortilla Maíz", carbs: 15, type: "fixed", default: true },
            { name: "Relleno", carbs: 3, type: "fixed", default: true }
        ]
    },
    {
        id: "tb_burrito", name: "Burrito Carne", brand: "Taco Bell", baseCarbs: 50, unit: "burrito", components: [
            { name: "Tortilla Trigo", carbs: 35, type: "fixed", default: true },
            { name: "Arroz/Frijoles", carbs: 15, type: "removable", default: true }
        ]
    },
    // SUBWAY (Originales)
    {
        id: "sub_bmt", name: "BMT (15cm)", brand: "Subway", baseCarbs: 40, unit: "bocadillo", components: [
            { name: "Pan Blanco", carbs: 38, type: "removable", default: true },
            { name: "Salsas", carbs: 2, type: "removable", default: true },
            { name: "Embutido/Verdura", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "sub_cookie", name: "Cookie", brand: "Subway", baseCarbs: 30, unit: "galleta", components: [
            { name: "Masa Cookie", carbs: 30, type: "fixed", default: true }
        ]
    },
    // RESTAURANTE CHINO (Originales)
    {
        id: "chino_arroz_3d", name: "Arroz Tres Delicias", brand: "Restaurante Chino", baseCarbs: 60, unit: "ración", components: [
            { name: "Arroz Frito", carbs: 55, type: "fixed", default: true },
            { name: "Guisantes/Zanahoria", carbs: 5, type: "removable", default: true },
            { name: "Jamón/Tortilla", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_rollito", name: "Rollito de Primavera", brand: "Restaurante Chino", baseCarbs: 25, unit: "unidad", components: [
            { name: "Masa Frita", carbs: 20, type: "fixed", default: true },
            { name: "Relleno Verduras", carbs: 5, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_tallarines", name: "Tallarines Fritos", brand: "Restaurante Chino", baseCarbs: 55, unit: "ración", components: [
            { name: "Tallarines", carbs: 50, type: "fixed", default: true },
            { name: "Verduras", carbs: 5, type: "removable", default: true },
            { name: "Carne/Gambas", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_pollo_limon", name: "Pollo al Limón", brand: "Restaurante Chino", baseCarbs: 25, unit: "ración", components: [
            { name: "Pollo Rebozado", carbs: 15, type: "fixed", default: true },
            { name: "Salsa Limón (Azúcar)", carbs: 10, type: "removable", default: true }
        ]
    },
    {
        id: "chino_pollo_agridulce", name: "Pollo Agridulce", brand: "Restaurante Chino", baseCarbs: 30, unit: "ración", components: [
            { name: "Pollo Rebozado", carbs: 15, type: "fixed", default: true },
            { name: "Salsa Agridulce", carbs: 15, type: "removable", default: true },
            { name: "Verduras", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_cerdo_agridulce", name: "Cerdo Agridulce", brand: "Restaurante Chino", baseCarbs: 30, unit: "ración", components: [
            { name: "Cerdo Rebozado", carbs: 15, type: "fixed", default: true },
            { name: "Salsa Agridulce", carbs: 15, type: "removable", default: true }
        ]
    },
    {
        id: "chino_ternera_bambu", name: "Ternera con Bambú y Setas", brand: "Restaurante Chino", baseCarbs: 10, unit: "ración", components: [
            { name: "Salsa (Maicena)", carbs: 8, type: "fixed", default: true },
            { name: "Bambú/Setas", carbs: 2, type: "fixed", default: true },
            { name: "Ternera", carbs: 0, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_pan", name: "Pan Chino (Frito)", brand: "Restaurante Chino", baseCarbs: 30, unit: "unidad", components: [
            { name: "Pan Frito (Azúcar)", carbs: 30, type: "fixed", default: true }
        ]
    },
    {
        id: "chino_pan_gambas", name: "Pan de Gambas", brand: "Restaurante Chino", baseCarbs: 45, unit: "bolsa", components: [
            { name: "Pan de Gambas", carbs: 45, type: "fixed", default: true }
        ]
    }
];

if (typeof module !== 'undefined') {
    module.exports = { basicFoods, fastFoods };
}
