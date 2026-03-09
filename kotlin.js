const appData = [
    { 
        id: 777, 
        name: "SJ App Pro", 
        cat: "Oyun & Araçlar", 
        icon: "https://img.icons8.com/fluency/100/commander.png",
        apk: "../SJ_app.apk" // Bu dosya gerçekten ana klasörde olmalı
    },
    // Diğer uygulamalar...
];

function displayApps(list) {
    const grid = document.getElementById('appGrid');
    if (!grid) return; 

    grid.innerHTML = list.map(app => `
        <div class="app-card">
            <img src="${app.icon}">
            <h4>${app.name}</h4>
            <p>${app.cat}</p>
            <a href="download.html?id=${app.id}" class="btn-view">BURAK'IN APK'SINI İNDİR</a>
        </div>
    `).join('');
}
