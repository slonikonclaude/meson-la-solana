/**
 * Diez reseñas leídas en la ficha de Google Maps el 5 de septiembre de 2026,
 * en el orden «más relevantes» que muestra Google. Texto español literal,
 * inglés traducido.
 *
 * Se incluyen la de cuatro estrellas y la única de una estrella que salen en
 * esa primera pantalla: una selección sólo de cincos sería prueba social
 * falsa, y el visitante las va a ver igualmente en Google. A la de una
 * estrella el propietario respondió en su día; la respuesta va con ella.
 */

export type Review = {
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Tal y como lo muestra Google: «Hace 4 meses». */
  ago: { es: string; en: string };
  text: { es: string; en: string };
  ownerReply?: { es: string; en: string };
};

export const reviews: Review[] = [
  {
    author: "Ana Martinez",
    rating: 5,
    ago: { es: "Hace 4 meses", en: "4 months ago" },
    text: {
      es: "Venimos a menudo y siempre salimos encantados. Hoy hemos pedido para picar pulpo y zamburiñas, y como principal un chuletón para compartir. Todo estaba buenísimo: las zamburiñas en su punto, el pulpo muy sabroso y el chuletón súper tierno. Además, los postres son caseros y se nota. El tiramisú estaba realmente bueno, nada empalagoso, y la mousse de chocolate, especial como siempre. Sin duda, un sitio al que seguiremos volviendo.",
      en: "We come often and always leave delighted. Today we ordered octopus and queen scallops to share, then a rib steak for two. Everything was excellent: the scallops just right, the octopus full of flavour and the steak incredibly tender. The desserts are homemade and you can tell — the tiramisu was really good, not at all cloying, and the chocolate mousse special as always. A place we will keep coming back to.",
    },
  },
  {
    author: "Pili Real Vergara",
    rating: 5,
    ago: { es: "Hace 5 meses", en: "5 months ago" },
    text: {
      es: "Nos comentó un amigo y acertó: muy bueno todo y muy buena calidad, estuvimos muy a gusto, seguro que repetimos pronto. El servicio muy atentos y agradables. Yo también lo recomiendo.",
      en: "A friend told us about it and he was right: everything very good, great quality, we felt right at home and will surely be back soon. Attentive, friendly service. I recommend it too.",
    },
  },
  {
    author: "Guillermo R Lallana",
    rating: 5,
    ago: { es: "Hace 5 meses", en: "5 months ago" },
    text: {
      es: "¡Totalmente recomendable! Atención rápida y amable, pidas lo que pidas está todo buenísimo. Imposible equivocarse. Relación calidad-precio imbatible. ¡Todo casero! Ya no quedan muchos sitios como este.",
      en: "Thoroughly recommended. Quick, friendly service, and whatever you order it is all delicious — impossible to go wrong. Unbeatable value for money. Everything homemade. There are not many places like this left.",
    },
  },
  {
    author: "Cris08",
    rating: 5,
    ago: { es: "Hace 5 meses", en: "5 months ago" },
    text: {
      es: "Relación calidad-precio de lo mejor. Los boquerones buenísimos y sorprendentemente baratos. Las croquetas de jamón y pollo también buenísimas. Pedimos también gambas al ajillo y, aunque estaban juguetonas (picantitas), eran grandes y muy buenas. Por lo demás, ¡genial!",
      en: "Some of the best value around. The anchovies were superb and surprisingly cheap, the ham and chicken croquettes excellent too. We also had the garlic prawns — a little feisty (spicy), but big and very good. Otherwise, brilliant!",
    },
  },
  {
    author: "Juanjo Gila",
    rating: 5,
    ago: { es: "Hace un mes", en: "A month ago" },
    text: {
      es: "Hemos estado cenando y podemos decir que nos ha encantado: la cena espectacular y el trato de los camareros, un 10 para ellos. Los platos tenían un precio bastante económico para repetir. Cuando volvamos por el Puerto de Sagunto volveremos nuevamente al restaurante.",
      en: "We had dinner here and loved it: a spectacular meal and the waiters deserve a 10. The dishes were priced low enough to come back for more. Next time we are in Puerto de Sagunto we will be back.",
    },
  },
  {
    author: "Tina Aguilar",
    rating: 4,
    ago: { es: "Hace 3 años", en: "3 years ago" },
    text: {
      es: "Todas las tapas que probamos estaban ricas, relación calidad-precio muy bien, salimos a unos 20 € por persona bebiendo cerveza y tomando postre para compartir. El cremaet de ron, de los pocos sitios que hemos encontrado en el Puerto de Sagunto que lo hacen bien. Servicio de camareros atento. Muy probablemente volveremos.",
      en: "Every tapa we tried was tasty and the value very good — about €20 a head with beer and a dessert to share. One of the few places in Puerto de Sagunto that does a proper rum cremaet. Attentive waiters. We will very probably be back.",
    },
  },
  {
    author: "Thaïs Lechat-Bdm",
    rating: 5,
    ago: { es: "Hace 4 meses", en: "4 months ago" },
    text: {
      es: "Comida casera muy buena. Servicio perfecto.",
      en: "Very good home cooking. Perfect service.",
    },
  },
  {
    author: "Luis Rodrigo Alvarez",
    rating: 5,
    ago: { es: "Hace 2 meses", en: "2 months ago" },
    text: {
      es: "Me ha encantado este lugar, sin duda volveré pronto. Solamente la carta de vinos se queda pequeña. Por lo demás, un 10.",
      en: "I loved this place and will definitely be back soon. Only the wine list is a little short. Otherwise, a 10.",
    },
  },
  {
    author: "J Melia",
    rating: 5,
    ago: { es: "Hace 3 años", en: "3 years ago" },
    text: {
      es: "Anoche cené en este mesón solo; ya había ido con la familia y no defrauda. Los chipirones en su tinta, una pasada; las croquetas de bacalao caseras, como las hacía mi abuela; y el rape a la marinera, ¡una pasada! El servicio, de 10: Jose en todo momento atento. Estaba lleno y todo iba sobre ruedas. Y calidad-precio, barato para la calidad que ofrecen.",
      en: "I had dinner here alone last night; I had already been with the family and it never disappoints. The baby squid in ink, amazing; the homemade cod croquettes, just like my grandmother made; and the monkfish in seafood sauce — superb. Service a 10, Jose attentive throughout. The place was full and everything ran like clockwork. And cheap for the quality they offer.",
    },
    ownerReply: {
      es: "Muchas gracias, es una satisfacción que nuestros clientes queden contentos. Es la mejor recompensa a nuestro trabajo: comentarios como el tuyo.",
      en: "Thank you very much. Seeing our guests leave happy is the best reward for our work — comments like yours.",
    },
  },
  {
    author: "S. F",
    rating: 1,
    ago: { es: "Hace 4 años", en: "4 years ago" },
    text: {
      es: "Despropósito de comida. Tardan la vida en servirnos las bebidas; nos dicen que para pedir la comida tenemos que esperar a que las otras mesas acaben, cuando habíamos reservado. A las cuatro de la tarde habíamos comido algunos entrantes y de pésima calidad. Las camareras amables, pero el lugar, para huir.",
      en: "A shambles of a meal. They took forever to bring the drinks, then told us we had to wait for the other tables before ordering, even though we had booked. By four in the afternoon we had eaten a few starters, and poor ones. The waitresses were kind, but the place is one to flee.",
    },
    ownerReply: {
      es: "Buenas. Ya que hablas, di las cosas como son: la mesa la tenías reservada en el comedor, pero quisisteis esperar para sentaros en la terraza, que teníamos llena. En ningún momento dijimos que teníais que esperar a que sirviéramos todas las mesas, sino que había mesas antes para tomar nota. Siento que la comida no fuera de vuestro agrado.",
      en: "Hello. Since you bring it up, tell it as it was: your table was booked in the dining room, but you chose to wait for a seat on the terrace, which was full. We never said you had to wait for every table to be served, only that there were tables ahead of you to take orders from. I am sorry the food was not to your liking.",
    },
  },
];

/**
 * Distribución real de las 574 reseñas, leída del histograma de Google
 * (no calculada sobre las diez de arriba): 412 · 119 · 24 · 10 · 9.
 */
export const ratingBreakdown: { stars: 5 | 4 | 3 | 2 | 1; count: number }[] = [
  { stars: 5, count: 412 },
  { stars: 4, count: 119 },
  { stars: 3, count: 24 },
  { stars: 2, count: 10 },
  { stars: 1, count: 9 },
];

/**
 * Palabras que Google destaca sobre las reseñas, con el número de menciones.
 * `key` es la palabra tal cual la muestra Google (en español) y sirve de
 * clave de búsqueda; `label` es lo que se imprime en cada idioma.
 */
export type ReviewTopic = { key: string; label: { es: string; en: string }; count: number };

export const reviewTopics: ReviewTopic[] = [
  { key: "tapas", label: { es: "tapas", en: "tapas" }, count: 22 },
  { key: "cena", label: { es: "cena", en: "dinner" }, count: 10 },
  { key: "croquetas", label: { es: "croquetas", en: "croquettes" }, count: 9 },
  { key: "pulpo", label: { es: "pulpo", en: "octopus" }, count: 8 },
  { key: "vinos", label: { es: "vinos", en: "wine" }, count: 7 },
  { key: "chuletón", label: { es: "chuletón", en: "rib steak" }, count: 6 },
  { key: "chipirones", label: { es: "chipirones", en: "baby squid" }, count: 5 },
  { key: "bravas", label: { es: "bravas", en: "patatas bravas" }, count: 5 },
];
