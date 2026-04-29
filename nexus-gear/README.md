# NEXUS GEAR - Site web

## Structura
- `index.html` - pagina principala (acasa)
- `catalog.html` - catalog complet cu filtre pe categorie + cautare
- `produs.html` - pagina individuala produs (acceseaza cu ?id=N)
- `despre.html`, `contact.html`, `cos.html`, `favorite.html`, `contul-meu.html`
- `style.css` - toate stilurile (design dark gaming)
- `script.js` - logica (cos, search, render produse, pagina detalii)
- `products.js` - **BAZA DE DATE PRODUSE** (modifici aici)
- `images/` - toate imaginile

## Cum adaugi un produs nou

1. Pune poza in `images/products/` (ex: `mouse-2.jpg`)
2. Deschide `products.js`
3. Copiaza un obiect din lista PRODUSE si adauga-l. Exemplu:

```js
{
  id: 8,                            // urmator id liber
  nume: "Mouse Wireless XYZ",
  categorie: "mouse",               // mouse, tastatura, casti, gamepad, scaune, mese, monitoare
  pret: 199,
  pretVechi: 250,                   // sau null daca nu e reducere
  imagine: "images/products/mouse-2.jpg",
  descriere: "Descriere scurta (2 randuri).",
  detalii: "Descriere lunga afisata pe pagina de detaliu.",
  specs: {
    "Senzor": "PixArt 3389",
    "DPI": "16000",
    "Greutate": "75g"
  },
  stoc: true,
  nou: true                         // afiseaza badge "NOU"
}
```

4. Salveaza fisierul. Reincarca pagina. Gata!

## Pagina individuala produs
Fiecare produs are pagina sa proprie automat la `produs.html?id=ID_PRODUS`.
Aici se afiseaza poza mare, descrierea completa, specificatiile tehnice
si recomandari de alte produse.

## Lansare
Deschide `index.html` direct in browser sau urca toate fisierele pe orice
hosting (cPanel, Netlify, GitHub Pages, etc.).

Pentru testare locala:
```
python3 -m http.server 8000
```
Apoi acceseaza http://localhost:8000
