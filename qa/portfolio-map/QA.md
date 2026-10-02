# Portföy haritası — 2 Ekim 2026

Ana sayfa, hero ve okuma rehberinden sonra doğrudan 46 satırlık metin listesine geçiyordu. Portföyün ürün alanlarına dağılımını ilk bakışta göstermediği için mevcut kategori filtresi, doğrudan etiketli ve sayılı bir portföy haritasına dönüştürüldü. Harita aynı zamanda gerçek filtre kontrolüdür; ayrı bir grafik ile etkileşim durumu arasında kopukluk oluşmaz.

Regresyon testi önce yeni sözleşmeyle çalıştırıldı ve beklenen biçimde üç tarayıcıda `filterBars: 0`, `filterCounts: []` nedeniyle başarısız oldu. Uygulamadan sonra Chromium, Firefox ve WebKit üzerinde yedi dağılım satırı, `46, 6, 11, 15, 5, 6, 3` sayıları, geliştirici araçları seçiminin 15 girişim göstermesi, seçili düğmenin `aria-pressed="true"` durumu, renk dışı “seçili” metni ve filtre sıfırlama akışı geçti. Hareket azaltma tercihiyle mobil bileşen görüntüleri ve Chromium 1440 px bileşen görüntüsü deterministik olarak üretildi.

`browser-check.cjs`: 66 kayıt PASS. `atlas-check.cjs`: üç tarayıcıda kimlik, QRAL ayrıntısı, görünüm geçişi, arama, dağılım filtresi ve sıfırlama PASS. `guides-check.cjs`: 51 kayıt PASS. `atlas-profile-check.cjs`: PASS; 320 px reflow, kaba işaretçide hedef boyutları, %200 metin ölçeği, yatay görünümde durum koruma, JavaScript kapalı içerik ve ilk rota ağ izolasyonu doğrulandı. Ana rotanın ham HTML, CSS, JavaScript ve favicon toplamı 196.642 bayttır; 200.000 bayt bütçesinin altındadır.

Fiziksel iOS/Android cihaz, gerçek macOS/iOS Safari, ekran okuyucu ve CI bu yerel teslimde `not_run`. Görsel referanslar otomatik onaylanmadı.
