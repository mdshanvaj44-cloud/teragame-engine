# TeraGame Engine — Phase 5.2

A multi-file, responsive web launcher and TGX game-manifest workspace.

## Included modules
- Desktop-style dashboard and mobile-responsive navigation
- Unified game library and platform filters
- TGX Game Vault and TGX 5.2 manifest studio
- File scanner for user-selected HTML, ZIP, APK, EXE, MSI, OBB, PAK and TGX files
- Browser HTML game player and included Neon Runner demo
- Favorites, transfer/export history and JSON backup/restore
- TeraBox share-link manager
- PC cloud stream URL hand-off
- Steam public profile reference section
- Android APK hand-off section
- PWA manifest and service worker
- Sample TGX manifest, sample HTML game and documentation

## Run locally
Open `index.html` in a modern browser. For best PWA/service-worker behavior, publish through GitHub Pages or use a local static web server.

## Publish on GitHub Pages
1. Extract the ZIP.
2. Open your GitHub repository.
3. Upload **all contents inside this folder**, preserving folders (`css`, `js`, `assets`, `docs`, `samples`).
4. Commit to the `main` branch.
5. In repository Settings → Pages, select Deploy from a branch, `main`, `/(root)`.
6. Open the published website.

Do not upload only `index.html`; the CSS and JavaScript modules are separate files.

## Important technical limits
- This is a static browser app. It cannot silently scan the entire phone or PC.
- File selection is permission-based. The browser reads selected file metadata; HTML can be opened for the current session. File object access is not persisted across browser restarts.
- ZIP extraction and automatic repacking of large game folders are not included in this browser build.
- TGX is a manifest describing files and runtime requirements, not a binary converter or emulator.
- Direct private TeraBox account OAuth/upload is not implemented. Use the official TeraBox app/site to upload the TGX and original files, then paste the share URL.
- Steam private-library authentication is not implemented. Never enter passwords or OTPs in this app.
- APK installation is handed to Android and requires user approval.
- PC games require a real remote PC with GPU and a compatible streaming/input service. GitHub Pages and TeraBox do not provide GPU execution.

Back up the library from Settings before clearing browser data or switching devices.
