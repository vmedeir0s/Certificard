var listaFilmes = ["https://img.elo7.com.br/product/zoom/266036C/big-poster-filme-vingadores-ultimato-lo47-tamanho-90x60-cm-vingadores.jpg", "https://img.elo7.com.br/product/zoom/1E30435/big-poster-vingadores-guerra-infinita-tamanho-90x-0-cm-lo032-poster.jpg", "https://img.elo7.com.br/product/zoom/267708A/big-poster-filme-guardioes-da-galaxia-2-lo02-tam-90x60-cm-guardioes-da-galaxia.jpg"];

for (var i=0; i<listaFilmes.length;i++) {
    document.write("<img src=" + listaFilmes[i] + ">")
}