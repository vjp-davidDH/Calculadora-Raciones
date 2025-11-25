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

    basicSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
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
        if (!foods.length) {
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

    function selectBasicFood(food) {
        currentBasicFood = food;
        basicName.textContent = food.name;
        basicCategory.textContent = food.category;

        const unit = food.unit || 'g';
        if (unit === 'ud') {
            basicInputLabel.textContent = 'Cantidad (Unidades)';
            basicUnitSpan.textContent = 'ud';
            basicInput.placeholder = '1';
            document.querySelector('.info-text').style.display = 'none';
        } else {
            basicInputLabel.textContent = `Cantidad (${unit === 'ml' ? 'Mililitros' : 'Gramos'})`;
            basicUnitSpan.textContent = unit;
            basicInput.placeholder = '100';
            document.querySelector('.info-text').style.display = 'block';
            basicInfoGrams.textContent = food.gramsPerHCGiven10;
            basicInfoCarbs.textContent = 10;
        }

        basicSearch.value = '';
        basicResults.classList.add('hidden');
        basicCalculator.classList.remove('hidden');
        basicInput.value = '';
        basicResultRations.textContent = '0.00';
        basicResultCarbs.textContent = '0g';
        basicInput.focus();
    }

    function getBasicCalculation() {
        if (!currentBasicFood) return null;
        const amount = parseFloat(basicInput.value) || 0;
        if (amount <= 0) return null;

        let totalCarbs = 0;
        let details = '';

        if (currentBasicFood.unit === 'ud') {
            totalCarbs = amount * 10; // cada unidad = 10g HC
            details = `${amount} ud`;
        } else {
            const carbsPerGram = 10 / currentBasicFood.gramsPerHCGiven10;
            totalCarbs = amount * carbsPerGram;
            const unit = currentBasicFood.unit || 'g';
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
            basicResultRations.textContent = '0.00';
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
            basicResultRations.textContent = '0.00';
        } else {
            alert('Introduce una cantidad válida.');
        }
    });

    // --- FAST FOOD LOGIC (sin cambios) ---
    const ffSelect = document.getElementById('fastfood-select');
    const ffCalculator = document.getElementById('fastfood-calculator');
    const ffInput = document.getElementById('ff-input');
    const ffComponentsList = document.getElementById('ff-components-list');
    const btnAddFF = document.getElementById('btn-add-ff');

    const ffName = document.getElementById('ff-name');
    const ffBrand = document.getElementById('ff-brand');
    const ffResultRations = document.getElementById('ff-result-rations');
    const ffResultCarbs = document.getElementById('ff-result-carbs');

    let currentFF = null;
    let activeComponents = new Set();

    fastFoods.forEach(food => {
        const option = document.createElement('option');
        option.value = food.id;
        option.textContent = `${food.brand} - ${food.name}`;
        ffSelect.appendChild(option);
    });

    ffSelect.addEventListener('change', (e) => {
        const id = e.target.value;
        if (!id) {
            ffCalculator.classList.add('hidden');
            return;
        }
        const food = fastFoods.find(f => f.id === id);
        if (food) selectFastFood(food);
    });

    function selectFastFood(food) {
        currentFF = food;
        activeComponents.clear();
        ffName.textContent = food.name;
        ffBrand.textContent = food.brand;
        ffCalculator.classList.remove('hidden');
        ffInput.value = 1;
        ffComponentsList.innerHTML = '';

        food.components.forEach((comp, index) => {
            const label = document.createElement('label');
            label.className = 'component-item';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = comp.default;
            checkbox.dataset.index = index;
            if (comp.default) activeComponents.add(index);
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    activeComponents.add(index);
                } else {
                    activeComponents.delete(index);
                }
                calculateFF();
            });
            const text = document.createTextNode(` ${comp.name} (${comp.carbs}g HC)`);
            label.appendChild(checkbox);
            label.appendChild(text);
            ffComponentsList.appendChild(label);
        });
        calculateFF();
    }

    function getFFCalculation() {
        if (!currentFF) return null;
        const units = parseFloat(ffInput.value) || 0;
        if (units <= 0) return null;

        let unitCarbs = 0;
        let modifications = [];

        currentFF.components.forEach((comp, index) => {
            if (activeComponents.has(index)) {
                unitCarbs += comp.carbs;
            } else if (comp.default) {
                modifications.push(`Sin ${comp.name}`);
            }
        });

        const totalCarbs = units * unitCarbs;
        const rations = totalCarbs / 10;
        const details = `${units} ud${modifications.length > 0 ? ' (' + modifications.join(', ') + ')' : ''}`;
        return { units, totalCarbs, rations, details };
    }

    function calculateFF() {
        const calc = getFFCalculation();
        if (calc) {
            ffResultCarbs.textContent = `${calc.totalCarbs.toFixed(1)}g`;
            ffResultRations.textContent = calc.rations.toFixed(2);
        } else {
            ffResultCarbs.textContent = '0g';
            ffResultRations.textContent = '0.00';
        }
    }

    ffInput.addEventListener('input', calculateFF);

    btnAddFF.addEventListener('click', () => {
        const calc = getFFCalculation();
        if (calc) {
            addToMenu({
                name: `${currentFF.brand} - ${currentFF.name}`,
                details: calc.details,
                carbs: calc.totalCarbs,
                rations: calc.rations
            });
        } else {
            alert('Introduce una cantidad válida.');
        }
    });

    // Cerrar resultados de búsqueda al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-section')) {
            basicResults.classList.add('hidden');
        }
    });
});
