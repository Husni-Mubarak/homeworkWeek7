function luasPersegi(pSisi) {
  return pSisi * pSisi;
}

function luasPersegiPanjang(pSisi, lSisi) {
  return pSisi * lSisi;
}

function kelilingPersegi(pSisi) {
  return pSisi * 4;
}

function kelilingPersegiPanjang(pSisi, lSisi) {
  return (pSisi + lSisi) * 2;
}

module.exports = { luasPersegi, luasPersegiPanjang, kelilingPersegi, kelilingPersegiPanjang };
