# Odyssey-Radio

## Changelog

### v2017.2.13.1

- Updated most of the endpoints
- We're now using WebSockets for song info
- Added a random request button to the site
- Removed unused code

### v2016.10.5.2

- Either Rem or Ram will now be displayed when opening the popup
- Minor CSS changes
- Reverted back to polling for info. SSE didn't really work out...

### v2016.9.28.1

- Commented out a few console.logs
- Minor CSS changes
- No longer using setInterval to check for stats.json changes. Site is now using SSE.
- Added LISTEN.moe Favorites support into the extension

### v2016.8.26.1

- Minor CSS changes.
- Removed most console.logs()
- Made changes to how the "Requested by" appears. No longer using jQuery.html() since it posed as a major security risk.
- Base for History and Favorites features.

### v2016.8.22.1

- Firefox Compatibility

  Requires Firefox version 48 or higher

### v2016.8.21.2

- Added webRequest and webRequestBlocking permissions

  This will allow the extension to modify the UserAgent for requests coming from the extension so the Server can identify Extension users from normal site users.

### v2016.8.21.1

- Removed Custom Checkbox since I didn't like how it looked
- Made CSS changes that @kanadeko requested
- Made some ajustments to the JS to accommodate the CSS changes

### v2016.8.20.1

- Initial Release
