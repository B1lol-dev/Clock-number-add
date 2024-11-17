function createClockNumbers() {
    const numbersContainer = document.querySelector('.numbers');
    // Очищаем контейнер
    numbersContainer.innerHTML = '';
    
    // Добавляем начальные числа (1-12)
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.textContent = i;
        number.classList.add('number');
        numbersContainer.appendChild(number);
    }
    
    // Распределяем все числа по кругу
    redistributeNumbers();
}

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    
    if (isNaN(number)) {
        alert('Пожалуйста, введите корректное число');
        return;
    }
    
    const numbersContainer = document.querySelector('.numbers');
    const newDiv = document.createElement('div');
    newDiv.textContent = number;
    newDiv.classList.add('number');
    numbersContainer.appendChild(newDiv);
    
    redistributeNumbers();
    input.value = '';
}

function redistributeNumbers() {
    const numbers = document.querySelectorAll('.number');
    const totalNumbers = numbers.length;
    const radius = 135; // Радиус размещения чисел
    
    numbers.forEach((number, index) => {
        // Вычисляем угол для каждого числа (начинаем с -90 градусов, чтобы 12 было сверху)
        const angle = ((index * (360 / totalNumbers)) - 90) * (Math.PI / 180);
        
        // Вычисляем координаты x и y
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        // Устанавливаем позицию через transform
        number.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Инициализация часов при загрузке страницы
window.onload = createClockNumbers; 