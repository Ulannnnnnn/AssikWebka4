let isLogin = true;

const title = document.getElementById("title");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");
const switchBtn = document.getElementById("switchBtn");
const switchText = document.getElementById("switchText");
const message = document.getElementById("message");
const profileBtn = document.getElementById("profileBtn");


switchBtn.addEventListener("click", () => {
  isLogin = !isLogin;

  title.textContent = isLogin ? "Login" : "Register";
  submitBtn.textContent = isLogin ? "Login" : "Register";
  switchBtn.textContent = isLogin ? "Register" : "Login";
  switchText.textContent = isLogin
    ? "Don't have an account?"
    : "Already have an account?";

  nameInput.classList.toggle("hidden", isLogin);
  message.textContent = "";
  profileBtn.classList.add("hidden");
});

submitBtn.addEventListener("click", async () => {
  const payload = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  if (!isLogin) {
    payload.name = nameInput.value;
  }

  const url = isLogin
    ? "/api/auth/login"
    : "/api/auth/register";

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    message.textContent = data.message || "Success";

   if (res.ok && isLogin) {
  message.textContent = "Logged in successfully ";
  profileBtn.classList.remove("hidden");
}

  } catch (err) {
    message.textContent = "Something went wrong";
  }



});


profileBtn.addEventListener("click", () => {
  window.location.href = "/profile.html";
});
