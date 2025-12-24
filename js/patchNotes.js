/* ============================================
   PATCH NOTES MODULE - Updates & Changelog
   ============================================ */

const mockPatches = [
    {
        ver: "1.0.4",
        date: "Nov 25, 2025",
        title: "Roaming & Physics Update",
        body: "Added open-world roaming outside the arena. Overhauled ragdoll weight detection for slams. Fixed crash in Career Mode week 4."
    },
    {
        ver: "1.0.3",
        date: "Nov 10, 2025",
        title: "Asset Loader Hotfix",
        body: "Fixed texture mapping on custom collars and pads. Improved Asset Loader logs for failed imports."
    },
    {
        ver: "1.0.0",
        date: "Oct 31, 2025",
        title: "Wres Republica Launch",
        body: "The revolution begins. Full career mode, 10 rosters, and 300+ moves."
    }
];

const patchNotes = {
    init: async () => {
        let data = mockPatches;
        const dbData = await dataService.fetchData();
        if (dbData && dbData.patches) data = dbData.patches;

        const feed = document.getElementById('patch-feed');
        feed.innerHTML = data.map(patch => `
            <div class="border-l-2 border-brand-red pl-6 relative">
                <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-red"></div>
                <div class="flex items-baseline gap-4 mb-2">
                    <h3 class="text-2xl font-bold font-display text-white">${patch.ver}</h3>
                    <span class="text-sm text-gray-500 font-mono">${patch.date}</span>
                </div>
                <h4 class="text-lg font-bold text-gray-200 mb-2">${patch.title}</h4>
                <p class="text-gray-400 leading-relaxed">${patch.body}</p>
            </div>
        `).join('');
    }
};
