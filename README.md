# Kord Site

Marketing and download site for [Kord](https://kordsound.com), a FLAC player for iPhone.

**Live at [kordsound.com](https://kordsound.com)**

## What this is

The public-facing site for Kord — features, download links, changelogs, support, privacy policy, and terms. Static HTML and CSS deployed to GitHub Pages.

## Pages

- **index** — landing page and product overview
- **features** — full feature breakdown
- **download** — install links
- **changelog** — release history
- **support** — help and contact
- **privacy** / **terms** — legal
- **attribution** — credits for the Creative Commons music shown in the App Store screenshots

## Running locally

Open any `.html` file directly, or serve the directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Pushes to `main` deploy automatically via GitHub Pages. The custom domain is configured through the `CNAME` file (`kordsound.com`).

## About Kord

Kord plays FLAC on iPhone (iOS 18 or later) from Apple Files, individually selected Google Drive files, or your own Jellyfin server. It's free at launch and has no bundled catalog. Output depends on the iPhone, audio route, and settings.

The app source is in a private repository. Bugs and feature requests go to the [public tracker](https://github.com/AndresASJ/FlacPlayer-Feedback).
