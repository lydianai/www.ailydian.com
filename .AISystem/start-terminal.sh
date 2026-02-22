#!/bin/bash
# www.ailydian.com - AILYDIAN AISystem Terminal

cd "/home/lydian/Masaüstü/PROJELER/www.ailydian.com"

echo "🤖 AILYDIAN PROJE TERMİNALİ"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📁 Proje: www.ailydian.com"
echo "📂 Dizin: /home/lydian/Masaüstü/PROJELER/www.ailydian.com"
echo "🇹🇷 Türkçe komutlar aktif"
echo "🤖 Tüm agent'lar hazır"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "💡 Türkçe Komut Örnekleri:"
echo "   başlat      - Projeyi çalıştır"
echo "   analiz et   - Kod analizi yap"
echo "   test et     - Testleri çalıştır"
echo "   agent listele - Agent'ları göster"
echo ""

# AISystem Code session başlat (eğer kuruluysa)
if command -v AISystem &> /dev/null; then
    AISystem
else
    # Fallback: Normal terminal
    echo "⚠️  AISystem Code CLI bulunamadı"
    echo "📝 Normal terminal modunda çalışıyor"
    echo ""
    exec $SHELL
fi
