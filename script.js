function entrarPagina() {
    const pantalla = document.getElementById('pantalla-bienvenida');
    pantalla.classList.add('oculta');
    document.body.classList.add('desbloqueado');
}

const lugaresIniciales = [
    {
        id: 1,
        nombre: "Mirador de La Recoleta",
        categoria: "turismo",
        descripcion: "Plaza histórica con arcos blancos coloniales, museo y la mejor vista panorámica de toda la ciudad de Sucre.",
        imagen: "img/recoleta.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Mirador+La+Recoleta+Sucre+Bolivia",
        reseñas: ["Hermosa vista al atardecer.", "Un clásico imperdible de Sucre."]
    },
    {
        id: 2,
        nombre: "Casa de la Libertad",
        categoria: "turismo",
        descripcion: "El monumento histórico más importante de Bolivia, donde se firmó el Acta de la Independencia en 1825.",
        imagen: "img/casa_libertad.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casa+de+la+Libertad+Sucre+Bolivia",
        reseñas: ["Lleno de historia boliviana.", "El Salón de la Independencia es impresionante."]
    },
    {
        id: 3,
        nombre: "Plaza 25 de Mayo",
        categoria: "entretenimiento",
        descripcion: "El corazón cívico y social de Sucre, rodeado de edificios históricos, cafés, palmeras y jardines muy bien cuidados.",
        imagen: "img/plaza_25.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Plaza+25+de+Mayo+Sucre+Bolivia",
        reseñas: ["El mejor lugar para pasear y tomar un café.", "Muy tranquilo y seguro."]
    },
    {
        id: 4,
        nombre: "Castillo de La Glorieta",
        categoria: "turismo",
        descripcion: "Construcción ecléctica única en Bolivia que mezcla estilos gótico, morisco y renacentista, antiguo hogar de los Príncipes de La Glorieta.",
        imagen: "img/glorieta.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Castillo+de+la+Glorieta+Sucre+Bolivia",
        reseñas: ["Parece un castillo de cuento de hadas.", "Sus torres son increíbles para fotos."]
    },
    {
        id: 5,
        nombre: "Cementerio General de Sucre",
        categoria: "turismo",
        descripcion: "Considerado un museo al aire libre por sus mausoleos neoclásicos, esculturas históricas y jardines patrimoniales.",
        imagen: "img/cementerio.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Cementerio+General+Sucre+Bolivia",
        reseñas: ["Arquitectura impresionante y muy bien cuidado.", "Los recorridos nocturnos son geniales."]
    },
    {
        id: 6,
        nombre: "Catedral Metropolitana de Sucre",
        categoria: "turismo",
        descripcion: "Joyas de la arquitectura religiosa colonial y renacentista ubicada junto a la Plaza 25 de Mayo, famosa por su museo de arte sacro.",
        imagen: "img/catedral.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Catedral+Metropolitana+Sucre+Bolivia",
        reseñas: ["La Virgen de Guadalupe es una obra de arte.", "Hermosa fachada blanca."]
    },
    {
        id: 7,
        nombre: "Templo de San Francisco de Asís",
        categoria: "turismo",
        descripcion: "Uno de los templos más antiguos de la ciudad, famoso por su artesonado mudéjar y la histórica Campana de la Libertad.",
        imagen: "img/san_francisco.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Templo+San+Francisco+de+Asis+Sucre+Bolivia",
        reseñas: ["Mucha historia en su campanario.", "Arquitectura colonial espectacular."]
    },
    {
        id: 8,
        nombre: "Parque Cretácico",
        categoria: "turismo",
        descripcion: "El yacimiento de huellas de dinosaurios más grande del mundo, con réplicas a escala real en el farallón de Cal Orck'o.",
        imagen: "img/cretacico.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Cretacico+Sucre+Bolivia",
        reseñas: ["Impresionante ver las huellas reales.", "Excelente guía turístico."]
    },
    {
        id: 9,
        nombre: "Restaurante El Huerto",
        categoria: "restaurantes",
        descripcion: "Gastronomía tradicional chuquisaqueña e internacional en un ambiente rodeado de jardines tranquilos.",
        imagen: "img/huerto.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Huerto+Sucre+Bolivia",
        reseñas: ["El mondongo y el picante de pollo son deliciosos."]
    },
    {
        id: 10,
        nombre: "La Taverne Sucre",
        categoria: "restaurantes",
        descripcion: "Propuesta gastronómica que combina sabores internacionales y franceses en un ambiente acogedor y elegante.",
        imagen: "img/la_taverne.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Taverne+Sucre+Bolivia",
        reseñas: ["Excelente atención y platos muy bien elaborados.", "Muy recomendado para cenas especiales."]
    },
    {
        id: 11,
        nombre: "Foresta Restaurante",
        categoria: "restaurantes",
        descripcion: "Espacio moderno con opciones culinarias creativas, ingredientes locales frescos y un concepto muy agradable.",
        imagen: "img/foresta.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Foresta+Restaurante+Sucre+Bolivia",
        reseñas: ["La ambientación es hermosa.", "Comida deliciosa y buena presentación."]
    },
    {
        id: 12,
        nombre: "Pueblo Chico",
        categoria: "restaurantes",
        descripcion: "Ambiente tradicional y familiar excelente para disfrutar de platos típicos locales en pleno corazón de la ciudad.",
        imagen: "img/pueblo_chico.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pueblo+Chico+Sucre+Bolivia",
        reseñas: ["Sabor casero auténtico.", "Ideal para almorzar con la familia."]
    },
    {
        id: 13,
        nombre: "La Cuchara Brava",
        categoria: "restaurantes",
        descripcion: "Restaurante muy querido por locales y visitantes por su sazón criolla y porciones generosas.",
        imagen: "img/cuchara_brava.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Cuchara+Brava+Sucre+Bolivia",
        reseñas: ["Platos con mucho sabor y excelente sazón tradicional."]
    },
    {
        id: 14,
        nombre: "Restaurante El Morro",
        categoria: "restaurantes",
        descripcion: "Conocido por su tradicional comida nacional y parrilladas, ubicado en una zona tradicional con gran vista.",
        imagen: "img/el_morro.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Restaurante+El+Morro+Sucre+Bolivia",
        reseñas: ["Las carnes son excelentes.", "Buen espacio y ambiente agradable."]
    },
    {
        id: 15,
        nombre: "Parque Simón Bolívar",
        categoria: "entretenimiento",
        descripcion: "Ideal para pasear, hacer deporte, ver la réplica de la Torre Eiffel y disfrutar de las fuentes de aguas danzantes.",
        imagen: "img/bolivar.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Parque+Simon+Bolivar+Sucre+Bolivia",
        reseñas: ["Muy bueno para ir a caminar por la tarde."]
    },
    {
        id: 16,
        nombre: "Blu Bar",
        categoria: "entretenimiento",
        descripcion: "Uno de los bares más concurridos de la ciudad para disfrutar de cócteles, buena música y un ambiente juvenil.",
        imagen: "img/blubar.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blu+Bar+Sucre+Bolivia",
        reseñas: ["Excelente música y ambiente para salir con amigos.", "Buenos tragos."]
    },
    {
        id: 17,
        nombre: "Blu Club",
        categoria: "entretenimiento",
        descripcion: "Discoteca popular en Sucre conocida por sus fiestas, luces y música variada para bailar toda la noche.",
        imagen: "img/bluclub.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Blu+Club+Sucre+Bolivia",
        reseñas: ["La mejor onda para bailar los fines de semana."]
    },
    {
        id: 18,
        nombre: "La Maja",
        categoria: "entretenimiento",
        descripcion: "Espacio nocturno clásico en Sucre para disfrutar de bebidas, buena compañía y ambiente distendido.",
        imagen: "img/lamaja.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=La+Maja+Sucre+Bolivia",
        reseñas: ["Muy buen lugar para conversar y pasar el rato."]
    },
    {
        id: 19,
        nombre: "Valinor",
        categoria: "entretenimiento",
        descripcion: "Local nocturno y bar temático ideal para quienes buscan diversión y un espacio diferente en la noche sucrense.",
        imagen: "img/valinor.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Valinor+Sucre+Bolivia",
        reseñas: ["Excelente temática y ambiente muy animado."]
    },
    {
        id: 20,
        nombre: "Hangar",
        categoria: "entretenimiento",
        descripcion: "Centro de entretenimiento y punto de reunión nocturno muy frecuentado por jóvenes en Sucre.",
        imagen: "img/hangar.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Hangar+Sucre+Bolivia",
        reseñas: ["Ideal para pasar un buen rato con música en vivo o buena fiesta."]
    },
    {
        id: 21,
        nombre: "Tío Chu",
        categoria: "entretenimiento",
        descripcion: "Lugar popular de entretenimiento, comida rápida y encuentro social muy conocido en la ciudad.",
        imagen: "img/tiochu.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Tio+Chu+Sucre+Bolivia",
        reseñas: ["Excelente para picar algo y pasarla bien."]
    },
    {
        id: 22,
        nombre: "Supermercado SAS",
        categoria: "entretenimiento",
        descripcion: "Supermercado céntrico muy útil para abastecerse de víveres, snacks y productos de primera necesidad.",
        imagen: "img/sas.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Supermercado+SAS+Sucre+Bolivia",
        reseñas: ["Encuentras de todo y queda muy céntrico."]
    },
    {
        id: 23,
        nombre: "Supermercado Solar",
        categoria: "entretenimiento",
        descripcion: "Establecimiento comercial moderno para realizar compras de abarrotes, productos frescos y artículos generales.",
        imagen: "img/solar.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Supermercado+Solar+Sucre+Bolivia",
        reseñas: ["Buena atención y ordenado."]
    },
    {
        id: 24,
        nombre: "Gym Predator",
        categoria: "entretenimiento",
        descripcion: "Gimnasio equipado para entrenamiento físico, musculación y acondicionamiento corporal.",
        imagen: "img/predator.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Gym+Predator+Sucre+Bolivia",
        reseñas: ["Muy buenas máquinas para entrenar pesado.", "Excelente ambiente fitness."]
    },
    {
        id: 25,
        nombre: "Pasillo La Plata",
        categoria: "entretenimiento",
        descripcion: "Tradicional e histórico pasaje peatonal del centro de Sucre, lleno de comercio, vida urbana y arquitectura.",
        imagen: "img/pasilli_plata.jpg",
        mapsUrl: "https://www.google.com/maps/search/?api=1&query=Pasaje+La+Plata+Sucre+Bolivia",
        reseñas: ["Hermoso para caminar y ver tiendas locales."]
    }
];

let lugares = JSON.parse(localStorage.getItem('lugaresSucre_v3')) || lugaresIniciales;
let categoriaActual = 'todos';

function renderizarLugares(lista) {
    const contenedor = document.getElementById('contenedor-lugares');
    contenedor.innerHTML = ''; 

    if (lista.length === 0) {
        contenedor.innerHTML = '<p style="text-align:center; grid-column: 1/-1;">No se encontraron lugares con ese nombre.</p>';
        return;
    }

    lista.forEach(lugar => {
        const reseñasHTML = lugar.reseñas.map(r => `<li>💬 ${r}</li>`).join('');

        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';
        tarjeta.innerHTML = `
            <img src="${lugar.imagen}" alt="${lugar.nombre}" onerror="this.src='https://via.placeholder.com/400x200?text=Sin+Imagen+Aun'">
            <div class="tarjeta-info">
                <span class="etiqueta">${lugar.categoria}</span>
                <h3>${lugar.nombre}</h3>
                <p>${lugar.descripcion}</p>
                
                <a href="${lugar.mapsUrl}" target="_blank" class="btn-maps">📍 Cómo llegar (Google Maps)</a>
                
                <div class="seccion-reseñas">
                    <h4>Reseñas (${lugar.reseñas.length}):</h4>
                    <ul class="lista-reseñas">
                        ${reseñasHTML}
                    </ul>
                    <div class="form-reseña">
                        <input type="text" id="input-reseña-${lugar.id}" placeholder="Escribe tu reseña...">
                        <button onclick="agregarReseña(${lugar.id})">Enviar</button>
                    </div>
                </div>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

function filtrar(categoria, boton) {
    categoriaActual = categoria;
    
    document.querySelectorAll('.btn-filtro').forEach(btn => btn.classList.remove('activo'));
    boton.classList.add('activo');

    aplicarFiltros();
}

function buscarLugar() {
    aplicarFiltros();
}

function aplicarFiltros() {
    const texto = document.getElementById('buscador').value.toLowerCase();
    
    const filtrados = lugares.filter(lugar => {
        const coincideCategoria = (categoriaActual === 'todos' || lugar.categoria === categoriaActual);
        const coincideTexto = lugar.nombre.toLowerCase().includes(texto) || lugar.descripcion.toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });

    renderizarLugares(filtrados);
}

function agregarReseña(idLugar) {
    const input = document.getElementById(`input-reseña-${idLugar}`);
    const texto = input.value.trim();

    if (texto === '') {
        alert('Por favor escribe un comentario antes de enviar.');
        return;
    }

    const lugar = lugares.find(l => l.id === idLugar);
    if (lugar) {
        lugar.reseñas.push(texto);
        localStorage.setItem('lugaresSucre_v3', JSON.stringify(lugares));
        aplicarFiltros();
    }
}

renderizarLugares(lugares);