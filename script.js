document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DATA STRUCTURE ---
    const courseData = [
        {
            module: 1,
            title: "Fundamentos de Direccionamiento y Subnetting",
            summary: "Cubre los conceptos básicos de direccionamiento en IPv6, el cálculo de subredes y la determinación de rangos de direcciones IP.",
            questions: [
                { type: "short_answer", text: "¿Cuántos bits definen el prefijo de red en una dirección IPv6?", answer: "64", justification: "" },
                { type: "short_answer", text: "La siguiente subred 20.20.0.0/16 ¿a un grupo de cuántas subredes pertenece?", answer: "256", justification: "" },
                { type: "short_answer", text: "¿Cuántas subredes permite crear a partir de una red clase B pero la máscara es ahora 255.255.248.0?", answer: "32", justification: "" },
                { type: "short_answer", text: "¿Cuál es la dirección de Broadcast 50.100.0.200/23?", answer: "50.100.1.255, máscara: 255.255.254.0", justification: "" },
                { type: "multiple_choice", text: "Determine el rango de direcciones IP a la que pertenece la dirección IP 50.80.31.32/18?", answer: "Rango: 50.80.0.0;50.80.63.255, máscara: 255.255.192.0", options: ["Rango: 50.80.0.0;50.80.31.255, máscara: 255.255.192.0", "Rango: 50.80.0.0;50.80.63.255, máscara: 255.255.192.0", "Rango: 50.80.32.0;50.80.63.255, máscara: 255.255.224.0", "Rango: 50.80.0.0;50.80.127.255, máscara: 255.255.128.0"], justification: "" },
                { type: "short_answer", text: "Escriba en forma comprimida la siguiente dirección IPv6 2001:0db8:85a3:0000:0000:8a2e:0370:0000?", answer: "2001:DB8:85A3::8A2E:370:0", justification: "" },
                { type: "short_answer", text: "Escriba una máscara de 25 bits?", answer: "255.255.255.128", justification: "" },
                { type: "short_answer", text: "¿Cuál es el rango para una clase B (ejemplo 100;180)?", answer: "128;191", justification: "" },
                { type: "short_answer", text: "¿Cuántos octetos tiene el net ID de una dirección clase A?", answer: "1", justification: "" },
                { type: "short_answer", text: "¿Cuántas subredes se han creado con una máscara de 15 bits si esta máscara inicialmente pertenecía a una clase A?", answer: "128", justification: "" }
            ]
        },
        {
            module: 2,
            title: "Modelos de Red y Topologías",
            summary: "Analiza la arquitectura TCP/IP, el modelo OSI, y las características de las topologías físicas y lógicas como estrella, anillo y bus.",
            questions: [
                { type: "short_answer", text: "¿Cuántos protocolos maneja la capa host-red de la arquitectura TCP/IP?", answer: "0", justification: "" },
                { type: "multiple_choice", text: "¿La selección del medio de transmisión de una red está determinada por los requerimientos del cliente?", answer: "No, los medios que nosotros podemos utilizar están determinados por la tecnología de red que nosotros utilicemos", options: ["Sí, siempre se elige el medio más barato disponible.", "No, los medios que nosotros podemos utilizar están determinados por la tecnología de red que nosotros utilicemos", "Sí, el cliente siempre debe usar fibra óptica.", "No, la selección depende únicamente del modelo OSI."], justification: "" },
                { type: "multiple_choice", text: "¿El modelo OSI es un modelo para la interconexión de sistemas heterogéneos?", answer: "Sí, porque nosotros no podemos garantizar que todas las redes a nivel mundial sean las mismas, cada quien tiene su red y su tecnología de red, así que se adapta a esas redes. Por ejemplo, en la arquitectura TCP/IP el protocolo que se adapta a las redes es el IP porque es el encargado de hacer la fragmentación de paquetes.", options: ["No, el modelo OSI solo funciona para redes de un mismo fabricante.", "Sí, porque nosotros no podemos garantizar que todas las redes a nivel mundial sean las mismas, cada quien tiene su red y su tecnología de red, así que se adapta a esas redes. Por ejemplo, en la arquitectura TCP/IP el protocolo que se adapta a las redes es el IP porque es el encargado de hacer la fragmentación de paquetes.", "No, es un modelo obsoleto que ya no se utiliza.", "Sí, pero solo para redes inalámbricas."], justification: "" },
                { type: "true_false", text: "¿Las redes cuya topología física es en estrella y lógica en anillo utilizan un acceso controlado al medio?", answer: "Verdadero", justification: "" },
                { type: "multiple_choice", text: "¿Una topología lógica en bus y física en bus necesita un acceso de contención?", answer: "Verdadero, y cuando hay contención el tema principal son las colisiones, las cuales se manejan con, por ejemplo, el CSMA/CD, que escucha el canal y transmite si nadie transmite, pero no garantiza que no vaya a colisionar, y si están colisionando, el que me ayuda un poco a disminuir la probabilidad de las colisiones es el algoritmo de Backoff.", options: ["Falso, ese tipo de redes no sufren de contención.", "Verdadero, y cuando hay contención el tema principal son las colisiones, las cuales se manejan con, por ejemplo, el CSMA/CD, que escucha el canal y transmite si nadie transmite, pero no garantiza que no vaya a colisionar, y si están colisionando, el que me ayuda un poco a disminuir la probabilidad de las colisiones es el algoritmo de Backoff.", "Verdadero, pero la contención se maneja pasando un token.", "Falso, la contención solo ocurre en topologías en anillo."], justification: "" },
                { type: "true_false", text: "¿El acceso al canal por contención, el mecanismo CSMA/CD evita las colisiones?", answer: "Falso", justification: "" },
                { type: "true_false", text: "¿El número de capas de una red depende del modelo OSI?", answer: "No, depende de cada arquitectura que ponga las capas que considere adecuadas", justification: "" },
                { type: "multiple_select", text: "Determine qué características corresponden a los siguientes elementos?", answers: ["Estado del enlace: cálculo del camino más corto.", "RIP: Bellman-Ford.", "Vector distancia: La métrica se implementa en cada salto."], options: ["Estado del enlace: cálculo del camino más corto.", "Distancia: Estado del enlace.", "RIP: Bellman-Ford.", "Vector distancia: La métrica se implementa en cada salto."], select_count: 3, justification: "" },
                { type: "true_false", text: "¿Con el algoritmo de Backoff las redes de difusión permiten transmitir varios usuarios a la vez?", answer: "Verdadero, pero no con éxito", justification: "" },
                { type: "true_false", text: "¿La tarjeta de red está identificada por 12 dígitos hexadecimales?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿En una dirección MAC la dirección de broadcast es 255.255.255.255?", answer: "Falso, la MAC está en hexadecimal", justification: "" },
                { type: "short_answer", text: "Señale en orden descendente las capas que según el modelo OSI forman parte de un router?", answer: "Red, enlace, física", justification: "" }
            ]
        },
        {
            module: 3,
            title: "Protocolos y Puertos",
            summary: "Analiza los protocolos de enrutamiento, el direccionamiento, y la gestión de puertos en una red.",
            questions: [
                { type: "true_false", text: "¿El enrutamiento estático utiliza menos recursos de red?", answer: "Falso, no utiliza ningún recurso de red", justification: "" },
                { type: "true_false", text: "¿Los componentes de los protocolos de enrutamiento dinámico requieren de una base de datos, de algoritmos y métrica?", answer: "Falso, la métrica no tiene nada que ver", justification: "" },
                { type: "true_false", text: "¿El protocolo IP es un protocolo no orientado a la conexión y no confiable?", answer: "Verdadero", justification: "" },
                { type: "short_answer", text: "¿De acuerdo al modelo OSI, qué capa debe ocuparse del establecimiento y liberación de la conexión?", answer: "Transporte", justification: "" },
                { type: "multiple_choice", text: "¿La siguiente dirección está escrita utilizando las reglas de IPv6 para reducir la notación, 2001::4801:32::7 es correcta?", answer: "Es incorrecta por los dos pares de dos puntos", options: ["Es correcta, sigue todas las reglas.", "Es incorrecta por los dos pares de dos puntos", "Es correcta, pero podría reducirse más.", "Es incorrecta porque no puede empezar con 2001."], justification: "" },
                { type: "short_answer", text: "¿Qué distancia administrativa tiene RIPV2?", answer: "120", justification: "" },
                { type: "true_false", text: "¿IPv6 maneja cifrado en sus paquetes con IPsec?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿Cuando hay un cambio de topología en RIP se produce un triggered update, que se ejecuta cada 30 segundos?", answer: "Falso", justification: "" },
                { type: "short_answer", text: "¿Cuántos puertos tiene una PC?", answer: "65536", justification: "" },
                { type: "short_answer", text: "¿Cuál es el rango de los puertos de una PC?", answer: "0 a 65535", justification: "" },
                { type: "short_answer", text: "¿Cuál es el rango de los puertos bien conocidos de una PC?", answer: "Del 0 al 1023", justification: "" },
                { type: "short_answer", text: "¿Cuáles son los 3 protocolos que admiten VLSM?", answer: "OSPF, RIPV2, EIGRP", justification: "" },
                { type: "true_false", text: "¿Los protocolos del estado del enlace periódicamente están intercambiando los LSPs?", answer: "Falso, porque los estados del enlace no son periódicos", justification: "" }
            ]
        },
        {
            module: 4,
            title: "Conceptos Avanzados de Red",
            summary: "Cubre temas como redes de conmutación, Tunneling, redes ad-hoc, Calidad de Servicio (QoS), y el rol de la dirección MAC en el enrutamiento.",
            questions: [
                { type: "true_false", text: "¿Las redes de conmutación de circuitos, a pesar de disponer de muchos circuitos, pueden denegar el servicio en la hora pico?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿La técnica Tunneling encapsula un paquete IPv6 dentro de un paquete IPv4?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿Las redes ad-hoc se utilizan tanto en una intranet como una extranet?", answer: "Falso, solo en una intranet", justification: "" },
                { type: "true_false", text: "¿Los servicios que ofrece una capa a otra se lo hace entre capas correspondientes?", answer: "Falso, es entre adyacentes", justification: "" },
                { type: "true_false", text: "¿Un sistema autónomo permite que los routers trabajen con tablas de enrutamiento más cortas?", answer: "Verdadero", justification: "" },
                { type: "true_false", text: "¿Al aplicar calidad de servicio en una red se garantiza que todos los paquetes lleguen a tiempo y en el orden correcto?", answer: "Falso", justification: "" },
                { type: "true_false", text: "¿La dirección MAC es utilizada para atravesar los distintos enlaces físicos hasta encontrar la dirección IP destino del paquete?", answer: "Falso", justification: "" },
                { type: "short_answer", text: "¿Qué parámetros son fundamentales en un paquete que viaja por una red de conmutación de paquetes?", answer: "Secuenciamiento, dirección destino y dirección origen", justification: "" }
            ]
        }
    ];

    // --- 2. STATE MANAGEMENT ---
    let currentUserState = {
        moduleScores: {},
        currentModuleId: null,
        currentQuizAnswers: []
    };

    // --- 3. DOM ELEMENTS ---
    const globalProgress = document.getElementById('global-progress');
    const moduleSelectionContainer = document.getElementById('module-selection-container');
    const moduleViewContainer = document.getElementById('module-view-container');
    const moduleTitle = document.getElementById('module-title');
    const moduleProgress = document.getElementById('module-progress');
    const moduleSummary = document.getElementById('module-summary');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const reviewModuleBtn = document.getElementById('review-module-btn');
    const moduleIntroContainer = document.getElementById('module-intro-container');
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const resultScore = document.getElementById('result-score');
    const resultMessage = document.getElementById('result-message');
    const correctAnswersContainer = document.getElementById('correct-answers-container');
    const retryModuleBtn = document.getElementById('retry-module-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');

    // --- 4. CORE LOGIC ---

    function saveState() {
        localStorage.setItem('interactiveCourseState_Prueba3', JSON.stringify(currentUserState));
    }

    function loadState() {
        const savedState = localStorage.getItem('interactiveCourseState_Prueba3');
        if (savedState) {
            currentUserState = JSON.parse(savedState);
        }
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function normalizeAnswer(answer) {
        if (typeof answer !== 'string') return '';
        // Converts to lower case, removes leading/trailing whitespace, removes accents, and finally removes any trailing punctuation (.,;).
        return answer.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[.,;]$/, "");
    }

    function renderModuleMenu() {
        moduleSelectionContainer.innerHTML = '<h2>Selecciona un Módulo</h2>';
        courseData.forEach(module => {
            const score = currentUserState.moduleScores[module.module];
            const button = document.createElement('button');
            button.innerText = `Módulo ${module.module}: ${module.title} ${score !== undefined ? `(Última nota: ${score}%)` : ''}`;
            button.dataset.moduleId = module.module;
            
            if (score !== undefined) {
                button.classList.add(score >= 70 ? 'completed-passed' : 'completed-failed');
            }

            moduleSelectionContainer.appendChild(button);
        });
        moduleSelectionContainer.classList.remove('hidden');
        moduleViewContainer.classList.add('hidden');
        updateGlobalProgress();
    }

    function updateGlobalProgress() {
        const completedModules = Object.keys(currentUserState.moduleScores).length;
        const totalModules = courseData.length;
        globalProgress.value = (completedModules / totalModules) * 100;
    }

    function selectModule(moduleId) {
        currentUserState.currentModuleId = moduleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleTitle.innerText = `Módulo ${moduleData.module}: ${moduleData.title}`;
        moduleSummary.innerText = moduleData.summary;

        moduleSelectionContainer.classList.add('hidden');
        moduleViewContainer.classList.remove('hidden');
        moduleIntroContainer.classList.remove('hidden');
        quizContainer.classList.add('hidden');
        resultsContainer.classList.add('hidden');
    }

    function startQuiz() {
        moduleIntroContainer.classList.add('hidden');
        quizContainer.innerHTML = '';
        quizContainer.classList.remove('hidden');
        
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        moduleData.questions.forEach((q, index) => {
            const questionElement = document.createElement('div');
            questionElement.className = 'quiz-question';
            let inputHtml = '';

            if (q.type === 'multiple_select') {
                const shuffledOptions = shuffleArray([...q.options]);
                 inputHtml = shuffledOptions.map(opt => `
                    <div class="radio-option">
                         <input type="checkbox" id="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}" name="q${index}" value="${opt}">
                         <label for="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}">${opt}</label>
                    </div>
                `).join('');
            } else if (q.type === 'multiple_choice') {
                const shuffledOptions = shuffleArray([...q.options]);
                inputHtml = shuffledOptions.map(opt => `
                    <div class="radio-option">
                         <input type="radio" id="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}" name="q${index}" value="${opt}">
                         <label for="q${index}_${normalizeAnswer(opt).replace(/[^a-zA-Z0-9]/g, '_')}">${opt}</label>
                    </div>
                `).join('');
            } else if (q.type === 'true_false') {
                inputHtml = `
                    <div class="radio-option">
                        <input type="radio" id="q${index}_true" name="q${index}" value="Verdadero">
                        <label for="q${index}_true">Verdadero</label>
                    </div>
                    <div class="radio-option">
                        <input type="radio" id="q${index}_false" name="q${index}" value="Falso">
                        <label for="q${index}_false">Falso</label>
                    </div>`;
            } else { // short_answer
                inputHtml = `<input type="text" id="q${index}" name="q${index}" placeholder="Escribe tu respuesta aquí">`;
            }

            questionElement.innerHTML = `<p><b>${index + 1}.</b> ${q.text}</p>${inputHtml}`;
            quizContainer.appendChild(questionElement);
        });

        const submitButton = document.createElement('button');
        submitButton.innerText = 'Evaluar Respuestas';
        submitButton.id = 'submit-quiz-btn';
        quizContainer.appendChild(submitButton);
    }

    function submitQuiz() {
        const moduleData = courseData.find(m => m.module === currentUserState.currentModuleId);
        let correctCount = 0;
        currentUserState.currentQuizAnswers = [];

        moduleData.questions.forEach((q, index) => {
            let userAnswer, isCorrect = false;

            if (q.type === 'multiple_select') {
                const checkedInputs = Array.from(document.querySelectorAll(`[name="q${index}"]:checked`));
                const userAnswers = checkedInputs.map(input => input.value).sort();
                const correctAnswers = [...q.answers].sort();
                isCorrect = JSON.stringify(userAnswers) === JSON.stringify(correctAnswers) && userAnswers.length === q.select_count;
                userAnswer = userAnswers.join('; ');
            } else {
                const input = document.querySelector(`[name="q${index}"]:checked`) || document.getElementById(`q${index}`);
                userAnswer = input ? input.value : "";
                isCorrect = normalizeAnswer(userAnswer).toLowerCase() === normalizeAnswer(q.answer).toLowerCase();
            }

            if (isCorrect) {
                correctCount++;
            }
            currentUserState.currentQuizAnswers.push({ userAnswer: userAnswer, isCorrect });
        });

        const score = Math.round((correctCount / moduleData.questions.length) * 100);
        showResults(score);
    }

    function showResults(score) {
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        const moduleId = currentUserState.currentModuleId;
        currentUserState.moduleScores[moduleId] = score;
        
        resultScore.innerText = `Tu Puntuación: ${score}%`;
        resultScore.className = score >= 70 ? 'correct' : 'incorrect';
        resultScore.classList.remove('hidden');

        correctAnswersContainer.innerHTML = '<h4>Respuestas Detalladas</h4>';
        const moduleData = courseData.find(m => m.module === moduleId);
        moduleData.questions.forEach((q, index) => {
            const answerInfo = currentUserState.currentQuizAnswers[index];
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';
            const correctAnswerText = Array.isArray(q.answers) ? q.answers.join('; ') : q.answer;

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="user-answer ${answerInfo.isCorrect ? 'correct' : 'incorrect'}">Tu respuesta: ${answerInfo.userAnswer || 'No respondida'}</p>
                <p class="correct">Respuesta correcta: ${correctAnswerText}</p>
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });

        if (score >= 70) {
            resultMessage.innerText = "¡Felicidades! Has APROBADO el módulo.";
            resultMessage.className = 'correct';
        } else {
            resultMessage.innerText = "REPROBADO. No has alcanzado el 70%. ¡Estudia las respuestas correctas y vuelve a intentarlo!";
            resultMessage.className = 'incorrect';
        }
        resultMessage.classList.remove('hidden');
        retryModuleBtn.classList.remove('hidden');

        saveState();
        updateGlobalProgress();
    }

    function showReview() {
        moduleIntroContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
        resultScore.classList.add('hidden');
        resultMessage.classList.add('hidden');
        retryModuleBtn.classList.add('hidden');

        correctAnswersContainer.innerHTML = '<h3>Corrección del Módulo</h3>';
        const moduleId = currentUserState.currentModuleId;
        const moduleData = courseData.find(m => m.module === moduleId);

        moduleData.questions.forEach((q, index) => {
            const item = document.createElement('div');
            item.className = 'correct-answer-item';
            let optionsHtml = '';
            const correctAnswerText = Array.isArray(q.answers) ? q.answers.join('; ') : q.answer;

            if(q.type === 'multiple_choice' || q.type === 'multiple_select'){
                const correctAnswers = Array.isArray(q.answers) ? q.answers : [q.answer];
                optionsHtml = `<ul>${q.options.map(opt => `<li class="${correctAnswers.includes(opt) ? 'correct' : ''}">${opt}</li>`).join('')}</ul>`;
            }
            const justificationHTML = q.justification ? `<p class="justification">Justificación: ${q.justification}</p>` : '';

            item.innerHTML = `
                <p>${index + 1}. ${q.text}</p>
                <p class="correct">Respuesta correcta: ${correctAnswerText}</p>
                ${optionsHtml}
                ${justificationHTML}
            `;
            correctAnswersContainer.appendChild(item);
        });
    }

    // --- 5. EVENT LISTENERS ---
    moduleSelectionContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const moduleId = parseInt(e.target.dataset.moduleId, 10);
            selectModule(moduleId);
        }
    });

    startQuizBtn.addEventListener('click', startQuiz);
    reviewModuleBtn.addEventListener('click', showReview);

    quizContainer.addEventListener('click', (e) => {
        if (e.target.id === 'submit-quiz-btn') {
            submitQuiz();
        }
    });

    retryModuleBtn.addEventListener('click', () => {
        selectModule(currentUserState.currentModuleId);
    });

    backToMenuBtn.addEventListener('click', renderModuleMenu);

    // --- 6. INITIALIZATION ---
    function init() {
        loadState();
        renderModuleMenu();
    }

    init();
});