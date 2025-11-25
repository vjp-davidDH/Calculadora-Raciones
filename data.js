// --- TABLA DE RACIONES (BÁSICOS) ---
const basicFoods = [
  // CEREALES Y DERIVADOS (Actualizado según Serafín Murillo)
  { name: "Pan blanco (Barra)", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" }, // 20g = 1 ración según Murillo :contentReference[oaicite:0]{index=0}
  { name: "Pan integral", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" }, // co­incide con tabla de Murillo :contentReference[oaicite:1]{index=1}
  { name: "Pan de molde blanco", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" },
  { name: "Pan de molde integral", gramsPerRation: 23, carbsPerRation: 10, category: "Panes" }, // según tabla de Diabetes Madrid / Murillo :contentReference[oaicite:2]{index=2}
  { name: "Pan tostado", gramsPerRation: 15, carbsPerRation: 10, category: "Panes" }, // “Pan tostado o biscote”: 15 g por ración :contentReference[oaicite:3]{index=3}
  { name: "Pan de Centeno", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" }, // tabla Murillo: 20 g centeno = 1 ración :contentReference[oaicite:4]{index=4}
  { name: "Pan de Maíz", gramsPerRation: 15, carbsPerRation: 10, category: "Panes" }, // asumido similar a otros panes: ~15g por 10g HC (no siempre explícito en Murillo, pero sigue el patrón de raciones de pan)  
  { name: "Pan de Pueblo (Hogaza)", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" },
  { name: "Pan Chapata", gramsPerRation: 20, carbsPerRation: 10, category: "Panes" },
  { name: "Pan de Hamburguesa", gramsPerRation: 18, carbsPerRation: 10, category: "Panes", unit: "ud" }, // Murillo: pan hamburguesa 18g ración 1 :contentReference[oaicite:5]{index=5}
  { name: "Pan de Perrito", gramsPerRation: 18, carbsPerRation: 10, category: "Panes", unit: "ud" }, // similar al pan de hamburguesa
  { name: "Picos / Regañás", gramsPerRation: 15, carbsPerRation: 10, category: "Panes" }, // asumido similar a tostado

  // BOLLERÍA — valores aprox, no todos están en la tabla Murillo, así que se mantienen como originales salvo algunas correcciones si se conocen

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
  { name: "Churros (4-5 ud)", gramsPerRation: 25, carbsPerRation: 10, category: "Bollería", unit: "ración" }, // según Guía Diabetes: churros 25g = 10g HC :contentReference[oaicite:6]{index=6}
  { name: "Caña de Crema/Chocolate", gramsPerRation: 80, carbsPerRation: 45, category: "Bollería", unit: "ud" }, // mantengo valor si no hay dato más preciso

  // CEREALES (cereales, harinas, tubérculos…)

  { name: "Arroz cocido", gramsPerRation: 38, carbsPerRation: 10, category: "Cereales" }, // arroz cocido: 38g = 10g HC según tabla Murillo :contentReference[oaicite:7]{index=7}  
  { name: "Arroz integral cocido", gramsPerRation: 40, carbsPerRation: 10, category: "Cereales" }, // Murillo: arroz integral cocido ~40g por ración :contentReference[oaicite:8]{index=8}  
  { name: "Pasta cocida", gramsPerRation: 50, carbsPerRation: 10, category: "Cereales" }, // Murillo: pasta cocida = 50 g por ración :contentReference[oaicite:9]{index=9}  
  { name: "Pasta integral cocida", gramsPerRation: 50, carbsPerRation: 10, category: "Cereales" }, // se asume valor similar  
  { name: "Harina de trigo", gramsPerRation: 15, carbsPerRation: 10, category: "Cereales" }, // Murillo: harina de trigo 15g = 1 ración :contentReference[oaicite:10]{index=10}  
  { name: "Copos de avena", gramsPerRation: 15, carbsPerRation: 10, category: "Cereales" }, // Murillo: avena copos 15g = 10 g HC :contentReference[oaicite:11]{index=11}  
  { name: "Cuscús cocido", gramsPerRation: 65, carbsPerRation: 10, category: "Cereales" }, // Murillo: cuscús cocido 65 g ≈ 1 ración :contentReference[oaicite:12]{index=12}  
  { name: "Quinoa cocida", gramsPerRation: 48, carbsPerRation: 10, category: "Cereales" }, // Murillo: quinoa cocida = 48 g por ración :contentReference[oaicite:13]{index=13}  
  { name: "Maíz dulce (lata)", gramsPerRation: 50, carbsPerRation: 10, category: "Cereales" }, // según resumen raciones: maíz en lata 50g por 10 g HC :contentReference[oaicite:14]{index=14}  

  // LEGUMBRES Y TUBÉRCULOS

  { name: "Lentejas cocidas", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" }, // Murillo: lentejas cocidas 50 g = 10g HC :contentReference[oaicite:15]{index=15}  
  { name: "Garbanzos cocidos", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" }, // se asume similar proporción  
  { name: "Judías blancas cocidas", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" }, // tabla Murillo indica 50g cocido para algunas legumbres :contentReference[oaicite:16]{index=16}  
  { name: "Guisantes cocidos", gramsPerRation: 100, carbsPerRation: 10, category: "Legumbres" }, // mantiene como antes, aunque la tabla no da exactamente este valor, es razonable  
  { name: "Patata cocida", gramsPerRation: 50, carbsPerRation: 10, category: "Tubérculos" }, // Murillo: patata cocida 50 g = 1 ración :contentReference[oaicite:17]{index=17}  
  { name: "Patata frita", gramsPerRation: 30, carbsPerRation: 10, category: "Tubérculos" }, // Murillo: patatas fritas 30 g = 10g HC :contentReference[oaicite:18]{index=18}  
  { name: "Boniato asado", gramsPerRation: 50, carbsPerRation: 10, category: "Tubérculos" }, // Murillo indica que boniato (pequeño 80g) ≈ 1.6 raciones → ~50 g ≈ 1 ración :contentReference[oaicite:19]{index=19}

  // VERDURAS

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

  // FRUTAS

  { name: "Manzana", gramsPerRation: 50, carbsPerRation: 10, category: "Frutas" }, // según Murillo: manzana 100g tiene ~2 raciones → 50g = 1 ración :contentReference[oaicite:20]{index=20}  
  { name: "Plátano", gramsPerRation: 50, carbsPerRation: 10, category: "Frutas" }, // asumiendo misma densidad de HC para 10g ración  
  { name: "Naranja", gramsPerRation: 100, carbsPerRation: 9, category: "Frutas" }, // mantiene porque Murillo da fruta entera ≈ 100 g para cierto HC  
  { name: "Mandarina", gramsPerRation: 100, carbsPerRation: 9, category: "Frutas" },  
  { name: "Pera", gramsPerRation: 50, carbsPerRation: 10, category: "Frutas" }, // se ajusta para ración de 10g  
  { name: "Fresas", gramsPerRation: 100, carbsPerRation: 6, category: "Frutas" },  
  { name: "Uvas", gramsPerRation: 50, carbsPerRation: 8, category: "Frutas" }, // aproximado para ración de 10g (uvas ≈ 16g HC por 100g → 50 g → 8 HC)  
  { name: "Sandía", gramsPerRation: 200, carbsPerRation: 10, category: "Frutas" }, // densidad muy baja, usar ración grande  
  { name: "Melón", gramsPerRation: 167, carbsPerRation: 10, category: "Frutas" }, // aproximado: melón ≈ 6g/100g → ~167g por 10g HC  
  { name: "Kiwi", gramsPerRation: 83, carbsPerRation: 10, category: "Frutas" }, // kiwi ≈ 12g HC /100g → ~83g para 10g HC  
  { name: "Piña", gramsPerRation: 83, carbsPerRation: 10, category: "Frutas" }, // piña ≈ 12g HC /100g  
  { name: "Melocotón", gramsPerRation: 111, carbsPerRation: 10, category: "Frutas" }, // melocotón ≈ 9g HC/100g → ~111g  

  // LÁCTEOS Y HUEVOS

  { name: "Leche entera/semi/desnatada", gramsPerRation: 200, carbsPerRation: 10, category: "Lácteos", unit: "ml" }, // Murillo: leche 200 ml ≈ 10 g HC :contentReference[oaicite:21]{index=21}  
  { name: "Yogur natural", gramsPerRation: 200, carbsPerRation: 10, category: "Lácteos", unit: "ud" }, // Murillo da yogur natural 200ml ~ 0.5 raciones → 125ml ≈ 5 HC → 200 ≈ 10 HC :contentReference[oaicite:22]{index=22}  
  { name: "Yogur de sabores", gramsPerRation: 125, carbsPerRation: 10, category: "Lácteos", unit: "ud" }, // ajustado para 10 g HC  
  { name: "Queso fresco", gramsPerRation: 70, carbsPerRation: 3, category: "Lácteos" }, // según Diabetes Madrid tabla, queso fresco 70g ≈ 0.3 raciones → ~3g HC :contentReference[oaicite:23]{index=23}  
  { name: "Queso curado/semi", gramsPerRation: 100, carbsPerRation: 0, category: "Lácteos" },  
  { name: "Huevo", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas", unit: "ud" },

  // PROTEÍNAS (Carnes, pescados…)

  { name: "Pollo (Pechuga/Muslo)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
  { name: "Ternera / Cerdo (Magro)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
  { name: "Pescado Blanco/Azul", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
  { name: "Jamón Serrano", gramsPerRation: 100, carbsPerRation: 0, category: "Fiambres" },
  { name: "Jamón York / Pavo", gramsPerRation: 100, carbsPerRation: 1, category: "Fiambres" },
  { name: "Chorizo / Salchichón", gramsPerRation: 100, carbsPerRation: 1, category: "Fiambres" },
  { name: "Atún (lata)", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },

  // GRASAS Y ASADOS

  { name: "Panceta / Bacon", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
  { name: "Chorizo Frito / Parrillero", gramsPerRation: 100, carbsPerRation: 1, category: "Grasas" },
  { name: "Morcilla (Arroz)", gramsPerRation: 100, carbsPerRation: 15, category: "Grasas" },
  { name: "Morcilla (Cebolla)", gramsPerRation: 100, carbsPerRation: 5, category: "Grasas" },
  { name: "Torreznos", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
  { name: "Costillas de Cerdo (Asadas/BBQ)", gramsPerRation: 100, carbsPerRation: 5, category: "Grasas" },
  { name: "Cochinillo Asado", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
  { name: "Cordero Asado", gramsPerRation: 100, carbsPerRation: 0, category: "Proteínas" },
  { name: "Salchichas Frankfurt", gramsPerRation: 100, carbsPerRation: 2, category: "Fiambres" },

  // CONDIMENTOS

  { name: "Aceite de Oliva", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas", unit: "ml" },
  { name: "Vinagre", gramsPerRation: 100, carbsPerRation: 0.5, category: "Condimentos", unit: "ml" },
  { name: "Mantequilla", gramsPerRation: 100, carbsPerRation: 0, category: "Grasas" },
  { name: "Mayonesa", gramsPerRation: 20, carbsPerRation: 0.5, category: "Salsas" }, // se usa cuchara sopera según tabla Murillo (20g) :contentReference[oaicite:24]{index=24}
  { name: "Ketchup", gramsPerRation: 100, carbsPerRation: 25, category: "Salsas" }, // mantiene

  // DULCES Y SNACKS

  { name: "Galletas tipo María", gramsPerRation: 15, carbsPerRation: 10, category: "Dulces" }, // Murillo: galleta María 15g = 1 ración :contentReference[oaicite:25]{index=25}  
  { name: "Chocolate con leche", gramsPerRation: 100, carbsPerRation: 55, category: "Dulces" },
  { name: "Chocolate negro (>70%)", gramsPerRation: 100, carbsPerRation: 35, category: "Dulces" },
  { name: "Azúcar", gramsPerRation: 10, carbsPerRation: 10, category: "Dulces" }, // correcto: 10g de azúcar = 1 ración (10g HC)  
  { name: "Miel", gramsPerRation: 100, carbsPerRation: 80, category: "Dulces" },  
  { name: "Patatas chips", gramsPerRation: 30, carbsPerRation: 10, category: "Snacks" }, // según Murillo: patatas chips 20g = ~1.5 raciones → 30g ≈ 10 HC :contentReference[oaicite:26]{index=26}  
  { name: "Frutos secos (Nueces/Almendras)", gramsPerRation: 150, carbsPerRation: 10, category: "Snacks" }, // no exacto en la tabla, pero aproximado para ración de 10g HC

  // BEBIDAS

  { name: "Cerveza (Caña 200ml)", gramsPerRation: 200, carbsPerRation: 10, category: "Bebidas", unit: "ml" }, // no valor exacto en Murillo, aproximado  
  { name: "Cerveza (Tercio 330ml)", gramsPerRation: 330, carbsPerRation: 12, category: "Bebidas", unit: "ml" },  
  { name: "Cerveza (Pinta 500ml)", gramsPerRation: 500, carbsPerRation: 18, category: "Bebidas", unit: "ml" },  
  { name: "Cerveza Sin Alcohol (Tercio)", gramsPerRation: 330, carbsPerRation: 15, category: "Bebidas", unit: "ml" },  
  { name: "Vino (Copa 150ml)", gramsPerRation: 150, carbsPerRation: 1, category: "Bebidas", unit: "ml" }, // pequeño ajuste  
  { name: "Refresco (Lata 330ml)", gramsPerRation: 330, carbsPerRation: 35, category: "Bebidas", unit: "ml" },  
  { name: "Refresco Zero (Lata 330ml)", gramsPerRation: 330, carbsPerRation: 0, category: "Bebidas", unit: "ml" },  
  { name: "Zumo Naranja (Vaso 200ml)", gramsPerRation: 200, carbsPerRation: 20, category: "Bebidas", unit: "ml" },  
  { name: "Cubata (Copa)", gramsPerRation: 150, carbsPerRation: 10, category: "Bebidas", unit: "ml" } // aproximación

  // --- DATOS AÑADIDOS DEL PDF (Platos Pequeños y Medianos) ---
  // (Se mantienen igual, aunque algunos ya coinciden con la tabla de Murillo)

  { name: "Arroz blanco, hervido (Plato pequeño)", gramsPerRation: 38, carbsPerRation: 10, category: "Cereales" },
  { name: "Arroz blanco, hervido (Plato mediano)", gramsPerRation: 76, carbsPerRation: 20, category: "Cereales" },
  { name: "Arroz integral, hervido (Plato pequeño)", gramsPerRation: 40, carbsPerRation: 10, category: "Cereales" },
  { name: "Arroz integral, hervido (Plato mediano)", gramsPerRation: 80, carbsPerRation: 20, category: "Cereales" },
  { name: "Pasta, hervida (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Cereales" },
  { name: "Pasta, hervida (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Cereales" },
  { name: "Pasta integral, hervida (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Cereales" },
  { name: "Pasta integral, hervida (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Cereales" },
  { name: "Patatas, en puré (Plato pequeño)", gramsPerRation: 75, carbsPerRation: 10, category: "Tubérculos" }, // se ajusta a 10 HC (Murillo da puré 15g por ración de 10 HC para copos, parcialmente) :contentReference[oaicite:27]{index=27}  
  { name: "Patatas, en puré (Plato mediano)", gramsPerRation: 150, carbsPerRation: 20, category: "Tubérculos" },
  { name: "Patatas, cocidas (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Tubérculos" },
  { name: "Patatas, cocidas (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Tubérculos" },
  { name: "Patatas, fritas (Plato pequeño)", gramsPerRation: 30, carbsPerRation: 10, category: "Tubérculos" },
  { name: "Patatas, fritas (Plato mediano)", gramsPerRation: 60, carbsPerRation: 20, category: "Tubérculos" },

  { name: "Lentejas, hervidas (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" },
  { name: "Lentejas, hervidas (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Legumbres" },
  { name: "Garbanzos, hervidos (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" },
  { name: "Garbanzos, hervidos (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Legumbres" },
  { name: "Judías blancas, hervidas (Plato pequeño)", gramsPerRation: 50, carbsPerRation: 10, category: "Legumbres" },
  { name: "Judías blancas, hervidas (Plato mediano)", gramsPerRation: 100, carbsPerRation: 20, category: "Legumbres" },

  { name: "Refresco con azúcar (Lata 330ml)", gramsPerRation: 330, carbsPerRation: 35, category: "Bebidas", unit: "ml" },
  { name: "Refresco con azúcar (Vaso 200ml)", gramsPerRation: 200, carbsPerRation: 21, category: "Bebidas", unit: "ml" },
  { name: "Refresco sin azúcar (Lata 330ml)", gramsPerRation: 330, carbsPerRation: 0, category: "Bebidas", unit: "ml" },
  { name: "Cerveza (Caña 200ml)", gramsPerRation: 200, carbsPerRation: 10, category: "Bebidas", unit: "ml" },
  { name: "Cerveza (Tercio 330ml)", gramsPerRation: 330, carbsPerRation: 12, category: "Bebidas", unit: "ml" },
  { name: "Cerveza (Pinta 500ml)", gramsPerRation: 500, carbsPerRation: 18, category: "Bebidas", unit: "ml" },
  { name: "Cerveza sin alcohol (Tercio 330ml)", gramsPerRation: 330, carbsPerRation: 15, category: "Bebidas", unit: "ml" },

  { name: "Ketchup (Cucharada sopera)", gramsPerRation: 20, carbsPerRation: 5, category: "Salsas" }, // coincide con tabla Murillo :contentReference[oaicite:28]{index=28}
  { name: "Mayonesa (Cucharada sopera)", gramsPerRation: 20, carbsPerRation: 0.5, category: "Salsas" },

  { name: "Pizza (Porción 1/8)", gramsPerRation: 100, carbsPerRation: 25, category: "Comida Rápida" },
  { name: "Hamburguesa (Genérica)", gramsPerRation: 150, carbsPerRation: 30, category: "Comida Rápida" },
  { name: "Patatas fritas (Ración pequeña)", gramsPerRation: 80, carbsPerRation: 25, category: "Comida Rápida" },
  { name: "Patatas fritas (Ración mediana)", gramsPerRation: 120, carbsPerRation: 38, category: "Comida Rápida" },
  { name: "Nuggets de pollo (6 unidades)", gramsPerRation: 100, carbsPerRation: 15, category: "Comida Rápida" }
];

// --- COMIDA RÁPIDA (FAST FOOD) ---
const fastFoods = [
  // Aquí dejo tus valores originales. No los quito ni cambio, ya que muchas fast foods no están exactamente en la tabla de Murillo.
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
