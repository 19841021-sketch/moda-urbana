const respuestasCorrectas = {

    q1: "a",
    q2: "a",
    q3: "b",
    q4: "b",
    q5: "c",
    q6: "a",
    q7: "a",
    q8: "b",
    q9: "c",
    q10: "b"

};


const formulario = document.getElementById("quizForm");


formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    let puntos = 0;

    let respondidas = 0;


    for (let pregunta in respuestasCorrectas) {

        const seleccion = document.querySelector(
            `input[name="${pregunta}"]:checked`
        );


        if (seleccion) {

            respondidas++;


            if (
                seleccion.value ===
                respuestasCorrectas[pregunta]
            ) {

                puntos++;

            }

        }

    }


    const resultado =
        document.getElementById("resultado");


    if (respondidas < 10) {

        resultado.innerHTML = `

            <h2>Cuestionario incompleto</h2>

            <p>
                Has respondido
                ${respondidas} de 10 preguntas.
            </p>

            <p>
                Responde todas las preguntas.
            </p>

        `;

        resultado.scrollIntoView({
            behavior: "smooth"
        });

        return;

    }


    const porcentaje = puntos * 10;

    let mensaje;


    if (porcentaje >= 80) {

        mensaje =
            "¡Excelente! Tienes un buen dominio de los temas.";

    }

    else if (porcentaje >= 60) {

        mensaje =
            "¡Bien! Puedes repasar algunos conceptos.";

    }

    else {

        mensaje =
            "Te recomendamos revisar nuevamente las investigaciones.";

    }


    resultado.innerHTML = `

        <h2>
            Resultado: ${puntos}/10
        </h2>

        <p>
            ${porcentaje}% de respuestas correctas.
        </p>

        <p>
            ${mensaje}
        </p>

    `;


    resultado.scrollIntoView({
        behavior: "smooth"
    });

});