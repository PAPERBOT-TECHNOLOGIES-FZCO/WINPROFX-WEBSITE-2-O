/**
 * Applies chooseAccount, payoutForm, and whyWinprofx UI translations.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const LOCALES_DIR = join(process.cwd(), 'src', 'locales')

function deepMerge(target, patch) {
  for (const [key, value] of Object.entries(patch)) {
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      if (!target[key] || typeof target[key] !== 'object') target[key] = {}
      deepMerge(target[key], value)
    } else {
      target[key] = value
    }
  }
  return target
}

const TRADING_UI = {
  hi: {
    accounts: {
      chooseAccount: {
        title: 'अपना अकाउंट चुनें',
        recommended: 'अनुशंसित',
        register: 'रजिस्टर करें',
        labels: {
          minimumDeposit: 'न्यूनतम जमा',
          spread: 'स्प्रेड',
          commission: 'कमीशन',
          maxLeverage: 'अधिकतम लीवरेज',
          instruments: 'इंस्ट्रूमेंट',
        },
        instruments: {
          forex: 'Forex',
          metal: 'Metal',
          crypto: 'Crypto',
          energies: 'Energies',
          indices: 'Indices',
        },
        plans: {
          standard: {
            title: 'Standard',
            description: 'हमारा सबसे लोकप्रिय अकाउंट। सभी प्रकार के ट्रेडर्स के लिए उपयुक्त।',
            spread: '0.2 pips से',
            commission: 'No Commission',
          },
          pro: {
            title: 'Pro',
            description: 'हमारा instant execution अकाउंट, zero commission और low spread के साथ।',
            spread: '0.1 pips से',
            commission: 'No Commission',
          },
          ecn: {
            title: 'ECN',
            description: 'हमारा instant execution अकाउंट, zero commission और low spread के साथ',
            spread: '0.0 pips से',
            commission: 'प्रति लॉट प्रति साइड $3.50 तक',
          },
        },
      },
    },
    introducingBroker: {
      payoutForm: {
        title: 'विकास और सफलता की ओर अपनी यात्रा शुरू करें',
        heading: 'Fast Payout Settlement',
        description: 'अपना विवरण छोड़ें, हम जल्द ही आपसे संपर्क करेंगे।',
        fullName: 'पूरा नाम',
        fullNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
        email: 'ईमेल',
        emailPlaceholder: 'अपना ईमेल दर्ज करें',
        phone: 'फ़ोन नंबर',
        phonePlaceholder: 'अपना नंबर दर्ज करें',
        message: 'संदेश',
        messagePlaceholder: 'अपना संदेश यहाँ लिखें',
        sendOtp: 'OTP भेजें',
        sendingOtp: 'भेजा जा रहा है...',
        otpSent: 'OTP भेजा गया ✓',
        agree: 'इस फ़ॉर्म को सबमिट करके, आप हमारी टीम द्वारा संपर्क किए जाने से सहमत हैं।',
        submit: 'सबमिट करें',
      },
    },
  },
  id: {
    accounts: {
      chooseAccount: {
        title: 'Pilih Akun Anda',
        recommended: 'DIREKOMENDASIKAN',
        register: 'Daftar',
        labels: {
          minimumDeposit: 'Deposit Minimum',
          spread: 'Spread',
          commission: 'Komisi',
          maxLeverage: 'Leverage Maksimum',
          instruments: 'Instrumen',
        },
        instruments: {
          forex: 'Forex',
          metal: 'Metal',
          crypto: 'Crypto',
          energies: 'Energies',
          indices: 'Indices',
        },
        plans: {
          standard: {
            title: 'Standard',
            description: 'Akun paling populer kami. Cocok untuk semua jenis trader.',
            spread: 'Mulai 0,2 pip',
            commission: 'Tanpa Komisi',
          },
          pro: {
            title: 'Pro',
            description: 'Akun eksekusi instan kami, tanpa komisi dan spread rendah.',
            spread: 'Mulai 0,1 pip',
            commission: 'Tanpa Komisi',
          },
          ecn: {
            title: 'ECN',
            description: 'Akun eksekusi instan kami, tanpa komisi dan spread rendah',
            spread: 'Mulai 0,0 pip',
            commission: 'Hingga $3,50 per sisi per lot',
          },
        },
      },
    },
    introducingBroker: {
      payoutForm: {
        title: 'Mulai Perjalanan Anda Menuju Pertumbuhan & Kesuksesan',
        heading: 'Penyelesaian Payout Cepat',
        description: 'Tinggalkan detail Anda, kami akan segera menghubungi Anda.',
        fullName: 'Nama Lengkap',
        fullNamePlaceholder: 'Masukkan nama lengkap Anda',
        email: 'Email',
        emailPlaceholder: 'Masukkan email Anda',
        phone: 'Nomor Telepon',
        phonePlaceholder: 'Masukkan nomor Anda',
        message: 'Pesan',
        messagePlaceholder: 'Tulis pesan Anda di sini',
        sendOtp: 'KIRIM OTP',
        sendingOtp: 'MENGIRIM...',
        otpSent: 'OTP TERKIRIM ✓',
        agree: 'Dengan mengirimkan formulir ini, Anda setuju untuk dihubungi oleh tim kami.',
        submit: 'Kirim',
      },
    },
  },
  vi: {
    accounts: {
      chooseAccount: {
        title: 'Chọn Tài khoản của Bạn',
        recommended: 'ĐỀ XUẤT',
        register: 'Đăng ký',
        labels: {
          minimumDeposit: 'Nạp tối thiểu',
          spread: 'Spread',
          commission: 'Hoa hồng',
          maxLeverage: 'Đòn bẩy tối đa',
          instruments: 'Công cụ',
        },
        instruments: {
          forex: 'Forex',
          metal: 'Metal',
          crypto: 'Crypto',
          energies: 'Energies',
          indices: 'Indices',
        },
        plans: {
          standard: {
            title: 'Standard',
            description: 'Tài khoản phổ biến nhất của chúng tôi. Phù hợp mọi loại trader.',
            spread: 'Từ 0,2 pip',
            commission: 'Không hoa hồng',
          },
          pro: {
            title: 'Pro',
            description: 'Tài khoản khớp lệnh tức thì, không commission và spread thấp.',
            spread: 'Từ 0,1 pip',
            commission: 'Không hoa hồng',
          },
          ecn: {
            title: 'ECN',
            description: 'Tài khoản khớp lệnh tức thì, không commission và spread thấp',
            spread: 'Từ 0,0 pip',
            commission: 'Lên đến $3,50 mỗi bên mỗi lot',
          },
        },
      },
    },
    introducingBroker: {
      payoutForm: {
        title: 'Bắt đầu Hành trình Phát triển & Thành công',
        heading: 'Thanh toán Payout Nhanh',
        description: 'Để lại thông tin của bạn, chúng tôi sẽ liên hệ sớm.',
        fullName: 'Họ và Tên',
        fullNamePlaceholder: 'Nhập họ và tên của bạn',
        email: 'Email',
        emailPlaceholder: 'Nhập email của bạn',
        phone: 'Số điện thoại',
        phonePlaceholder: 'Nhập số điện thoại của bạn',
        message: 'Tin nhắn',
        messagePlaceholder: 'Viết tin nhắn của bạn tại đây',
        sendOtp: 'GỬI OTP',
        sendingOtp: 'ĐANG GỬI...',
        otpSent: 'ĐÃ GỬI OTP ✓',
        agree: 'Bằng việc gửi biểu mẫu này, bạn đồng ý được đội ngũ của chúng tôi liên hệ.',
        submit: 'Gửi',
      },
    },
  },
  bn: {
    accounts: {
      chooseAccount: {
        title: 'আপনার অ্যাকাউন্ট বেছে নিন',
        recommended: 'প্রস্তাবিত',
        register: 'নিবন্ধন',
        labels: {
          minimumDeposit: 'ন্যূনতম ডিপোজিট',
          spread: 'স্প্রেড',
          commission: 'কমিশন',
          maxLeverage: 'সর্বোচ্চ লিভারেজ',
          instruments: 'ইনস্ট্রুমেন্ট',
        },
        instruments: {
          forex: 'Forex',
          metal: 'Metal',
          crypto: 'Crypto',
          energies: 'Energies',
          indices: 'Indices',
        },
        plans: {
          standard: {
            title: 'Standard',
            description: 'আমাদের সবচেয়ে জনপ্রিয় অ্যাকাউন্ট। সব ধরনের ট্রেডারের জন্য উপযুক্ত।',
            spread: '০.২ pips থেকে',
            commission: 'No Commission',
          },
          pro: {
            title: 'Pro',
            description: 'আমাদের instant execution অ্যাকাউন্ট, zero commission ও low spread সহ।',
            spread: '০.১ pips থেকে',
            commission: 'No Commission',
          },
          ecn: {
            title: 'ECN',
            description: 'আমাদের instant execution অ্যাকাউন্ট, zero commission ও low spread সহ',
            spread: '০.০ pips থেকে',
            commission: 'প্রতি lot প্রতি পাশে $3.50 পর্যন্ত',
          },
        },
      },
    },
    introducingBroker: {
      payoutForm: {
        title: 'বৃদ্ধি ও সাফল্যের পথে আপনার যাত্রা শুরু করুন',
        heading: 'Fast Payout Settlement',
        description: 'আপনার বিবরণ দিন, আমরা শীঘ্রই যোগাযোগ করব।',
        fullName: 'পুরো নাম',
        fullNamePlaceholder: 'আপনার পুরো নাম লিখুন',
        email: 'ইমেইল',
        emailPlaceholder: 'আপনার ইমেইল লিখুন',
        phone: 'ফোন নম্বর',
        phonePlaceholder: 'আপনার নম্বর লিখুন',
        message: 'বার্তা',
        messagePlaceholder: 'আপনার বার্তা এখানে লিখুন',
        sendOtp: 'OTP পাঠান',
        sendingOtp: 'পাঠানো হচ্ছে...',
        otpSent: 'OTP পাঠানো হয়েছে ✓',
        agree: 'এই ফর্ম জমা দিয়ে, আপনি আমাদের দলের সাথে যোগাযোগের জন্য সম্মত হন।',
        submit: 'জমা দিন',
      },
    },
  },
  ms: {
    accounts: {
      chooseAccount: {
        title: 'Pilih Akaun Anda',
        recommended: 'DISYORKAN',
        register: 'Daftar',
        labels: {
          minimumDeposit: 'Deposit Minimum',
          spread: 'Spread',
          commission: 'Komisen',
          maxLeverage: 'Leverage Maksimum',
          instruments: 'Instrumen',
        },
        instruments: {
          forex: 'Forex',
          metal: 'Metal',
          crypto: 'Crypto',
          energies: 'Energies',
          indices: 'Indices',
        },
        plans: {
          standard: {
            title: 'Standard',
            description: 'Akaun paling popular kami. Sesuai untuk semua jenis pedagang.',
            spread: 'Dari 0.2 pip',
            commission: 'Tiada Komisen',
          },
          pro: {
            title: 'Pro',
            description: 'Akaun pelaksanaan segera kami, tanpa komisen dan spread rendah.',
            spread: 'Dari 0.1 pip',
            commission: 'Tiada Komisen',
          },
          ecn: {
            title: 'ECN',
            description: 'Akaun pelaksanaan segera kami, tanpa komisen dan spread rendah',
            spread: 'Dari 0.0 pip',
            commission: 'Sehingga $3.50 setiap sisi setiap lot',
          },
        },
      },
    },
    introducingBroker: {
      payoutForm: {
        title: 'Mulakan Perjalanan Anda Ke Arah Pertumbuhan & Kejayaan',
        heading: 'Penyelesaian Payout Pantas',
        description: 'Tinggalkan butiran anda, kami akan menghubungi anda tidak lama lagi.',
        fullName: 'Nama Penuh',
        fullNamePlaceholder: 'Masukkan nama penuh anda',
        email: 'E-mel',
        emailPlaceholder: 'Masukkan e-mel anda',
        phone: 'Nombor Telefon',
        phonePlaceholder: 'Masukkan nombor anda',
        message: 'Mesej',
        messagePlaceholder: 'Tulis mesej anda di sini',
        sendOtp: 'HANTAR OTP',
        sendingOtp: 'MENGHANTAR...',
        otpSent: 'OTP DIHANTAR ✓',
        agree: 'Dengan menghantar borang ini, anda bersetuju dihubungi oleh pasukan kami.',
        submit: 'Hantar',
      },
    },
  },
}

const TOOLS_UI = {
  hi: {
    whyWinprofx: {
      title: 'WINPROFX क्यों?',
      description:
        'WINPROFX उन्नत ट्रेडिंग टूल, रियल-टाइम मार्केट अपडेट और user-friendly प्लेटफ़ॉर्म प्रदान करता है ताकि ट्रेडर्स सूचित निर्णय ले सकें और अपनी रणनीतियाँ अनुकूलित कर सकें।',
    },
  },
  id: {
    whyWinprofx: {
      title: 'Mengapa WINPROFX?',
      description:
        'WINPROFX menawarkan alat trading canggih, pembaruan pasar real-time, dan platform yang mudah digunakan untuk membantu trader membuat keputusan tepat dan mengoptimalkan strategi trading.',
    },
  },
  vi: {
    whyWinprofx: {
      title: 'Tại sao chọn WINPROFX?',
      description:
        'WINPROFX cung cấp công cụ giao dịch tiên tiến, cập nhật thị trường theo thời gian thực và nền tảng thân thiện giúp trader ra quyết định sáng suốt và tối ưu chiến lược.',
    },
  },
  bn: {
    whyWinprofx: {
      title: 'কেন WINPROFX?',
      description:
        'WINPROFX উন্নত ট্রেডিং টুল, রিয়েল-টাইম মার্কেট আপডেট এবং ব্যবহারবান্ধব প্ল্যাটফর্ম প্রদান করে যাতে ট্রেডাররা সচেতন সিদ্ধান্ত নিতে এবং তাদের কৌশল অপ্টিমাইজ করতে পারে।',
    },
  },
  ms: {
    whyWinprofx: {
      title: 'Mengapa WINPROFX?',
      description:
        'WINPROFX menawarkan alat dagangan canggih, kemas kini pasaran masa nyata dan platform mesra pengguna untuk membantu pedagang membuat keputusan termaklum dan mengoptimumkan strategi dagangan.',
    },
  },
}

for (const locale of Object.keys(TRADING_UI)) {
  const tradingPath = join(LOCALES_DIR, locale, 'trading.json')
  const tradingData = JSON.parse(readFileSync(tradingPath, 'utf8'))
  deepMerge(tradingData, TRADING_UI[locale])
  writeFileSync(tradingPath, `${JSON.stringify(tradingData, null, 2)}\n`)

  const toolsPath = join(LOCALES_DIR, locale, 'tools.json')
  const toolsData = JSON.parse(readFileSync(toolsPath, 'utf8'))
  deepMerge(toolsData, TOOLS_UI[locale])
  writeFileSync(toolsPath, `${JSON.stringify(toolsData, null, 2)}\n`)

  console.log(`Applied component UI translations: ${locale}`)
}

console.log('Done.')
