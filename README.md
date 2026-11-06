# TeraGame Engine — Phase 3

A responsive browser-based game launcher with a gaming-store inspired dark/neon interface.

## Included and working
- Responsive desktop/mobile layout with collapsible mobile sidebar
- Home dashboard, featured banner, game cards and categories
- Search across available game titles/descriptions
- My Library and Favorites saved in browser localStorage
- Playable built-in Neon Runner mini-demo (keyboard and touch controls)
- Select and launch a single local `.html` game file in a sandboxed iframe
- Open a valid TeraBox share URL in a separate browser tab
- Downloads/activity list for this browser session
- Accent color, compact cards and local-data reset settings
- Friends/Profile/Game Servers preview screens with honest status messages

## Important limitations
- This is a static front-end. GitHub Pages can host the launcher but cannot run a backend, multiplayer server, remote PC or GPU.
- TeraBox is file storage; it does not execute games or provide CPU/GPU.
- A single HTML file can be selected locally. Multi-file ZIP game packages are not extracted/imported yet.
- APK execution requires Android runtime or a compatible emulator/app; a normal browser cannot execute APK files.
- Steam account/game integration needs Steam authentication/API permissions and must follow Steam's terms. This version does not log in to Steam and never asks for your password.
- Large PC games need a real remote PC/GPU plus game streaming. A free GPU server is not guaranteed.
- The other catalog entries are clearly marked placeholders; they are not falsely represented as playable games.

## Publish on GitHub Pages
1. Extract this ZIP.
2. Open your `teragame-engine` GitHub repository.
3. Replace the existing `index.html`, `style.css`, `app.js`, and `README.md` with these Phase 3 files.
4. Commit the changes to the `main` branch.
5. In Settings → Pages, keep `Deploy from a branch`, branch `main`, folder `/(root)`.
6. Open the published Pages URL and refresh after deployment finishes.

No build command, backend, API key, password or payment is required for this static phase.
