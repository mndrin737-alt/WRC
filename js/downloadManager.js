/* ============================================
   DOWNLOAD MANAGER MODULE - Download Handling
   ============================================ */

const downloadManager = {
    openModal: () => {
        document.getElementById('download-modal').classList.remove('hidden');
    },

    closeModal: () => {
        document.getElementById('download-modal').classList.add('hidden');
    },

    start: (platform) => {
        const btn = event.currentTarget;
        btn.classList.add('opacity-50', 'pointer-events-none');
        btn.innerHTML = `
            <div class="text-center">
                <div class="loader inline-block w-8 h-8 rounded-full border-4 border-t-brand-red border-gray-600 mb-2"></div>
                <p class="text-white font-bold">STARTING...</p>
            </div>
        `;

        setTimeout(() => {
            alert("This is a demo. In production, this would trigger the file download.");
            downloadManager.closeModal();
            btn.classList.remove('opacity-50', 'pointer-events-none');
        }, 2000);
    }
};
