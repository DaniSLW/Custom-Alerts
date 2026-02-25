function showAlert(message, type = "success", duration = 4000) {
    const container = document.getElementById("custom-alert-container");
    if (!container) return;

    const alert = document.createElement("div");
    alert.className = "custom-alert " + type;

    const icons = {
        success: "https://danislw.github.io/Custom-Alerts/assets/success.png",
        danger: "https://danislw.github.io/Custom-Alerts/assets/danger.png",
        warning: "https://danislw.github.io/Custom-Alerts/assets/warning.png",
        info: "https://danislw.github.io/Custom-Alerts/assets/info.png"
    };

    alert.innerHTML = `
        <img src="${icons[type] || ''}" alt="">
        <span class="message">${message}</span>
        <span class="close-btn">&times;</span>
    `;

    container.appendChild(alert);

    setTimeout(() => {
        alert.classList.add("show");
    }, 10);

    const progressBar = document.createElement("div");
    progressBar.style.position = "absolute";
    progressBar.style.left = "0";
    progressBar.style.bottom = "0";
    progressBar.style.height = "3px";
    progressBar.style.width = "0%";
    progressBar.style.background = "var(--alert-color)";
    progressBar.style.transition = `width ${duration}ms linear`;

    alert.appendChild(progressBar);

    setTimeout(() => {
        progressBar.style.width = "100%";
    }, 50);

    setTimeout(() => {
        alert.classList.add("hide");
    }, duration);

    setTimeout(() => {
        alert.remove();
    }, duration + 500);

    alert.querySelector(".close-btn").onclick = () => {
        alert.classList.add("hide");
        setTimeout(() => {
            alert.remove();
        }, 500);
    };
}
