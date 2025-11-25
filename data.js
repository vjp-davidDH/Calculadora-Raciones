// --- TABLA DE RACIONES (BÁSICOS) según Serafín Murillo ---
// gramsPerHCGiven10 = gramos del alimento que contienen 10 g de hidratos (1 ración)

const basicFoods = [
  // Panes
  { name: "Pan blanco (Barra)", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan integral", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan de molde blanco", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan de molde integral", gramsPerHCGiven10: 23, category: "Panes" },
  { name: "Pan tostado", gramsPerHCGiven10: 15, category: "Panes" },
  { name: "Pan de Centeno", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan de Maíz", gramsPerHCGiven10: 15, category: "Panes" },
  { name: "Pan de Pueblo (Hogaza)", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan Chapata", gramsPerHCGiven10: 20, category: "Panes" },
  { name: "Pan de Hamburguesa", gramsPerHCGiven10: 18, category: "Panes", unit: "ud" },
  { name: "Pan de Perrito", gramsPerHCGiven10: 18, category: "Panes", unit: "ud" },
  { name: "Picos / Regañás", gramsPerHCGiven10: 15, category: "Panes" },

  // Bollería (todas en unidades)
  { name: "Croissant (Normal)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Croissant (Chocolate)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Napolitana (Crema)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Napolitana (Chocolate)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Donut (Glaseado)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Donut (Chocolate)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Ensaimada", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Palmera (Azúcar)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Palmera (Chocolate)", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Magdalena", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },
  { name: "Caña de Crema/Chocolate", gramsPerHCGiven10: 20, category: "Bollería", unit: "ud" },

  // Cereales
  { name: "Arroz cocido", gramsPerHCGiven10: 38, category: "Cereales" },
  { name: "Arroz integral cocido", gramsPerHCGiven10: 40, category: "Cereales" },
  { name: "Pasta cocida", gramsPerHCGiven10: 50, category: "Cereales" },
  { name: "Pasta integral cocida", gramsPerHCGiven10: 50, category: "Cereales" },
  { name: "Harina de trigo", gramsPerHCGiven10: 15, category: "Cereales" },
  { name: "Copos de avena", gramsPerHCGiven10: 15, category: "Cereales" },
  { name: "Cuscús cocido", gramsPerHCGiven10: 65, category: "Cereales" },
  { name: "Quinoa cocida", gramsPerHCGiven10: 48, category: "Cereales" },
  { name: "Maíz dulce (lata)", gramsPerHCGiven10: 50, category: "Cereales" },

  // Legumbres y tubérculos
  { name: "Lentejas cocidas", gramsPerHCGiven10: 50, category: "Legumbres" },
  { name: "Garbanzos cocidos", gramsPerHCGiven10: 50, category: "Legumbres" },
  { name: "Judías blancas cocidas", gramsPerHCGiven10: 50, category: "Legumbres" },
  { name: "Guisantes cocidos", gramsPerHCGiven10: 50, category: "Legumbres" },
  { name: "Patata cocida", gramsPerHCGiven10: 50, category: "Tubérculos" },
  { name: "Patata frita", gramsPerHCGiven10: 30, category: "Tubérculos" },
  { name: "Boniato asado", gramsPerHCGiven10: 50, category: "Tubérculos" },

  // Verduras
  { name: "Zanahoria cruda", gramsPerHCGiven10: 150, category: "Verduras" },
  { name: "Zanahoria cocida", gramsPerHCGiven10: 200, category: "Verduras" },
  { name: "Tomate", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Pimiento rojo/verde", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Cebolla", gramsPerHCGiven10: 150, category: "Verduras" },
  { name: "Lechuga / Especias", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Espinacas", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Brócoli", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Calabacín", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Berenjena", gramsPerHCGiven10: 300, category: "Verduras" },
  { name: "Champiñones", gramsPerHCGiven10: 1000, category: "Verduras" },

  // Frutas
  { name: "Manzana", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Plátano", gramsPerHCGiven10: 50, category: "Frutas" },
  { name: "Naranja", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Mandarina", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Pera", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Fresas", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Uvas", gramsPerHCGiven10: 50, category: "Frutas" },
  { name: "Sandía", gramsPerHCGiven10: 200, category: "Frutas" },
  { name: "Melón", gramsPerHCGiven10: 200, category: "Frutas" },
  { name: "Kiwi", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Piña", gramsPerHCGiven10: 100, category: "Frutas" },
  { name: "Melocotón", gramsPerHCGiven10: 100, category: "Frutas" },

  // Bebidas (todas en unidades)
  { name: "Cerveza (Caña 200ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Cerveza (Tercio 330ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Cerveza (Pinta 500ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Cerveza Sin Alcohol (Tercio)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Vino (Copa 150ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Refresco (Lata 330ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Refresco Zero (Lata 330ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Zumo Naranja (Vaso 200ml)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" },
  { name: "Cubata (Copa)", gramsPerHCGiven10: 1, category: "Bebidas", unit: "ud" }
];

// Función para calcular raciones y HC totales
function calcularHidratos(food, cantidad) {
  if (!food || !isFinite(food.gramsPerHCGiven10)) return { raciones: 0, hidratos: 0 };
  
  let raciones, hidratos;
  if (food.unit === 'ud') {
    raciones = cantidad;           // 1 unidad = 1 ración
    hidratos = raciones * 10;      // 10 g HC por unidad
  } else {
    raciones = cantidad / food.gramsPerHCGiven10;
    hidratos = raciones * 10;
  }
  return { raciones, hidratos };
}

// Export para Node.js
if (typeof module !== 'undefined') {
  module.exports = { basicFoods, calcularHidratos };
}
