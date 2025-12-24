/* ============================================
   APP INITIALIZATION - Main Entry Point
   ============================================ */

window.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    modHub.init();
    patchNotes.init();
    docs.show('intro');

    // Set fallback for hero background image
    const img = new Image();
    img.src = 'assets/images/BG.png';
    img.onerror = () => {
        document.getElementById('hero-bg').style.backgroundImage =
            "url('https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop')";
    };
});
