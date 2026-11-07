# TeraGame Engine 5.2 architecture

- `index.html`: application shell and page structure.
- `css/app.css`: responsive desktop/mobile interface.
- `js/core.js`: local state, browser storage, utility helpers.
- `js/tgx.js`: TGX manifest build, validation, import and export.
- `js/app.js`: navigation, scanner, library, favorites, launch routing and connectors.
- `sw.js`: optional offline shell cache for GitHub Pages.
- `manifest.webmanifest`: installable PWA metadata.
- `samples/`: sample TGX and HTML game.
- `docs/`: format and integration notes.

## Current launch routing
- Browser: local HTML file selected in current browser session or compatible HTTP(S) URL.
- Android APK: hands a URL to Android; user approves installation.
- PC Cloud: opens a user-supplied remote stream URL.
- TeraBox: opens a user-supplied share link.

## External integrations not active
Direct TeraBox API/OAuth upload, private Steam library sync, native Android APK installation, PC GPU hosting and low-latency streaming require external official services, credentials/tokens handled securely, native capabilities or backend infrastructure.
