# Quick Reference Guide

## 📁 File Structure at a Glance

```
Project Root/
├── index.html ..................... Main HTML (clean interface)
├── css/styles.css ................. All styling
├── js/
│   ├── app.js ..................... Initialize app
│   ├── router.js .................. Navigate pages
│   ├── dataService.js ............. Fetch data
│   ├── modHub.js .................. Mods/Community
│   ├── docs.js .................... Wiki/Help
│   ├── patchNotes.js .............. Updates
│   ├── downloadManager.js ......... Downloads
│   └── mobileMenu.js .............. Mobile nav
├── assets/
│   ├── images/BG.png .............. Hero background
│   ├── logos/ ..................... All logo files
│   └── screenshots/ ............... Game screenshots
├── PROJECT_STRUCTURE.md ........... Full documentation
├── ORGANIZATION_SUMMARY.md ........ Before/after comparison
└── QUICK_REFERENCE.md ............. This file
```

## 🎨 CSS Variables

Located in `css/styles.css`:

```css
--primary-dark: #050505;       /* Main background */
--panel-dark: #111111;         /* Panel backgrounds */
--border-dark: #222222;        /* Borders */
--brand-blue: #0055FF;         /* Primary color */
--brand-red: #D81118;          /* Accent color */
--brand-gold: #FFD700;         /* Highlight color */
```

## 🔧 Common Tasks

### Edit Colors
1. Open `css/styles.css`
2. Find `:root` section
3. Update color variables

### Add New Page
1. Add HTML section in `index.html`
2. Create JS module in `js/`
3. Import script in `index.html`
4. Add router case in `js/router.js`

### Change Styling
1. Open `css/styles.css`
2. Add/modify CSS rules
3. Use Tailwind classes in HTML

### Update Content
1. **Home**: Edit `index.html` home section
2. **Mods**: Update `mockMods` in `js/modHub.js`
3. **Wiki**: Update `docs.data` in `js/docs.js`
4. **Patches**: Update `mockPatches` in `js/patchNotes.js`

### Debug Issues
1. Check browser console (F12)
2. Check `js/dataService.js` for API errors
3. Verify image paths in `index.html`
4. Check CSS in `css/styles.css`

## 📦 Assets

### Logo Files
- `Icon.png` - Browser tab icon
- `LogoLong.png` - Header logo
- `LogoSmall.png` - Smaller variant
- `LogoSquare.png` - Square variant

### Screenshot Files
- All in `assets/screenshots/`
- Used in Visual Showcase gallery
- Format: PNG
- Reference: Change `screenshot/*.png` in gallery section

### Images
- Background: `assets/images/BG.png`
- Can add more images here

## 🚀 Running the Project

1. Open `index.html` in browser
2. All resources load from relative paths
3. No build process required
4. Works offline (after first load)

## 🔗 Key Functions

### Navigation
```javascript
router.navigate('home')      // Go to home
router.navigate('mods')      // Go to mods
router.navigate('docs')      // Go to wiki
router.navigate('patch')     // Go to patch notes
```

### Download
```javascript
downloadManager.openModal()  // Show download dialog
downloadManager.closeModal() // Hide download dialog
downloadManager.start('win') // Start Windows download
downloadManager.start('android') // Start Android download
```

### Mobile Menu
```javascript
mobileMenu.toggle()          // Toggle menu visibility
mobileMenu.close()           // Close menu
```

### Fetch Data
```javascript
const data = await dataService.fetchData()
// Returns database.json content or null
```

## 📝 Module Exports

Each JS file is a namespace object. Example:

```javascript
// dataService.js
const dataService = {
    fetchData: async () => { ... }
};

// router.js
const router = {
    navigate: (pageId) => { ... }
};

// Access them: router.navigate('home')
```

## 🎯 Customization Points

### Colors
- File: `css/styles.css` → `:root` variables
- HTML Classes: Use Tailwind (e.g., `text-brand-red`)

### Typography
- Font Config: Tailwind config in `index.html` head
- CSS: `css/styles.css` for custom fonts

### Animations
- CSS: `css/styles.css` → `@keyframes` section
- Tailwind: Use `animate-*` classes

### Content
- Text: Edit `index.html` directly
- Mock Data: Edit `mockMods`, `mockPatches`, `docs.data`

## 🧪 Testing

### Quick Tests
1. Open DevTools (F12)
2. Check Console for errors
3. Test navigation links
4. Test responsive design (mobile/tablet)
5. Test Download modal

### Common Issues
- **Images missing**: Check `assets/` path
- **Styles not applied**: Check CSS selectors
- **JavaScript errors**: Check console for details
- **Mobile broken**: Check viewport meta tag

## 📞 Module Reference

| Module | Purpose | Key Functions |
|--------|---------|---|
| app.js | Initialize | modHub.init(), patchNotes.init() |
| router.js | Navigation | navigate(pageId) |
| dataService.js | API | fetchData() |
| modHub.js | Mods | init(), render(), filter() |
| docs.js | Wiki | show(key) |
| patchNotes.js | Updates | init() |
| downloadManager.js | Downloads | openModal(), closeModal(), start() |
| mobileMenu.js | Mobile | toggle(), close() |

## 🔄 Data Flow

1. **On Load**: `js/app.js` initializes
2. **Initialize Modules**: Call `modHub.init()`, `patchNotes.init()`, `docs.show('intro')`
3. **Fetch Data**: `dataService.fetchData()` loads `database.json` or uses mock data
4. **Render**: Display content on page
5. **User Interaction**: Navigate, filter, download, etc.

## 📚 Learning Resources

- **HTML**: See `index.html` structure
- **CSS**: Read `css/styles.css` with section comments
- **JavaScript**: Each module in `js/*.js` has clear logic
- **Architecture**: Read `PROJECT_STRUCTURE.md`

## 🎓 Best Practices

1. **Modular Code**: Keep functions focused
2. **Naming**: Use clear, descriptive names
3. **Comments**: Add comments for complex logic
4. **Organization**: Keep files in their folders
5. **Consistency**: Follow existing code style

---

**Last Updated**: November 27, 2025  
**Version**: 1.0.0  
**Status**: Production Ready
