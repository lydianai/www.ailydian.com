# www.ailydian.com - PROJE ÖZEL KURALLARI

## 🎯 PROJE TANIMI
Proje: www.ailydian.com
Dizin: /Users/lydian/Desktop/PROJELER/www.ailydian.com

## 🤖 AKTİF AGENT'LAR
Bu proje için aktif tüm AILYDIAN agent'ları kullanılabilir.
Agent'lar sadece bu projeye odaklanır ve diğer projelerle ASLA karışmaz.

## 🇹🇷 TÜRKÇE KOMUT SİSTEMİ

### Temel Komutlar:
- `başlat` - Projeyi başlat (npm run dev / python manage.py runserver)
- `test et` - Testleri çalıştır
- `kur` - Bağımlılıkları kur (npm install / pip install)
- `derle` - Projeyi derle (npm run build / python setup.py build)
- `temizle` - Geçici dosyaları temizle
- `durum` - Proje durumunu göster

### AI Komutları:
- `analiz et` - Kod kalitesi analizi
- `hata bul` - Otomatik hata tespiti
- `optimize et` - Performans optimizasyonu
- `dökümante et` - Otomatik dokümantasyon
- `test yaz` - Otomatik test oluştur
- `refactor yap` - Kod iyileştirme

### Proje Yönetimi:
- `agent listele` - Aktif agent'ları göster
- `agent ekle [isim]` - Yeni agent ekle
- `görev ver [açıklama]` - AI'ya görev ver
- `rapor al` - Proje raporu oluştur

## 🛡️ İZOLASYON KURALLARI

1. **SADECE BU PROJE:** Tüm işlemler sadece /Users/lydian/Desktop/PROJELER/www.ailydian.com dizininde yapılır
2. **AGENT İZOLASYONU:** Agent'lar sadece bu projeyi görür
3. **HAFIZA İZOLASYONU:** Proje hafızası diğer projelerden ayrı
4. **KOD İZOLASYONU:** Kod değişiklikleri diğer projeleri etkilemez

## 🔒 DEPLOYMENT GÜVENLİK KURALLARI (KESIN)

**UYARI: Bu kurallar ASLA ihlal edilemez!**

1. **AI MODEL İZLERİ KALDIRILMALI:**
   - Tüm "AISystem", "AIProvider", "AIProvider", "GPT" referansları generic terimlerle değiştirilmeli
   - Deploy öncesi `production_cleaner.py` çalıştırılmalı
   - AI imzaları kaldırılmalı

2. **ÜST DÜZEY ŞİFRELEME:**
   - Hassas veriler AES-256-GCM ile şifrelenmeli
   - API anahtarları environment variable'larda saklanmalı
   - Database şifrelenmeli (SQLCipher kullan)
   - Network trafiği TLS 1.3+ olmalı

3. **CODE OBFUSCATION:**
   - Production build'de kod obfuscate edilmeli
   - Source map'ler deployment'a dahil edilmemeli
   - Debug bilgileri kaldırılmalı

4. **ÇALIŞAN SİSTEME ZARAR VERMEME:**
   - Deployment öncesi full backup alınmalı
   - Canary deployment kullanılmalı (önce %1 trafik)
   - Rollback planı hazır olmalı
   - Health check'ler aktif olmalı

5. **DEPLOYMENT KOMUTLARI:**
   ```bash
   # 1. AI izlerini temizle
   python3 core/production_cleaner.py . --dry-run
   python3 core/production_cleaner.py .

   # 2. Testleri çalıştır
   pytest tests/ -v

   # 3. Build oluştur
   npm run build  # veya  python setup.py build

   # 4. Deploy
   # (Deployment stratejinize göre)
   ```

## 📚 PROJE CONTEXT

Agent'lar bu projede çalışırken:
- Proje türünü otomatik tespit eder
- package.json / requirements.txt / composer.json okur
- Proje yapısını analiz eder
- En iyi pratikleri uygular

## 🎓 ÖĞRENME SİSTEMİ

Her çalıştırmada:
1. Proje yapısı öğrenilir
2. Kod kalitesi ölçülür
3. İyileştirme önerileri üretilir
4. Hatalar kaydedilir ve çözümler önerilir

## ⚡ HIZLI BAŞLANGIÇ

```bash
# Projeyi başlat
başlat

# Analiz yap
analiz et

# Test çalıştır
test et
```

---
**Not:** Bu kurallar SADECE www.ailydian.com projesi içindir.
Diğer projeler kendi kurallarına sahiptir.
