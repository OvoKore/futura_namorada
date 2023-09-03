const naoButton = document.getElementById("nao");
const simButton = document.getElementById("sim");
const modal = document.getElementById("myModal");
const closeButton = document.querySelector(".close");

function moveNaoButton() {
    // Obtém a largura e altura da janela do navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Obtém a largura e altura do botão "Não"
    const buttonWidth = naoButton.offsetWidth;
    const buttonHeight = naoButton.offsetHeight;

    // Calcula uma nova posição aleatória para o botão "Não"
    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // Define a nova posição do botão "Não"
    naoButton.style.left = `${newX}px`;
    naoButton.style.top = `${newY}px`;

    naoButton.style.position = "absolute"
}

naoButton.addEventListener("click", moveNaoButton);

simButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
