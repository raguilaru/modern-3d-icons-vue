# Modern 3D Icons Vue

A Vue 3 library featuring modern 3D PNG icons with responsive sizing and high-quality assets.

## Features

- 🎨 High-quality 3D PNG icons
- 📱 Responsive sizing with automatic resolution selection
- 🎯 TypeScript support
- 🚀 Vue 3 composition API
- 📦 Tree-shakeable imports
- ♿ Accessibility support with alt text
- 🎯 Zero dependencies

## Installation

```bash
npm install modern-3d-icons-vue
# or
yarn add modern-3d-icons-vue
# or
pnpm add modern-3d-icons-vue
```

## Usage

### Basic Usage

```vue
<template>
  <AiChipIcon />
  <AirplaneIcon />
  <BellIcon />
  <BookIcon />
  <BookmarkIcon />
  <BoxIcon />
  <DigitalQuaverIcon />
  <FootballIcon />
  <MagnifyingGlassIcon />
  <SpeakerIcon />
  <WalletIcon />
</template>

<script setup>
import {
  AiChipIcon,
  AirplaneIcon,
  BellIcon,
  BookIcon,
  BookmarkIcon,
  BoxIcon,
  DigitalQuaverIcon,
  FootballIcon,
  MagnifyingGlassIcon,
  SpeakerIcon,
  WalletIcon
} from 'modern-3d-icons-vue'
</script>
```

### Customizing Icons

All icons accept the following props:

```vue
<template>
  <AiChipIcon
    :size="32"         <!-- Size in pixels (default: 32) -->
    alt="AI Chip"      <!-- Alt text for accessibility -->
  />
</template>
```

### Responsive Sizing

The icons automatically use the appropriate resolution based on their size:
- ≤ 64px: Uses 64x64 PNG
- 65-128px: Uses 128x128 PNG
- > 128px: Uses 256x256 PNG

### Available Icons

- `AiChipIcon` - AI chip with golden prongs and stars
- `AirplaneIcon` - Commercial airplane
- `BellIcon` - Minimalist bell
- `BookIcon` - Embossed book with red bookmark
- `BookmarkIcon` - Minimalist bookmark
- `BoxIcon` - Shipping box with handling symbols
- `DigitalQuaverIcon` - 3D digital quaver music note
- `FootballIcon` - American football close-up
- `MagnifyingGlassIcon` - 3D magnifying glass
- `SpeakerIcon` - 3D speaker with sound waves
- `WalletIcon` - Beige wallet with blue banknote

### Additional Image Attributes

You can pass any valid image attributes to the icons:

```vue
<template>
  <AiChipIcon
    class="my-icon"
    style="opacity: 0.8"
    alt="AI Chip"
  />
</template>
```

## Project Structure

```
modern-3d-icons-vue/
├── src/
│   ├── assets/
│   │   └── png/           # Icon assets in different resolutions
│   │       ├── 64/        # 64x64 icons
│   │       ├── 128/       # 128x128 icons
│   │       └── 256/       # 256x256 icons
│   ├── components/        # Vue components
│   └── index.ts          # Main entry point
├── example-app/          # Example application
├── dist/                 # Build output
└── package.json
```

## Development

### Prerequisites

- Node.js 16+
- npm 7+ or yarn 1.22+ or pnpm 7+

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check
```

### Example App

The project includes an example application to showcase the icons:

```bash
cd example-app
npm install
npm run dev
```

### Adding New Icons

1. Add your PNG icons to the appropriate resolution folders in `src/assets/png/`
2. Create a new component in `src/components/`
3. Export the component in `src/index.ts`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-icon`)
3. Commit your changes (`git commit -m 'Add amazing icon'`)
4. Push to the branch (`git push origin feature/amazing-icon`)
5. Open a Pull Request

### Icon Guidelines

- Icons should be in PNG format
- Provide icons in all required resolutions (64x64, 128x128, and 256x256)
- Maintain consistent style across all icons
- Ensure icons are properly centered and padded
- Use transparent backgrounds

## License

MIT © [Rafael Aguilar](https://github.com/raguilaru) 