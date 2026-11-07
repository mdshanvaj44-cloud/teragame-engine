# TGX 5.2 format

TGX (TeraGame eXchange) is a JSON-based manifest format. A `.tgx` file describes one game and its launch/storage references.

## Required fields
- `format`: `TERAGAME-TGX`
- `formatVersion`: currently `5.2`
- `game.title`: display name
- `game.platform`: `Browser`, `Android APK`, `PC Cloud`, or `TeraBox`

## Package sections
- `package`: unique package id, creation date, schema
- `game`: title, version, platform, description, icon
- `content.files`: inventory of original game files (not embedded by this web build)
- `content.sourceUrl`: optional game/share/stream URL
- `runtime`: launch target and requirements
- `integrity`: checksum metadata; currently not calculated in this build

## Important
TGX is not a converter, emulator, virtual machine or game executable. An APK remains an APK; a Windows executable still requires Windows; PC cloud play requires a remote host. Original files must be stored separately or embedded by a future native packager.
