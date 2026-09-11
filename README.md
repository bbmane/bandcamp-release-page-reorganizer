# Bandcamp Release Page Reorganizer

Aren't you tired of scrolling gazillions of merch items and cds and t-shirt promotions to find the tracklist of an album in Bandcamp? This is a small userscript made to solve that.

It changes the order of elements on Bandcamp release pages: the player and tracklist stay on top, everything else (purchase widgets, featured video, etc.) moves below.

## What it does

<p align="left">
  <img src="https://i.imgur.com/6Lf9NZt.gif" width="50%">
</p>

- Moves non-digital `.buyItem` widgets (vinyl, CD, merch, etc.) into `#trackInfo`
- Moves the `.featured-video-wrapper` and `.buy-offsite-item` links into `#trackInfo`
- Watches the page for dynamically loaded elements and relocates them automatically

## Before / After

| Before                                     | After                                     |
| ------------------------------------------ | ----------------------------------------- |
| ![Before](https://i.imgur.com/6wh5tXo.png) | ![After](https://i.imgur.com/fh7S5lk.png) |

## Installation

1. Install a userscript manager such as [Tampermonkey](https://www.tampermonkey.net/).
2. [Click here to install](https://raw.githubusercontent.com/bbmane/bandcamp-release-page-reorganizer/main/main.user.js).
3. Visit any Bandcamp release page — the layout will reorganize automatically.
