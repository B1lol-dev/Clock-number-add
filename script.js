function createClockNumbers() {
    const numbersContainer = document.querySelector('.numbers');
    numbersContainer.innerHTML = '';
    
    // 0-12 son qowiw
    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.textContent = i;
        number.classList.add('number');
        numbersContainer.appendChild(number);
    }
    
    redistributeNumbers();
}

function addNumber() {
    const input = document.getElementById('numberInput');
    const number = parseInt(input.value);
    
    if (isNaN(number)) {
        alert('Please enter normal number');
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
    const radius = 135; // Sonlani qoyiw radiusi
    
    // pasdigi code xz cunki inetdan qaradm
    numbers.forEach((number, index) => {
        // Вычисляем угол для каждого числа (начинаем с -90 градусов, чтобы 12 было сверху)
        const angle = ((index * (360 / totalNumbers)) - 90) * (Math.PI / 180);
        
        // Вычисляем координаты x и y
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        number.style.transform = `translate(${x}px, ${y}px)`;
    });
}

// Инициализация часов при загрузке страницы
window.onload = createClockNumbers; 
