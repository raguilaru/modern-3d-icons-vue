import BaseIcon from './components/BaseIcon.vue'
import DigitalQuaverIcon from './components/icons/DigitalQuaverIcon.vue'
import PlayButtonIcon from './components/icons/PlayButtonIcon.vue'
import MagnifyingGlassIcon from './components/icons/MagnifyingGlassIcon.vue'
import SpeakerIcon from './components/icons/SpeakerIcon.vue'
import AiChipIcon from './components/icons/AiChipIcon.vue'
import FootballIcon from './components/icons/FootballIcon.vue'
import WalletIcon from './components/icons/WalletIcon.vue'
import RocketIcon from './components/icons/RocketIcon.vue'
import CupIcon from './components/icons/CupIcon.vue'
import HouseIcon from './components/icons/HouseIcon.vue'
import AirplaneIcon from './components/icons/AirplaneIcon.vue'
import CameraIcon from './components/icons/CameraIcon.vue'
import DownloadIcon from './components/icons/DownloadIcon.vue'
import BookIcon from './components/icons/BookIcon.vue'
import EnvelopeIcon from './components/icons/EnvelopeIcon.vue'
import WineIcon from './components/icons/WineIcon.vue'
import StarIcon from './components/icons/StarIcon.vue'
import SunIcon from './components/icons/SunIcon.vue'
import HookahIcon from './components/icons/HookahIcon.vue'
import FloppyDiskIcon from './components/icons/FloppyDiskIcon.vue'
import ChainIcon from './components/icons/ChainIcon.vue'
import KeyboardIcon from './components/icons/KeyboardIcon.vue'
import WrenchIcon from './components/icons/WrenchIcon.vue'
import CarIcon from './components/icons/CarIcon.vue'
import LocationPinIcon from './components/icons/LocationPinIcon.vue'
import UserIcon from './components/icons/UserIcon.vue'
import ClockIcon from './components/icons/ClockIcon.vue'
import BellIcon from './components/icons/BellIcon.vue'
import BookmarkIcon from './components/icons/BookmarkIcon.vue'
import FolderIcon from './components/icons/FolderIcon.vue'
import GearIcon from './components/icons/GearIcon.vue'
import SmartphoneIcon from './components/icons/SmartphoneIcon.vue'
import DotsIcon from './components/icons/DotsIcon.vue'
import TrashIcon from './components/icons/TrashIcon.vue'
import MoneyBagIcon from './components/icons/MoneyBagIcon.vue'
import BuildingIcon from './components/icons/BuildingIcon.vue'
import PencilIcon from './components/icons/PencilIcon.vue'
import TargetIcon from './components/icons/TargetIcon.vue'
import UserProfileIcon from './components/icons/UserProfileIcon.vue'
import ThumbsUpIcon from './components/icons/ThumbsUpIcon.vue'
import UmbrellaIcon from './components/icons/UmbrellaIcon.vue'
import ChartIcon from './components/icons/ChartIcon.vue'
import ShadedPencilIcon from './components/icons/ShadedPencilIcon.vue'
import ShieldIcon from './components/icons/ShieldIcon.vue'
import BoxIcon from './components/icons/BoxIcon.vue'
import DesktopIcon from './components/icons/DesktopIcon.vue'
import ComputerIcon from './components/icons/ComputerIcon.vue'
import HeadphonesIcon from './components/icons/HeadphonesIcon.vue'
import FlameIcon from './components/icons/FlameIcon.vue'
import PrinterIcon from './components/icons/PrinterIcon.vue'
import GlobeIcon from './components/icons/GlobeIcon.vue'
import SpeechBubbleIcon from './components/icons/SpeechBubbleIcon.vue'
import HourglassIcon from './components/icons/HourglassIcon.vue'
import LightBulbIcon from './components/icons/LightBulbIcon.vue'
import MicrophoneIcon from './components/icons/MicrophoneIcon.vue'
import LightningIcon from './components/icons/LightningIcon.vue'

const components = {
  BaseIcon,
  // HomeIcon,
  // SettingsIcon,
  DigitalQuaverIcon,
  PlayButtonIcon,
  MagnifyingGlassIcon,
  SpeakerIcon,
  AiChipIcon,
  FootballIcon,
  WalletIcon,
  RocketIcon,
  CupIcon,
  HouseIcon,
  AirplaneIcon,
  CameraIcon,
  DownloadIcon,
  BookIcon,
  EnvelopeIcon,
  WineIcon,
  StarIcon,
  SunIcon,
  HookahIcon,
  FloppyDiskIcon,
  ChainIcon,
  KeyboardIcon,
  WrenchIcon,
  CarIcon,
  LocationPinIcon,
  UserIcon,
  ClockIcon,
  BellIcon,
  BookmarkIcon,
  FolderIcon,
  GearIcon,
  SmartphoneIcon,
  DotsIcon,
  TrashIcon,
  MoneyBagIcon,
  BuildingIcon,
  PencilIcon,
  TargetIcon,
  UserProfileIcon,
  ThumbsUpIcon,
  UmbrellaIcon,
  ChartIcon,
  ShadedPencilIcon,
  ShieldIcon,
  BoxIcon,
  DesktopIcon,
  ComputerIcon,
  HeadphonesIcon,
  FlameIcon,
  PrinterIcon,
  GlobeIcon,
  SpeechBubbleIcon,
  HourglassIcon,
  LightBulbIcon,
  MicrophoneIcon,
  LightningIcon
}

export {
  BaseIcon,
  DigitalQuaverIcon,
  PlayButtonIcon,
  MagnifyingGlassIcon,
  SpeakerIcon,
  AiChipIcon,
  FootballIcon,
  WalletIcon,
  RocketIcon,
  CupIcon,
  HouseIcon,
  AirplaneIcon,
  CameraIcon,
  DownloadIcon,
  BookIcon,
  EnvelopeIcon,
  WineIcon,
  StarIcon,
  SunIcon,
  HookahIcon,
  FloppyDiskIcon,
  ChainIcon,
  KeyboardIcon,
  WrenchIcon,
  CarIcon,
  LocationPinIcon,
  UserIcon,
  ClockIcon,
  BellIcon,
  BookmarkIcon,
  FolderIcon,
  GearIcon,
  SmartphoneIcon,
  DotsIcon,
  TrashIcon,
  MoneyBagIcon,
  BuildingIcon,
  PencilIcon,
  TargetIcon,
  UserProfileIcon,
  ThumbsUpIcon,
  UmbrellaIcon,
  ChartIcon,
  ShadedPencilIcon,
  ShieldIcon,
  BoxIcon,
  DesktopIcon,
  ComputerIcon,
  HeadphonesIcon,
  FlameIcon,
  PrinterIcon,
  GlobeIcon,
  SpeechBubbleIcon,
  HourglassIcon,
  LightBulbIcon,
  MicrophoneIcon,
  LightningIcon
}

export default {
  install: (app: any) => {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component)
    })
  }
} 