/* ============================================
   MOBILE MENU MODULE - Navigation Menu
   ============================================ */

const mobileMenu = {
    toggle: () => {
        document.getElementById('mobile-menu').classList.toggle('translate-x-full');
    },

    close: () => {
        document.getElementById('mobile-menu').classList.add('translate-x-full');
    }
};
