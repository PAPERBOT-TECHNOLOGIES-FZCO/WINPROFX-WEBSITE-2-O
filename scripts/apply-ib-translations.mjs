/**
 * Apply localized translations for introducingBroker IB section keys.
 */
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')

const IB_TRANSLATIONS = {
  hi: {
    h1: 'Introducing Broker प्रोग्राम',
    des: 'अधिकतम उपज, पूर्ण पारदर्शिता और दैनिक automated payouts के लिए डिज़ाइन किया गया अग्रणी Introducing Broker (IB) प्रोग्राम में शामिल हों।',
    buttonText: 'पार्टनर बनें',
    advantages: {
      title: 'विशेष पार्टनर लाभ',
      description: 'WINPROFX के साथ introducing broker के रूप में पार्टनर बनें। स्वीकृत पार्टनर्स के लिए Commission structures, support resources और partnership terms प्रकाशित हैं।',
      cards: {
        profitShare: 'Spreads से <b>90%</b> तक profit share',
        awards: '<b>40+</b> Industry awards के साथ प्रतिष्ठित Broker',
        evolving: 'बाज़ार में हर दिन विकास',
        rewards: 'हर दिन Trade करें और <b>Rewards</b> जीतें',
      },
      stepsTitle: 'हमें क्या अलग बनाता है:',
      stepsSubtitle: 'क्लाइंट पसंद के कारण',
      steps: {
        withdrawal: 'सबसे तेज़ Withdrawal',
        noSwap: 'No Swap',
        noCommission: 'No Commission',
        lowSpread: 'Low Spread',
      },
    },
    benefits: {
      title: 'WINPROFX के साथ Introducing Broker बनने के लाभ:',
      paragraph1: 'WINPROFX के साथ Introducing Broker बनकर लाभों की दुनिया खोलें। उदार commission structures, industry recognition, निरंतर market evolution और traders को everyday rewards देने का अवसर पाएं।',
      paragraph2: 'Best Broker Trading Platform के साथ trading partnerships के भविष्य को नए रूप में गढ़ने में हमारे साथ जुड़ें।',
      cardTitle: '5 Levels तक Multi-tier',
      cardDescription: 'एक IB के रूप में आप referral traders के 5 sub levels तक हो सकते हैं।',
    },
  },
  id: {
    h1: 'Program Introducing Broker',
    des: 'Bergabung dengan program Introducing Broker (IB) terdepan yang dirancang untuk hasil maksimal, transparansi penuh, dan payout otomatis harian.',
    buttonText: 'Jadi Partner',
    advantages: {
      title: 'Keunggulan Partner Eksklusif',
      description: 'Bermitra dengan WINPROFX sebagai introducing broker. Struktur komisi, sumber daya dukungan, dan ketentuan kemitraan dipublikasikan untuk partner yang disetujui.',
      cards: {
        profitShare: 'Hingga <b>90%</b> profit share dari spreads',
        awards: 'Broker Terpercaya dengan <b>40+</b> penghargaan industri',
        evolving: 'Terus berkembang setiap hari di pasar',
        rewards: 'Trade dan Menangkan <b>Rewards</b> Setiap Hari',
      },
      stepsTitle: 'Yang Membedakan Kami:',
      stepsSubtitle: 'Alasan Preferensi Klien',
      steps: {
        withdrawal: 'Withdrawal Tercepat',
        noSwap: 'No Swap',
        noCommission: 'No Commission',
        lowSpread: 'Low Spread',
      },
    },
    benefits: {
      title: 'Manfaat Menjadi Introducing Broker dengan WINPROFX:',
      paragraph1: 'Buka berbagai keuntungan dengan menjadi Introducing Broker WINPROFX. Nikmati struktur komisi yang generous, pengakuan industri, evolusi pasar berkelanjutan, dan kesempatan memberikan rewards harian kepada trader.',
      paragraph2: 'Bergabunglah dengan kami membentuk masa depan kemitraan trading dengan Best Broker Trading Platform.',
      cardTitle: 'Multi-tier hingga 5 Level',
      cardDescription: 'Sebagai IB, Anda dapat memiliki hingga 5 sub level referral traders.',
    },
  },
  vi: {
    h1: 'Chương trình Introducing Broker',
    des: 'Tham gia chương trình Introducing Broker (IB) hàng đầu được thiết kế cho lợi nhuận tối đa, minh bạch tuyệt đối và payout tự động hàng ngày.',
    buttonText: 'Trở thành Partner',
    advantages: {
      title: 'Ưu điểm Partner độc quyền',
      description: 'Hợp tác với WINPROFX với tư cách introducing broker. Cấu trúc commission, tài nguyên hỗ trợ và điều khoản hợp tác được công bố cho các partner được phê duyệt.',
      cards: {
        profitShare: 'Lên đến <b>90%</b> profit share từ spreads',
        awards: 'Broker uy tín với <b>40+</b> giải thưởng ngành',
        evolving: 'Phát triển mỗi ngày trên thị trường',
        rewards: 'Trade và Nhận <b>Rewards</b> Mỗi Ngày',
      },
      stepsTitle: 'Điều làm chúng tôi khác biệt:',
      stepsSubtitle: 'Lý do khách hàng ưa chuộng',
      steps: {
        withdrawal: 'Withdrawal nhanh nhất',
        noSwap: 'No Swap',
        noCommission: 'No Commission',
        lowSpread: 'Low Spread',
      },
    },
    benefits: {
      title: 'Lợi ích khi trở thành Introducing Broker với WINPROFX:',
      paragraph1: 'Mở khóa nhiều lợi thế khi trở thành Introducing Broker với WINPROFX. Tận hưởng cấu trúc commission hấp dẫn, sự công nhận trong ngành, sự phát triển thị trường liên tục và cơ hội trao rewards hàng ngày cho trader.',
      paragraph2: 'Hãy cùng chúng tôi định hình tương lai quan hệ đối tác trading với Best Broker Trading Platform.',
      cardTitle: 'Multi-tier lên đến 5 Level',
      cardDescription: 'Là IB, bạn có thể có tới 5 sub level referral traders.',
    },
  },
  bn: {
    h1: 'Introducing Broker প্রোগ্রাম',
    des: 'সর্বোচ্চ ফলাফল, সম্পূর্ণ স্বচ্ছতা এবং দৈনিক automated payouts-এর জন্য ডিজাইন করা শিল্প-নেতৃত্বাধীন Introducing Broker (IB) প্রোগ্রামে যোগ দিন।',
    buttonText: 'পার্টনার হন',
    advantages: {
      title: 'এক্সক্লুসিভ পার্টনার সুবিধা',
      description: 'introducing broker হিসেবে WINPROFX-এর সাথে পার্টনার হন। অনুমোদিত পার্টনারদের জন্য Commission structures, support resources এবং partnership terms প্রকাশিত।',
      cards: {
        profitShare: 'Spreads থেকে <b>90%</b> পর্যন্ত profit share',
        awards: '<b>40+</b> Industry awards সহ নামকরা Broker',
        evolving: 'বাজারে প্রতিদিন উন্নতি',
        rewards: 'প্রতিদিন Trade করুন এবং <b>Rewards</b> জিতুন',
      },
      stepsTitle: 'আমাদের আলাদা করে যা:',
      stepsSubtitle: 'ক্লায়েন্ট পছন্দের কারণ',
      steps: {
        withdrawal: 'দ্রুততম Withdrawal',
        noSwap: 'No Swap',
        noCommission: 'No Commission',
        lowSpread: 'Low Spread',
      },
    },
    benefits: {
      title: 'WINPROFX-এর সাথে Introducing Broker হওয়ার সুবিধা:',
      paragraph1: 'WINPROFX-এর সাথে Introducing Broker হয়ে সুবিধার জগত খুলুন। উদার commission structures, industry recognition, ক্রমাগত market evolution এবং trader-দের everyday rewards দেওয়ার সুযোগ উপভোগ করুন।',
      paragraph2: 'Best Broker Trading Platform-এর সাথে trading partnerships-এর ভবিষ্যৎ গড়তে আমাদের সাথে যোগ দিন।',
      cardTitle: '৫ Level পর্যন্ত Multi-tier',
      cardDescription: 'একজন IB হিসেবে আপনার referral traders-এর ৫ sub level পর্যন্ত থাকতে পারে।',
    },
  },
  ms: {
    h1: 'Program Introducing Broker',
    des: 'Sertai program Introducing Broker (IB) terkemuka yang direka untuk hasil maksimum, ketelusan mutlak dan payout automatik harian.',
    buttonText: 'Jadi Partner',
    advantages: {
      title: 'Kelebihan Partner Eksklusif',
      description: 'Berkongsi dengan WINPROFX sebagai introducing broker. Struktur commission, sumber sokongan dan terma perkongsian diterbitkan untuk partner yang diluluskan.',
      cards: {
        profitShare: 'Sehingga <b>90%</b> profit share daripada spreads',
        awards: 'Broker Berwibawa dengan <b>40+</b> anugerah industri',
        evolving: 'Berkembang setiap hari dalam pasaran',
        rewards: 'Trade dan Menangi <b>Rewards</b> Setiap Hari',
      },
      stepsTitle: 'Apa Yang Membezakan Kami:',
      stepsSubtitle: 'Sebab Keutamaan Pelanggan',
      steps: {
        withdrawal: 'Withdrawal Terpantas',
        noSwap: 'No Swap',
        noCommission: 'No Commission',
        lowSpread: 'Low Spread',
      },
    },
    benefits: {
      title: 'Manfaat Menjadi Introducing Broker dengan WINPROFX:',
      paragraph1: 'Buka pelbagai kelebihan dengan menjadi Introducing Broker WINPROFX. Nikmati struktur commission yang generous, pengiktirafan industri, evolusi pasaran berterusan dan peluang memberi everyday rewards kepada trader.',
      paragraph2: 'Sertai kami membentuk masa depan perkongsian trading dengan Best Broker Trading Platform.',
      cardTitle: 'Multi-tier sehingga 5 Level',
      cardDescription: 'Sebagai IB, anda boleh mempunyai sehingga 5 sub level referral traders.',
    },
  },
}

async function main() {
  for (const [locale, ib] of Object.entries(IB_TRANSLATIONS)) {
    const path = join(LOCALES_DIR, locale, 'trading.json')
    const data = JSON.parse(await readFile(path, 'utf8'))
    data.introducingBroker = { ...data.introducingBroker, ...ib }
    await writeFile(path, `${JSON.stringify(data, null, 2)}\n`)
  }
  console.log('Applied IB translations for hi, id, vi, bn, ms')
}

main()
