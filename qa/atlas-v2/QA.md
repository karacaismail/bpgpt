# Girişim atlası UX doğrulaması — 1 Ekim 2026

## Değişiklik ve kabul

Önceki akış projeyi açıklamadan puan ve finansı gösteriyordu. Yeni akışta ilk soru “Bu ne yazılımı, hangi iş için var?”dır. 46 aile için tür, yalın tanım, amaç, kullanıcı, üç adımlı akış, örnek, mevcut durum ve önerilen ilk teklif ayrı alanlardır. Google Sheets bağlantısı kullanıcı tarafından verilmiştir; Drive erişim izinleri değiştirilmemiştir.

PASS: tanıma görünümü ile gelir karşılaştırması arasında geçiş arama metni, kategori ve açık girişimi korur. Arama açıklama/yazılım türünü de kapsar; kategori ile birlikte çalışır, sıfır sonuç ve filtre temizleme durumları vardır. Varsayılan görünüm isim sırasındadır; karşılaştırma mevcut nitel puanları kullanır. 46 model puanı veya finans girdisi değiştirilmemiştir.

## Gerçek çalıştırılan kontroller

- RED: uygulamadan önce `tests/atlas-check.cjs`, üç motorda 46 tanım/tür ve iki görünüm bulunmadığı için başarısız oldu. `before/atlas-results.json`.
- PASS: `tests/atlas-check.cjs`, 15 kontrol kaydı: 46 tanım/tür, QRAL amaç/3adım/örnek, görünüm değişince query/açık durum korunması, developer kategorisinde15, boş aramada0 ve temizlenince46.
- PASS: `tests/browser-check.cjs`, 66 kayıt, Chromium154.0.8037.58 / Firefox155.0 / WebKit26.5; 320×480/568 → 360×640 → 375×667 → 390×844 → yatay480×320/568×320 → 767/768/769 ve899/900/901 → 1440. Tek H1/Türkçe, yatay taşma ve bozuk bölüm bağlantısı yok. Arama, sıralama, Enter/Space, gerçek Tab/Shift+Tab odağı ve resize metin/odak kontrolü geçti. Beş belge rotası200.
- PASS: `tests/atlas-profile-check.cjs`, Chromium gerçek emüle touch ve reduced-motion tercihi, 320px dokunma, açık QRAL/görünüm/query korunarak yatay resize, görünür kritik kontrol hedefleri ≥48×48. Playwright viewport değişimi dokunma emülasyonunu sıfırladığı için giriş yeteneği ölçüm öncesi CDP ile açıkça yeniden kuruldu; bu gerçek telefon dönüşü testi değildir. CSS any-pointer sinyali yeniden doğru hedef48 üretti.
- PASS: %200 kök yazı boyutu ile 320px reflow; bu gerçek browser zoom veya fiziksel ekran klavyesi testi değildir.
- PASS: JavaScript kapalıyken46 girişim ve native ayrıntıları okunur/açılır, kullanılamayan arama/görünüm kontrolleri gizlidir.
- PASS: soğuk ilk yol istekleri yalnız index, style.css, app.js, tokens.css ve favicon.svg. `puanlar.html`, JSON veri, font, uzak görsel veya harici kaynak ilk yolda istenmedi. Yerel HTTP decoded/encoded gövde toplamı yaklaşık182KB; aktarım boyutları profile-results.json'dadır. 200.000 ham byte ana yol bütçesi korunmuştur. Puanların16gerekçesi ayrı puanlar sayfasında korunur ve yalnız kullanıcı navigasyonunda yüklenir.
- PASS: HTML bağlantıları, Google Sheets hedefi, Node parse ve Python3.9.6 derleme/üretim. `python3 tools/build_site.py` public veriden bağımlılıksız üretir. Public metinlerde token/yerel yol/özel müşteri ilişkisi taraması temiz; özgün486dosya SHA-256 karşılaştırmasında değişmedi.

## Görsel ve bağımsız inceleme

Computed style teşhisi dokunma kontrolünde tarayıcının mavi rgba(51,181,229,.4) vurgusunu gösterdi; semantik --tap tokenı marka yeşili rgba(27,89,68,.14) olarak uygulandı. Dokunmada summary border0/outline none/shadow none; klavyede tek görünür focus outline korunur. Fazladan kapsayıcı focus çerçevesi yoktur.

Önce/sonra görüntüleri ve `tests/visual-diff.cjs` ile threshold0/includeAA:true farkı kaydedildi. Sayfa zemin ve akış değiştiğinden320farkının tüm pikselleri değişir; bu beklenen görsel değişiklik kanıtıdır, başarı testi değildir. Geçmiş onaylı referans değiştirilmedi, yeni baseline sessizce onaylanmadı.

Bağımsız inceleyici başlangıç320/1440, açık QRAL320, önce/sonra ve fark görüntülerini gerçekten gördü; tam app.js ve build kaçışlama/veri doğrulama kesitlerini okudu. Sağlanan kapsamda aksiyon gerektiren bulgu kalmadı. Tam diff/46kaynak/Excel bağımsız okunmadı ve komutlar bağımsız çalıştırılmadı. İnceleme bütün veri doğruluğu veya baseline onayı değildir.

## Sınırlar

NOT_RUN: fiziksel iOS/Android/macOS Safari, ekran okuyucu, sanal klavye/safe area, gerçek browserzoom, CI ve bütün46kaynağın bağımsız yeniden denetimi. WebKit headless çalışması Safari cihaz sertifikası değildir. NOT_APPLICABLE: özel dropdown, ayrı cihaz kabuğu ve ağır medya paketleri; uygulamada yoktur.
