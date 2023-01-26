const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar  aşağıya */
const baslik = document.querySelectorAll("a");
baslik[0].textContent = siteContent.nav["nav-item-1"];
baslik[1].textContent = siteContent.nav["nav-item-2"];
baslik[2].textContent = siteContent.nav["nav-item-3"];
baslik[3].textContent = siteContent.nav["nav-item-4"];
baslik[4].textContent = siteContent.nav["nav-item-5"];
baslik[5].textContent = siteContent.nav["nav-item-6"];

for (let i = 0; i < baslik.length; i++) {
  baslik[i].classList.add("italic");
}

document
  .querySelector("#logo-img")
  .setAttribute("src", siteContent.images["logo-img"]);

document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;
document
  .querySelector("#cta-img")
  .setAttribute("src", siteContent.images["cta-img"]);

const ozelbaslik = document.querySelectorAll("h4");
const birinciparagraf = document.querySelectorAll("p");
ozelbaslik[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
birinciparagraf[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];

ozelbaslik[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
birinciparagraf[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

document
  .querySelector("#middle-img")
  .setAttribute("src", siteContent.images["accent-img"]);

ozelbaslik[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
birinciparagraf[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];

ozelbaslik[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
birinciparagraf[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

ozelbaslik[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];
birinciparagraf[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

document.querySelector(".contact h4").classList.add("contact");
document.querySelector(".contact h4").textContent =
  siteContent.iletisim["iletişim-h4"];
const aslidvrc = document.querySelectorAll(".contact p");
aslidvrc[0].textContent = siteContent.iletisim.adres;
aslidvrc[2].textContent = siteContent.iletisim.email;
aslidvrc[1].textContent = siteContent.iletisim.telefon;

document.querySelector("footer a").textContent = siteContent.footer.copyright;
