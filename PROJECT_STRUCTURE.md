# Wres Republica Web - Project Structure

## Overview
This is a reorganized and refactored version of the Wres Republica website. The project has been restructured to follow best practices with separated concerns, organized file structure, and external modules.

## Directory Structure

```
WresRepublicaWeb/
├── index.html                 # Main HTML file (clean and organized)
├── css/
│   └── styles.css            # All custom CSS (separated from HTML)
├── js/
│   ├── app.js                # App initialization & entry point
│   ├── router.js             # Page routing logic
│   ├── dataService.js        # API/Database fetch service
│   ├── modHub.js             # Community creations module
│   ├── docs.js               # Wiki/Documentation module
│   ├── patchNotes.js         # Patch notes module
│   ├── downloadManager.js    # Download modal handler
│   └── mobileMenu.js         # Mobile navigation toggle
├── assets/
│   ├── images/
│   │   ├── BG.png            # Hero background
│   ├── logos/
│   │   ├── Icon.png          # Favicon
│   │   ├── LogoLong.png      # Header logo
│   │   ├── LogoSmall.png     # Secondary logo
│   │   └── LogoSquare.png    # Square logo variant
│   └── screenshots/
│       ├── Screenshot (104).png  # Main menu
│       ├── Screenshot (105).png  # Creation suite
│       ├── Screenshot (106).png  # Career modes
│       ├── Screenshot (108).png  # Global rosters
│       ├── Screenshot (109).png  # Championship editor
│       └── Screenshot (110).png  # GM calendar
├── LICENSE
├── README.md                 # This file

```

## Key Changes & Improvements

### ✅ Removed
- **"Exclusive Release" warning section** - Cleaner, more professional homepage
- **Inline JavaScript** - All code moved to external modules
- **Inline CSS** - All styles moved to external stylesheet
- **Mixed file references** - Consolidated into organized asset folders

### ✅ Added
- **Modular JavaScript architecture** - Each feature in its own file
- **Organized CSS** - Single stylesheet with clear sections
- **Asset organization** - Images sorted into logical folders (logos, screenshots, images)
- **Better maintainability** - Easier to find and update code
- **Scalability** - Simple to add new features as separate modules

### ✅ Updated
- All image/logo references use new `assets/` paths
- CSS moved to `css/styles.css`
- JavaScript split into 8 focused modules
- Tailwind config remains in HTML head for CDN usage

## File Descriptions

### HTML (index.html)
- Clean, semantic HTML structure
- External CSS and JS references
- Tailwind CDN for styling
- No inline styles or scripts

### CSS (css/styles.css)
- Root variables for colors and spacing
- Global body and element styles
- Animations (@keyframes)
- Utility classes
- Scrollbar customization
- Table & code styling for Wiki

### JavaScript Modules

**js/dataService.js**
- Fetches data from `database.json`
- Centralized API calls
- Error handling

**js/router.js**
- Page navigation logic
- Active state management
- Scroll to top on navigation

**js/modHub.js**
- Community creations display
- Mock data for mods
- Filter functionality
- Render grid items

**js/docs.js**
- Wiki/documentation content
- Installation guides (Android/Windows)
- Costume customization guide
- Asset loader documentation
- Dynamic content switching

**js/patchNotes.js**
- Patch history rendering
- Mock patch data
- Timeline-style display

**js/downloadManager.js**
- Download modal management
- Platform selection (Windows/Android)
- Download simulation

**js/mobileMenu.js**
- Mobile menu toggle
- Navigation on mobile devices

**js/app.js**
- App initialization
- Module startup
- Fallback image loading

## Asset Organization

### Logos (assets/logos/)
- Icon.png - Favicon
- LogoLong.png - Full horizontal logo
- LogoSmall.png - Small variant
- LogoSquare.png - Square variant for hero

### Images (assets/images/)
- BG.png - Hero section background

### Screenshots (assets/screenshots/)
- Six game screenshots for gallery display
- Used in Visual Showcase section

## How to Use

1. **Open** - Simply open `index.html` in a browser
2. **Development** - Edit files in respective folders:
   - Styling changes → `css/styles.css`
   - Logic changes → `js/*.js` files
   - Content changes → `index.html` or respective module files

3. **Adding New Features**:
   - Create new `.js` file in `js/` folder
   - Add `<script src="js/yourfile.js"></script>` to `index.html`
   - Follow existing module pattern

4. **Updating Styles**:
   - Add new CSS to `css/styles.css`
   - Use existing color variables (--brand-blue, --brand-red, etc.)
   - Maintain organization with section comments

## Color Scheme
- **Primary Dark**: #050505
- **Panel Dark**: #111111
- **Border**: #222222
- **Brand Blue**: #0055FF
- **Brand Red**: #D81118
- **Brand Gold**: #FFD700

## Dependencies
- Tailwind CSS (CDN)
- Font Awesome Icons (CDN)
- Google Fonts (Inter, Oswald)

## Notes
- The project uses Tailwind's utility classes for responsive design
- All JavaScript modules are vanilla (no frameworks)
- Images should be optimized and added to appropriate asset folders
- Mock data is included for development; integrate with `database.json` for production

## Future Improvements
- Add build tools (Webpack, Parcel)
- Implement proper state management
- Add TypeScript support
- Create API integration layer
- Add unit tests
- Performance optimization

---

**Created**: November 27, 2025  
**Project**: Wres Republica Web  
**Status**: Reorganized & Refactored
