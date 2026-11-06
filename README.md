# EcoBalance 2026 — Minimal GitHub Pages website

This is the simplified version matching the small typography and black/purple design from the mockup.

## Open locally

Unzip the archive, then double-click `index.html`. Keep the `assets` folder beside it. No install or server is required.

## Finish customization

1. **Poster link:** Your supplied OneDrive poster URL is already in `site-config.js`. Both the **View Full Poster** button and the **poster image** open it in a new tab. To change the URL later, edit `posterUrl` in that file.
2. **Poster image:** `assets/poster.png` is the actual image you supplied, displayed in a compact top-cropped frame. It is clickable and there is no visible "preview" caption. You can replace this PNG later without changing any code.
3. **References:** The 6 clickable citations are included; the *Full reference list* link points to the supplied SharePoint/OneDrive document. Test its visibility in a private browsing window.
4. **Favicon:** The page currently links to a University of Tsukuba logo hosted by Wikimedia Commons, so the browser needs Internet access to show it. The University states its emblem requires permission for use; confirm authorization with its public-relations office before publication, or replace the icon reference with your authorized logo file.

## GitHub Pages

Create a GitHub repository and upload the *contents* of this folder (not the ZIP). Under Settings > Pages, select Deploy from branch `main`, folder `/ (root)`.

The site includes both public email addresses and the JSPS KAKENHI Grant Number JP25K03323 acknowledgment as provided.

## Access notes

The page does not show a download button. To restrict downloading from OneDrive, you must configure the OneDrive sharing settings; this code cannot enforce that restriction. Test opening both the poster and the references in a signed-out/private browsing window.
