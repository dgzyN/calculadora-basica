document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('result');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.id === 'clear') {
                display.value = '';
            } else if (button.id === '=') {
                try {
                    display.value = eval(display.value);
                } catch (error) {
                    display.value = 'Erro';
                }
            } else {
                display.value += button.id;
            }
        });
    });
});
