# App Download Modal

A smart React modal component that automatically detects the user's device and shows appropriate download options.

## Features

- **Smart Device Detection**: Automatically detects iOS, Android, or desktop devices
- **Mobile-First Design**: Shows single download button for mobile users
- **Desktop QR Codes**: Shows QR codes for both iOS and Android on desktop
- **Official Store Icons**: Uses authentic App Store and Google Play Store icons
- **Internationalization**: Full i18n support for English and Spanish
- **Responsive UI**: Clean, modern design with Tailwind CSS
- **Customizable URLs**: Easy to configure app store URLs

## Components

### 1. `useDeviceDetection` Hook
Located at `app/hooks/useDeviceDetection.ts`

Detects device type based on user agent:
- `ios`: iPhone, iPad, iPod
- `android`: Android devices
- `desktop`: All other devices

### 2. `DownloadAppModal` Component
Located at `app/components/DownloadAppModal.tsx`

Main modal component with:
- Device-specific UI rendering
- QR code generation for desktop users
- Download buttons for mobile users
- Official App Store and Google Play Store icons
- Full internationalization support (English/Spanish)
- Customizable app store URLs

### 3. `AppDownloadWrapper` Component
Located at `app/components/AppDownloadWrapper.tsx`

Wrapper component that:
- Shows modal immediately on page load
- Manages modal state
- Provides default app store URLs

## Usage

### Basic Usage
The modal is already integrated into the main page and will show automatically when users visit the site.

### Custom Usage
```tsx
import DownloadAppModal from './components/DownloadAppModal';

function MyComponent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <DownloadAppModal
      isOpen={showModal}
      onClose={() => setShowModal(false)}
      iosAppStoreUrl="https://apps.apple.com/app/your-app"
      androidPlayStoreUrl="https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
    />
  );
}
```

## Customization

### App Store URLs
Update the URLs in `AppDownloadWrapper.tsx` or pass them as props:

```tsx
<DownloadAppModal
  iosAppStoreUrl="https://apps.apple.com/app/your-ios-app"
  androidPlayStoreUrl="https://play.google.com/store/apps/details?id=com.yourcompany.yourapp"
/>
```

### Styling
The component uses Tailwind CSS classes. You can customize:
- Colors: Change `blue-600`, `green-600` for brand colors
- Sizing: Modify `max-w-md`, `py-3`, `px-6` for dimensions
- Spacing: Adjust `space-y-4`, `gap-6` for layout

### QR Code Generation
Currently uses `api.qrserver.com` for QR code generation. For production, consider:
- `qrcode` npm package
- `react-qr-code` component
- Custom QR code service

## Device Detection Logic

The hook detects devices using:
1. User agent string analysis
2. Platform detection for iPad (MacIntel + touch points)
3. Mobile/tablet keywords

## Browser Support

- Modern browsers with ES6+ support
- Mobile Safari (iOS)
- Chrome Mobile (Android)
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## Internationalization

The modal supports both English and Spanish translations. All text content is managed through the i18n system:

### Translation Keys
- `DownloadModal.title`: Main modal title
- `DownloadModal.subtitle`: Desktop subtitle text
- `DownloadModal.downloadForIphone`: iPhone download header
- `DownloadModal.downloadForAndroid`: Android download header
- `DownloadModal.downloadFromAppStore`: App Store button text
- `DownloadModal.downloadFromPlayStore`: Play Store button text
- `DownloadModal.scanToDownload`: QR code instruction text
- `DownloadModal.visitStoresDirectly`: Direct links header
- `DownloadModal.appStore`: App Store link text
- `DownloadModal.playStore`: Play Store link text

### Adding New Languages
To add support for additional languages:
1. Add translation keys to the new language file in `messages/`
2. Follow the same structure as `en.json` and `es.json`
3. The modal will automatically use the appropriate language based on the user's locale

## Dependencies

- React 19+
- Next.js 15+
- Tailwind CSS
- Lucide React (for icons)
- next-intl (for internationalization)

## Testing

To test different device types:
1. Use browser dev tools device emulation
2. Test on actual mobile devices
3. Use different user agents for testing

The modal will automatically adapt its UI based on the detected device type.
