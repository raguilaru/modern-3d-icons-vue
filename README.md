# Modern 3D Icons Vue

A Vue 3 library for modern 3D SVG icons.

## Installation

```bash
npm install modern-3d-icons-vue
```

## Usage

### Global Registration

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import Modern3DIconsVue from 'modern-3d-icons-vue'

const app = createApp(App)
app.use(Modern3DIconsVue)
app.mount('#app')
```

### Individual Component Registration

```typescript
import { HomeIcon, SettingsIcon } from 'modern-3d-icons-vue'

export default {
  components: {
    HomeIcon,
    SettingsIcon
  }
}
```

### In Your Template

```vue
<template>
  <!-- Default size (24x24) -->
  <HomeIcon />
  
  <!-- Custom size -->
  <SettingsIcon :size="32" />
  
  <!-- Custom color -->
  <HomeIcon color="#ff0000" />
  
  <!-- Using HTML attributes -->
  <HomeIcon width="48" height="48" />
</template>
```

## Available Icons

- `AiChipIcon` - AI chip with golden prongs and stars
- `AirplaneIcon` - Commercial airplane in white
- `BaseIcon` - Base icon component
- `BellIcon` - Minimalist bell icon
- `BookIcon` - Embossed book with red bookmark
- `BookmarkIcon` - Minimalist bookmark icon
- `BoxIcon` - Shipping box with handling symbols
- `BuildingIcon` - Neoclassical beige building
- `CameraIcon` - Digital camera in matte gray
- `CarIcon` - Matte red compact car
- `ChainIcon` - Interlocking chain link design
- `ChartIcon` - Rising bar chart with red arrow
- `ClockIcon` - Minimalist analog clock
- `ComputerIcon` - Sleek modern desktop computer
- `CupIcon` - Ceramic cup with warm liquid
- `DesktopIcon` - Sleek minimalist desktop setup
- `DigitalQuaverIcon` - 3D digital quaver music note
- `DotsIcon` - Minimalist grey dots
- `DownloadIcon` - Download icon in minimalist style
- `EnvelopeIcon` - Envelope with red badge
- `FlameIcon` - Stylized 3D flame
- `FloppyDiskIcon` - Iconic 3.5 inch floppy disk
- `FolderIcon` - Minimalist folder with user icon
- `FootballIcon` - American football close-up
- `GearIcon` - Minimalist gear icon
- `GlobeIcon` - Textured globe with latitude and longitude
- `HeadphonesIcon` - Stylish yellow and gray headphones
- `HomeIcon` - Charming little house on green lawn
- `HookahIcon` - Hookah with gold accents
- `HourglassIcon` - Timeless flow of golden sands
- `HouseIcon` - Charming little house
- `KeyboardIcon` - Keyboard in soft focus perspective
- `LightBulbIcon` - Vibrant light bulb
- `LightningIcon` - Yellow lightning bolt
- `LocationPinIcon` - Minimalist 3D location pin
- `MagnifyingGlassIcon` - 3D magnifying glass
- `MicrophoneIcon` - Vintage microphone on stand
- `MoneyBagIcon` - Money bag with dollar sign
- `PencilIcon` - Pencil on textured paper
- `PlayButtonIcon` - 3D gray play button
- `PrinterIcon` - Tabletop printer 3D rendering
- `RocketIcon` - Cartoon rocket launching to space
- `SettingsIcon` - Minimalist gear icon
- `ShadedPencilIcon` - Shaded pencil on white
- `ShieldIcon` - Shield and padlock icon
- `SmartphoneIcon` - Minimalist gray smartphone
- `SpeakerIcon` - 3D speaker with sound waves
- `SpeechBubbleIcon` - Textured speech bubble with dots
- `StarIcon` - Golden star on white canvas
- `SunIcon` - Golden sun icon
- `TargetIcon` - Perfect shot on target
- `ThumbsUpIcon` - Raised thumbs up with blue cuff
- `TrashIcon` - Minimalist trash can
- `UmbrellaIcon` - Red and beige umbrella
- `UserIcon` - Minimalist 3D user icon
- `UserProfileIcon` - 3D user profile
- `WalletIcon` - Beige wallet with blue banknote
- `WineIcon` - Frosted glass wine elegance
- `WrenchIcon` - Matte gray wrench

## Props

All icons accept the following props:

| Prop    | Type             | Default        | Description                    |
|---------|------------------|----------------|--------------------------------|
| size    | Number \| String | 24            | Size of the icon in pixels     |
| color   | String          | currentColor   | Color of the icon              |
| viewBox | String          | "0 0 24 24"   | SVG viewBox attribute          |

## SVG Files

The icons are stored as SVG files in the `src/svg` directory. Each icon component loads its corresponding SVG file dynamically. The SVG files are optimized and use the `currentColor` value for the fill color, allowing them to inherit the color from their parent element or be set via the `color` prop.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 