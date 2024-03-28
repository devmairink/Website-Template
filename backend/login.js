// Nos codigos eu deixei implementado o firebase
//mas dependendo do seu conhecimento tem como você alterar e usar a database que você tiver afim mas caso não use o firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Autenticar com o Firebase Authentication
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log('Usuário autenticado com sucesso!');
                showMessage('Login realizado com sucesso!', 3000);

                setTimeout(() => {
                    // Redireciona para index.html após 3 segundos
                    window.location.href = 'index.html';
                }, 3000);
            })
            .catch((error) => {
                console.error('Erro durante o login:', error.message);
            });
    });

    function showMessage(message, duration) {
        const messageBox = document.createElement('div');
        messageBox.textContent = message;
        messageBox.style.position = 'fixed';
        messageBox.style.top = '50%';
        messageBox.style.left = '50%';
        messageBox.style.transform = 'translate(-50%, -50%)';
        messageBox.style.padding = '10px';
        messageBox.style.background = 'rgba(0, 255, 0, 0.7)';
        messageBox.style.border = '1px solid #000';
        messageBox.style.borderRadius = '5px';
        messageBox.style.zIndex = '9999';
        document.body.appendChild(messageBox);

        setTimeout(() => {
            messageBox.remove();
        }, duration);
    }
});

// Dark Mode Script
const darkModeButton = document.querySelector('.dark-mode');

// Função para alternar entre os modos
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode-variables');
    darkModeButton.classList.toggle('active');

    // Salva a preferência do usuário
    const currentMode = document.body.classList.contains('dark-mode-variables') ? 'dark' : 'light';
    localStorage.setItem('darkMode', currentMode);
};

// Evento de clique no botão de modo escuro
darkModeButton.addEventListener('click', toggleDarkMode);

// Verifica se o usuário já definiu uma preferência de modo
const storedMode = localStorage.getItem('darkMode');

// Aplica a preferência salva ou usa o modo padrão
if (storedMode === 'dark') {
    toggleDarkMode(); // Aplica o modo escuro se for a preferência do usuário
}
