const goBTN = document.getElementById("go-game-btn");

if (goBTN != null){

    goBTN.addEventListener('click', () => {
        browser.tabs.create({
            active: true,
            url: "game.html",
        }, null);
    })
}