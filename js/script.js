function mostrarProducto() {
    alert("¡JavaScript funciona correctamente en Urban Style!");
}


async function cargarProductos() {

    const contenedor = document.getElementById("productos-container");
    const inicio = document.getElementById("productos-inicio");

    if (!contenedor && !inicio) {
        return;
    }

    try {

        const respuesta = await fetch("data/productos.json");

        const productos = await respuesta.json();


        function crearProducto(producto) {

            return `
                <article class="product-card">

                    <div class="product-image">

                        <img
                            src="${producto.imagen}"
                            alt="${producto.nombre}"
                        >

                    </div>

                    <div class="product-info">

                        <h3>${producto.nombre}</h3>

                        <p>
                            ${producto.descripcion}
                        </p>

                        <p class="price">
                            $${producto.precio}
                        </p>

                        <p>
                            <strong>Talla:</strong>
                            ${producto.talla}
                        </p>

                        <p>
                            <strong>Color:</strong>
                            ${producto.color}
                        </p>

                    </div>

                </article>
            `;
        }


        if (contenedor) {

            contenedor.innerHTML = "";

            productos.forEach(producto => {

                contenedor.innerHTML += crearProducto(producto);

            });

        }


        if (inicio) {

            inicio.innerHTML = "";

            productos.slice(0, 3).forEach(producto => {

                inicio.innerHTML += crearProducto(producto);

            });

        }

    } catch (error) {

        console.error(error);

        if (contenedor) {

            contenedor.innerHTML =
                "<p>No se pudieron cargar los productos.</p>";

        }

    }

}


async function cargarJSON() {

    const resultado = document.getElementById("jsonResultado");

    if (!resultado) {
        return;
    }

    try {

        const respuesta = await fetch("data/productos.json");

        const productos = await respuesta.json();

        resultado.innerHTML = "";


        productos.forEach(producto => {

            resultado.innerHTML += `

                <div class="json-product">

                    <strong>
                        ${producto.nombre}
                    </strong>

                    <br>

                    Precio: $${producto.precio}

                    <br>

                    Color: ${producto.color}

                </div>

            `;

        });

    } catch (error) {

        resultado.innerHTML =
            "Error al cargar JSON.";

    }

}


document.addEventListener("DOMContentLoaded", function() {

    if (typeof jQuery !== "undefined") {

        $("#botonSlide").click(function() {

            $("#jqueryDemo").slideToggle();

        });

    }

});


document.addEventListener(
    "DOMContentLoaded",
    cargarProductos
);