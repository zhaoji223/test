async function getStockPriceByName(name) {
    const symbol = await getStockSymbol(name);
    const stockPrice = await getStockPrice(symbol);
    return stockPrice;
}
function getStockSymbol(param) {
    console.log('getStockSymbol')
    return param
}
function getStockPrice(param) {
    console.log('getStockPrice')
    return param
}

getStockPriceByName('goog').then(function (result) {
    console.log(result);
});

// getStockSymbol
// getStockPrice
// goog