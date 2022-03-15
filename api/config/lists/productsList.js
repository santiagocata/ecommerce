const productsList = [
  {
    name: "Surfboard 1",
    image:
      "https://images.pexels.com/photos/9259563/pexels-photo-9259563.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 650,
    description:
      "Este formato de tabla es para surfistas de nivel medio a experimentados. Es muy importante para estas tablas tener muy buena remada para entrar cómodos en las olas y así comenzar a hacer las maniobras deseadas. La combinación de los bordes con la curva hacen la construcción de la tabla ideal para que sea rápida, pudiendo hacer movimientos de borde a borde esto nos permite hacer maniobras radicales y controladas. No trae quillas",
    categoryId: 1,
  },
  {
    name: "Surfboard 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTySnoQjUDG8p5n5Tl8IXIaMkutCoP5RGLlQw&usqp=CAU",
    price: 700,
    description:
      "Todos nuestros diseños son testeados en el mar con surfistas de alto rendimiento en todas las condiciones para analizar y mejorar cada modelo. Super liviana tiene un diseño de bordes paralelos generando velocidad extra. Lo mas lindo de esta tabla es que rema como un Longboard o dobla como una tabla corta , tiene una gran flotación, super Veloz y divertida para los surfistas de alto nivel con olas chicas. También sirve para los principiantes porque son tablas muy estables. El sistema de quillas será preferentemente twin o quad con el Sistema FCS 2 (ultimo en el mercado)",
    categoryId: 1,
  },
  {
    name: "Kayak K2",
    image:
      "https://images.pexels.com/photos/2749500/pexels-photo-2749500.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 450,
    description:
      "Este kayak es otra alternativa al k1, brinda la mejor combinación entre tamaño y peso, amplio, cómodo, muy estable y tiene la capacidad de soportar mucho peso manteniendo firme su línea de flotación. Un kayak recreativo para trasladar muy comodamente en el techo del auto. Incluye remo convencional, asiento y carro de traslado.",
    categoryId: 1,
  },
  {
    name: "Kayak K3",
    image:
      "https://images.pexels.com/photos/3413678/pexels-photo-3413678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 540,
    description:
      "Este kayak puede ser remado de a dos personas, quedando espacio en el centro para llevar carga o una tercera persona (niño). Se lo puede remar también solo, sentado en el medio. Autovaciable, manijas de sújecion en proa y popa, tambucho pequeño con tapa, quilla corrida para un mejor rumbo y muy estable.",
    categoryId: 1,
  },
  {
    name: "Helmet LS2",
    image:
      "https://images.pexels.com/photos/4992710/pexels-photo-4992710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 150,
    description:
      "El Integral LS2 352 es un casco perfecto para cualquier experiencia en dos ruedas gracias a su diseño ligero, su seguridad y su alto nivel de confort. Del mismo modo, Rookie tiene una amplia gama de gráficas diseñadas para todos los gustos, para que puedas elegir el estilo que mejor se adapte a tu moto.",
    categoryId: 2,
  },
  {
    name: "Casco Street",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjrrK7nQhC5IRqp5rkeZuyX3f3HHa7Pn-9MA&usqp=CAU",
    price: 210,
    description:
      "Un casco para andar sobre el asfalto o perderte en rutas remotas en una moto deportiva o scooter. El casco STREAM es un casco tecnológicamente avanzado con una carcasa aerodinámica y muy resistente. El visor de policarbonato, resistente a los rayos UV evitan la distorsión de la imagen que, junto con su protección solar interna, optimiza la visibilidad durante cualquier aventura, garantizando la máxima seguridad. Viene en colores sólidos o diseños llamativos.",
    categoryId: 2,
  },
  {
    name: "Bicicleta 1",
    image:
      "https://images.pexels.com/photos/133697/pexels-photo-133697.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 900,
    description:
      "Las mountain bikes, o bicicletas de montaña son el medio de transporte perfecto para tus aventuras y alcanzar aquellos lugares recónditos que querés conocer. Sus materiales y diseños están pensados para la acción, son resistentes y cuentan con mejor maniobrabilidad que otros modelos brindándote mayor tracción. Además, sus llantas con dibujos marcados favorecen el agarre en terrenos difíciles. Esta bicicleta posee un sistema de doble suspensión que brinda estabilidad única. La doble suspensión se traduce en mayor comodidad para moverse en caminos irregulares y mayor estabilidad para transitar montañas desafiantes.",
    categoryId: 2,
  },
  {
    name: "Bicicleta XR",
    image:
      "https://i.pinimg.com/236x/bc/5a/9b/bc5a9b4786696175326748eff31a4361.jpg",
    price: 805,
    description:
      "Con la bicicleta XR 8.0 rodado 29 las bicicletas de Vairo pasan a otro nivel, ya que su cuadro ha sido desarrollado con las mejores tecnologías para efectivizar su uso en el MTB Hardtail. Su aluminio 6061 T6 es formado a altas presiones de líquido organizando el metal de manera que las partes más frágiles son reforzadas con un doble o triple espesor de pared, dejando así las partes más débiles con menos espesor. Esto ofrece mayor ligereza a la bicicleta y refuerza su estructura. Además, los componentes de la XR 8.0 Shimano DEORE reducen el peso en conjunto dando así una bicicleta ágil, poco pesada y resistente",
    categoryId: 2,
  },
  {
    name: "Antiparras",
    image:
      "https://images.pexels.com/photos/3475835/pexels-photo-3475835.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 140,
    description:
      "Antiparras de Ski/Snowboard. Antiparra con lente Doble Tonalizado, recubrimiento UVA+UVB, marco PVC flexible (no rígido), acolchado de alta densidad en goma espuma de 1 capa para mayor confort y fitting, elástico liso con hebilla de ajuste. Composición: Lente interno: Acetato - Lente externo: Policarbonato, compatible con la mayoría de los cascos, peso aproximado: 112 gr., medidas aproximadas: 18 cm de largo x 8 cm de alto",
    categoryId: 4,
  },

  {
    name: "Snowboard",
    image:
      "https://images.pexels.com/photos/1635086/pexels-photo-1635086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 125,
    description:
      "La Frontier es una tabla de freeride direccional diseñada para ser el driver diario perfecto para el juguetón triturador de all mountain. Con una nariz flotante de freeride combinada con una cola de estilo libre, la Frontier es ideal para los días de nieve, los días de parque y todos los días intermedios. La forma direccional de la Frontier, el perfil de balancín direccional y los bordes Traction Tech 2.0 brindan una estabilidad segura al conducir por terrenos tecnológicos o nieve áspera, mientras que la punta en forma de cuchara + los bordes de la cola en la 3D Contour Base 1.0 reducen el agarre de los bordes y facilitan los giros en terrenos estrechos. El Frontier ofrece un alto rendimiento sin escatimar en materiales, ya que está construido con nuestra nueva base Sintered 8000, una lámina superior de plástico Eco y un nuevo Classic Core que está especialmente perfilado entre los pies para darle más pop.",
    categoryId: 4,
  },

  {
    name: "Skis",
    image:
      "https://images.pexels.com/photos/3741382/pexels-photo-3741382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 900,
    description:
      "Domina la pista de la piel y aplasta los descensos con confianza en el Talkback 96. Este esquí de travesía ligero y específico para mujeres está construido con nuestro núcleo de madera Paulownia Tour Lite y reforzado con tecnología T3, que coloca el metal en ubicaciones estratégicas a lo largo del Esquí para mayor amortiguación y estabilidad. El Talkback 96 logra el equilibrio perfecto entre la eficiencia en subida y el rendimiento en descenso, lo que lo convierte en el compañero ideal para grandes días en el campo.",
    categoryId: 4,
  },

  {
    name: "Campera",
    image:
      "https://images.pexels.com/photos/311070/pexels-photo-311070.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 800,
    description:
      "Chaqueta de nieve para hombre. Características: Tecnología 10K para una mejor impermeabilidad, tratamiento de tela Durable Water Repellent (DWR) sin PFC para mantenerte seco y protegido de los elementos, tejido de poliéster reciclado, mapeo estratégico del cuerpo de tricot cepillado y tafetán. Sellado de costuras en zonas críticas, capucha ajustable en 3 direcciones, faldón de nieve fijo. Sistema de sujeción de chaqueta a pantalón, bolsillos calientamanos con clip para llaves, bolsillo interno para dispositivos multimedia, ventilaciones en las axilas con forro de malla, polainas de muñeca elásticas internas con orificios para los pulgares y puños ajustables.",
    categoryId: 4,
  },

  {
    name: "Carpa",
    image:
      "https://images.pexels.com/photos/2422265/pexels-photo-2422265.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 600,
    description:
      "Carpa de formato tipo igloo para 2 personas. Muy compacta y liviana, ideal para Camping y Trekking. 1 puerta con mosquitero y tapa. Ventilaciones internas. Con vestíbulo frontal, que incluye piso. Estructura de 3 varillas en fibra de vidrio. Incluye faldones perimetrales, entrada para cable en un lateral, y gancho interior para poder colgar una lámpara.",
    categoryId: 3,
  },

  {
    name: "Silla",
    image:
      "https://images.pexels.com/photos/6271611/pexels-photo-6271611.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 350,
    description:
      "Ligero y facil de usar, conveniente para el hogar o de viaje. ¡Se abre y se pliega en segundos! Tiene una estructura de acero resistente, tela de poliester durable, descansabrazos con espacio para una taza o bebida. Incluye bolsa de transporte con correa de hombre para cada una. Ideal para tu dia de campamento, vacaciones, etc.",
    categoryId: 3,
  },

  {
    name: "Garrafa",
    image:
      "https://images.pexels.com/photos/6324408/pexels-photo-6324408.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 200,
    description:
      "El sistema de cocción PERSONALES | Ultralight con el control de ultra cocción. Los saldos micromo racionalizarse y viajan peso amigable con el rendimiento de cocción sin concesiones. fiabilidad clima frío y un viento bloqueo de mortaja se integran en nuestro diseño de perfil más ligero y bajo control de mantenimiento con regulador de primera calidad. Caracteristicas: Rendimiento constante a 20 ° F, cubierta ligera, pulsador de encendido, cubierta inferior se dobla como una taza de medir y el cuenco. Estabilizador de la bombona de combustible incluido, accesorios compatibles incluyen café Press, kit colgante, y Pot Soporte. Peso del artículo: 12 oz (340g), Volumen: 27 Oz. (0,8 litro)  Potencia: 6.000 BTU / h (1.75kW) ",
    categoryId: 3,
  },
  {
    name: "Carpa auto",
    image:
      "https://images.pexels.com/photos/6271725/pexels-photo-6271725.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    price: 750,
    description: "La carpa para auto line Gear te permite dormir fuera del suelo en la comodidad de tu propio vehículo. La carpa se conecta a la parte trasera de cualquier tamaño de SUV, minivan, wagon o camioneta pick-up con tapa. Las ventanas y puertas de malla de gran tamaño que no se ven tienen cubiertas contra tormentas que se pueden cerrar para tener privacidad. La tienda SUV cuenta con  bolsillos para equipo, un gancho para colgar linterna y tiradores de cremallera que brillan en la oscuridad. La funda del vehículo se desconecta fácilmente, lo que le permite dejar la tienda atrás mientras realiza las aventuras del día.",
    categoryId: 3,
  },
];

module.exports = productsList;
