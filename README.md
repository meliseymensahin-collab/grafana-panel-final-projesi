FİNAL PROJESİ RAPORU

Ad Soyad: Melis Eymen ŞAHİN
Ders: 233 Web Based Application Programming

1. Proje Hakkında

Bu projede temel amacım, Grafana platformu üzerinde çalışan, verileri sadece göstermekle kalmayıp analiz edebilen akıllı bir Panel Eklentisi geliştirmekti. Dersin geçmek için gerekli olan zorunlu kısımlarını tamamladıktan sonra, projenin kalitesini artırmak amacıyla belirtilen bonus özellikleri (Yapay zeka mantığı, renk konfigürasyonu, interaktivite vb.) de sisteme ekledim.

2. Hazırlık ve Kurulum Süreci

Projeye başlarken yerel geliştirme ortamımda versiyon uyumsuzlukları tespit ettim. Kodların hatasız çalışabilmesi için terminal üzerinden şu adımları izleyerek bilgisayarımı hazırladım:

A. Node.js Güncellemesi

Grafana’nın güncel versiyonları eski Node.js sürümleriyle uyumlu çalışmıyordu. Anaconda ortamımdaki versiyon karmaşasını çözerek Node.js sürümümü v22'ye yükselttim:

conda install -c conda-forge nodejs=22

B. Yetki Sorunlarının Çözümü

Paket yüklemeleri sırasında karşılaştığım erişim izni hatalarını, ilgili klasörlere yazma izni vererek çözdüm:

sudo chown -R 501:20 "/Users/eymen/.npm"

C. Proje İskeletinin Oluşturulması

Ortam hazır olduktan sonra Grafana'nın resmi aracıyla proje dosyalarını oluşturdum. Eklenti türü olarak "Panel" seçeneği ile ilerledim:

npx @grafana/create-plugin@latest


Plugin Type: Panel
Name: final-projesi

D. Başlatma

Proje klasörüne girip gerekli kütüphaneleri yükledim. Kodları derlemek ve Grafana sunucusunu başlatmak için Docker kullandım:

cd sahin-finalprojesi-panel
npm install
npm run dev
docker compose up

3. Kodlama ve Geliştirme Aşamaları

Projeyi başlattıktan sonra geliştirme sürecini 3 ana dosya üzerinde tamamladım:

A. Değişken Tanımlamaları (src/types.ts)

Panelin ayarlar menüsünde hangi özelliklerin değiştirilebileceğini bu dosyada belirledim. Özellikle “Risk Limiti” ayarını buraya ekleyerek AI mantığının temelini attım. Ayrıca başlık rengi, boyutu ve gösterge rengi gibi değişkenleri burada tanımladım.

B. Ayar Menüsü Tasarımı (src/module.ts)

Kullanıcının Grafana arayüzünde gördüğü ayar menüsünü burada kodladım. Kullanıcı deneyimini artırmak için şu bileşenleri sisteme entegre ettim:

• Renk Seçici: Başlık ve daire rengini değiştirmek için.
• Kaydırma Çubuğu: Yazı boyutunu ve risk limitini kolayca ayarlamak için.
• Metin Kutusu: Panel başlığını değiştirmek için.

C. Görünüm ve Mantık (src/components/SimplePanel.tsx)

Projenin en önemli kısmı olan bu dosyada, veriyi görselleştirdim ve karar verme mekanizmasını kurdum:

Grafana'dan gelen ham veriyi alıp, matematiksel işlemlerle görselleştirmeye uygun hale (0-100 arası) getirdim.

Gelen veri benim belirlediğim limiti aşarsa sistem otomatik olarak "RİSKLİ", aşmazsa "GÜVENLİ" kararı veriyor. Bu mantığı if-else yapılarıyla kurdum.

Etkileşim: Panele tıklandığında detaylı durum raporu veren bir pencere açılmasını sağladım.

Tasarım: CSS kullanarak modern ve responsive bir arayüz tasarladım.

4. Tamamladığım Hedefler
Zorunlu Gereksinimler:

Proje hatasız derleniyor ve Grafana içinde çalışıyor.
Panel arayüzünde ismim (Developed by MELİS EYMEN ŞAHİN) yer alıyor.

Bonus Özellikler:

Gerçek Veri Entegrasyonu: Grafana veri kaynaklarından gelen canlı veriler işleniyor.
Gelişmiş Konfigürasyon: Kullanıcı; renk, yazı boyutu, metin ve risk limitini değiştirebiliyor.
İnteraktivite: Tıklama ve üzerine tıklama efektleri eklendi.
Logic mantığı: Veriye dayalı otomatik karar veren (Risk Analizi) algoritma geliştirildi.

5. Sonuç

Bu proje ile React ve TypeScript kullanarak, sadece veri görselleştiren değil, aynı zamanda veriyi yorumlayıp kullanıcıyla etkileşime geçen modern bir Grafana eklentisi ortaya çıkardım.