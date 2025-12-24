/* ============================================
   DOCUMENTATION MODULE - Wiki & Guides
   ============================================ */

const docs = {
    data: {
        intro: `
            <h1>Welcome to the Revolution</h1>
            <p>Wres Republica is a sandbox simulation built on freedom. If you wish to elevate your gaming experience by incorporating custom textures, themes, or videos, these docs cover it all.</p>
            <p>We recommend starting in Career Mode to build your legacy.</p>
        `,
        install_android: `
            <h1>Android Installation</h1>
            <ol class="list-decimal pl-5 space-y-2">
                <li>Extract the 7zip file and install the game APK.</li>
                <li>Open the game once to allow it to generate required folders.</li>
                <li><strong>Fixing Missing Bundle:</strong> Return to extraction folder, go to "bundles" and copy all files.</li>
                <li>Paste files into: <code>Android/Data/com.MNDRIN.WresRepublica/files/MNDRIN/Bundles</code></li>
                <li><strong>Android 13+ Permissions:</strong> Use ZArchiver. When prompted, select "Use this folder" to grant write access to Android/Data.</li>
            </ol>
        `,
        install_win: `
            <h1>Windows Installation</h1>
            <ol class="list-decimal pl-5 space-y-2">
                <li>Extract the 7zip file and run the installer.</li>
                <li>Open game once to generate folders. Requires active internet for server check.</li>
                <li><strong>Fixing Missing Bundle:</strong> Copy files from extracted "bundles" folder.</li>
                <li>Paste into: <code>C:/users/%username%/Wres Republica/MNDRIN/Bundles</code></li>
            </ol>
        `,
        costumes: `
            <h1>Custom Costumes</h1>
            <p>Place JPG files in the corresponding directories. Naming convention is critical.</p>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Directory</th>
                        <th>Filename Format</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Arms</td>
                        <td>Costumes/arms</td>
                        <td>arm01.jpg, arm02.jpg...</td>
                    </tr>
                    <tr>
                        <td>Bodies</td>
                        <td>Costumes/Bodies</td>
                        <td>body01.jpg, body02.jpg...</td>
                    </tr>
                    <tr>
                        <td>Legs</td>
                        <td>Costumes/Legs</td>
                        <td>legs01.jpg, legs02.jpg...</td>
                    </tr>
                    <tr>
                        <td>Faces</td>
                        <td>Costumes/Faces</td>
                        <td>face01.jpg, face02.jpg...</td>
                    </tr>
                    <tr>
                        <td>Masks</td>
                        <td>Costumes/Faces/Masks</td>
                        <td>mask01.png, mask02.png...</td>
                    </tr>
                </tbody>
            </table>
        `,
        roster: `
            <h1>Roster & Titles</h1>
            <p>There are 10 subfolders (roster00 to roster09) for leagues like Legends, AEW, NJPW, etc.</p>
            <h3>Changing Logos</h3>
            <p>Replace <code>Roster/icon/icon.png</code> in the specific roster folder.</p>
            <h3>Titles</h3>
            <p>Place PNGs in <code>Roster/titles</code> named:</p>
            <ul>
                <li>title 01: Main Title</li>
                <li>title 02: Mid-card Title</li>
                <li>title 03: Women's Title</li>
                <li>title 04: Tag Title</li>
            </ul>
        `,
        media: `
            <h1>Music & Videos</h1>
            <h3>Themes</h3>
            <p>Place MP3s in <code>Music/Themes</code> named <code>theme01.mp3</code>, <code>theme02.mp3</code>, etc.</p>
            <h3>Entrances</h3>
            <p>Video clips go in <code>Videos/Entrances/EntranceXX</code>.</p>
            <ul>
                <li>Maintron: 720x480 (maintron.mp4)</li>
                <li>Apron: 660x240 (apronpost.mp4)</li>
                <li>Barricade: 720x120 (barricade.mp4)</li>
            </ul>
        `,
        loader: `
            <h1>Asset Loader</h1>
            <p>The Asset Loader logs failed imports. To access it: <strong>Main Menu > Creations > Settings > Asset Loader</strong>. Use this to debug missing textures or incorrect filenames.</p>
        `
    },

    show: (key) => {
        const content = docs.data[key] || "Content not found.";
        document.getElementById('doc-content').innerHTML = content;

        // Update active nav button
        document.querySelectorAll('[onclick*="docs.show"]').forEach(btn => {
            btn.classList.remove('active');
        });
        event.target.classList.add('active');
    }
};
