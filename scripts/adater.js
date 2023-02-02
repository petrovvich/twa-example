function ready() {
    Telegram.WebApp.ready();
}

function loadData() {
    const tgData = Telegram.WebApp.initData || '{}';
    console.log(tgData);
    return tgData;
}
