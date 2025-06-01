# Modern 3D Icons Vue

A Vue 3 library featuring modern 3D SVG icons with customizable properties.

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
    size="24"           <!-- Size in pixels (number or string) -->
    color="#FF0000"     <!-- Color (any valid CSS color) -->
    viewBox="0 0 24 24" <!-- SVG viewBox (optional) -->
  />
</template>
```

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

### Additional SVG Attributes

You can pass any valid SVG attributes to the icons:

```vue
<template>
  <AiChipIcon
    class="my-icon"
    style="opacity: 0.8"
    aria-label="AI Chip"
  />
</template>
```

## Development

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

## License

MIT 