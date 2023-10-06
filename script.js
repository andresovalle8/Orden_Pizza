document.addEventListener("DOMContentLoaded", () => {
    const nombrePizzaInput = document.getElementById("nombrePizza");
    const costoPizzaInput = document.getElementById("costoPizza");
    const recibirPedidoButton = document.getElementById("recibirPedido");
    const listaPedidos = document.getElementById("listaPedidos");

    recibirPedidoButton.addEventListener("click", () => {
        const nombrePizza = nombrePizzaInput.value;
        const costoPizza = costoPizzaInput.value;

        if (nombrePizza && costoPizza) {
            const tarjetaPedido = document.createElement("div");
            tarjetaPedido.classList.add("tarjeta-pedido");
            tarjetaPedido.innerHTML = `
                <strong>Nombre de Pizza:</strong> ${nombrePizza}<br>
                <strong>Costo en dólares:</strong> $${costoPizza}
            `;
            listaPedidos.appendChild(tarjetaPedido);

            // Limpiar los campos de entrada
            nombrePizzaInput.value = "";
            costoPizzaInput.value = "";
        } else {
            alert("Por favor, complete ambos campos.");
        }
    });
});