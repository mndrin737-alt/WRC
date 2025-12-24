/* ============================================
   MOD HUB MODULE - Community Creations
   ============================================ */

const mockMods = [
    { id: 1, title: "The Rock '99", type: "superstar", creator: "AttitudeEraCaws", rating: 5, dl: "12K", img: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=400" },
    { id: 2, title: "Nitro Arena", type: "arena", creator: "WCWProject", rating: 4, dl: "8.5K", img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400" },
    { id: 3, title: "Big Gold Belt", type: "belt", creator: "BeltMakerX", rating: 5, dl: "22K", img: "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&q=80&w=400" },
    { id: 4, title: "CM Punk (AEW)", type: "superstar", creator: "BITW_01", rating: 3, dl: "4K", img: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=400" },
    { id: 5, title: "Tokyo Dome", type: "arena", creator: "PuroLover", rating: 5, dl: "15K", img: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=400" },
    { id: 6, title: "Kenny Omega", type: "superstar", creator: "Cleaner", rating: 4, dl: "9K", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400" }
];

const modHub = {
    init: async () => {
        let data = mockMods;
        const dbData = await dataService.fetchData();
        if (dbData && dbData.mods) data = dbData.mods;
        modHub.render(data);
    },

    render: (data) => {
        const grid = document.getElementById('mod-grid');
        grid.innerHTML = data.map(mod => `
            <div class="group bg-gradient-to-br from-brand-panel/60 via-black/40 to-black border-2 border-brand-border/40 hover:border-brand-blue/80 rounded-xl overflow-hidden transition-all duration-300 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-brand-blue/30">
                <div class="aspect-square bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
                    <img src="${mod.img}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="${mod.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div class="absolute top-3 right-3 bg-gradient-to-r from-brand-blue to-brand-blue/60 px-3 py-1 text-xs font-bold uppercase text-white rounded-lg backdrop-blur-sm border border-brand-blue/50 shadow-lg shadow-brand-blue/30">${mod.type}</div>
                </div>
                <div class="p-5">
                    <h4 class="font-display font-bold text-white uppercase text-lg mb-1 group-hover:text-brand-gold transition-colors truncate">${mod.title}</h4>
                    <p class="text-xs text-gray-400 mb-3">by <span class="text-brand-blue font-semibold">${mod.creator}</span></p>
                    <div class="flex justify-between items-center mb-4 pb-4 border-b border-brand-border/30">
                        <div class="text-brand-gold text-sm flex gap-0.5">${'<i class="fa-solid fa-star"></i>'.repeat(mod.rating)}</div>
                        <div class="text-xs text-gray-400 bg-black/40 px-2 py-1 rounded-lg"><i class="fa-solid fa-download mr-1 text-brand-blue"></i>${mod.dl}</div>
                    </div>
                    <button onclick="globalHandlers.downloadMod('${mod.title.replace(/'/g, "\'")}')" class="w-full bg-gradient-to-r from-brand-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs font-bold uppercase py-3 rounded-lg transition-all shadow-lg shadow-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/50 hover:scale-105 flex items-center justify-center gap-2"><i class="fa-solid fa-download"></i>Download</button>
                </div>
            </div>
        `).join('');
    },

    filter: (type) => {
        document.querySelectorAll('.mod-filter').forEach(el => {
            el.classList.remove('bg-brand-blue', 'text-white');
            el.classList.add('bg-brand-panel', 'text-gray-300');
        });
        event.target.classList.remove('bg-brand-panel', 'text-gray-300');
        event.target.classList.add('bg-brand-blue', 'text-white');

        const filtered = type === 'all' ? mockMods : mockMods.filter(m => m.type === type);
        modHub.render(filtered);
    }
};
