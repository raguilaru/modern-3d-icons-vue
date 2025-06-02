#!/bin/bash

# Function to convert component name to PNG filename
convert_to_png_name() {
    local component_name="$1"
    # Remove 'Icon' suffix
    component_name=${component_name%Icon}
    # Convert to lowercase
    component_name=$(echo "$component_name" | tr '[:upper:]' '[:lower:]')
    # Add hyphens between words
    component_name=$(echo "$component_name" | sed 's/\([A-Z]\)/-\1/g' | sed 's/^-//')
    # Convert to kebab case
    component_name=$(echo "$component_name" | tr '[:upper:]' '[:lower:]')
    echo "$component_name"
}

# Function to get the corresponding PNG filename
get_png_filename() {
    local component_name="$1"
    case "$component_name" in
        "AiChipIcon") echo "ai-chip-with-golden-prongs-and-stars.png" ;;
        "AirplaneIcon") echo "commercial-airplane-icon-in-white.png" ;;
        "BellIcon") echo "minimalist-bell-icon-on-white.png" ;;
        "BookIcon") echo "embossed-book-with-red-bookmark.png" ;;
        "BookmarkIcon") echo "minimalist-bookmark-icon-rendering.png" ;;
        "BoxIcon") echo "shipping-box-with-handling-symbols.png" ;;
        "BuildingIcon") echo "neoclassical-beige-building-rendering.png" ;;
        "CameraIcon") echo "digital-camera-icon-in-matte-gray.png" ;;
        "CarIcon") echo "matte-red-compact-car-design.png" ;;
        "ChainIcon") echo "interlocking-chain-link-design.png" ;;
        "ChartIcon") echo "rising-bar-chart-with-red-arrow.png" ;;
        "ClockIcon") echo "minimalist-analog-clock-design.png" ;;
        "ComputerIcon") echo "sleek-modern-desktop-computer-design.png" ;;
        "CupIcon") echo "ceramic-cup-with-warm-liquid.png" ;;
        "DesktopIcon") echo "sleek-minimalist-desktop-setup.png" ;;
        "DigitalQuaverIcon") echo "3d-digital-quaver-music-note.png" ;;
        "DotsIcon") echo "minimalist-grey-dots-on-white.png" ;;
        "DownloadIcon") echo "download-icon-in-minimalist-style.png" ;;
        "EnvelopeIcon") echo "envelope-with-red-badge.png" ;;
        "FlameIcon") echo "stylized-3d-flame-icon.png" ;;
        "FloppyDiskIcon") echo "iconic-3.5-inch-floppy-disk.png" ;;
        "FolderIcon") echo "minimalist-folder-with-user-icon.png" ;;
        "FootballIcon") echo "american-football-close-up.png" ;;
        "GearIcon") echo "minimalist-gear-icon-design.png" ;;
        "GlobeIcon") echo "textured-globe-with-latitude-and-longitude.png" ;;
        "HeadphonesIcon") echo "stylish-yellow-and-gray-headphones.png" ;;
        "HookahIcon") echo "hookah-with-gold-accents-and-red-hose.png" ;;
        "HourglassIcon") echo "timeless-flow-of-golden-sands.png" ;;
        "HouseIcon") echo "charming-little-house-on-green-lawn.png" ;;
        "KeyboardIcon") echo "keyboard-in-soft-focus-perspective.png" ;;
        "LightBulbIcon") echo "vibrant-light-bulb-icon.png" ;;
        "LightningIcon") echo "yellow-lightning-bolt-icon.png" ;;
        "LocationPinIcon") echo "minimalist-3d-location-pin-icon.png" ;;
        "MagnifyingGlassIcon") echo "3d-magnifying-glass-icon.png" ;;
        "MicrophoneIcon") echo "vintage-microphone-on-stand.png" ;;
        "MoneyBagIcon") echo "money-bag-with-dollar-sign.png" ;;
        "PencilIcon") echo "pencil-on-textured-paper.png" ;;
        "PlayButtonIcon") echo "3d-gray-play-button-icon.png" ;;
        "PrinterIcon") echo "tabletop-printer-icon-3d-rendering.png" ;;
        "RocketIcon") echo "cartoon-rocket-launching-to-space.png" ;;
        "RocketVectorIcon") echo "cartoon-rocket-launching-to-space.png" ;;
        "ShadedPencilIcon") echo "shaded-pencil-on-white-background.png" ;;
        "ShieldIcon") echo "shield-and-padlock-icon-design.png" ;;
        "SmartphoneIcon") echo "minimalist-gray-smartphone-design.png" ;;
        "SpeakerIcon") echo "3d-speaker-icon-with-sound-waves.png" ;;
        "SpeechBubbleIcon") echo "textured-speech-bubble-with-dots.png" ;;
        "StarIcon") echo "golden-star-on-white-canvas.png" ;;
        "SunIcon") echo "golden-sun-icon-on-white.png" ;;
        "TargetIcon") echo "perfect-shot-on-target.png" ;;
        "ThumbsUpIcon") echo "raised-thumbs-up-with-blue-cuff.png" ;;
        "TrashIcon") echo "minimalist-trash-can-icon.png" ;;
        "UmbrellaIcon") echo "red-and-beige-umbrella-design.png" ;;
        "UserIcon") echo "minimalist-3d-user-icon.png" ;;
        "UserProfileIcon") echo "perfil-de-usuario-3d.png" ;;
        "WalletIcon") echo "beige-wallet-with-blue-banknote.png" ;;
        "WineIcon") echo "frosted-glass-wine-elegance.png" ;;
        "WrenchIcon") echo "matte-gray-wrench-on-white-background.png" ;;
        *) echo "$(convert_to_png_name "$component_name").png" ;;
    esac
}

# Process each Vue component in the icons directory
for file in src/components/icons/*.vue; do
    if [ -f "$file" ]; then
        # Get the component name from the filename
        component_name=$(basename "$file" .vue)
        png_filename=$(get_png_filename "$component_name")
        
        # Create the new component content
        cat > "$file" << EOF
<template>
  <BaseIcon
    src="$png_filename"
    :size="size"
    alt="${component_name%Icon} Icon"
  />
</template>

<script setup lang="ts">
import BaseIcon from '../BaseIcon.vue'

defineProps<{
  size?: number
}>()
</script>
EOF
        echo "Updated $file"
    fi
done

echo "All icon components have been updated!" 