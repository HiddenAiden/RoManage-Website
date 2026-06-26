(function () {
  const root = document.documentElement;
  const storageKey = "romanage-theme";
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const buttons = document.querySelectorAll(".theme-toggle");

  function preferredTheme() {
    return media.matches ? "dark" : "light";
  }

  function currentTheme() {
    return localStorage.getItem(storageKey) || preferredTheme();
  }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    buttons.forEach((button) => {
      button.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
      button.setAttribute("aria-pressed", String(theme === "dark"));
    });
  }

  applyTheme(currentTheme());

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = currentTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  });

  media.addEventListener("change", () => {
    if (!localStorage.getItem(storageKey)) {
      applyTheme(preferredTheme());
    }
  });

  fetch("https://api.github.com/repos/HiddenAiden/RoManage-Website/commits/main")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Commit lookup failed");
      }
      return response.json();
    })
    .then((commit) => {
      const shortSha = commit.sha.slice(0, 7);
      document.querySelectorAll(".latest-commit").forEach((label) => {
        label.textContent = `Latest commit: ${shortSha}`;
      });
    })
    .catch(() => {
      document.querySelectorAll(".latest-commit").forEach((label) => {
        label.textContent = "Latest commit: unavailable";
      });
    });
})();
