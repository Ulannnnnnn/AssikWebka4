const pName = document.getElementById("pName");
const pEmail = document.getElementById("pEmail");
const pId = document.getElementById("pId");
const pMsg = document.getElementById("pMsg");
const refreshBtn = document.getElementById("refreshBtn");
const logoutBtn = document.getElementById("logoutBtn");
const statusBadge = document.getElementById("statusBadge");

function setMessage(text, ok = true) {
  pMsg.textContent = text;
  pMsg.className = ok ? "ok" : "err";
}

async function loadProfile() {
  try {
    const res = await fetch("/api/auth/profile");
    const data = await res.json();

    if (!res.ok) {
      statusBadge.textContent = "no session";
      statusBadge.className = "badge danger";
      setMessage(data.message || "Unauthorized", false);

      setTimeout(() => {
        window.location.href = "/";
      }, 900);

      return;
    }

    statusBadge.textContent = "active session";
    statusBadge.className = "badge success";

    pName.textContent = data.user?.name ?? "—";
    pEmail.textContent = data.user?.email ?? "—";
    pId.textContent = data.user?._id ?? data.user?.id ?? "—";

    setMessage("Profile loaded ", true);
  } catch (e) {
    setMessage("Failed to load profile", false);
  }
}

refreshBtn.addEventListener("click", loadProfile);

logoutBtn.addEventListener("click", async () => {
  try {
    const res = await fetch("/api/auth/logout", { method: "POST" });
    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Logout failed", false);
      return;
    }

    setMessage("Logged out  Redirecting…", true);
    setTimeout(() => {
      window.location.href = "/";
    }, 700);
  } catch (e) {
    setMessage("Logout failed", false);
  }
});

loadProfile();
