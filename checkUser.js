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