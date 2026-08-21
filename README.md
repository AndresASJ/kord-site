# Kord Site

Marketing and download site for [Kord](https://kordsound.com), a native bit-perfect FLAC player for iPhone and Mac.

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

## Running locally

Open any `.html` file directly, or serve the directory:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Pushes to `main` deploy automatically via GitHub Pages. The custom domain is configured through the `CNAME` file (`kordsound.com`).

## About Kord

Kord decodes FLAC bit-for-bit, switches the hardware sample rate to match each file, and hands samples straight to the DAC — direct USB-C output on iPhone, exclusive CoreAudio hardware access on Mac. No resampler, no system mixer, no hidden EQ in the signal path.

The app source is in a private repository. Bugs and feature requests go to the [public tracker](https://github.com/AndresASJ/FlacPlayer-Feedback).
