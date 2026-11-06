# TeraGame Engine — Phase 1

A lightweight browser-based game launcher prototype.

## What works now
- Built-in Neon Runner demo with keyboard and touch controls.
- Load a single local `.html` game file in an iframe.
- Open a TeraBox share link in a separate browser tab.

## What does not work yet
- TeraBox does not execute game files or provide CPU/GPU compute.
- APK files cannot run inside a normal browser; they need Android or a compatible Android runtime.
- Large PC games need a real remote computer with suitable CPU/GPU plus streaming. A free GPU server is not guaranteed.
- ZIP extraction, TeraBox API integration, remote game streaming, and APK execution are not implemented.

## Run
Open `index.html` in a modern browser, or publish this folder with GitHub Pages.

## Next phases
1. Host this browser launcher as a static site.
2. Add a safe game-package format for HTML games.
3. Investigate legitimate TeraBox sharing/download integration.
4. Add a remote runtime only if a suitable free compute provider is available.
