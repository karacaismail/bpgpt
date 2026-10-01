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
