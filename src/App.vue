<template>
  <div class="app">
    <h1>Modern 3D Icons</h1>
    <div class="icon-grid">
      <div v-for="icon in icons" :key="icon.name" class="icon-item">
        <component :is="icon.component" :size="32" />
        <span>{{ icon.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  AiChipIcon,
  AirplaneIcon,
  BellIcon,
  BookIcon,
  BookmarkIcon,
  BoxIcon,
  CarIcon,
  ChainIcon,
  ChartIcon,
  ClockIcon,
  ComputerIcon,
  CupIcon,
  DesktopIcon,
  DigitalQuaverIcon,
  DotsIcon,
  DownloadIcon,
  EnvelopeIcon,
  FlameIcon,
  FloppyDiskIcon,
  FolderIcon,
  FootballIcon,
  GearIcon,
  GlobeIcon,
  HeadphonesIcon,
  HookahIcon,
  HourglassIcon,
  HouseIcon,
  KeyboardIcon,
  LightBulbIcon,
  LightningIcon,
  LocationPinIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
  MoneyBagIcon,
  PencilIcon,
  PlayButtonIcon,
  PrinterIcon,
  RocketIcon,
  ShadedPencilIcon,
  ShieldIcon,
  SmartphoneIcon,
  SpeakerIcon,
  SpeechBubbleIcon,
  StarIcon,
  SunIcon,
  TargetIcon,
  ThumbsUpIcon,
  TrashIcon,
  UmbrellaIcon,
  UserIcon,
  UserProfileIcon,
  WalletIcon,
  WineIcon,
  WrenchIcon
} from './components/icons'

const icons = [
  { name: 'AiChipIcon', component: AiChipIcon },
  { name: 'AirplaneIcon', component: AirplaneIcon },
  { name: 'BellIcon', component: BellIcon },
  { name: 'BookIcon', component: BookIcon },
  { name: 'BookmarkIcon', component: BookmarkIcon },
  { name: 'BoxIcon', component: BoxIcon },
  { name: 'CarIcon', component: CarIcon },
  { name: 'ChainIcon', component: ChainIcon },
  { name: 'ChartIcon', component: ChartIcon },
  { name: 'ClockIcon', component: ClockIcon },
  { name: 'ComputerIcon', component: ComputerIcon },
  { name: 'CupIcon', component: CupIcon },
  { name: 'DesktopIcon', component: DesktopIcon },
  { name: 'DigitalQuaverIcon', component: DigitalQuaverIcon },
  { name: 'DotsIcon', component: DotsIcon },
  { name: 'DownloadIcon', component: DownloadIcon },
  { name: 'EnvelopeIcon', component: EnvelopeIcon },
  { name: 'FlameIcon', component: FlameIcon },
  { name: 'FloppyDiskIcon', component: FloppyDiskIcon },
  { name: 'FolderIcon', component: FolderIcon },
  { name: 'FootballIcon', component: FootballIcon },
  { name: 'GearIcon', component: GearIcon },
  { name: 'GlobeIcon', component: GlobeIcon },
  { name: 'HeadphonesIcon', component: HeadphonesIcon },
  { name: 'HookahIcon', component: HookahIcon },
  { name: 'HourglassIcon', component: HourglassIcon },
  { name: 'HouseIcon', component: HouseIcon },
  { name: 'KeyboardIcon', component: KeyboardIcon },
  { name: 'LightBulbIcon', component: LightBulbIcon },
  { name: 'LightningIcon', component: LightningIcon },
  { name: 'LocationPinIcon', component: LocationPinIcon },
  { name: 'MagnifyingGlassIcon', component: MagnifyingGlassIcon },
  { name: 'MicrophoneIcon', component: MicrophoneIcon },
  { name: 'MoneyBagIcon', component: MoneyBagIcon },
  { name: 'PencilIcon', component: PencilIcon },
  { name: 'PlayButtonIcon', component: PlayButtonIcon },
  { name: 'PrinterIcon', component: PrinterIcon },
  { name: 'RocketIcon', component: RocketIcon },
  { name: 'ShadedPencilIcon', component: ShadedPencilIcon },
  { name: 'ShieldIcon', component: ShieldIcon },
  { name: 'SmartphoneIcon', component: SmartphoneIcon },
  { name: 'SpeakerIcon', component: SpeakerIcon },
  { name: 'SpeechBubbleIcon', component: SpeechBubbleIcon },
  { name: 'StarIcon', component: StarIcon },
  { name: 'SunIcon', component: SunIcon },
  { name: 'TargetIcon', component: TargetIcon },
  { name: 'ThumbsUpIcon', component: ThumbsUpIcon },
  { name: 'TrashIcon', component: TrashIcon },
  { name: 'UmbrellaIcon', component: UmbrellaIcon },
  { name: 'UserIcon', component: UserIcon },
  { name: 'UserProfileIcon', component: UserProfileIcon },
  { name: 'WalletIcon', component: WalletIcon },
  { name: 'WineIcon', component: WineIcon },
  { name: 'WrenchIcon', component: WrenchIcon }
]
</script>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style> 