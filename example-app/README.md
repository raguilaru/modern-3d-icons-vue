# Modern 3D Icons Vue - Example App

This is an example application showcasing the usage of the Modern 3D Icons Vue library. It demonstrates how to integrate and use the icons in a Vue 3 application.

## Features

- 🎯 Live demonstration of all available icons
- 📱 Responsive design
- 🎨 Interactive size controls
- 🔍 Icon search functionality
- 📦 Local package development setup

## Getting Started

### Prerequisites

- Node.js 16+
- npm 7+ or yarn 1.22+ or pnpm 7+

### Installation

1. First, install the dependencies of the main package:
```bash
cd ..
npm install
npm run build
```

2. Then, install the example app dependencies:
```bash
cd example-app
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
example-app/
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Vue components
│   ├── App.vue         # Main application component
│   └── main.ts         # Application entry point
├── public/             # Public static files
└── package.json        # Project configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Local Development

This example app is configured to use the local version of `modern-3d-icons-vue` for development. The package is linked using:

```json
{
  "dependencies": {
    "modern-3d-icons-vue": "file:.."
  }
}
```

This allows you to:
- Test changes to the library in real-time
- Debug icon components
- Verify responsive behavior
- Test different icon sizes and resolutions

## Contributing

When contributing to the main library, you can use this example app to:
1. Test new icons
2. Verify responsive behavior
3. Check accessibility
4. Ensure proper bundling
5. Test different Vue configurations

## License

MIT © [Rafael Aguilar](https://github.com/raguilaru)
