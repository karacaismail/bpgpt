# BPGPT

Reklam satın almadan gelir üretmeye yönelik yazılım portföyü karar dosyası. İki araştırma koleksiyonunun fikirleri tek ana teklif ve aşamalı ürünleşme yolunda uzlaştırılır.

## Yayın

- Site: https://karacaismail.github.io/bpgpt/
- Birleşik strateji: [strateji.html](strateji.html)
- Kriter sözlüğü: [kriterler.html](kriterler.html)
- Yöntem: [yontem.html](yontem.html)
- Düzenlenebilir Excel: [proje-secim-modeli.xlsx](proje-secim-modeli.xlsx)
- QA kanıtı: [qa/QA.md](qa/QA.md)
- Kaynak kapsamı: [kapsam.html](kapsam.html)
- Düzenlenebilir metin: [birlesik-strateji.md](birlesik-strateji.md)

Ana sayfa proje karşılaştırması için, strateji sayfası derin okuma için kullanılır. JavaScript olmadan temel içerik okunur; arama ve sıralama desteklenen tarayıcılarda aşamalı olarak eklenir.

## Karar yöntemi

Önce telafi edilemeyen koşullar, ardından ağırlıklı nitel uygunluk, ayrı kanıt durumu, nakit hesabı ve kapasite kontrolü değerlendirilir. Puan başarı olasılığı değildir. Fiyat, maliyet, süre ve dönüşüm girdileri gerçekleşmiş müşteri verisi olmadığı yerde senaryo varsayımı olarak gösterilir. Kaynaklarda yer alan aynı varlığın farklı ticari yorumları, ilk teklif ve sonraki aşama olarak ayrıştırılır.

Kişisel kayıtlar, gerçek müşteri finansalları, operasyonel erişim ayrıntıları ve yerel bilgisayar yolları yayımlanmaz. Kaynak koleksiyonları değiştirilmez; bu repo yeni sentezi ve kamuya uygun kapsam kaydını içerir. Ham sunumlar, özel finansal modeller ve eski not yedekleri internete kopyalanmaz.

## Yerel çalışma

```sh
python3 -m http.server 8768 --bind 127.0.0.1
```

Site standart statik HTML/CSS/JavaScript kullanır. Paket kurulumu veya build sunucusu gerekmez. GitHub Pages `main` dalının kökünden yayımlanır; `.nojekyll` statik dosyaları korur.

## Lisans

Henüz bir lisans seçilmemiştir. Public repo görünürlüğü lisans değildir; kullanıcı onayı olmadan açık kaynak veya içerik lisansı seçilmez.
