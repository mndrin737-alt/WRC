/* ============================================
   ROUTER MODULE - Navigation Logic
   ============================================ */

const router = {
    navigate: (pageId) => {
        // Update nav items
        document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
        const navBtn = document.getElementById(`nav-${pageId}`);
        if (navBtn) navBtn.classList.add('active');

        // Update page sections
        document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
        document.getElementById(`page-${pageId}`).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    }
};
