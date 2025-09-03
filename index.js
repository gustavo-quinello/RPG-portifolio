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
    messageElement.textContent = "Falha ao efetuar login. Verifique seu e-mail e senha."
    messageElement.style.color = "red"
    console.error("Erro no login: ", error.message)
  } else {
    messageElement.textContent = "Login feito com sucesso! Verificando perfil..."
    messageElement.style.color = "green"

    // 🔎 Buscar perfil na tabela profiles
    const { data: profile, error: profileError } = await supabaseClient
      .from("profiles")
      .select("role") // supondo que a coluna que guarda o tipo seja chamada "role"
      .eq("username", email)
      .single()

    if (profileError || !profile) {
      messageElement.textContent = "Não foi possível encontrar seu perfil."
      messageElement.style.color = "red"
      console.error("Erro ao buscar perfil: ", profileError?.message)
      return
    }
    console.log(profile.tipo)

    // ✅ Redireciona de acordo com o tipo
    setTimeout(() => {
      if (profile.role === "mestre") {
        window.location.href = "mestre.html"
      } else {
        window.location.href = "jogador.html"
      }
    }, 2000)
  }
})
