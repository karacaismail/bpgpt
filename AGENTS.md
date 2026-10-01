# BPGPT yayın kuralları

- İki kaynak klasörü salt okunur kalır; yayında yeni sentez, proje seçim modeli ve kapsam envanteri bulunur.
- Git author ve committer: karacaismail <35493655+karacaismail@users.noreply.github.com>. Global yazar koruması korunur; AI co-author/trailer eklenmez.
- Public yayın tercih edilir. Lisans kullanıcı onayı olmadan seçilmez veya değiştirilmez.
- Kişisel dosya yolları, müşteri verileri, kişi atamaları, erişim ayrıntıları ve iç operasyon belgeleri yayımlanmaz.
- Puanlar tercih uyumu değerlendirmesidir; başarı ihtimali, doğrulanmış talep veya gelir garantisi değildir. Gerçek veriler ile senaryo varsayımları ayrılır.
- Her zaman mobil öncelikli: 320 CSS px kritik akış kabulünden sonra 360/375/390, yatay telefon, tablet ve masaüstü doğrulanır.
- Semantik tasarım tokenları, erişilebilir native kontroller ve tek focus-visible göstergesi kullanılır. Klavye varlığı pointer sorgularından çıkarılmaz.
- Site bağımlılıksız statik HTML/CSS/JS'dir; kritik içerik JavaScript olmadan okunur. Proje listesi arama ve sıralama ile aşamalı geliştirilir.
- Yeni özel font, üçüncü taraf script, analitik veya uzak görsel varsayılan olarak eklenmez.
- Kontroller: yerel Python HTTP sunucusu; mevcut Playwright ile Chromium/Firefox/WebKit, dar ekran taşması, arama/sıralama/accordion/odak, hash bağlantıları ve dış istekler. Fiziksel cihaz ve ekran okuyucu kontrolleri ayrıca not_run olarak kaydedilir.

## Girişim atlası

- Varsayılan okuma görünümü `discover`: isim, yazılım türü ve yalın tanım finans puanlarından önce gelir. `decide` görünümü nitel satış uyumu ve örnek nakit hesabını gösterir.
- Gerçek proje adı, varlık nedeni, kullanıcı, üç adımlı akış, somut örnek, bugünkü durum ve önerilen ilk teklif `data/girisimler.json` içinde ayrı alanlardır. Prototip/planı çalışan ürün gibi anlatma.
- Google Sheets menü bağlantısı kullanıcının verdiği paylaşım URL’sidir; paylaşım izni veya Sheet içeriği otomatik değiştirilmez.
- `python3 tools/build_site.py` statik ana sayfa ve puanlar sayfasını üretir; özgün özel model/kaynaklar yayımlanmaz.
- Ana rota ham HTML+CSS+JS+favicon toplamı 200.000 byte altında kalır. `puanlar.html` ve JSON üretim verisi ilk rotada fetch/prefetch edilmez.
- Kontroller: mevcut `tests/browser-check.cjs`, `tests/atlas-check.cjs`, `tests/atlas-profile-check.cjs`; test ortamını ve kaynak isteği listelerini kaydet.

- Her aile `projeler/aile-NN.html` statik rehberine sahiptir. Tanım, amaç, kullanıcı, üç adım, örnek, bugünkü durum ve önerilen iş korunur. `tests/guides-check.cjs` her46rehberi320px/noJS ile doğrular. CSS/app/tokenimport cache anahtarları içerikten üretilir; göreli altklasör varlık yollarını koru.

- Görsel hiyerarşi: editoryal atlas düzeni, koyu yeşil örnek alanı, doğrulanmış portföy metrikleri, sade segment görünüm seçici ve numaralı kompakt proje satırları. Renk, yoğunluk ve hareket tokenları `assets/tokens.css` içinde; görsel değişiklikler mevcut üç tarayıcı ve profil testleriyle doğrulanır.
