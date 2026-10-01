# BPGPT

Girişimlerin ne olduğunu, hangi işi çözdüğünü ve gelir seçeneklerini anlatan mobil öncelikli portföy atlası. İki araştırma koleksiyonunun fikirleri tek ana teklif ve aşamalı ürünleşme yolunda uzlaştırılır.

## Yayın

- Site: https://karacaismail.github.io/bpgpt/
- Birleşik strateji: [strateji.html](strateji.html)
- Kriter sözlüğü: [kriterler.html](kriterler.html)
- Yöntem: [yontem.html](yontem.html)
- Google Sheets modeli: [Google Sheets’te aç](https://docs.google.com/spreadsheets/d/1Gg83iAAs0g5xVeNzanD90TTprQ0l70u-OZmDJbaJ2nc/edit?usp=drivesdk)
- Proje tanımları: [data/girisimler.json](data/girisimler.json)
- Puan gerekçeleri: [puanlar.html](puanlar.html)
- QA kanıtı: [qa/QA.md](qa/QA.md)
- Kaynak kapsamı: [kapsam.html](kapsam.html)
- Düzenlenebilir metin: [birlesik-strateji.md](birlesik-strateji.md)

Ana sayfa önce girişimi hatırlamak, ardından gelir açısından karşılaştırmak için kullanılır. Her ailede yazılım türü, tanım, amaç, kullanıcı, üç adımlı akış, örnek, mevcut durum ve önerilen ilk teklif bulunur. Strateji sayfası derin okuma için kullanılır. JavaScript olmadan temel içerik okunur; arama ve sıralama desteklenen tarayıcılarda aşamalı olarak eklenir.

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

## Atlası yeniden üretme ve doğrulama

```sh
python3 tools/build_site.py
node tests/browser-check.cjs
node tests/atlas-check.cjs
node tests/atlas-profile-check.cjs
```

Üretim Python 3.9+ standart kitaplığıyla çalışır. Testler mevcut Playwright kurulumunu kullanır; browser executable yolları ortam değişkenleriyle seçilebilir. `tests/visual-diff.cjs` mevcut PNGJS/Pixelmatch ile önce/sonra görsel farkını çıkarır; referansları onaylamaz veya değiştirmez. İlk ana rota ham HTML+CSS+JS+favicon bütçesi 200.000 byte; tam puan gerekçeleri kullanıcı `puanlar.html` bağlantısını açınca yüklenir.

Yeni UX doğrulaması: [qa/atlas-v2/QA.md](qa/atlas-v2/QA.md). Google Sheets bağlantısı kullanıcı tarafından verilmiştir; bu repo Drive paylaşım izinlerini değiştirmez.
