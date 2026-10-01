# Editoryal atlas yenilemesi — 2 Ekim 2026

Ana sayfa, mevcut yeşil/ekru kimlik içinde bir girişim kataloğu olarak yeniden düzenlendi. Hero alanında 46 girişim ailesi, 6 ürün alanı ve 16 değerlendirme kriteri görünür; bu değerler yayımlanan veri modelinden üretilir. Üç adımlı okuma rehberi ve 46 proje satırı numaralı bir katalog hiyerarşisi kullanır.

`browser-check.cjs`: 66 kayıt PASS. `atlas-check.cjs`: Chromium, Firefox ve WebKit üzerinde portföy metrikleri, üç rehber adımı, 46 numaralı satır ve mevcut arama/filtre/görünüm akışları PASS. `guides-check.cjs`: 51 kayıt PASS. `atlas-profile-check.cjs`: PASS; 48 px kaba işaretçi hedefleri, %200 metin ölçeklemesinde taşmasız reflow, JavaScript kapalı içerik, yatay geçişte durum koruma ve ilk rota kaynak izolasyonu doğrulandı.

İlk rota ham toplamı 200.000 bayt bütçesinin altında kalır. Fiziksel iOS/Android cihaz, gerçek Safari, ekran okuyucu ve CI bu yerel teslimde `not_run`. Görsel referanslar otomatik onaylanmadı.
