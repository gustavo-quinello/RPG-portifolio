// login.js

// 1. Configuração (igual ao que já temos)
const SUPABASE_URL = 'https://uoeixaiwyqjtbcqduzid.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 2. Seleção dos Elementos
const loginForm = document.getElementById('login-form');
console.log(loginForm);
const messageElement = document.getElementById('message');


// 3. Adiciona o ouvinte de evento
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailDigitado = document.getElementById('username').value;
    const senhaDigitada = document.getElementById('password').value;
    console.log(emailDigitado);

    messageElement.textContent = "Verificando...";
    messageElement.style.color = '#e0e0e0'; // Cor neutra

    // --- AQUI ESTÁ A TRANSFORMAÇÃO ---
    // Em vez de .from('personagens').select().eq(), usamos a função de autenticação
    
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: emailDigitado,
        password: senhaDigitada,
    });

    if (error) {
        // Se a variável 'error' existir, a autenticação falhou.
        // Isso pode ser porque o e-mail não existe OU a senha está errada.
        messageElement.textContent = 'Deu Errado! (Email ou Senha inválidos)';
        messageElement.style.color = 'red'; // VERMELHO
        console.error('Erro no login:', error.message);
    } else {
        // Se a variável 'error' for nula, a autenticação foi um sucesso!
        messageElement.textContent = 'Deu Certo! (Login bem-sucedido)';
        messageElement.style.color = 'green'; // VERDE
        console.log('Usuário logado:', data.user);

        // Opcional: Redirecionar para a página principal após um tempo
        // setTimeout(() => { window.location.href = "/pagina-principal.html"; }, 2000);
    }
});