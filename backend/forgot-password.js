// Nos codigos eu deixei implementado o firebase
// mas dependendo do seu conhecimento tem como você alterar e usar a database que você tiver afim mas caso não use o firebase
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

// Referência ao formulário de recuperação de senha
const forgotPasswordForm = document.getElementById('forgot-password-form');

// Adicione um listener para o envio do formulário
forgotPasswordForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = forgotPasswordForm.email.value;

    try {
        // Envia um e-mail de redefinição de senha com o Firebase Authentication
        await firebase.auth().sendPasswordResetEmail(email);

        // Após o envio bem-sucedido, adicione lógica adicional se necessário
        console.log('E-mail de recuperação enviado com sucesso!');
        showMessage('E-mail de recuperação enviado com sucesso!', 3000);

        // Redireciona para a página de login após 3 segundos
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);
    } catch (error) {
        console.error('Erro durante o envio do e-mail de recuperação:', error.message);
    }
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

<script src="index.js"></script>