// auth.js - Nosso script de autenticação reutilizável

// 1. Inicialização do Supabase (vive aqui agora, em um só lugar)
const { createClient } = supabase;
const supabaseUrl = "https://uoeixaiwyqjtbcqduzid.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA";
const supabaseClient = createClient(supabaseUrl, supabaseKey);


/**
 * Verifica se há um usuário logado.
 * Se não houver, redireciona para a página de login.
 * Se houver, retorna os dados do usuário.
 * @returns {Promise<object|null>} O objeto do usuário ou nulo.
 */
async function checkUserSession() {
    const { data, error } = await supabaseClient.auth.getUser();

    if (error) {
        console.error("Erro ao verificar a sessão:", error);
        return null; // Retorna nulo em caso de erro
    }

    if (!data.user) {
        // Se não há usuário, redireciona para o login
        alert("Acesso negado. Por favor, faça o login.");
        window.location.href = "login.html";
        return null;
    }

    // Se chegou aqui, há um usuário logado. Retornamos os dados dele.
    return data.user;
}
// entrada.js - Versão Simplificada

// Seleciona os elementos específicos desta página
const welcomeMessage = document.getElementById('welcome-message');
const logoutButton = document.getElementById('logout-button');

// Esta é uma função que se executa sozinha assim que o script carrega
(async () => {
    // A função 'checkUserSession' vem do arquivo auth.js (que já foi carregado)
    // Ela nos retorna o usuário logado (ou já nos redirecionou se não houver login)
    const user = await checkUserSession();

    // Se a função retornou um usuário, nós o usamos para popular a página
    if (user) {
        welcomeMessage.textContent = `Bem-vindo, ${user.email}!`;
    }
})(); // Os parênteses no final fazem a função rodar imediatamente

// A lógica de logout continua aqui, pois o botão só existe nesta página
logoutButton.addEventListener('click', async () => {
    // A variável 'supabaseClient' também vem do auth.js
    const { error } = await supabaseClient.auth.signOut();

    if (error) {
        alert("Erro ao fazer logout: " + error.message);
    } else {
        alert("Você foi desconectado.");
        window.location.href = "index.html";
    }
});