// Arayüz oluşturucu yardımcı fonksiyonlar
function filterCat(category) {
    if(category === 'Hepsi') return displayApps(appData);
    displayApps(appData.filter(a => a.cat === category));
}
console.log("Kotlin Builders yüklendi.");
