/**
 * Applies remaining page translations for hi, id, vi, bn, ms locales.
 * Merges patches into src/locales/{locale}/trading.json and tools.json.
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

const TRADING_PATCHES = {
  hi: {
    tradeToWin: {
      labels: {
        tier: 'टियर',
        lots: 'लॉट',
        withinDays: '30 दिनों के भीतर',
      },
      rewardTiersTitleHtml:
        'ज़्यादा ट्रेड करें, <span class="text-primary">ज़्यादा जीतें</span>',
      howItWorksSection: {
        subTitle: 'प्रक्रिया',
        titleHtml: 'यह कैसे <span class="text-primary">काम करता है</span>',
        des: 'शुरू करना आसान है। ये चार कदम पूरे करें और विशेष Apple पुरस्कार जीतने की राह पर आगे बढ़ें।',
        steps: {
          registerOptIn: {
            title: 'रजिस्टर करें और ऑप्ट-इन करें',
            body: 'WINPROFX के साथ साइन अप करें और अपनी पहली जमा राशि से Trade to Win प्रोग्राम में ऑप्ट-इन करें।',
          },
          chooseTier: {
            title: 'अपना टियर चुनें',
            body: 'वह रिवॉर्ड टियर चुनें जिसे आप लक्ष्य बना रहे हैं — Power Bank से लेकर नवीनतम iPhone तक।',
          },
          trade30Days: {
            title: '30 दिनों के भीतर ट्रेड करें',
            body: '30 दिनों के भीतर अपना लक्ष्य ट्रेडिंग वॉल्यूम पूरा करें। योग्य ट्रेड कम से कम 3 मिनट तक होल्ड किए जाने चाहिए।',
          },
          claimPrize: {
            title: 'अपना पुरस्कार प्राप्त करें',
            body: 'एक बार जब आप अपना वॉल्यूम लक्ष्य पूरा कर लें, आपका रिवॉर्ड पुष्टि हो जाता है और आपको भेज दिया जाता है।',
          },
        },
      },
      programConditionsSection: {
        subTitle: 'नियम और विवरण',
        titleHtml: 'प्रोग्राम <span class="text-primary">शर्तें</span>',
        items: {
          programPeriod: {
            label: 'प्रोग्राम अवधि',
            value: '1 मार्च, 2025 – 31 मई, 2026',
          },
          tradingTimeline: {
            label: 'ट्रेडिंग समयसीमा',
            value: 'आपकी शुरुआत की तारीख से 30 दिन',
          },
          eligibleClients: {
            label: 'योग्य क्लाइंट',
            value: 'केवल रिटेल क्लाइंट (IB शामिल नहीं)',
          },
          minimumHold: {
            label: 'न्यूनतम होल्ड समय',
            value: 'प्रत्येक योग्य ट्रेड के लिए 3 मिनट',
          },
          excludedInstruments: {
            label: 'बहिष्कृत इंस्ट्रूमेंट',
            value: 'स्टॉक और क्रिप्टो पेयर',
          },
          withdrawals: {
            label: 'निकासी',
            value: 'पूरे अभियान के दौरान अनुमत',
          },
        },
      },
      importantTermsSection: {
        subTitle: 'कानूनी',
        titleHtml: 'महत्वपूर्ण <span class="text-primary">शर्तें</span>',
        des: 'Trade to Win प्रोग्राम में भाग लेने से पहले कृपया इन शर्तों को ध्यान से पढ़ें।',
        items: {
          fairPlay: {
            title: 'निष्पक्ष खेल',
            body: 'बाज़ार दुरुपयोग के किसी भी संकेत — जिसमें लेटेंसी आर्बिट्राज या हेरफेर तकनीकें शामिल हैं — के परिणामस्वरूप तत्काल अयोग्यता होगी।',
          },
          eligibility: {
            title: 'पात्रता सीमाएँ',
            body: 'केवल स्व-निर्देशित व्यक्तिगत खाते भाग ले सकते हैं। प्रबंधित खाते या IB-रेफ़र्ड खाते योग्य नहीं हैं।',
          },
          liability: {
            title: 'दायित्व अस्वीकरण',
            body: 'WINPROFX किसी भी ट्रेडिंग हानि के लिए जिम्मेदार नहीं है। यह प्रोग्राम प्रतिभागियों के जोखिम प्रोफ़ाइल या निवेश रणनीतियों को बदलता नहीं है।',
          },
          dispute: {
            title: 'विवाद समाधान',
            body: 'इन शर्तों में सीधे संबोधित न किए गए किसी भी मुद्दे का प्रबंधन द्वारा निष्पक्ष और बाध्यकारी तरीके से समाधान किया जाएगा।',
          },
        },
      },
    },
    platform: {
      bannerMeta: 'प्लेटफ़ॉर्म',
      bannerDes:
        'WINPROFX ने वैश्विक व्यावसायिक विस्तार में महत्वपूर्ण सफलता हासिल की है। WINPROFX Forex और CFD ट्रेडिंग के लिए MetaTrader 5 (MT5) प्लेटफ़ॉर्म एक्सेस प्रदान करता है, जो Android और iPhone दोनों पर उपलब्ध है, जो आपको सफलता के एक कदम और करीब लाता है। MT5 अभी डाउनलोड करें और अनंत ट्रेडिंग अवसरों की दुनिया में कूद पड़ें।',
      cards: {
        mobile: {
          meta: 'ट्रेडिंग प्लेटफ़ॉर्म',
          title: 'मोबाइल के लिए MT5 डाउनलोड करें',
          description:
            'WINPROFX ने दुनिया भर में अपना व्यवसाय विस्तारित करने में लगातार सफलता पाई है, और अब MT5 Android और iPhone पर उपलब्ध है — आप सफलता के एक कदम और करीब हैं। MT5 अभी डाउनलोड करें और असीमित ट्रेडिंग अवसरों की दुनिया में डुबकी लगाएँ।',
        },
        desktop: {
          meta: 'ट्रेडिंग प्लेटफ़ॉर्म',
          title: 'डेस्कटॉप के लिए MT5 डाउनलोड करें',
          description:
            'अपने डेस्कटॉप पर MT5 की शक्ति का अनुभव करें। उन्नत चार्टिंग टूल, स्वचालित ट्रेडिंग क्षमताएँ और रियल-टाइम मार्केट डेटा एक्सेस करें। WINPROFX उन्नत सुविधाएँ और लचीलापन चाहने वाले पेशेवर ट्रेडर्स के लिए एक सहज वेब-आधारित ट्रेडिंग प्लेटफ़ॉर्म प्रदान करता है।',
        },
      },
    },
    blog: {
      pageMeta: 'ब्लॉग',
      pageTitle: 'WINPROFX ब्लॉग',
    },
    introducingBroker: {
      advantages: {
        steps: {
          noSwap: 'नो स्वैप',
          noCommission: 'नो कमीशन',
          lowSpread: 'कम स्प्रेड',
        },
      },
    },
  },

  id: {
    tradeToWin: {
      labels: {
        tier: 'TINGKAT',
        lots: 'Lot',
        withinDays: 'dalam 30 hari',
      },
      rewardTiersTitleHtml:
        'Trade Lebih Banyak, <span class="text-primary">Menang Lebih Banyak</span>',
      howItWorksSection: {
        subTitle: 'Proses',
        titleHtml: 'Cara <span class="text-primary">Kerjanya</span>',
        des: 'Memulai sangat mudah. Selesaikan empat langkah ini dan Anda siap memenangkan hadiah eksklusif Apple.',
        steps: {
          registerOptIn: {
            title: 'Daftar & Opt In',
            body: 'Daftar di WINPROFX dan opt in ke program Trade to Win sejak deposit pertama Anda.',
          },
          chooseTier: {
            title: 'Pilih Tingkat Anda',
            body: 'Pilih tingkat hadiah yang Anda incar — dari Power Bank hingga iPhone terbaru.',
          },
          trade30Days: {
            title: 'Trade Dalam 30 Hari',
            body: 'Capai volume trading target dalam 30 hari. Trade yang memenuhi syarat harus ditahan minimal 3 menit.',
          },
          claimPrize: {
            title: 'Klaim Hadiah Anda',
            body: 'Setelah mencapai target volume, hadiah Anda dikonfirmasi dan dikirimkan kepada Anda.',
          },
        },
      },
      programConditionsSection: {
        subTitle: 'Aturan & Detail',
        titleHtml: 'Kondisi <span class="text-primary">Program</span>',
        items: {
          programPeriod: {
            label: 'Periode Program',
            value: '1 Maret 2025 – 31 Mei 2026',
          },
          tradingTimeline: {
            label: 'Linimasa Trading',
            value: '30 hari sejak tanggal mulai Anda',
          },
          eligibleClients: {
            label: 'Klien yang Memenuhi Syarat',
            value: 'Hanya klien retail (IB dikecualikan)',
          },
          minimumHold: {
            label: 'Waktu Hold Minimum',
            value: '3 menit per trade yang memenuhi syarat',
          },
          excludedInstruments: {
            label: 'Instrumen yang Dikecualikan',
            value: 'Saham & pasangan kripto',
          },
          withdrawals: {
            label: 'Penarikan',
            value: 'Diizinkan sepanjang kampanye',
          },
        },
      },
      importantTermsSection: {
        subTitle: 'Legal',
        titleHtml: 'Ketentuan <span class="text-primary">Penting</span>',
        des: 'Harap baca ketentuan ini dengan saksama sebelum mengikuti program Trade to Win.',
        items: {
          fairPlay: {
            title: 'Fair Play',
            body: 'Segala bentuk penyalahgunaan pasar — termasuk latency arbitrage atau teknik manipulatif — akan mengakibatkan diskualifikasi segera.',
          },
          eligibility: {
            title: 'Batasan Kelayakan',
            body: 'Hanya akun individu yang dikelola sendiri yang dapat berpartisipasi. Akun terkelola atau akun yang dirujuk IB tidak memenuhi syarat.',
          },
          liability: {
            title: 'Penafian Tanggung Jawab',
            body: 'WINPROFX tidak bertanggung jawab atas kerugian trading apa pun. Program ini tidak mengubah profil risiko atau strategi investasi peserta.',
          },
          dispute: {
            title: 'Penyelesaian Sengketa',
            body: 'Setiap masalah yang tidak secara langsung diatur dalam ketentuan ini akan diselesaikan oleh manajemen secara adil dan mengikat.',
          },
        },
      },
    },
    platform: {
      bannerMeta: 'Platform',
      bannerDes:
        'WINPROFX telah mencapai kesuksesan signifikan dalam ekspansi bisnis global. WINPROFX menyediakan akses platform MetaTrader 5 (MT5) untuk trading Forex dan CFD, tersedia di Android dan iPhone, membawa Anda selangkah lebih dekat menuju kesuksesan. Unduh MT5 sekarang dan terjun ke dunia peluang trading tanpa batas.',
      cards: {
        mobile: {
          meta: 'PLATFORM TRADING',
          title: 'Unduh MT5 untuk Mobile',
          description:
            'WINPROFX terus berhasil memperluas bisnisnya di seluruh dunia, dan kini MT5 tersedia di Android dan iPhone — Anda selangkah lebih dekat menuju kesuksesan. Unduh MT5 sekarang dan jelajahi dunia peluang trading tanpa batas.',
        },
        desktop: {
          meta: 'PLATFORM TRADING',
          title: 'UNDUH MT5 UNTUK DESKTOP',
          description:
            'Rasakan kekuatan MT5 di desktop Anda. Akses alat charting canggih, kemampuan trading otomatis, dan data pasar real-time. WINPROFX menyediakan platform trading berbasis web yang mulus untuk trader profesional yang menginginkan fitur canggih dan fleksibilitas.',
        },
      },
    },
    blog: {
      pageMeta: 'Artikel',
      pageTitle: 'Blog WINPROFX',
    },
    introducingBroker: {
      advantages: {
        steps: {
          noSwap: 'Tanpa Swap',
          noCommission: 'Tanpa Komisi',
          lowSpread: 'Spread Rendah',
        },
      },
    },
    contact: {
      labels: {
        whatsapp: 'WhatsApp',
      },
    },
  },

  vi: {
    tradeToWin: {
      labels: {
        tier: 'BẬC',
        lots: 'Lot',
        withinDays: 'trong 30 ngày',
      },
      rewardTiersTitleHtml:
        'Giao dịch nhiều hơn, <span class="text-primary">Thắng nhiều hơn</span>',
      howItWorksSection: {
        subTitle: 'Quy trình',
        titleHtml: 'Cách <span class="text-primary">Hoạt động</span>',
        des: 'Bắt đầu rất đơn giản. Hoàn thành bốn bước này và bạn đang trên đường giành phần thưởng Apple độc quyền.',
        steps: {
          registerOptIn: {
            title: 'Đăng ký & Tham gia',
            body: 'Đăng ký với WINPROFX và tham gia chương trình Trade to Win ngay từ khoản nạp đầu tiên.',
          },
          chooseTier: {
            title: 'Chọn Bậc Thưởng',
            body: 'Chọn bậc phần thưởng bạn hướng tới — từ Power Bank đến iPhone mới nhất.',
          },
          trade30Days: {
            title: 'Giao dịch Trong 30 Ngày',
            body: 'Đạt khối lượng giao dịch mục tiêu trong 30 ngày. Các lệnh đủ điều kiện phải được giữ tối thiểu 3 phút.',
          },
          claimPrize: {
            title: 'Nhận Phần Thưởng',
            body: 'Khi đạt mục tiêu khối lượng, phần thưởng của bạn được xác nhận và gửi đến bạn.',
          },
        },
      },
      programConditionsSection: {
        subTitle: 'Quy tắc & Chi tiết',
        titleHtml: 'Điều kiện <span class="text-primary">Chương trình</span>',
        items: {
          programPeriod: {
            label: 'Thời gian Chương trình',
            value: '1 tháng 3, 2025 – 31 tháng 5, 2026',
          },
          tradingTimeline: {
            label: 'Thời hạn Giao dịch',
            value: '30 ngày kể từ ngày bắt đầu của bạn',
          },
          eligibleClients: {
            label: 'Khách hàng Đủ điều kiện',
            value: 'Chỉ khách hàng bán lẻ (loại trừ IB)',
          },
          minimumHold: {
            label: 'Thời gian Giữ Tối thiểu',
            value: '3 phút mỗi lệnh đủ điều kiện',
          },
          excludedInstruments: {
            label: 'Công cụ Bị loại trừ',
            value: 'Cổ phiếu & cặp crypto',
          },
          withdrawals: {
            label: 'Rút tiền',
            value: 'Được phép trong suốt chiến dịch',
          },
        },
      },
      importantTermsSection: {
        subTitle: 'Pháp lý',
        titleHtml: 'Điều khoản <span class="text-primary">Quan trọng</span>',
        des: 'Vui lòng đọc kỹ các điều khoản này trước khi tham gia chương trình Trade to Win.',
        items: {
          fairPlay: {
            title: 'Chơi Công bằng',
            body: 'Mọi dấu hiệu lạm dụng thị trường — bao gồm latency arbitrage hoặc kỹ thuật thao túng — sẽ dẫn đến loại ngay lập tức.',
          },
          eligibility: {
            title: 'Giới hạn Đủ điều kiện',
            body: 'Chỉ tài khoản cá nhân tự quản lý mới được tham gia. Tài khoản được quản lý hoặc tài khoản do IB giới thiệu không đủ điều kiện.',
          },
          liability: {
            title: 'Tuyên bố Miễn trừ Trách nhiệm',
            body: 'WINPROFX không chịu trách nhiệm về bất kỳ khoản lỗ giao dịch nào. Chương trình này không thay đổi hồ sơ rủi ro hoặc chiến lược đầu tư của người tham gia.',
          },
          dispute: {
            title: 'Giải quyết Tranh chấp',
            body: 'Mọi vấn đề không được đề cập trực tiếp trong các điều khoản này sẽ được ban quản lý giải quyết một cách công bằng và ràng buộc.',
          },
        },
      },
    },
    platform: {
      bannerMeta: 'Nền tảng',
      bannerDes:
        'WINPROFX đã đạt được thành công đáng kể trong việc mở rộng kinh doanh toàn cầu. WINPROFX cung cấp quyền truy cập nền tảng MetaTrader 5 (MT5) cho giao dịch Forex và CFD, có sẵn trên cả Android và iPhone, đưa bạn đến gần thành công hơn một bước. Tải MT5 ngay và bước vào thế giới cơ hội giao dịch vô tận.',
      cards: {
        mobile: {
          meta: 'NỀN TẢNG GIAO DỊCH',
          title: 'Tải MT5 cho Mobile',
          description:
            'WINPROFX liên tục mở rộng kinh doanh trên toàn thế giới, và giờ MT5 đã có trên Android và iPhone — bạn đến gần thành công hơn một bước. Tải MT5 ngay và khám phá thế giới cơ hội giao dịch không giới hạn.',
        },
        desktop: {
          meta: 'NỀN TẢNG GIAO DỊCH',
          title: 'TẢI MT5 CHO DESKTOP',
          description:
            'Trải nghiệm sức mạnh MT5 trên desktop. Truy cập công cụ biểu đồ nâng cao, khả năng giao dịch tự động và dữ liệu thị trường real-time. WINPROFX cung cấp nền tảng giao dịch web liền mạch cho trader chuyên nghiệp cần tính năng nâng cao và linh hoạt.',
        },
      },
    },
    blog: {
      pageMeta: 'Blog',
      pageTitle: 'Blog WINPROFX',
    },
    introducingBroker: {
      advantages: {
        steps: {
          noSwap: 'Không Swap',
          noCommission: 'Không Hoa hồng',
          lowSpread: 'Spread Thấp',
        },
      },
    },
  },

  bn: {
    tradeToWin: {
      labels: {
        tier: 'টিয়ার',
        lots: 'লট',
        withinDays: '৩০ দিনের মধ্যে',
      },
      rewardTiersTitleHtml:
        'আরও ট্রেড করুন, <span class="text-primary">আরও জিতুন</span>',
      howItWorksSection: {
        subTitle: 'প্রক্রিয়া',
        titleHtml: 'এটি কীভাবে <span class="text-primary">কাজ করে</span>',
        des: 'শুরু করা সহজ। এই চারটি ধাপ সম্পন্ন করুন এবং এক্সক্লুসিভ Apple পুরস্কার জেতার পথে এগিয়ে যান।',
        steps: {
          registerOptIn: {
            title: 'রেজিস্টার ও অপ্ট-ইন করুন',
            body: 'WINPROFX-এ সাইন আপ করুন এবং প্রথম ডিপোজিট থেকেই Trade to Win প্রোগ্রামে অপ্ট-ইন করুন।',
          },
          chooseTier: {
            title: 'আপনার টিয়ার বেছে নিন',
            body: 'যে রিওয়ার্ড টিয়ারের লক্ষ্য রাখছেন তা বেছে নিন — Power Bank থেকে সর্বশেষ iPhone পর্যন্ত।',
          },
          trade30Days: {
            title: '৩০ দিনের মধ্যে ট্রেড করুন',
            body: '৩০ দিনের মধ্যে আপনার লক্ষ্য ট্রেডিং ভলিউম অর্জন করুন। যোগ্য ট্রেড কমপক্ষে ৩ মিনিট ধরে রাখতে হবে।',
          },
          claimPrize: {
            title: 'আপনার পুরস্কার দাবি করুন',
            body: 'ভলিউম লক্ষ্য পূরণ হলে আপনার রিওয়ার্ড নিশ্চিত হয় এবং আপনার কাছে পাঠানো হয়।',
          },
        },
      },
      programConditionsSection: {
        subTitle: 'নিয়ম ও বিবরণ',
        titleHtml: 'প্রোগ্রাম <span class="text-primary">শর্তাবলী</span>',
        items: {
          programPeriod: {
            label: 'প্রোগ্রামের সময়কাল',
            value: '১ মার্চ, ২০২৫ – ৩১ মে, ২০২৬',
          },
          tradingTimeline: {
            label: 'ট্রেডিং সময়সীমা',
            value: 'শুরুর তারিখ থেকে ৩০ দিন',
          },
          eligibleClients: {
            label: 'যোগ্য ক্লায়েন্ট',
            value: 'শুধুমাত্র রিটেইল ক্লায়েন্ট (IB বাদে)',
          },
          minimumHold: {
            label: 'ন্যূনতম হোল্ড সময়',
            value: 'প্রতিটি যোগ্য ট্রেডে ৩ মিনিট',
          },
          excludedInstruments: {
            label: 'বহিষ্কৃত ইনস্ট্রুমেন্ট',
            value: 'স্টক ও ক্রিপ্টো পেয়ার',
          },
          withdrawals: {
            label: 'উত্তোলন',
            value: 'পুরো ক্যাম্পেইন জুড়ে অনুমোদিত',
          },
        },
      },
      importantTermsSection: {
        subTitle: 'আইনি',
        titleHtml: 'গুরুত্বপূর্ণ <span class="text-primary">শর্তাবলী</span>',
        des: 'Trade to Win প্রোগ্রামে অংশগ্রহণের আগে অনুগ্রহ করে এই শর্তাবলী সাবধানে পড়ুন।',
        items: {
          fairPlay: {
            title: 'ন্যায্য খেলা',
            body: 'বাজার অপব্যবহারের যেকোনো লক্ষণ — latency arbitrage বা কারসাজিমূলক কৌশল সহ — তাৎক্ষণিক অযোগ্যতার কারণ হবে।',
          },
          eligibility: {
            title: 'যোগ্যতার সীমাবদ্ধতা',
            body: 'শুধুমাত্র স্ব-নির্দেশিত ব্যক্তিগত অ্যাকাউন্ট অংশ নিতে পারে। পরিচালিত অ্যাকাউন্ট বা IB-রেফার্ড অ্যাকাউন্ট যোগ্য নয়।',
          },
          liability: {
            title: 'দায়িত্ব অস্বীকার',
            body: 'WINPROFX কোনো ট্রেডিং ক্ষতির জন্য দায়ী নয়। এই প্রোগ্রাম অংশগ্রহণকারীদের ঝুঁকি প্রোফাইল বা বিনিয়োগ কৌশল পরিবর্তন করে না।',
          },
          dispute: {
            title: 'বিরোধ নিষ্পত্তি',
            body: 'এই শর্তাবলীতে সরাসরি উল্লেখ না থাকা যেকোনো বিষয় ব্যবস্থাপনা দ্বারা ন্যায্য ও বাধ্যতামূলকভাবে সমাধান করা হবে।',
          },
        },
      },
    },
    platform: {
      bannerMeta: 'প্ল্যাটফর্ম',
      bannerDes:
        'WINPROFX বিশ্বব্যাপী ব্যবসা সম্প্রসারণে উল্লেখযোগ্য সাফল্য অর্জন করেছে। WINPROFX Forex এবং CFD ট্রেডিংয়ের জন্য MetaTrader 5 (MT5) প্ল্যাটফর্ম অ্যাক্সেস প্রদান করে, Android এবং iPhone উভয়েই উপলব্ধ, যা আপনাকে সাফল্যের এক ধাপ কাছে নিয়ে আসে। এখনই MT5 ডাউনলোড করুন এবং অসীম ট্রেডিং সুযোগের জগতে প্রবেশ করুন।',
      cards: {
        mobile: {
          meta: 'ট্রেডিং প্ল্যাটফর্ম',
          title: 'মোবাইলের জন্য MT5 ডাউনলোড করুন',
          description:
            'WINPROFX বিশ্বজুড়ে ব্যবসা সম্প্রসারণে ধারাবাহিক সাফল্য পেয়েছে, এবং এখন MT5 Android ও iPhone-এ উপলব্ধ — আপনি সাফল্যের এক ধাপ কাছে। এখনই MT5 ডাউনলোড করুন এবং সীমাহীন ট্রেডিং সুযোগের জগতে ডুব দিন।',
        },
        desktop: {
          meta: 'ট্রেডিং প্ল্যাটফর্ম',
          title: 'ডেস্কটপের জন্য MT5 ডাউনলোড করুন',
          description:
            'আপনার ডেস্কটপে MT5-এর শক্তি অনুভব করুন। উন্নত চার্টিং টুল, স্বয়ংক্রিয় ট্রেডিং ক্ষমতা এবং রিয়েল-টাইম মার্কেট ডেটা অ্যাক্সেস করুন। WINPROFX উন্নত ফিচার ও নমনীয়তা চাওয়া পেশাদার ট্রেডারদের জন্য একটি নিরবিচ্ছিন্ন ওয়েব-ভিত্তিক ট্রেডিং প্ল্যাটফর্ম প্রদান করে।',
        },
      },
    },
    blog: {
      pageMeta: 'ব্লগ',
      pageTitle: 'WINPROFX ব্লগ',
    },
    introducingBroker: {
      advantages: {
        steps: {
          noSwap: 'সোয়াপ নেই',
          noCommission: 'কমিশন নেই',
          lowSpread: 'কম স্প্রেড',
        },
      },
    },
  },

  ms: {
    tradeToWin: {
      labels: {
        tier: 'TINGKAT',
        lots: 'Lot',
        withinDays: 'dalam 30 hari',
      },
      rewardTiersTitleHtml:
        'Trade Lebih Banyak, <span class="text-primary">Menang Lebih Banyak</span>',
      howItWorksSection: {
        subTitle: 'Proses',
        titleHtml: 'Cara Ia <span class="text-primary">Berfungsi</span>',
        des: 'Bermula sangat mudah. Lengkapkan empat langkah ini dan anda sedang dalam perjalanan memenangi ganjaran eksklusif Apple.',
        steps: {
          registerOptIn: {
            title: 'Daftar & Opt In',
            body: 'Daftar dengan WINPROFX dan opt in ke program Trade to Win sejak deposit pertama anda.',
          },
          chooseTier: {
            title: 'Pilih Tingkat Anda',
            body: 'Pilih tingkat ganjaran yang anda sasarkan — dari Power Bank hingga iPhone terkini.',
          },
          trade30Days: {
            title: 'Trade Dalam 30 Hari',
            body: 'Capai volum dagangan sasaran dalam 30 hari. Dagangan yang layak mesti dipegang sekurang-kurangnya 3 minit.',
          },
          claimPrize: {
            title: 'Tuntut Ganjaran Anda',
            body: 'Setelah mencapai sasaran volum, ganjaran anda disahkan dan dihantar kepada anda.',
          },
        },
      },
      programConditionsSection: {
        subTitle: 'Peraturan & Butiran',
        titleHtml: 'Syarat <span class="text-primary">Program</span>',
        items: {
          programPeriod: {
            label: 'Tempoh Program',
            value: '1 Mac 2025 – 31 Mei 2026',
          },
          tradingTimeline: {
            label: 'Garis Masa Dagangan',
            value: '30 hari dari tarikh mula anda',
          },
          eligibleClients: {
            label: 'Pelanggan Layak',
            value: 'Hanya pelanggan runcit (IB dikecualikan)',
          },
          minimumHold: {
            label: 'Masa Pegangan Minimum',
            value: '3 minit setiap dagangan yang layak',
          },
          excludedInstruments: {
            label: 'Instrumen Dikecualikan',
            value: 'Saham & pasangan kripto',
          },
          withdrawals: {
            label: 'Pengeluaran',
            value: 'Dibenarkan sepanjang kempen',
          },
        },
      },
      importantTermsSection: {
        subTitle: 'Undang-undang',
        titleHtml: 'Terma <span class="text-primary">Penting</span>',
        des: 'Sila baca terma ini dengan teliti sebelum menyertai program Trade to Win.',
        items: {
          fairPlay: {
            title: 'Permainan Adil',
            body: 'Sebarang tanda penyalahgunaan pasaran — termasuk latency arbitrage atau teknik manipulatif — akan mengakibatkan diskualifikasi serta-merta.',
          },
          eligibility: {
            title: 'Had Kelayakan',
            body: 'Hanya akaun individu yang diurus sendiri boleh menyertai. Akaun terurus atau akaun yang dirujuk IB tidak layak.',
          },
          liability: {
            title: 'Penafian Liabiliti',
            body: 'WINPROFX tidak bertanggungjawab atas sebarang kerugian dagangan. Program ini tidak mengubah profil risiko atau strategi pelaburan peserta.',
          },
          dispute: {
            title: 'Penyelesaian Pertikaian',
            body: 'Sebarang isu yang tidak disebut secara langsung dalam terma ini akan diselesaikan oleh pengurusan secara adil dan mengikat.',
          },
        },
      },
    },
    platform: {
      bannerMeta: 'Platform',
      bannerDes:
        'WINPROFX telah mencapai kejayaan ketara dalam pengembangan perniagaan global. WINPROFX menyediakan akses platform MetaTrader 5 (MT5) untuk dagangan Forex dan CFD, tersedia di Android dan iPhone, membawa anda selangkah lebih dekat ke arah kejayaan. Muat turun MT5 sekarang dan terokai dunia peluang dagangan tanpa had.',
      cards: {
        mobile: {
          meta: 'PLATFORM DAGANGAN',
          title: 'Muat Turun MT5 untuk Mudah Alih',
          description:
            'WINPROFX terus berjaya mengembangkan perniagaannya di seluruh dunia, dan kini MT5 tersedia di Android dan iPhone — anda selangkah lebih dekat ke arah kejayaan. Muat turun MT5 sekarang dan terjun ke dunia peluang dagangan tanpa had.',
        },
        desktop: {
          meta: 'PLATFORM DAGANGAN',
          title: 'MUAT TURUN MT5 UNTUK DESKTOP',
          description:
            'Alami kuasa MT5 di desktop anda. Akses alat carta lanjutan, keupayaan dagangan automatik dan data pasaran masa nyata. WINPROFX menyediakan platform dagangan berasaskan web yang lancar untuk pedagang profesional yang mahukan ciri lanjutan dan fleksibiliti.',
        },
      },
    },
    blog: {
      pageMeta: 'Artikel',
      pageTitle: 'Blog WINPROFX',
    },
    introducingBroker: {
      advantages: {
        steps: {
          noSwap: 'Tanpa Swap',
          noCommission: 'Tanpa Komisen',
          lowSpread: 'Spread Rendah',
        },
      },
    },
  },
}

const TOOLS_PATCHES = {
  hi: {
    currencyCalculator: {
      bannerMeta: 'कैलकुलेटर',
      bannerTitle: 'सटीक ट्रेड योजना',
      bannerDes:
        'वैश्विक बाज़ारों में मार्जिन, पिप मान और ओवरनाइट स्वैप की रियल-टाइम गणना करें।',
      sectionTitle: 'Forex करेंसी कैलकुलेटर',
      sectionDes:
        'Forex करेंसी कैलकुलेटर एक उपयोगी टूल है जो ट्रेडर्स को रियल-टाइम एक्सचेंज रेटों का उपयोग करके एक मुद्रा को दूसरी में तेज़ी से बदलने में मदद करता है।',
      faqs: {
        allPairs: {
          title: 'क्या मैं सभी मुद्रा जोड़ों के लिए Forex करेंसी कैलकुलेटर का उपयोग कर सकता/सकती हूं?',
          body: 'हां, कैलकुलेटर सभी प्रमुख और माइनर मुद्रा जोड़ों का समर्थन करता है।',
        },
        accountTypes: {
          title: 'क्या Forex करेंसी कैलकुलेटर विभिन्न खाता प्रकारों को ध्यान में रखता है?',
          body: 'हां, आप अपने विशिष्ट खाता प्रकार और ट्रेडिंग शर्तों के अनुसार कैलकुलेटर सेटिंग्स अनुकूलित कर सकते हैं।',
        },
        accuracy: {
          title: 'Forex करेंसी कैलकुलेटर कितना सटीक है?',
          body: 'कैलकुलेटर इनपुट डेटा और वर्तमान बाज़ार स्थितियों के आधार पर अत्यधिक सटीक परिणाम प्रदान करता है।',
        },
        whereFind: {
          title: 'WINPROFX पर Forex करेंसी कैलकुलेटर कहाँ मिलेगा?',
          body: 'आप WINPROFX वेबसाइट पर अपने Personal Area के टूल्स सेक्शन में Forex करेंसी कैलकुलेटर एक्सेस कर सकते हैं।',
        },
        riskManagement: {
          title: 'क्या Forex करेंसी कैलकुलेटर जोखिम प्रबंधन में मदद कर सकता है?',
          body: 'हां, प्रमुख मेट्रिक्स की गणना करके यह आपके ट्रेड से जुड़े जोखिमों को बेहतर समझने और प्रबंधित करने में मदद करता है।',
        },
      },
    },
    currencyConverter: {
      bannerMeta: 'कन्वर्टर',
      bannerDes:
        'हमारे उपयोगकर्ता-अनुकूल करेंसी कन्वर्टर के साथ लाइव एक्सचेंज रेटों की गणना करें और सभी प्रमुख और विदेशी मुद्रा जोड़े आसानी से बदलें।',
      faqs: {
        enterAmount: {
          title: 'रूपांतरण के लिए राशि कैसे दर्ज करें?',
          body: 'निर्दिष्ट फ़ील्ड में अपनी base currency से रूपांतरित करने की इच्छित राशि दर्ज करें। कन्वर्टर स्वचालित रूप से चुनी गई मुद्राओं में समकक्ष मानों की गणना करेगा।',
        },
        ratesUpdated: {
          title: 'क्या विनिमय दरें रियल-टाइम में अपडेट होती हैं?',
          body: 'हां, WINPROFX Currency Converter द्वारा उपयोग की जाने वाली विनिमय दरें सटीकता सुनिश्चित करने के लिए रियल-टाइम में अपडेट होती हैं।',
        },
        accountRequired: {
          title: 'क्या मैं WINPROFX खाते के बिना करेंसी कन्वर्टर का उपयोग कर सकता/सकती हूं?',
          body: 'नहीं, करेंसी कन्वर्टर टूल एक्सेस और उपयोग करने के लिए आपके पास पंजीकृत WINPROFX खाता होना आवश्यक है।',
        },
        updateFrequency: {
          title: 'विनिमय दरें कितनी बार अपडेट होती हैं?',
          body: 'विनिमय दरें नवीनतम बाज़ार स्थितियों को दर्शाने के लिए रियल-टाइम में लगातार अपडेट होती हैं।',
        },
      },
    },
  },

  id: {
    currencyCalculator: {
      bannerMeta: 'Kalkulator',
      bannerTitle: 'Perencanaan Trade Presisi',
      bannerDes:
        'Hitung margin, nilai pip, dan swap overnight secara real-time di seluruh pasar global.',
      sectionTitle: 'Kalkulator Mata Uang Forex',
      sectionDes:
        'Kalkulator Mata Uang Forex adalah alat berguna yang membantu trader mengonversi satu mata uang ke mata uang lain dengan cepat menggunakan kurs real-time.',
      faqs: {
        allPairs: {
          title: 'Bisakah saya menggunakan Kalkulator Mata Uang Forex untuk semua pasangan mata uang?',
          body: 'Ya, kalkulator mendukung semua pasangan mata uang mayor dan minor.',
        },
        accountTypes: {
          title: 'Apakah Kalkulator Mata Uang Forex memperhitungkan jenis akun yang berbeda?',
          body: 'Ya, Anda dapat menyesuaikan pengaturan kalkulator agar sesuai dengan jenis akun dan kondisi trading spesifik Anda.',
        },
        accuracy: {
          title: 'Seberapa akurat Kalkulator Mata Uang Forex?',
          body: 'Kalkulator memberikan hasil yang sangat akurat berdasarkan data input dan kondisi pasar saat ini.',
        },
        whereFind: {
          title: 'Di mana saya dapat menemukan Kalkulator Mata Uang Forex di WINPROFX?',
          body: 'Anda dapat mengakses Kalkulator Mata Uang Forex di bagian alat Personal Area Anda di situs web WINPROFX.',
        },
        riskManagement: {
          title: 'Bisakah Kalkulator Mata Uang Forex membantu manajemen risiko?',
          body: 'Ya, dengan menghitung metrik utama, alat ini membantu Anda lebih memahami dan mengelola risiko yang terkait dengan trade Anda.',
        },
      },
    },
    currencyConverter: {
      bannerMeta: 'Konverter',
      bannerDes:
        'Hitung kurs live dan konversi semua pasangan mata uang mayor dan eksotis dengan mudah menggunakan konverter mata uang kami yang ramah pengguna.',
      faqs: {
        enterAmount: {
          title: 'Bagaimana cara memasukkan jumlah yang akan dikonversi?',
          body: 'Cukup masukkan jumlah yang ingin dikonversi dari mata uang dasar Anda di kolom yang tersedia. Konverter akan otomatis menghitung nilai setara dalam mata uang yang dipilih.',
        },
        ratesUpdated: {
          title: 'Apakah kurs pertukaran diperbarui secara real-time?',
          body: 'Ya, kurs yang digunakan oleh WINPROFX Currency Converter diperbarui secara real-time untuk memastikan akurasi.',
        },
        accountRequired: {
          title: 'Bisakah saya menggunakan konverter mata uang tanpa akun WINPROFX?',
          body: 'Tidak, Anda harus memiliki akun WINPROFX terdaftar untuk mengakses dan menggunakan alat konverter mata uang.',
        },
        updateFrequency: {
          title: 'Seberapa sering kurs pertukaran diperbarui?',
          body: 'Kurs pertukaran diperbarui terus-menerus secara real-time untuk mencerminkan kondisi pasar terkini.',
        },
      },
    },
  },

  vi: {
    currencyCalculator: {
      bannerMeta: 'Máy tính',
      bannerTitle: 'Lập kế hoạch Giao dịch Chính xác',
      bannerDes:
        'Tính margin, giá trị pip và swap qua đêm theo thời gian thực trên các thị trường toàn cầu.',
      sectionTitle: 'Máy tính Tiền tệ Forex',
      sectionDes:
        'Máy tính Tiền tệ Forex là công cụ hữu ích giúp trader nhanh chóng chuyển đổi một loại tiền tệ sang loại khác bằng tỷ giá real-time.',
      faqs: {
        allPairs: {
          title: 'Tôi có thể dùng Máy tính Tiền tệ Forex cho tất cả cặp tiền tệ không?',
          body: 'Có, máy tính hỗ trợ tất cả các cặp tiền tệ chính và phụ.',
        },
        accountTypes: {
          title: 'Máy tính Tiền tệ Forex có tính đến các loại tài khoản khác nhau không?',
          body: 'Có, bạn có thể tùy chỉnh cài đặt máy tính để phù hợp với loại tài khoản và điều kiện giao dịch cụ thể của mình.',
        },
        accuracy: {
          title: 'Máy tính Tiền tệ Forex chính xác đến mức nào?',
          body: 'Máy tính cung cấp kết quả rất chính xác dựa trên dữ liệu đầu vào và điều kiện thị trường hiện tại.',
        },
        whereFind: {
          title: 'Tôi có thể tìm Máy tính Tiền tệ Forex trên WINPROFX ở đâu?',
          body: 'Bạn có thể truy cập Máy tính Tiền tệ Forex trong phần công cụ Personal Area trên trang web WINPROFX.',
        },
        riskManagement: {
          title: 'Máy tính Tiền tệ Forex có giúp quản lý rủi ro không?',
          body: 'Có, bằng cách tính các chỉ số quan trọng, nó giúp bạn hiểu và quản lý rủi ro liên quan đến giao dịch tốt hơn.',
        },
      },
    },
    currencyConverter: {
      bannerMeta: 'Bộ chuyển đổi',
      bannerDes:
        'Tính tỷ giá live và chuyển đổi tất cả cặp tiền tệ chính và ngoại lai dễ dàng với bộ chuyển đổi tiền tệ thân thiện của chúng tôi.',
      faqs: {
        enterAmount: {
          title: 'Làm thế nào để nhập số tiền cần chuyển đổi?',
          body: 'Chỉ cần nhập số tiền bạn muốn chuyển đổi từ tiền tệ cơ sở vào ô được chỉ định. Bộ chuyển đổi sẽ tự động tính giá trị tương đương trong các loại tiền đã chọn.',
        },
        ratesUpdated: {
          title: 'Tỷ giá hối đoái có được cập nhật real-time không?',
          body: 'Có, tỷ giá được WINPROFX Currency Converter sử dụng được cập nhật real-time để đảm bảo độ chính xác.',
        },
        accountRequired: {
          title: 'Tôi có thể dùng bộ chuyển đổi tiền tệ mà không cần tài khoản WINPROFX không?',
          body: 'Không, bạn cần có tài khoản WINPROFX đã đăng ký để truy cập và sử dụng công cụ chuyển đổi tiền tệ.',
        },
        updateFrequency: {
          title: 'Tỷ giá hối đoái được cập nhật bao lâu một lần?',
          body: 'Tỷ giá được cập nhật liên tục theo thời gian thực để phản ánh điều kiện thị trường mới nhất.',
        },
      },
    },
  },

  bn: {
    currencyCalculator: {
      bannerMeta: 'ক্যালকুলেটর',
      bannerTitle: 'নির্ভুল ট্রেড পরিকল্পনা',
      bannerDes:
        'বিশ্বব্যাপী বাজারে মার্জিন, পিপ মান এবং ওভারনাইট সোয়াপ রিয়েল-টাইমে গণনা করুন।',
      sectionTitle: 'Forex কারেন্সি ক্যালকুলেটর',
      sectionDes:
        'Forex কারেন্সি ক্যালকুলেটর একটি দরকারী টুল যা ট্রেডারদের রিয়েল-টাইম এক্সচেঞ্জ রেট ব্যবহার করে এক মুদ্রা থেকে অন্য মুদ্রায় দ্রুত রূপান্তর করতে সাহায্য করে।',
      faqs: {
        allPairs: {
          title: 'আমি কি সব কারেন্সি পেয়ারের জন্য Forex কারেন্সি ক্যালকুলেটর ব্যবহার করতে পারি?',
          body: 'হ্যাঁ, ক্যালকুলেটর সব প্রধান ও গৌণ কারেন্সি পেয়ার সমর্থন করে।',
        },
        accountTypes: {
          title: 'Forex কারেন্সি ক্যালকুলেটর কি বিভিন্ন অ্যাকাউন্ট টাইপ বিবেচনা করে?',
          body: 'হ্যাঁ, আপনি আপনার নির্দিষ্ট অ্যাকাউন্ট টাইপ ও ট্রেডিং শর্তের সাথে মিলিয়ে ক্যালকুলেটর সেটিংস কাস্টমাইজ করতে পারেন।',
        },
        accuracy: {
          title: 'Forex কারেন্সি ক্যালকুলেটর কতটা নির্ভুল?',
          body: 'ক্যালকুলেটর ইনপুট ডেটা ও বর্তমান বাজার অবস্থার ভিত্তিতে অত্যন্ত নির্ভুল ফলাফল প্রদান করে।',
        },
        whereFind: {
          title: 'WINPROFX-এ Forex কারেন্সি ক্যালকুলেটর কোথায় পাব?',
          body: 'আপনি WINPROFX ওয়েবসাইটে আপনার Personal Area-এর টুলস বিভাগে Forex কারেন্সি ক্যালকুলেটর অ্যাক্সেস করতে পারেন।',
        },
        riskManagement: {
          title: 'Forex কারেন্সি ক্যালকুলেটর কি ঝুঁকি ব্যবস্থাপনায় সাহায্য করতে পারে?',
          body: 'হ্যাঁ, মূল মেট্রিক্স গণনা করে এটি আপনার ট্রেডের সাথে জড়িত ঝুঁকি আরও ভালোভাবে বুঝতে ও পরিচালনা করতে সাহায্য করে।',
        },
      },
    },
    currencyConverter: {
      bannerMeta: 'কনভার্টার',
      bannerDes:
        'আমাদের ব্যবহারকারী-বান্ধব কারেন্সি কনভার্টার দিয়ে লাইভ এক্সচেঞ্জ রেট গণনা করুন এবং সব প্রধান ও এক্সোটিক কারেন্সি পেয়ার সহজেই রূপান্তর করুন।',
      faqs: {
        enterAmount: {
          title: 'রূপান্তরের পরিমাণ কীভাবে লিখব?',
          body: 'নির্ধারিত ক্ষেত্রে আপনার base currency থেকে রূপান্তর করতে চাওয়া পরিমাণ লিখুন। কনভার্টার স্বয়ংক্রিয়ভাবে নির্বাচিত মুদ্রায় সমতুল্য মান গণনা করবে।',
        },
        ratesUpdated: {
          title: 'এক্সচেঞ্জ রেট কি রিয়েল-টাইমে আপডেট হয়?',
          body: 'হ্যাঁ, WINPROFX Currency Converter-এ ব্যবহৃত এক্সচেঞ্জ রেট নির্ভুলতা নিশ্চিত করতে রিয়েল-টাইমে আপডেট হয়।',
        },
        accountRequired: {
          title: 'WINPROFX অ্যাকাউন্ট ছাড়া কি কারেন্সি কনভার্টার ব্যবহার করতে পারি?',
          body: 'না, কারেন্সি কনভার্টার টুল অ্যাক্সেস ও ব্যবহার করতে আপনার নিবন্ধিত WINPROFX অ্যাকাউন্ট থাকা প্রয়োজন।',
        },
        updateFrequency: {
          title: 'এক্সচেঞ্জ রেট কত ঘন ঘন আপডেট হয়?',
          body: 'সর্বশেষ বাজার অবস্থা প্রতিফলিত করতে এক্সচেঞ্জ রেট রিয়েল-টাইমে ক্রমাগত আপডেট হয়।',
        },
      },
    },
  },

  ms: {
    currencyCalculator: {
      bannerMeta: 'Kalkulator',
      bannerTitle: 'Perancangan Dagangan Tepat',
      bannerDes:
        'Kira margin, nilai pip dan swap semalaman secara masa nyata merentasi pasaran global.',
      sectionTitle: 'Kalkulator Mata Wang Forex',
      sectionDes:
        'Kalkulator Mata Wang Forex ialah alat berguna yang membantu pedagang menukar satu mata wang kepada mata wang lain dengan pantas menggunakan kadar pertukaran masa nyata.',
      faqs: {
        allPairs: {
          title: 'Bolehkah saya menggunakan Kalkulator Mata Wang Forex untuk semua pasangan mata wang?',
          body: 'Ya, kalkulator menyokong semua pasangan mata wang utama dan kecil.',
        },
        accountTypes: {
          title: 'Adakah Kalkulator Mata Wang Forex mengambil kira jenis akaun yang berbeza?',
          body: 'Ya, anda boleh menyesuaikan tetapan kalkulator agar sepadan dengan jenis akaun dan keadaan dagangan khusus anda.',
        },
        accuracy: {
          title: 'Sejauh manakah ketepatan Kalkulator Mata Wang Forex?',
          body: 'Kalkulator memberikan hasil yang sangat tepat berdasarkan data input dan keadaan pasaran semasa.',
        },
        whereFind: {
          title: 'Di manakah saya boleh mencari Kalkulator Mata Wang Forex di WINPROFX?',
          body: 'Anda boleh mengakses Kalkulator Mata Wang Forex di bahagian alat Personal Area anda di laman web WINPROFX.',
        },
        riskManagement: {
          title: 'Bolehkah Kalkulator Mata Wang Forex membantu pengurusan risiko?',
          body: 'Ya, dengan mengira metrik utama, ia membantu anda lebih memahami dan mengurus risiko yang berkaitan dengan dagangan anda.',
        },
      },
    },
    currencyConverter: {
      bannerMeta: 'Penukar',
      bannerDes:
        'Kira kadar pertukaran langsung dan tukar semua pasangan mata wang utama dan eksotik dengan mudah menggunakan penukar mata wang mesra pengguna kami.',
      faqs: {
        enterAmount: {
          title: 'Bagaimana cara memasukkan jumlah untuk ditukar?',
          body: 'Hanya masukkan jumlah yang ingin ditukar dari mata wang asas anda dalam medan yang disediakan. Penukar akan mengira nilai setara dalam mata wang yang dipilih secara automatik.',
        },
        ratesUpdated: {
          title: 'Adakah kadar pertukaran dikemas kini secara masa nyata?',
          body: 'Ya, kadar pertukaran yang digunakan oleh WINPROFX Currency Converter dikemas kini secara masa nyata untuk memastikan ketepatan.',
        },
        accountRequired: {
          title: 'Bolehkah saya menggunakan penukar mata wang tanpa akaun WINPROFX?',
          body: 'Tidak, anda perlu mempunyai akaun WINPROFX berdaftar untuk mengakses dan menggunakan alat penukar mata wang.',
        },
        updateFrequency: {
          title: 'Berapa kerap kadar pertukaran dikemas kini?',
          body: 'Kadar pertukaran dikemas kini secara berterusan dalam masa nyata untuk mencerminkan keadaan pasaran terkini.',
        },
      },
    },
  },
}

const LOCALES = ['hi', 'id', 'vi', 'bn', 'ms']

for (const locale of LOCALES) {
  const tradingPath = join(LOCALES_DIR, locale, 'trading.json')
  const tradingData = JSON.parse(readFileSync(tradingPath, 'utf8'))
  deepMerge(tradingData, TRADING_PATCHES[locale])
  writeFileSync(tradingPath, `${JSON.stringify(tradingData, null, 2)}\n`)

  const toolsPath = join(LOCALES_DIR, locale, 'tools.json')
  const toolsData = JSON.parse(readFileSync(toolsPath, 'utf8'))
  deepMerge(toolsData, TOOLS_PATCHES[locale])
  writeFileSync(toolsPath, `${JSON.stringify(toolsData, null, 2)}\n`)

  console.log(`Applied translations: ${locale}`)
}

console.log('Done.')
