const btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    const hexcode1 = document.querySelector('#hexcode1');
    const hexcode2 = document.querySelector('#hexcode2');
    // hex code numbers and strings Data Base
    let hexDB = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hex1 = "",
        hex2 = "";

    let randomIndex = 0;

    for (let i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * hexDB.length);
        hex1 += hexDB[randomIndex];
        randomIndex = Math.floor(Math.random() * hexDB.length);
        hex2 += hexDB[randomIndex];
    }

    document.body.style.background = `linear-gradient(to left, #${hex1}, #${hex2}`;
    hexcode1.textContent = hex1;
    hexcode2.textContent = hex2;
});
