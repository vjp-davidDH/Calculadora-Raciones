document.addEventListener('DOMContentLoaded', () => {
    // --- TABS LOGIC ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`tab-${btn.dataset.tab}`).classList.add('active');
        });
    });

    // --- MEAL LIST STATE ---
    let mealList = [];
    const menuCountBadge = document.getElementById('menu-count-badge');
    const menuListEl = document.getElementById('menu-list');
    const menuTotalRations = document.getElementById('menu-total-rations');
    const menuTotalCarbs = document.getElementById('menu-total-carbs');
    const btnClearMenu = document.getElementById('btn-clear-menu');

    function addToMenu(item) {
        mealList.push(item);
        updateMenuUI();
        const badgeBtn = document.querySelector('.tab-btn[data-tab="menu"]');
        badgeBtn.classList.add('pulse');
        setTimeout(() => badgeBtn.classList.remove('pulse'), 300);
        alert(`Añadido: ${item.name}`);
    }

    function removeFromMenu(index) {
        mealList.splice(index, 1);
        updateMenuUI();
    }

    function updateMenuUI() {
        menuCountBadge.textContent = mealList.length;
        menuListEl.innerHTML = '';
        if (mealList.length === 0) {
            menuListEl.innerHTML = '<div class="empty-state"><p>Tu menú está vacío. Añade alimentos desde las otras pestañas.</p></div>';
        } else {
            mealList.forEach((item, index) => {
                const div = document.createElement('div');
                div.className = 'menu-item';
                div.innerHTML = `
                    <div class="menu-item-info">
                        <h4>${item.name}</h4>
                        <p>${item.details}</p>
                    </div>
                    <div class="menu-item-stats">
                        <span class="menu-rations">${item.rations.toFixed(2)} R</span>
                        <span class="menu-carbs">${item.carbs.toFixed(1)}g HC</span>
                    </div>
                    <button class="btn-remove" data-index="${index}">×</button>
                `;
                menuListEl.appendChild(div);
            });

            document.querySelectorAll('.btn-remove').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    removeFromMenu(parseInt(e.target.dataset.index, 10));
                });
            });
        }

        const totalCarbs = mealList.reduce((sum, item) => sum + item.carbs, 0);
        const totalRations = totalCarbs / 10;
        menuTotalCarbs.textContent = `${totalCarbs.toFixed(1)}g`;
        menuTotalRations.textContent = totalRations.toFixed(2);
    }

    btnClearMenu.addEventListener('click', () => {
        if (confirm('¿Estás seguro de que quieres borrar todo el menú?')) {
            mealList = [];
            updateMenuUI();
        }
    });

    // --- BASIC FOODS LOGIC ---
    const basicSearch = document.getElementById('basic-search');
    const basicResults = document.getElementById('basic-results');
    const basicCalculator = document.getElementById('basic-calculator');
    const basicInput = document.getElementById('basic-input');
    const btnAddBasic = document.getElementById('btn-add-basic');

    const basicName = document.getElementById('basic-name');
    const basicCategory = document.getElementById('basic-category');
    const basicResultRations = document.getElementById('basic-result-rations');
    const basicResultCarbs = document.getElementById('basic-result-carbs');
    const basicInfoGrams = document.getElementById('basic-info-grams');
    const basicInfoCarbs = document.getElementById('basic-info-carbs');

    const basicInputLabel = document.querySelector('#basic-calculator label');
    const basicUnitSpan = document.querySelector('#basic-calculator .unit');

    let currentBasicFood = null;

    // Buscar alimentos
    basicSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length === 0) {
            basicResults.classList.add('hidden');
            return;
        }
        const matches = basicFoods.filter(food =>
            food.name.toLowerCase().includes(query)
        );
        renderBasicResults(matches);
    });

    function renderBasicResults(foods) {
        basicResults.innerHTML = '';
        if (foods.length === 0) {
            basicResults.classList.add('hidden');
            return;
        }
        foods.forEach(food => {
            const div = document.createElement('div');
            div.className = 'result-item';
            div.innerHTML = `
                <span class="item-name">${food.name}</span>
                <span class="item-category">${food.category}</span>
            `;
            div.addEventListener('click', () => selectBasicFood(food));
            basicResults.appendChild(div);
        });
        basicResults.classList.remove('hidden');
    }

    // Seleccionar alimento
    function selectBasicFood(food) {
        currentBasicFood = food;
        basicName.textContent = food.name;
        basicCategory.textContent = food.category;

        // Determinar unidad de entrada según categoría
        if (food.category === 'Bollería') {
            basicInputLabel.textContent = 'Cantidad (Unidades)';
            basicUnitSpan.textContent = 'ud';
            basicInput.placeholder = '1';
            document.querySelector('.info-text').style.display = 'none';
        } else if (food.category === 'Bebidas') {
            basicInputLabel.textContent = 'Cantidad (ml)';
            basicUnitSpan.textContent = 'ml';
            basicInput.placeholder = '100';
            document.querySelector('.info-text').style.display = 'block';
            basicInfoGrams.textContent = food.gramsPerRation;
            basicInfoCarbs.textContent = food.carbsPerRation;
        } else {
            basicInputLabel.textContent = 'Cantidad (g)';
            basicUnitSpan.textContent = 'g';
            basicInput.placeholder = '100';
            document.querySelector('.info-text').style.display = 'block';
            basicInfoGrams.textContent = food.gramsPerRation;
            basicInfoCarbs.textContent = food.carbsPerRation;
        }

        basicSearch.value = '';
        basicResults.classList.add('hidden');
        basicCalculator.classList.remove('hidden');
        basicInput.value = '';
        basicResultRations.textContent = '0.0';
        basicResultCarbs.textContent = '0g';
        basicInput.focus();
    }

    // Calcular HC y raciones
    function getBasicCalculation() {
        if (!currentBasicFood) return null;
        const amount = parseFloat(basicInput.value) || 0;
        if (amount <= 0) return null;

        let totalCarbs = 0;
        let details = '';

        if (currentBasicFood.category === 'Bollería') {
            totalCarbs = amount * currentBasicFood.carbsPerRation;
            details = `${amount} ud`;
        } else {
            // gramos o ml
            const carbsPerUnit = currentBasicFood.carbsPerRation / currentBasicFood.gramsPerRation;
            totalCarbs = amount * carbsPerUnit;
            const unit = currentBasicFood.category === 'Bebidas' ? 'ml' : 'g';
            details = `${amount}${unit}`;
        }

        const rations = totalCarbs / 10;
        return { amount, totalCarbs, rations, details };
    }

    basicInput.addEventListener('input', () => {
        const calc = getBasicCalculation();
        if (calc) {
            basicResultCarbs.textContent = `${calc.totalCarbs.toFixed(1)}g`;
            basicResultRations.textContent = calc.rations.toFixed(2);
        } else {
            basicResultCarbs.textContent = '0g';
            basicResultRations.textContent = '0.0';
        }
    });

    btnAddBasic.addEventListener('click', () => {
        const calc = getBasicCalculation();
        if (calc) {
            addToMenu({
                name: currentBasicFood.name,
                details: calc.details,
                carbs: calc.totalCarbs,
                rations: calc.rations
            });
            basicInput.value = '';
            basicResultCarbs.textContent = '0g';
            basicResultRations.textContent = '0.0';
        } else {
            alert('Introduce una cantidad válida.');
        }
    });

    // --- CERRAR RESULTADOS DE BÚSQUEDA ---
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            basicResults.classList.add('hidden');
        }
    });
});
