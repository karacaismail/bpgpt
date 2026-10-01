# Proje seçim modelinin yöntemi

Model, 46 kanonik ailenin tek ilk ticari seçeneğini karşılaştırır. Seçenek aile × ekonomik alıcı × ücretli iş × birincil kanal olarak tanımlanır. Aynı platformun sonraki teklifi ikinci bir bağımsız başarı veya gelir sayılmaz. Modül, üçüncü taraf varlık ve kapsam kayıtları envanterde korunur; yatırım sırasına alınmaz.

## Tercih puanı ve kanıt

16 sürücü altı kategoride toplanır. İlk nakit görünümünün kategori ağırlıkları satın alma gerekçesi25, reklamsız erişim30, ilk kullanım20, varlık uyumu10, tekrar10, operasyon5; self-service görünümünde20/35/25/5/10/5. Kategori içi ağırlıklar ayrıca uygulanır; kategori bonusu veya ikinci kez puan yoktur. Tüm 16 puan, seçilen alıcı/iş/kanalın **geçici uzman yorumu**dur. Puan0–3 aralığında tutulmuştur; dış kullanıcı kabulü/tahsilat gerektiren4–5 verilmemiştir. Hedef müşteri görüşmesi, ödeme veya ürünün uçtan uca çalışması varmış gibi yorumlanamaz.

İlk sürüm arketip puanları her aile için ayrı judgment matrisiyle değiştirilmiştir. Örneğin restoranın misafire paylaşılan menüsü yeni restoran alıcısı üretmediği için referans sürücüsü0; ajansın müşteriye teslimi yeni ajans alıcısıyla aynı rol olmadığı için1; uzman incelemesine bağlı teşvik/hakediş dosyasının yardımsız kullanımı1; şablonlu yerel export aracı için3 bir tasarım olanağıdır. Bu son değer, dış kullanıcının bunu yaptığına dair kanıt değildir. JSON her kriterin puanını, teklif bağlamını ve uzman yorumu etiketini taşır.

Puan toplamı başarı olasılığı, talep tahmini veya finansal getiri değildir. MCDA çerçevesi tercihlerin şeffaf ağırlıklı karşılaştırılmasını destekler; olasılık çıkarmak için kullanılmaz. Pts×Pcs, kanıtsız güven çarpanı, RAND/Monte Carlo veya uydurma başarı dağılımı kullanılmamıştır. Kaynak: https://analysisfunction.civilservice.gov.uk/policy-store/an-introductory-guide-to-mcda/

100 soru yeni proje incelemesi için diagnostic listedir. Modelde ayrıca100puan toplanmaz. Müşteri işi D1/D2/D3/R1’e; kanal C1/C2/C3’e; ilk kullanım A1/A3/F3’e; hak/veri kapılara; doğruluk F2/O1/pilota; emek kapasite hesabına; nakit finans hesabına; tekrar R1/R2/O2’ye bağlanır.

## Kapılar

Hak/IP, veri, tahsilat, kanal, paid pilot ayrı kapılardır:0 engel,1 doğrulanmadan yalnız deney,2 kanıtlı geçiş. Ticari seçeneklerin tamamı varsayılanda yalnız deney durumundadır. Kapsam kayıtları engellidir. Hiçbir yüksek puan bu kapıları aşamaz. Yatırım sırası ancak bütün kapılar2, başlangıç bütçesi uygun ve hedef satış sayısı saat kapasitesine sığıyorsa hesaplanır. Varsayılan çalışma kitabında böyle doğrulanmış yatırım kararı yoktur. Public kaynak tercihinin lisans seçimini otomatik yapmadığı ayrıca korunur.

## Nakit ve kurucu emeği

Varsayılan hedef altı ayda3000USD kümülatif net operasyon nakdi; haftalık5kurucu saati; başlangıç500USD; kurucu saat fırsat maliyeti25USD. Bunlar kullanıcı tarafından değiştirilebilir varsayımlardır. Gerçek müşteri tutarı, ücret, teklif veya döviz çevrimi kullanılmamıştır. Bazı başlangıç maliyetleri arketip girdileridir; diğerleri seçilen dar teklifin insan işi kapsamına göre ayrı test varsayımıdır. Her satır financialBasis alanında bunu belirtir.

Birim nakit katkı = fiyat × (1−tahsilat oranı−iade payı)−değişken gider. Tahsilat ücreti ve iade payı aynı brüt matrahtan ayrılır; sabit nakit ve başlangıç nakdi bir kez düşülür. Varsayılan vergi rezervi0, hukuki vergi hesabı değildir. Kurucu emeği nakit gider gibi düşülmez; ekonomik sonuç ayrıca net nakit−saat×fırsat maliyeti olarak gösterilir.

Lansman en erken max(takvim gecikmesi, tavan(başlangıç saati/haftalık saat)) haftasında gerçekleşir. Kurulum aşaması boyunca satış teslimi varsayılmaz. Aktif dönem bu gecikmeden sonra başlar. Kanal bakımı aktif haftalardan, edinme/teslim/support her alıcının süre bütçesinden çıkarılır. Örnek alıcı adedi kapasite satış sayısıyla sınırlandırılır. Hiç satış yoksa başlangıç ve sabit giderler kalır; pozitif sonuç yaratılmaz.

Abonelik fiyatı aylıktır. Yeni alıcılar lansman sonrasındaki tam aylara eşit dağıtılan **aritmetik kohort varsayımı**dır; kesirli aylık adet gerçek müşteri tahmini değildir. Aylık churn varsayılan recurring için0.05, diğerlerinde0. En fazla faturalı ay, müşterinin modellenen ücretli süre sınırıdır. Her aylık kohortun ufuk içinde kalan ödemeleri ve churn etkisi toplanır; yıllık peşin tahsilat/MRR karıştırılmaz. Kohort sekmesinin aylık net nakit toplamı altı aylık Hesap net nakdiyle aynıdır.

## Doğrulama ve sınır

Artifact Tool yeniden hesaplamasında JSON ile Excel’in46puan ve net nakit satırı eşleşti. Aylık kohort toplamı eşleşti. Negatif/boş ağırlık, eksik fiyat, pozitif olmayan katkı yatırım/satış sonucu üretmez. Fail kapısı yatırım sırası vermez. Skor girdisi değişimi deney sırasını değiştirdi; geçerli toplamı1kalan ağırlık dağıtımı puanı değiştirdi. Bütçe azaltma ve hedef artırma sonuçları değişti. Hücre hata taraması0buldu. Tüm sekmeler render edildi. Excel masaüstü/LibreOffice üzerinde açma ve kullanıcı düzenleme etkileşimi çalıştırılmadı. Bu testler müşteri talebi veya kullanıcı kabulünü doğrulamaz.
