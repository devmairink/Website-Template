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

// Referência ao formulário de registro
const registerForm = document.getElementById('register-form');

// Adicione um listener para o envio do formulário
registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;

    try {
        // Crie um novo usuário no Firebase Authentication
        await firebase.auth().createUserWithEmailAndPassword(email, password);

        // Após o registro bem-sucedido, adicione lógica adicional se necessário
        console.log('Usuário registrado com sucesso!');

        // Chame a função para exibir a mensagem de sucesso
        showSuccessMessage();
    } catch (error) {
        console.error('Erro durante o registro:', error.message);
    }
});

// Função para mostrar a mensagem de sucesso
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success-message');
    successMessage.innerText = 'Registro realizado com sucesso!';

    document.body.appendChild(successMessage);

    // Redirecione para a página de login após 3 segundos
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 3000);
}

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
