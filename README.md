**Documentación Final**

**Paleta de colores**

``Azul principal:``

$primary-color: #3498db;

Verde secundario:

$secondary-color: #2ecc71;

Rojo de acento:

$accent-color: #e74c3c;

Color Blanco de fondo:

$background-color: #f5f5f5;

$colors: (
  primary: $primary-color,
  secondary: $secondary-color,
  accent: $accent-color,
  white: #ffffff,
  black: #000000,
  background: $background-color
  );


**Fuentes**
1.	$font-family-primary: 'Arial, sans-serif';
2.	$font-family-secondary: 'Georgia, serif';



**Iconos**
Los iconos utilizados en el proyecto son de Font Awesome. Se incluyen en el archivo HTML principal:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">



**Elementos de Accesibilidad, Usabilidad y Experiencia de Usuario**

**1.	Accesibilidad:**
o	Uso de etiquetas aria-label para mejorar la accesibilidad de los botones de navegación.
o	Uso de atributos alt en las imágenes para proporcionar descripciones alternativas.

**2.	Usabilidad:**
o	Menú de navegación claro y accesible con enlaces a las secciones principales.
o	Botón de menú hamburguesa para dispositivos móviles.
o	Transiciones suaves y efectos de hover para mejorar la interacción del usuario.

**3.	Experiencia de Usuario:**
o	Diseño responsivo para adaptarse a diferentes tamaños de pantalla.
o	Uso de colores contrastantes para mejorar la legibilidad.
o	Secciones bien definidas y organizadas para facilitar la navegación.

**Descripción de Archivos SCSS**

**1.	_variables.scss:**
o	Define las variables globales del proyecto, incluyendo colores, fuentes y tamaños.

**2.	_mixin.scss:**
o	Contiene mixins reutilizables para centrar elementos, estilos de botones, títulos de sección y la sección hero.

**3.	_base.scss:**
o	Estilos generales para el cuerpo y la navegación.

**4.	componentes/_buttons.scss:**
o	Estilos para los botones primarios y secundarios, y estilos base para las tarjetas.

**5.	componentes/_categorias.scss:**
o	Estilos para la sección de categorías y sus elementos.

**6.	componentes/_heading.scss:**
o	Estilos para los encabezados h1 y h2.

**7.	componentes/_hero.scss:**
o	Estilos para la sección hero, incluyendo el fondo y los elementos dentro de la sección.

**8.	componentes/_logo.scss:**
o	Estilos para el logo.

**9.	componentes/_publicidad.scss:**
o	Estilos para la sección de publicidad, incluyendo el contenedor de video y la transcripción.

**10.	componentes/_resenas.scss:**
o	Estilos para la sección de reseñas y sus elementos.

**11.	layout/_footer.scss:**
o	Estilos para el pie de página.

**12.	layout/_gallery.scss:**
o	Estilos para la galería y sus elementos.

**13.	layout/_header.scss:**
o	Estilos para el encabezado y la navegación.

**14.	layout/_products.scss:**
o	Estilos para la sección de productos y las tarjetas de producto.

**15.	style.scss:**
o	Archivo principal que importa todos los archivos SCSS y define estilos adicionales.


**Descripción de Archivos JavaScript**
**1.	proyecto.js:**
o	Contiene scripts para la funcionalidad del menú hamburguesa, la animación de las secciones y para abrir más información en los botones de “Abrir más”.


**Descripción de Archivos HTML**
**1.	index.html:**
o	Archivo principal HTML que estructura el contenido del sitio web, incluyendo el encabezado, secciones de hero, categorías, productos, reseñas, publicidad y pie de página.
