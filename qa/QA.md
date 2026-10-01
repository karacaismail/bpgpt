# Doğrulama kaydı — 1 Ekim 2026

## Kapsam ve ortam

PASS: macOS üzerinde headless Chromium 154.0.8037.58, Firefox 155.0 ve WebKit 26.5. Bu WebKit çalışması gerçek Safari/iOS cihaz testi değildir.

Mobil kabul sırası: 320×480/568, 360×640, 375×667, 390×844; yatay 480×320/568×320; tablet 767/768/769; masaüstü 899/900/901 ve 1440. Boyutlar CSS viewport birimidir. Fare tıklaması ve gerçek Tab/Shift+Tab/Enter/Space kullanılmıştır.

## Sonuçlar

- PASS: üç motorda yatay sayfa taşması yok; tek H1, Türkçe dil etiketi ve geçerli bölüm bağlantıları.
- PASS: arama 1 sonuç / 0 sonuç / temizlenince 46 sonuç. İki sıralama, aria-pressed, ayrıntı açma/kapama ve görünür klavye odağı.
- PASS: Chromium dokunma emülasyonunda 320 px ayrıntı tap ile açılır; reduced-motion tercihi ile temel akış çalışır. JavaScript kapalıyken 46 aile ve native ayrıntıları okunur/açılır.
- PASS: yatay yeniden boyutlandırmada arama metni ve odak korunur.
- PASS: strateji, kapsam, kriterler ve yöntem rotaları 200; dar ekranda sayfa taşması yok.
- PASS: çalışma sırasında JavaScript hatası ve dış kaynak isteği yok. Ana sayfa HTML yaklaşık 181 KB; ortak CSS yaklaşık 8,4 KB ve JavaScript 1,8 KB. Harici font, analitik veya görsel yüklenmez. Statik ana yol için ham HTML+CSS+JS bütçesi 200 KB'dır; ayrı belge sayfaları kullanıcı bağlantıyı açınca yüklenir.
- PASS: 46 Excel–JSON puan/nakit satırı ve aylık kohort toplamı eşleşir; hücre hata taraması sıfır. Negatif/boş ağırlık, yerel ağırlık, eksik fiyat, geçersiz kapı, sıfır çalışma saati, geçerli ağırlık değişimi, hedef/bütçe değişimi test edilmiştir. Sıfır başlangıç bütçesi ve sıfır saat fırsat maliyeti geçerli girdidir.
- PASS: iki kaynak klasördeki 200 ve 286 dosyanın SHA-256 karşılaştırması değişiklik/ekleme göstermedi. Yayın 236 aktif kök Markdown belgesini kapsam kaydında izler; yedek ve özel ikili dosyalar ham olarak yayımlanmaz.
- PASS: yayımlanacak metin/Excel içinde yerel kullanıcı yolu, token örüntüsü ve müşteri bağlantılı iç ID taraması. README'deki 127.0.0.1 yerel geliştirme örneğidir.

## Bağımsız inceleme

İlk incelemede arketip skor kopyaları ve nitel puanın nakit hedefi gibi okunması iki önemli bulguydu. 43 farklı puan vektörü ve her kriterde geçici uzman gerekçesi eklendi; kapalı proje satırlarına örnek alıcı adedi, net nakit, hedef açığı ve gereken satış/kapasite eklendi. Bağımsız inceleyici güncel Chromium 320 başlangıç/proje görsellerini gerçekten inceledi; sağlanan kanıt kapsamında aksiyon gerektiren bulgu kalmadı. Tam kaynak/Excel/JSON gerekçeleri ve komutlar bağımsız çalıştırılmadı. Kaynaklara uygunluk doğrulaması sınırlıdır; bu inceleme müşteri talebi kanıtı değildir.

## Çalıştırma

Yerel statik sunucu çalışırken mevcut Playwright kurulumu ile:

```sh
node tests/browser-check.cjs
```

Gerekirse PLAYWRIGHT_MODULE, CHROMIUM_EXECUTABLE, FIREFOX_EXECUTABLE, WEBKIT_EXECUTABLE, SITE_URL ve QA_OUTPUT ortam değişkenleri mevcut kurulumun yollarına ayarlanır. Test betiği geçersiz davranış bulursa sıfır olmayan kodla çıkar; ekran görüntülerini ve sonuç JSON'unu kaydeder. Bu komut ana ajan tarafından mevcut sabitlenmiş çalışma ortamıyla çalıştırılmıştır.

## Çalıştırılmayan katmanlar

NOT_RUN: fiziksel iOS Safari/Android, gerçek macOS Safari, ekran okuyucu, kalem/kumanda, sanal klavye/safe area, yüzde 200 tarayıcı zoom'u, Microsoft Excel/LibreOffice masaüstü düzenleme, bağımsız tam kaynak denetimi ve CI. Deterministik piksel farkıyla geçmiş onaylı referansa karşı görsel regresyon NOT_RUN; mevcut PNG'ler ilk teslimin görsel kanıtıdır, sessizce onaylanmış geçmiş referans değildir. NOT_APPLICABLE: özel dropdown, ayrı cihaz kabuğu, koşullu medya paketi, animasyon. Bunlar uygulamada bulunmaz.

Finans sonuçları örnek varsayımlardır; tüm ticari kapılar yalnız deney durumundadır. Gerçek kullanıcı, tahsilat veya yatırım kararı doğrulanmamıştır.
