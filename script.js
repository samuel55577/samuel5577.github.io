const carta = document.querySelector(".carta");
const corazon = document.querySelector(".corazon");

corazon.addEventListener("click", () => {
    carta.classList.toggle("mostrar");
    corazon.classList.toggle("hidden"); // Oculta el corazón al mostrar la carta
});
