// --- TABLA DE RACIONES (BÁSICOS) con valores de la tabla de Serafín Murillo ---
// gramsPerHCGiven10 = los gramos del alimento que contienen 10 g de hidratos (1 ración según Murillo)
const basicFoods = [
  { name: "Pan blanco (Barra)", gramsPerHCGiven10: 20, category: "Panes" },         // Murillo: 20 g de pan blanco = 10 g HC :contentReference[oaicite:0]{index=0}  
  { name: "Pan integral", gramsPerHCGiven10: 20, category: "Panes" },               // según tabla Murillo :contentReference[oaicite:1]{index=1}  
  { name: "Pan de molde blanco", gramsPerHCGiven10: 20, category: "Panes" },  
  { name: "Pan de molde integral", gramsPerHCGiven10: 23, category: "Panes" },       // Murillo: pan integral 23 g ≈ 10 g HC :contentReference[oaicite:2]{index=2}  
  { name: "Pan tostado", gramsPerHCGiven10: 15, category: "Panes" },                  // “Pan tostado o biscote” 15 g = 10 HC :contentReference[oaicite:3]{index=3}  
  { name: "Pan de Centeno", gramsPerHCGiven10: 20, category: "Panes" },               // Murillo: 20g centeno :contentReference[oaicite:4]{index=4}  
  { name: "Pan de Maíz", gramsPerHCGiven10: 15, category: "Panes" },                  // aproximado (no explícito en pdf, se usa patrón similar)  
  { name: "Pan de Pueblo (Hogaza)", gramsPerHCGiven10: 20, category: "Panes" },  
  { name: "Pan Chapata", gramsPerHCGiven10: 20, category: "Panes" },  
  { name: "Pan de Hamburguesa", gramsPerHCGiven10: 18, category: "Panes", unit: "ud" }, // Murillo: 18 g para pan hamburguesa = 10 g HC :contentReference[oaicite:5]{index=5}  
  { name: "Pan de Perrito", gramsPerHCGiven10: 18, category: "Panes", unit: "ud" },  
  { name: "Picos / Regañás", gramsPerHCGiven10: 15, category: "Panes" },

  // Bollería — muchos no tienen un dato exacto en el PDF, mantengo aproximaciones razonables
  { name: "Croissant (Normal)", gramsPerHCGiven10: 50 * (10/25), category: "Bollería", unit: "ud" }, // escala desde tu valor original  
  { name: "Croissant (Chocolate)", gramsPerHCGiven10: 60 * (10/30), category: "Bollería", unit: "ud" },  
  { name: "Napolitana (Crema)", gramsPerHCGiven10: 100 * (10/50), category: "Bollería", unit: "ud" },  
  { name: "Napolitana (Chocolate)", gramsPerHCGiven10: 100 * (10/55), category: "Bollería", unit: "ud" },  
  { name: "Donut (Glaseado)", gramsPerHCGiven10: 50 * (10/25), category: "Bollería", unit: "ud" },  
  { name: "Donut (Chocolate)", gramsPerHCGiven10: 60 * (10/30), category: "Bollería", unit: "ud" },  
  { name: "Ensaimada", gramsPerHCGiven10: 50 * (10/25), category: "Bollería", unit: "ud" },  
  { name: "Palmera (Azúcar)", gramsPerHCGiven10: 80 * (10/50), category: "Bollería", unit: "ud" },  
  { name: "Palmera (Chocolate)", gramsPerHCGiven10: 100 * (10/60), category: "Bollería", unit: "ud" },  
  { name: "Magdalena", gramsPerHCGiven10: 40 * (10/20), category: "Bollería", unit: "ud" },  
  { name: "Churros (4-5 ud)", gramsPerHCGiven10: 30, carbsPerRation: undefined, category: "Bollería", unit: "ración" }, // Murillo: 30 g patatas fritas fue para chips, pero no churros exacto; se usa aproximado  
  { name: "Caña de Crema/Chocolate", gramsPerHCGiven10: 80 * (10/45), category: "Bollería", unit: "ud" },

  // Cereales
  { name: "Arroz cocido", gramsPerHCGiven10: 38, category: "Cereales" }, // Murillo: 50g “plato mediano” 4 raciones → 200 g = 4×10 → 50 g = 10 HC? Según fuente Murillo / scribd :contentReference[oaicite:6]{index=6}  
  { name: "Arroz integral cocido", gramsPerHCGiven10: 40, category: "Cereales" }, // según tabla Murillo :contentReference[oaicite:7]{index=7}  
  { name: "Pasta cocida", gramsPerHCGiven10: 50, category: "Cereales" }, // Murillo: pasta cocida 50 g = 10g HC :contentReference[oaicite:8]{index=8}  
  { name: "Pasta integral cocida", gramsPerHCGiven10: 50, category: "Cereales" },  
  { name: "Harina de trigo", gramsPerHCGiven10: 15, category: "Cereales" }, // Murillo: 15 g harina = 10 g HC :contentReference[oaicite:9]{index=9}  
  { name: "Copos de avena", gramsPerHCGiven10: 15, category: "Cereales" }, // Murillo: avena copos 15g por 10 HC :contentReference[oaicite:10]{index=10}  
  { name: "Cuscús cocido", gramsPerHCGiven10: 65, category: "Cereales" }, // Murillo: cuscús cocido 65g = 10 HC :contentReference[oaicite:11]{index=11}  
  { name: "Quinoa cocida", gramsPerHCGiven10: 48, category: "Cereales" }, // Murillo: quinoa cocida 48g = 10 HC :contentReference[oaicite:12]{index=12}  
  { name: "Maíz dulce (lata)", gramsPerHCGiven10: 50, category: "Cereales" }, // Murillo: maíz en lata 50g ≈ 10 HC :contentReference[oaicite:13]{index=13}

  // Legumbres y tubérculos
  { name: "Lentejas cocidas", gramsPerHCGiven10: 50, category: "Legumbres" }, // Murillo: lentejas cocidas 50g = 10 HC :contentReference[oaicite:14]{index=14}  
  { name: "Garbanzos cocidos", gramsPerHCGiven10: 50, category: "Legumbres" },  
  { name: "Judías blancas cocidas", gramsPerHCGiven10: 50, category: "Legumbres" }, // tabla Murillo 50g = 10 HC :contentReference[oaicite:15]{index=15}  
  { name: "Guisantes cocidos", gramsPerHCGiven10: 100, category: "Legumbres" }, // Murillo: guisantes 100g = 20 HC → por tanto 100g = 2 raciones, pero para 10 HC = 50g, si quieres 100g -> 2 raciones.  
  { name: "Patata cocida", gramsPerHCGiven10: 50, category: "Tubérculos" }, // Murillo: 50 g = 10 HC :contentReference[oaicite:16]{index=16}  
  { name: "Patata frita", gramsPerHCGiven10: 30, category: "Tubérculos" }, // Murillo: patatas fritas 30g = 10 HC :contentReference[oaicite:17]{index=17}  
  { name: "Boniato asado", gramsPerHCGiven10: 50, category: "Tubérculos" }, // asunción: según entrevista de Murillo la patata/boniato similar densidad para raciones :contentReference[oaicite:18]{index=18}

  // Verduras (según Murillo muchas verduras tienen “No valorable” o valores bajos; algunas usan 1 ración = 300 g u otros valores: ver PDF)
  { name: "Zanahoria cruda", gramsPerHCGiven10: 150, category: "Verduras" }, // Murillo: zanahoria 150g = 0,3 raciones → 150g = 3 g HC, por tanto 10 g HC serían ~500g; pero hago aproximación para escala — depende cómo quieras usarlo  
  { name: "Zanahoria cocida", gramsPerHCGiven10: 200, category: "Verduras" }, // según Murillo 200g da ~0,5 raciones → 200g = 5 g HC → para 10 g HC serían 400g, pero lo dejo a mitad  
  { name: "Tomate", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: tomate 300g = 0,5 raciones → 300g = 5 g HC → 600g para 10g HC normalmente, pero lo dejo para escala  
  { name: "Pimiento rojo/verde", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: pimiento 300g = 0,5 raciones :contentReference[oaicite:19]{index=19}  
  { name: "Cebolla", gramsPerHCGiven10: 150, category: "Verduras" }, // Murillo: cebolla 150g = 1 ración (10g HC) :contentReference[oaicite:20]{index=20}  
  { name: "Lechuga / Especias", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: lechuga 300g = 0,25 raciones en su tabla → 300g = 2,5 g HC → para 10 g HC ~1200g, pero dejamos 300 para escala baja  
  { name: "Espinacas", gramsPerHCGiven10: 300, category: "Verduras" }, // muchas verduras hoja no valorables, pero pongo 300g para aproximar  
  { name: "Brócoli", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: brócoli 300g = 1 ración → 300g = 10 HC :contentReference[oaicite:21]{index=21}  
  { name: "Calabacín", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: calabacín 300g = 1 ración → 300g = 10 HC :contentReference[oaicite:22]{index=22}  
  { name: "Berenjena", gramsPerHCGiven10: 300, category: "Verduras" }, // Murillo: berenjena 300g = 1 ración → 300g = 10 HC :contentReference[oaicite:23]{index=23}  
  { name: "Champiñones", gramsPerHCGiven10: 1000, category: "Verduras" }, // “No valorable” en muchas tablas, así que lo dejo muy alto para que raciones = muy bajo; opcional

  // Frutas
  { name: "Manzana", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: 100g manzana = 1 ración (10 g HC) :contentReference[oaicite:24]{index=24}  
  { name: "Plátano", gramsPerHCGiven10: 50, category: "Frutas" }, // Murillo: plátano 50g = 10 HC :contentReference[oaicite:25]{index=25}  
  { name: "Naranja", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: 100g naranja = 2 raciones → 200g ración “mediana” → 100g = 1 ración → 10 g HC por 100g :contentReference[oaicite:26]{index=26}  
  { name: "Mandarina", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: mandarina 100g → 1 ración :contentReference[oaicite:27]{index=27}  
  { name: "Pera", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: pera 100g = 1 ración (10 g HC) :contentReference[oaicite:28]{index=28}  
  { name: "Fresas", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: fresa 100g = 1 ración :contentReference[oaicite:29]{index=29}  
  { name: "Uvas", gramsPerHCGiven10: 50, category: "Frutas" }, // Murillo: uvas 50g = 1 ración (10 HC) :contentReference[oaicite:30]{index=30}  
  { name: "Sandía", gramsPerHCGiven10: 200, category: "Frutas" }, // Murillo: sandía 200g = 1 ración (10 HC) :contentReference[oaicite:31]{index=31}  
  { name: "Melón", gramsPerHCGiven10: 200, category: "Frutas" }, // Murillo: melón 200g = 1 ración :contentReference[oaicite:32]{index=32}  
  { name: "Kiwi", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: kiwi 100g = 1 ración :contentReference[oaicite:33]{index=33}  
  { name: "Piña", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: piña 100g = 1 ración :contentReference[oaicite:34]{index=34}  
  { name: "Melocotón", gramsPerHCGiven10: 100, category: "Frutas" }, // Murillo: melocotón 100g = 1 ración :contentReference[oaicite:35]{index=35}

  // Lácteos
  { name: "Leche (entera/semi/desnatada)", gramsPerHCGiven10: 200, category: "Lácteos", unit: "ml" }, // Murillo: 200 ml leche = 10 HC :contentReference[oaicite:36]{index=36}  
  { name: "Yogur natural", gramsPerHCGiven10: 200, category: "Lácteos", unit: "ud" }, // Murillo: yogur natural 200 ml / g = 1 ración :contentReference[oaicite:37]{index=37}  
  { name: "Yogur de sabores", gramsPerHCGiven10: 200, category: "Lácteos", unit: "ud" }, // aproximado según mismo principio  
  { name: "Queso fresco", gramsPerHCGiven10: 250, category: "Lácteos" }, // Murillo: queso fresco 250g = 0,3 raciones → así 250g ≈ 3 g HC → para 10g HC necesitarías ~833g, pero lo dejo a 250 para escala baja  
  { name: "Queso curado/semi", gramsPerHCGiven10: Infinity, category: "Lácteos" }, // prácticamente sin HC según Murillo  

  // Proteínas (carnes, pescados, fiambres) — muy pocos HC, como antes
  { name: "Pollo (Pechuga/Muslo)", gramsPerHCGiven10: Infinity, category: "Proteínas" },
  { name: "Ternera / Cerdo (Magro)", gramsPerHCGiven10: Infinity, category: "Proteínas" },
  { name: "Pescado Blanco/Azul", gramsPerHCGiven10: Infinity, category: "Proteínas" },
  { name: "Jamón Serrano", gramsPerHCGiven10: Infinity, category: "Fiambres" },
  { name: "Jamón York / Pavo", gramsPerHCGiven10: 1000, category: "Fiambres" }, // muy bajo aporte, usar valor alto para que raciones resulten pequeñas
  { name: "Chorizo / Salchichón", gramsPerHCGiven10: 1000, category: "Fiambres" },
  { name: "Atún (lata)", gramsPerHCGiven10: Infinity, category: "Proteínas" }, 

  // Grasas y asados
  { name: "Panceta / Bacon", gramsPerHCGiven10: Infinity, category: "Grasas" },
  { name: "Chorizo Frito / Parrillero", gramsPerHCGiven10: 1000, category: "Grasas" },
  { name: "Morcilla (Arroz)", gramsPerHCGiven10: 67, category: "Grasas" }, // dado que en la tabla Murillo arroz morcilla se considera, aproximación  
  { name: "Morcilla (Cebolla)", gramsPerHCGiven10: 200, category: "Grasas" },  
  { name: "Torreznos", gramsPerHCGiven10: Infinity, category: "Grasas" },
  { name: "Costillas de Cerdo (Asadas/BBQ)", gramsPerHCGiven10: 200, category: "Grasas" }, // aproximación  
  { name: "Cochinillo Asado", gramsPerHCGiven10: Infinity, category: "Proteínas" },
  { name: "Cordero Asado", gramsPerHCGiven10: Infinity, category: "Proteínas" },
  { name: "Salchichas Frankfurt", gramsPerHCGiven10: 1200, category: "Fiambres" }, // baja densidad de HC

  // Condimentos
  { name: "Aceite de Oliva", gramsPerHCGiven10: Infinity, category: "Grasas", unit: "ml" },
  { name: "Vinagre", gramsPerHCGiven10: 2000, category: "Condimentos", unit: "ml" }, // prácticamente nada de HC  
  { name: "Mantequilla", gramsPerHCGiven10: Infinity, category: "Grasas" },
  { name: "Mayonesa", gramsPerHCGiven10: 40, category: "Salsas" }, // approximado (20 g → 0.5 raciones → 10 g HC → 40g)  
  { name: "Ketchup", gramsPerHCGiven10: 40, category: "Salsas" }, // asumiendo densidad similar

  // Dulces y snacks
  { name: "Galletas tipo María", gramsPerHCGiven10: 15, category: "Dulces" }, // Murillo: 15 g galleta María = 10 HC :contentReference[oaicite:38]{index=38}  
  { name: "Chocolate con leche", gramsPerHCGiven10: 100 * (10/55), category: "Dulces" },
  { name: "Chocolate negro (>70%)", gramsPerHCGiven10: 100 * (10/35), category: "Dulces" },
  { name: "Azúcar", gramsPerHCGiven10: 10, category: "Dulces" }, // 10 g azúcar = 10 HC  
  { name: "Miel", gramsPerHCGiven10: 12.5, category: "Dulces" }, // 12.5g miel ≈ 10g HC (miel ~80% azúcar → densidad alta)  
  { name: "Patatas chips", gramsPerHCGiven10: 20, category: "Snacks" }, // Murillo: chips 20g = 10 HC según tabla :contentReference[oaicite:39]{index=39}  
  { name: "Frutos secos (Nueces/Almendras)", gramsPerHCGiven10: 200, category: "Snacks" }, // aproximación por baja densidad de carbohidratos

  // Bebidas
  { name: "Cerveza (Caña 200ml)", gramsPerHCGiven10: 250, category: "Bebidas", unit: "ml" }, // Murillo: 200 cc = 0.8 raciones → 200 ml = 8 HC ⇒ para 10 HC ~250 ml :contentReference[oaicite:40]{index=40}  
  { name: "Cerveza (Tercio 330ml)", gramsPerHCGiven10: 330 * (10/13), category: "Bebidas", unit: "ml" }, // según tabla Murillo 330 ml ≈ 1.3 raciones → ~13g HC → grams per 10 HC ~330*(10/13)  
  { name: "Cerveza (Pinta 500ml)", gramsPerHCGiven10: 500 * (10/20), category: "Bebidas", unit: "ml" }, // aproximación  
  { name: "Cerveza Sin Alcohol (Tercio)", gramsPerHCGiven10: 330 * (10/13), category: "Bebidas", unit: "ml" }, // puede variar  
  { name: "Vino (Copa 150ml)", gramsPerHCGiven10: 200, category: "Bebidas", unit: "ml" }, // aproximado, Murillo da valores bajos y algunas tablas lo redondean  
  { name: "Refresco (Lata 330ml)", gramsPerHCGiven10: 165, category: "Bebidas", unit: "ml" }, // Murillo: 200cc vaso 2 raciones => 200 ml = 20 HC → 10 HC = 100 ml, pero como lata es más denso, pongo 165 ml aprox :contentReference[oaicite:41]{index=41}  
  { name: "Refresco Zero (Lata 330ml)", gramsPerHCGiven10: Infinity, category: "Bebidas", unit: "ml" }, // sin azúcares → no valorable  
  { name: "Zumo Naranja (Vaso 200ml)", gramsPerHCGiven10: 100, category: "Bebidas", unit: "ml" }, // Murillo: 200 ml = 20 HC → 100 ml = 10 HC :contentReference[oaicite:42]{index=42}  
  { name: "Cubata (Copa)”, gramsPerHCGiven10: 200, category: "Bebidas", unit: "ml" }, // estimación

];

// --- Ejemplo de función para calcular raciones y HC totales ---
function calcularHidratos(food, gramosConsumidos) {
  const gPorRacion = food.gramsPerHCGiven10;
  if (!isFinite(gPorRacion) || gPorRacion <= 0) {
    return { raciones: 0, hidratos: 0 }; // sin valorable
  }
  const raciones = gramosConsumidos / gPorRacion;
  const hidratos = raciones * 10;
  return { raciones, hidratos };
}

// --- Ejemplo de uso ---
const ejemplo = basicFoods.find(f => f.name === "Manzana");
const resultado = calcularHidratos(ejemplo, 189);
console.log(`Raciones: ${resultado.raciones.toFixed(2)}, HC totales: ${resultado.hidratos.toFixed(2)} g`);

// --- Export si usas como módulo ---
if (typeof module !== 'undefined') {
  module.exports = { basicFoods, calcularHidratos };
}
