<<<<<<< HEAD
# wattismoney
Inscripción de personas que quieren invertir en contratos de energía renovable
=======
# WattIsMoney - Plataforma de Inversión en Energía Sostenible

## Descripción
WattIsMoney es una plataforma web moderna y responsiva diseñada para conectar inversionistas con oportunidades en el sector de energía sostenible en Colombia. El sitio está construido con Next.js, TypeScript y Tailwind CSS, ofreciendo una experiencia de usuario excepcional y un diseño minimalista.

## Características Principales
- Diseño responsivo y moderno
- Animaciones suaves y micro-interacciones
- Formulario de contacto con validación en tiempo real
- Optimizado para SEO y accesibilidad
- Interfaz intuitiva para todos los segmentos de edad

## Requisitos Previos
- Node.js 18.x o superior
- npm o yarn

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/wattismoney.git
cd wattismoney
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Personalización

### Colores
Los colores principales se pueden modificar en `tailwind.config.js`:
- Color primario: `#EEFF00`
- Color de texto: `#000000`

### Tipografía
El proyecto utiliza la fuente Cairo. Para modificarla:
1. Importa la nueva fuente en `src/app/globals.css`
2. Actualiza la configuración en `tailwind.config.js`

### Contenido
El contenido se puede personalizar editando los componentes en:
- `src/components/Hero.tsx`
- `src/components/WhyInvest.tsx`
- `src/components/HowItWorks.tsx`
- `src/components/Testimonials.tsx`
- `src/components/ContactForm.tsx`

## Estructura del Proyecto
```
wattismoney/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── WhyInvest.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── ContactForm.tsx
│   └── styles/
│       └── globals.css
├── public/
│   └── images/
├── tailwind.config.js
└── package.json
```

## Contribución
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles. 
>>>>>>> 39a6f7a (Initial commit)
