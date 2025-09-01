    // Inicializa Supabase (troque pelo seu projeto)
    const { createClient } = supabase
    const supabaseUrl = "https://uoeixaiwyqjtbcqduzid.supabase.co"
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvZWl4YWl3eXFqdGJjcWR1emlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4ODI2OTgsImV4cCI6MjA3MTQ1ODY5OH0.o_FY6xyjNetUjzsLiqaKrES_-d7_nYUE8vL8vFG8MDA"
    const supabaseClient = createClient(supabaseUrl, supabaseKey)

    // Login
    document.getElementById("login-form").addEventListener("submit", async (e) => {
      e.preventDefault()
      const email = document.getElementById("email").value
      const password = document.getElementById("password").value

      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password
      })

     if (error) {
         // MUDANÇA AQUI: Em vez de alert(), mudamos o texto e a cor do parágrafo
         messageElement.textContent = "Falha ao efetuar login. Verifique seu e-mail e senha.";
         messageElement.style.color = "red";
         console.error("Erro no login: ", error.message);
     } else {
         // MUDANÇA AQUI: Mensagem de sucesso na tela antes de redirecionar
         messageElement.textContent = "Login feito com sucesso! Redirecionando...";
         messageElement.style.color = "green";
        
         // Espera 2 segundos antes de mudar de página para o usuário ver a mensagem
         setTimeout(() => {
            window.location.href = "entrada.html";
         }, 2000);
     }
    })

    