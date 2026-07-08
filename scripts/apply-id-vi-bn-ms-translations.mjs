/**
 * Applies remaining id/vi/bn/ms translations flagged by check-untranslated-locales.mjs.
 * Does NOT change LOCALE_SEO_READY flags.
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

const marketsPatch = (locale) => {
  const m = {
    id: {
      trustCenter: 'Pusat Kepercayaan WINPROFX',
      learningCenter: 'Pusat Pembelajaran WINPROFX',
      forexTitle: 'Trading Forex',
      forexMeta: 'Trading forex',
      indicesMeta: 'Trading indeks',
      indicesTitle: 'Trading Indeks',
      cryptoMeta: 'Trading kripto',
      cryptoTitle: 'Trading Kripto',
      metalsMeta: 'Trading logam',
      metalsTitle: 'Trading Logam',
      commoditiesMeta: 'Trading komoditas',
      commoditiesTitle: 'Trading Komoditas',
      oilMeta: 'Trading minyak',
      oilTitle: 'Trading Minyak',
    },
    vi: {
      trustCenter: 'Trung tâm Tin cậy WINPROFX',
      learningCenter: 'Trung tâm Học tập WINPROFX',
      forexTitle: 'Giao dịch Forex',
      forexMeta: 'Giao dịch forex',
      indicesMeta: 'Giao dịch chỉ số',
      indicesTitle: 'Giao dịch Chỉ số',
      cryptoMeta: 'Giao dịch crypto',
      cryptoTitle: 'Giao dịch Crypto',
      metalsMeta: 'Giao dịch kim loại',
      metalsTitle: 'Giao dịch Kim loại',
      commoditiesMeta: 'Giao dịch hàng hóa',
      commoditiesTitle: 'Giao dịch Hàng hóa',
      oilMeta: 'Giao dịch dầu',
      oilTitle: 'Giao dịch Dầu',
    },
    bn: {
      trustCenter: 'WINPROFX ট্রাস্ট সেন্টার',
      learningCenter: 'WINPROFX লার্নিং সেন্টার',
      forexTitle: 'Forex ট্রেডিং',
      forexMeta: 'Forex ট্রেডিং',
      indicesMeta: 'ইনডেক্স ট্রেডিং',
      indicesTitle: 'ইনডেক্স ট্রেডিং',
      cryptoMeta: 'ক্রিপ্টো ট্রেডিং',
      cryptoTitle: 'ক্রিপ্টো ট্রেডিং',
      metalsMeta: 'ধাতু ট্রেডিং',
      metalsTitle: 'ধাতু ট্রেডিং',
      commoditiesMeta: 'কমোডিটি ট্রেডিং',
      commoditiesTitle: 'কমোডিটি ট্রেডিং',
      oilMeta: 'তেল ট্রেডিং',
      oilTitle: 'তেল ট্রেডিং',
    },
    ms: {
      trustCenter: 'Pusat Amanah WINPROFX',
      learningCenter: 'Pusat Pembelajaran WINPROFX',
      forexTitle: 'Dagangan Forex',
      forexMeta: 'Dagangan forex',
      indicesMeta: 'Dagangan indeks',
      indicesTitle: 'Dagangan Indeks',
      cryptoMeta: 'Dagangan kripto',
      cryptoTitle: 'Dagangan Kripto',
      metalsMeta: 'Dagangan logam',
      metalsTitle: 'Dagangan Logam',
      commoditiesMeta: 'Dagangan komoditi',
      commoditiesTitle: 'Dagangan Komoditi',
      oilMeta: 'Dagangan minyak',
      oilTitle: 'Dagangan Minyak',
    },
  }[locale]

  return {
    shared: {
      trustLinks: {
        trustCenter: m.trustCenter,
        learningCenter: m.learningCenter,
      },
    },
    forex: { banner: { title: m.forexTitle }, card: { meta: m.forexMeta } },
    indices: {
      banner: { meta: m.indicesMeta, title: m.indicesTitle },
      card: { meta: m.indicesMeta },
    },
    crypto: {
      banner: { meta: m.cryptoMeta, title: m.cryptoTitle },
      card: { meta: m.cryptoMeta },
    },
    metals: {
      banner: { meta: m.metalsMeta, title: m.metalsTitle },
      card: { meta: m.metalsMeta },
    },
    commodities: {
      banner: { meta: m.commoditiesMeta, title: m.commoditiesTitle },
      card: { meta: m.commoditiesMeta },
    },
    oil: {
      banner: { meta: m.oilMeta, title: m.oilTitle },
      card: { meta: m.oilMeta },
    },
  }
}

const economicCalendarPatch = (locale) =>
  ({
    id: {
      heroDescription:
        'Lacak peristiwa makroekonomi global, indikator volatilitas, dan data yang menggerakkan pasar secara real-time.',
      symbolsLabel: 'Simbol',
      sampleEvent: 'Non-Farm Payrolls (NFP)',
      impactHigh: 'Tinggi',
      sections: {
        understanding: {
          title: 'Memahami dan Memanfaatkan Kalender Ekonomi Forex',
          p1: 'Kalender Ekonomi Forex adalah alat berharga bagi trader, memungkinkan mereka memantau dan menganalisis peristiwa yang mendorong pergerakan pasar dan memperkirakan perubahan harga. Alat ini mencantumkan berita nasional dan internasional penting secara kronologis.',
          p2: 'Peristiwa kunci seperti keputusan kebijakan moneter, indikator ekonomi, pengumuman PDB, angka Non-Farm Payrolls (NFP), dan perubahan suku bunga disertakan karena dapat sangat memengaruhi pasar keuangan.',
        },
        whyUse: {
          title: 'Mengapa Anda Harus Menggunakan Kalender Ekonomi Forex',
          p1: 'Kalender Ekonomi Forex penting untuk mengikuti berita, laporan, dan pengumuman mendatang. Peristiwa ini dapat memengaruhi volatilitas pasangan mata uang forex, saham, dan pasar lain secara signifikan.',
          p2: 'Dengan menggunakan kalender, trader dapat merencanakan trading lebih efektif dan tetap mendapat informasi tentang pola grafik dan indikator yang mungkin terpengaruh. Merujuk kalender sebelum hari trading adalah praktik yang bijaksana.',
        },
      },
      faqSubtitle:
        'Temukan jawaban jelas dan ringkas untuk pertanyaan paling umum tentang trading, pengaturan akun, deposit, penarikan, dan fitur platform.',
      faqs: {
        whatIs: {
          title: 'Apa itu Kalender Ekonomi Forex?',
          body: '<p>Kalender Ekonomi adalah alat yang mencantumkan peristiwa ekonomi penting dan rilis data secara kronologis, yang dapat memengaruhi pasar keuangan.</p>',
        },
        howToUse: {
          title: 'Bagaimana cara menggunakan Kalender Ekonomi Forex untuk trading?',
          body: '<p>Trader menggunakan Kalender Ekonomi untuk tetap mendapat informasi tentang peristiwa mendatang yang mungkin memengaruhi pergerakan pasar, membantu merencanakan trading lebih efektif.</p>',
        },
        eventTypes: {
          title: 'Jenis peristiwa apa saja yang tercantum di Kalender Ekonomi Forex?',
          body: '<p>Kalender Ekonomi mencakup peristiwa seperti keputusan kebijakan moneter, indikator ekonomi, pengumuman PDB, angka Non-Farm Payrolls (NFP), dan perubahan suku bunga.</p>',
        },
        impact: {
          title: 'Bagaimana peristiwa ekonomi Forex memengaruhi trading?',
          body: '<p>Peristiwa ekonomi dapat menyebabkan volatilitas signifikan di pasar keuangan, memengaruhi harga pasangan forex, saham, dan instrumen lain.</p>',
        },
        whereFind: {
          title: 'Di mana saya dapat menemukan Kalender Ekonomi Forex di platform WINPROFX?',
          body: '<p>Kalender Ekonomi dapat diakses di Personal Area Anda di situs web WINPROFX atau melalui aplikasi WINPROFX Trade.</p>',
        },
        notifications: {
          title: 'Bisakah saya mendapat notifikasi untuk peristiwa ekonomi Forex mendatang?',
          body: '<p>Ya, Anda dapat menerima notifikasi untuk peristiwa ekonomi mendatang di tab "Mailbox" pada platform trading Anda.</p>',
        },
        importance: {
          title: 'Apakah semua peristiwa ekonomi Forex sama pentingnya untuk trading?',
          body: '<p>Tidak, dampak peristiwa ekonomi bervariasi. Peristiwa besar seperti keputusan suku bunga dan angka NFP biasanya memiliki dampak lebih tinggi.</p>',
        },
        updated: {
          title: 'Seberapa sering Kalender Ekonomi Forex diperbarui?',
          body: '<p>Kalender Ekonomi diperbarui secara real-time untuk memastikan Anda memiliki informasi paling mutakhir tentang peristiwa mendatang.</p>',
        },
      },
    },
    vi: {
      heroDescription:
        'Theo dõi các sự kiện kinh tế vĩ mô toàn cầu, chỉ báo biến động và dữ liệu tác động thị trường theo thời gian thực.',
      symbolsLabel: 'Ký hiệu',
      sampleEvent: 'Bảng lương phi nông nghiệp (NFP)',
      impactHigh: 'Cao',
      sections: {
        understanding: {
          title: 'Hiểu và Sử dụng Lịch Kinh tế Forex',
          p1: 'Lịch Kinh tế Forex là công cụ vô giá cho trader, giúp theo dõi và phân tích các sự kiện thúc đẩy thị trường và dự báo biến động giá. Nó liệt kê các tin tức quốc gia và quốc tế quan trọng theo thứ tự thời gian.',
          p2: 'Các sự kiện quan trọng như quyết định chính sách tiền tệ, chỉ số kinh tế, công bố GDP, số liệu Non-Farm Payrolls (NFP) và thay đổi lãi suất được bao gồm vì chúng có thể ảnh hưởng mạnh đến thị trường tài chính.',
        },
        whyUse: {
          title: 'Tại sao bạn nên sử dụng Lịch Kinh tế Forex',
          p1: 'Lịch Kinh tế Forex cần thiết để cập nhật tin tức, báo cáo và thông báo sắp tới. Các sự kiện này có thể ảnh hưởng đáng kể đến biến động của các cặp tiền forex, cổ phiếu và thị trường khác.',
          p2: 'Bằng cách sử dụng lịch, trader có thể lập kế hoạch giao dịch hiệu quả hơn và nắm bắt các mẫu biểu đồ và chỉ báo có thể bị ảnh hưởng. Tham khảo lịch trước ngày giao dịch là thói quen khôn ngoan.',
        },
      },
      faqSubtitle:
        'Tìm câu trả lời rõ ràng và ngắn gọn cho các câu hỏi phổ biến nhất về giao dịch, thiết lập tài khoản, nạp/rút tiền và tính năng nền tảng.',
      faqs: {
        whatIs: {
          title: 'Lịch Kinh tế Forex là gì?',
          body: '<p>Lịch Kinh tế là công cụ liệt kê các sự kiện kinh tế quan trọng và phát hành dữ liệu theo thứ tự thời gian, có thể tác động đến thị trường tài chính.</p>',
        },
        howToUse: {
          title: 'Làm thế nào để sử dụng Lịch Kinh tế Forex cho giao dịch?',
          body: '<p>Trader sử dụng Lịch Kinh tế để cập nhật các sự kiện sắp tới có thể ảnh hưởng đến thị trường, giúp lập kế hoạch giao dịch hiệu quả hơn.</p>',
        },
        eventTypes: {
          title: 'Những loại sự kiện nào được liệt kê trên Lịch Kinh tế Forex?',
          body: '<p>Lịch Kinh tế bao gồm các sự kiện như quyết định chính sách tiền tệ, chỉ số kinh tế, công bố GDP, số liệu Non-Farm Payrolls (NFP) và thay đổi lãi suất.</p>',
        },
        impact: {
          title: 'Các sự kiện kinh tế Forex ảnh hưởng giao dịch như thế nào?',
          body: '<p>Các sự kiện kinh tế có thể gây biến động đáng kể trên thị trường tài chính, ảnh hưởng giá các cặp forex, cổ phiếu và công cụ khác.</p>',
        },
        whereFind: {
          title: 'Tôi có thể tìm Lịch Kinh tế Forex trên nền tảng WINPROFX ở đâu?',
          body: '<p>Lịch Kinh tế có thể truy cập trong Personal Area trên website WINPROFX hoặc qua ứng dụng WINPROFX Trade.</p>',
        },
        notifications: {
          title: 'Tôi có thể nhận thông báo cho các sự kiện kinh tế Forex sắp tới không?',
          body: '<p>Có, bạn có thể nhận thông báo cho các sự kiện kinh tế sắp tới trong tab "Mailbox" trên nền tảng giao dịch của bạn.</p>',
        },
        importance: {
          title: 'Tất cả sự kiện kinh tế Forex có quan trọng như nhau không?',
          body: '<p>Không, tác động của các sự kiện kinh tế khác nhau. Các sự kiện lớn như quyết định lãi suất và số liệu NFP thường có tác động cao hơn.</p>',
        },
        updated: {
          title: 'Lịch Kinh tế Forex được cập nhật bao lâu một lần?',
          body: '<p>Lịch Kinh tế được cập nhật theo thời gian thực để đảm bảo bạn có thông tin mới nhất về các sự kiện sắp tới.</p>',
        },
      },
    },
    bn: {
      heroDescription:
        'বিশ্বব্যাপী ম্যাক্রোইকোনমিক ইভেন্ট, অস্থিরতা সূচক এবং বাজার-চালিত ডেটা রিয়েল-টাইমে ট্র্যাক করুন।',
      symbolsLabel: 'প্রতীক',
      sampleEvent: 'নন-ফার্ম পেরোল (NFP)',
      impactHigh: 'উচ্চ',
      sections: {
        understanding: {
          title: 'Forex Economic Calendar বোঝা এবং ব্যবহার',
          p1: 'Forex Economic Calendar ট্রেডারদের জন্য একটি অমূল্য সরঞ্জাম, যা বাজারের চলাচল ও মূল্য পরিবর্তনের পূর্বাভাসে সহায়তা করে। এটি গুরুত্বপূর্ণ জাতীয় ও আন্তর্জাতিক সংবাদ ইভেন্ট কালানুক্রমিকভাবে তালিকাভুক্ত করে।',
          p2: 'মুদ্রানীতি সিদ্ধান্ত, অর্থনৈতিক সূচক, জিডিপি ঘোষণা, Non-Farm Payrolls (NFP) এবং সুদের হার পরিবর্তনের মতো মূল ইভেন্ট অন্তর্ভুক্ত, কারণ এগুলো আর্থিক বাজারকে ব্যাপকভাবে প্রভাবিত করতে পারে।',
        },
        whyUse: {
          title: 'কেন Forex Economic Calendar ব্যবহার করবেন',
          p1: 'Forex Economic Calendar আসন্ন সংবাদ, রিপোর্ট ও ঘোষণার সাথে আপডেট থাকার জন্য অপরিহার্য। এই ইভেন্টগুলো forex মুদ্রা জোড়, স্টক ও অন্যান্য বাজারের অস্থিরতাকে উল্লেখযোগ্যভাবে প্রভাবিত করতে পারে।',
          p2: 'ক্যালেন্ডার ব্যবহার করে ট্রেডাররা তাদের ট্রেড আরও কার্যকরভাবে পরিকল্পনা করতে পারেন এবং যে চার্ট প্যাটার্ন ও সূচক প্রভাবিত হতে পারে সে সম্পর্কে অবগত থাকতে পারেন। ট্রেডিং দিনের আগে ক্যালেন্ডার দেখা একটি বুদ্ধিমান অভ্যাস।',
        },
      },
      faqSubtitle:
        'ট্রেডিং, অ্যাকাউন্ট সেটআপ, ডিপোজিট, উইথড্রয়াল এবং প্ল্যাটফর্ম বৈশিষ্ট্য সম্পর্কে সবচেয়ে সাধারণ প্রশ্নগুলোর স্পষ্ট ও সংক্ষিপ্ত উত্তর পান।',
      faqs: {
        whatIs: {
          title: 'Forex Economic Calendar কী?',
          body: '<p>Economic Calendar একটি সরঞ্জাম যা গুরুত্বপূর্ণ অর্থনৈতিক ইভেন্ট ও ডেটা রিলিজ কালানুক্রমিকভাবে তালিকাভুক্ত করে, যা আর্থিক বাজারকে প্রভাবিত করতে পারে।</p>',
        },
        howToUse: {
          title: 'ট্রেডিংয়ের জন্য Forex Economic Calendar কীভাবে ব্যবহার করব?',
          body: '<p>ট্রেডাররা Economic Calendar ব্যবহার করে আসন্ন ইভেন্ট সম্পর্কে অবগত থাকেন, যা বাজারের চলাচলকে প্রভাবিত করতে পারে, এবং তাদের ট্রেড আরও কার্যকরভাবে পরিকল্পনা করতে সাহায্য করে।</p>',
        },
        eventTypes: {
          title: 'Forex Economic Calendar-এ কী ধরনের ইভেন্ট তালিকাভুক্ত?',
          body: '<p>Economic Calendar-এ মুদ্রানীতি সিদ্ধান্ত, অর্থনৈতিক সূচক, জিডিপি ঘোষণা, Non-Farm Payrolls (NFP) এবং সুদের হার পরিবর্তনের মতো ইভেন্ট অন্তর্ভুক্ত।</p>',
        },
        impact: {
          title: 'Forex economic events ট্রেডিংকে কীভাবে প্রভাবিত করে?',
          body: '<p>অর্থনৈতিক ইভেন্ট আর্থিক বাজারে উল্লেখযোগ্য অস্থিরতা সৃষ্টি করতে পারে, forex জোড়, স্টক ও অন্যান্য ইনস্ট্রুমেন্টের মূল্যকে প্রভাবিত করে।</p>',
        },
        whereFind: {
          title: 'WINPROFX প্ল্যাটফর্মে Forex Economic Calendar কোথায় পাব?',
          body: '<p>Economic Calendar WINPROFX ওয়েবসাইটে আপনার Personal Area-তে বা WINPROFX Trade অ্যাপের মাধ্যমে অ্যাক্সেসযোগ্য।</p>',
        },
        notifications: {
          title: 'আসন্ন Forex economic events-এর জন্য কি নোটিফিকেশন পেতে পারি?',
          body: '<p>হ্যাঁ, আপনি আপনার ট্রেডিং প্ল্যাটফর্মে "Mailbox" ট্যাবের অধীনে আসন্ন economic events-এর জন্য নোটিফিকেশন পেতে পারেন।</p>',
        },
        importance: {
          title: 'সব Forex economic events কি ট্রেডিংয়ের জন্য সমান গুরুত্বপূর্ণ?',
          body: '<p>না, economic events-এর প্রভাব ভিন্ন। সুদের হার সিদ্ধান্ত ও NFP-এর মতো বড় ইভেন্ট সাধারণত অন্যগুলোর চেয়ে বেশি প্রভাব ফেলে।</p>',
        },
        updated: {
          title: 'Forex Economic Calendar কত ঘন ঘন আপডেট হয়?',
          body: '<p>Economic Calendar রিয়েল-টাইমে আপডেট করা হয় যাতে আপনি আসন্ন ইভেন্ট সম্পর্কে সবচেয়ে সাম্প্রতিক তথ্য পান।</p>',
        },
      },
    },
    ms: {
      heroDescription:
        'Jejaki peristiwa makroekonomi global, penunjuk volatiliti, dan data yang menggerakkan pasaran secara masa nyata.',
      symbolsLabel: 'Simbol',
      sampleEvent: 'Gaji Bukan Pertanian (NFP)',
      impactHigh: 'Tinggi',
      sections: {
        understanding: {
          title: 'Memahami dan Memanfaatkan Kalendar Ekonomi Forex',
          p1: 'Kalendar Ekonomi Forex ialah alat bernilai untuk pedagang, membolehkan mereka memantau dan menganalisis peristiwa yang mendorong pergerakan pasaran dan meramalkan perubahan harga. Ia menyenaraikan berita nasional dan antarabangsa penting secara kronologi.',
          p2: 'Peristiwa utama seperti keputusan dasar monetari, penunjuk ekonomi, pengumuman KDNK, angka Non-Farm Payrolls (NFP), dan perubahan kadar faedah disertakan kerana ia boleh mempengaruhi pasaran kewangan dengan ketara.',
        },
        whyUse: {
          title: 'Mengapa Anda Perlu Menggunakan Kalendar Ekonomi Forex',
          p1: 'Kalendar Ekonomi Forex penting untuk kekal dimaklumkan tentang berita, laporan, dan pengumuman akan datang. Peristiwa ini boleh mempengaruhi volatiliti pasangan mata wang forex, saham, dan pasaran lain dengan ketara.',
          p2: 'Dengan menggunakan kalendar, pedagang boleh merancang dagangan dengan lebih berkesan dan kekal dimaklumkan tentang corak carta dan penunjuk yang mungkin terjejas. Merujuk kalendar sebelum hari dagangan adalah amalan yang bijak.',
        },
      },
      faqSubtitle:
        'Dapatkan jawapan jelas dan ringkas untuk soalan paling biasa tentang dagangan, persediaan akaun, deposit, pengeluaran, dan ciri platform.',
      faqs: {
        whatIs: {
          title: 'Apakah Kalendar Ekonomi Forex?',
          body: '<p>Kalendar Ekonomi ialah alat yang menyenaraikan peristiwa ekonomi penting dan keluaran data secara kronologi, yang boleh memberi kesan kepada pasaran kewangan.</p>',
        },
        howToUse: {
          title: 'Bagaimana saya boleh menggunakan Kalendar Ekonomi Forex untuk dagangan?',
          body: '<p>Pedagang menggunakan Kalendar Ekonomi untuk kekal dimaklumkan tentang peristiwa akan datang yang mungkin mempengaruhi pergerakan pasaran, membantu merancang dagangan dengan lebih berkesan.</p>',
        },
        eventTypes: {
          title: 'Apakah jenis peristiwa yang disenaraikan pada Kalendar Ekonomi Forex?',
          body: '<p>Kalendar Ekonomi merangkumi peristiwa seperti keputusan dasar monetari, penunjuk ekonomi, pengumuman KDNK, angka Non-Farm Payrolls (NFP), dan perubahan kadar faedah.</p>',
        },
        impact: {
          title: 'Bagaimanakah peristiwa ekonomi Forex memberi kesan kepada dagangan?',
          body: '<p>Peristiwa ekonomi boleh menyebabkan volatiliti ketara dalam pasaran kewangan, mempengaruhi harga pasangan forex, saham, dan instrumen lain.</p>',
        },
        whereFind: {
          title: 'Di manakah saya boleh menemui Kalendar Ekonomi Forex pada platform WINPROFX?',
          body: '<p>Kalendar Ekonomi boleh diakses dalam Personal Area anda di laman web WINPROFX atau melalui aplikasi WINPROFX Trade.</p>',
        },
        notifications: {
          title: 'Bolehkah saya mendapat notifikasi untuk peristiwa ekonomi Forex akan datang?',
          body: '<p>Ya, anda boleh menerima notifikasi untuk peristiwa ekonomi akan datang di bawah tab "Mailbox" pada platform dagangan anda.</p>',
        },
        importance: {
          title: 'Adakah semua peristiwa ekonomi Forex sama penting untuk dagangan?',
          body: '<p>Tidak, kesan peristiwa ekonomi berbeza. Peristiwa utama seperti keputusan kadar faedah dan angka NFP biasanya memberi kesan lebih tinggi.</p>',
        },
        updated: {
          title: 'Berapa kerap Kalendar Ekonomi Forex dikemas kini?',
          body: '<p>Kalendar Ekonomi dikemas kini secara masa nyata untuk memastikan anda mempunyai maklumat paling terkini tentang peristiwa akan datang.</p>',
        },
      },
    },
  })[locale]

const promotionUiPatch = (locale) =>
  ({
    id: {
      howItWorks: {
        subTitle: 'Cara Kerjanya',
        title: 'Empat Langkah Menuju Hadiah Anda',
        des: 'Memulai itu mudah. Selesaikan langkah-langkah ini dan Anda selangkah lebih dekat memenangkan hadiah Apple eksklusif.',
        steps: {
          register: {
            title: 'Daftar',
            desc: 'Buka akun live dengan WINPROFX. Klien baru dapat opt in sejak deposit pertama.',
          },
          optIn: {
            title: 'Opt In',
            desc: 'Pilih program Trade to Win dan tentukan tier hadiah target sebelum mulai trading.',
          },
          trade: {
            title: 'Trading',
            desc: 'Trading instrumen yang memenuhi syarat — tahan setiap posisi minimal 3 menit agar dihitung sebagai lot qualifying.',
          },
          win: {
            title: 'Menangkan Hadiah Anda',
            desc: 'Capai target volume lot dalam 30 hari dan klaim hadiah eksklusif Anda.',
          },
        },
      },
      programPeriod: {
        subTitle: 'Periode Program',
        title: 'Kapan Program Berjalan?',
        items: {
          activeDates: {
            title: 'Tanggal Aktif',
            desc: 'Program berjalan dari 1 Maret 2025 hingga 31 Mei 2026. Bergabung kapan saja selama periode ini.',
          },
          tradingTimeline: {
            title: 'Linimasa Trading',
            desc: 'Setelah opt in, Anda memiliki 30 hari dari tanggal mulai untuk mencapai volume target dan klaim hadiah.',
          },
          optInDeadline: {
            title: 'Batas Opt-In',
            desc: 'Klien baru dapat opt in sejak deposit pertama. Jangan menunda — setiap hari dihitung dalam jendela 30 hari Anda.',
          },
        },
      },
      eligibility: {
        subTitle: 'Kelayakan',
        title: 'Siapa yang Bisa Berpartisipasi?',
        des: 'Tinjau persyaratan kelayakan sebelum bergabung dengan program Trade to Win.',
        items: {
          whoCanJoin: {
            title: 'Siapa yang Bisa Bergabung',
            desc: 'Eksklusif untuk klien retail. Introducing Brokers (IB) dikecualikan dan tidak dapat berpartisipasi.',
          },
          singleEntry: {
            title: 'Entri Tunggal',
            desc: 'Setiap peserta hanya dapat bergabung satu aktivitas program sekaligus. Pilih tier dengan bijak sebelum opt in.',
          },
          withdrawals: {
            title: 'Penarikan Diizinkan',
            desc: 'Penarikan diperbolehkan selama kampanye dan tidak akan mendiskualifikasi Anda.',
          },
          tradeDuration: {
            title: 'Durasi Trading',
            desc: 'Trading yang memenuhi syarat harus dibuka minimal 3 menit agar dihitung sebagai lot qualifying.',
          },
          excludedInstruments: {
            title: 'Instrumen yang Dikecualikan',
            desc: 'Saham dan pasangan cryptocurrency tidak memenuhi syarat promosi ini. Semua instrumen supported lainnya memenuhi syarat.',
          },
          accountType: {
            title: 'Jenis Akun',
            desc: 'Hanya akun individu self-directed yang dapat berpartisipasi. Akun managed atau akun rujukan IB tidak memenuhi syarat.',
          },
        },
      },
      startTrading: {
        subTitle: 'Mulai',
        title: 'Mulai Trading dengan WINPROFX!',
        des: 'Setiap lot yang Anda trading membawa Anda lebih dekat ke hadiah eksklusif. Buka akun live hari ini dan opt in ke program Trade to Win.',
        steps: {
          register: { title: 'Daftar', desc: 'Buat akun live Anda' },
          fund: { title: 'Fund', desc: 'Lakukan deposit pertama' },
          trade: { title: 'Trading', desc: 'Capai target volume lot Anda' },
          claim: { title: 'Klaim Hadiah', desc: 'Terima hadiah eksklusif Anda' },
        },
        questionsPrefix: 'Pertanyaan? Hubungi kami di',
        questionsSuffix: 'atau kunjungi',
      },
      ptConditions: {
        subTitle: 'Ketentuan Penting',
        title: 'Syarat & Ketentuan Program',
        des: 'Harap baca ketentuan ini dengan saksama sebelum berpartisipasi dalam program Trade to Win.',
        items: {
          fairPlay: {
            title: 'Fair Play',
            desc: 'Tanda-tanda market abuse seperti latency arbitrage atau teknik trading manipulatif akan langsung mendiskualifikasi Anda.',
          },
          dispute: {
            title: 'Penyelesaian Sengketa',
            desc: 'Masalah yang tidak diatur langsung dalam ketentuan ini akan ditangani manajemen secara adil dan mengikat. Keputusan manajemen bersifat final.',
          },
          liability: {
            title: 'Penafian Tanggung Jawab',
            desc: 'WINPROFX tidak bertanggung jawab atas kerugian trading. Program ini tidak mengubah profil risiko atau strategi investasi peserta.',
          },
          general: {
            title: 'Ketentuan Umum',
            desc: 'WINPROFX berhak mengubah atau mengakhiri program ini kapan saja. Semua syarat dan ketentuan WINPROFX yang ada berlaku tambahan atas ketentuan program ini.',
          },
        },
        riskWarning:
          'Trading forex dan produk leveraged melibatkan risiko signifikan dan tidak cocok untuk semua investor. Trading dapat menyebabkan kerugian melebihi investasi awal Anda. Pastikan Anda sepenuhnya memahami risiko yang terlibat.',
        readFullRiskDisclosure: 'Baca Pengungkapan Risiko Lengkap →',
      },
      rewardTiers: {
        volumeLabel: 'Lot',
        tradingVolumeLabel: 'Volume Trading',
        noteLabel: 'Catatan:',
        note: 'Capai volume target dalam 30 hari sejak tanggal opt-in. Saham & pasangan crypto dikecualikan.',
        items: {
          tier1: { prize: 'Power Bank', desc: 'Tetap terisi daya di mana pun Anda trading' },
          tier2: { prize: 'Apple AirPods', desc: 'Performa pro-level di tangan Anda' },
          tier3: { prize: 'Apple Watch', desc: 'Hadiah utama untuk trader teratas' },
          tier4: { prize: 'iPad', desc: 'Trading lebih cerdas di layar lebih besar' },
          tier5: { prize: 'iPad Pro', desc: 'Trading lebih cerdas di layar pro-level lebih besar' },
          tier6: { prize: 'iPhone TERBARU', desc: 'Perangkat ultimate untuk trader elite' },
        },
      },
    },
    vi: {
      howItWorks: {
        subTitle: 'Cách hoạt động',
        title: 'Bốn bước đến phần thưởng của bạn',
        des: 'Bắt đầu rất đơn giản. Hoàn thành các bước này và bạn đang trên đường giành phần thưởng Apple độc quyền.',
        steps: {
          register: {
            title: 'Đăng ký',
            desc: 'Mở tài khoản live với WINPROFX. Khách hàng mới có thể opt in ngay từ khoản nạp đầu tiên.',
          },
          optIn: {
            title: 'Opt In',
            desc: 'Chọn chương trình Trade to Win và chọn tier phần thưởng mục tiêu trước khi bắt đầu giao dịch.',
          },
          trade: {
            title: 'Giao dịch',
            desc: 'Giao dịch các công cụ đủ điều kiện — giữ mỗi lệnh ít nhất 3 phút để được tính là lot qualifying.',
          },
          win: {
            title: 'Giành phần thưởng',
            desc: 'Đạt volume lot mục tiêu trong 30 ngày và nhận phần thưởng độc quyền.',
          },
        },
      },
      programPeriod: {
        subTitle: 'Thời gian chương trình',
        title: 'Chương trình diễn ra khi nào?',
        items: {
          activeDates: {
            title: 'Ngày hoạt động',
            desc: 'Chương trình chạy từ 1/3/2025 đến 31/5/2026. Tham gia bất kỳ lúc nào trong khoảng thời gian này.',
          },
          tradingTimeline: {
            title: 'Mốc thời gian giao dịch',
            desc: 'Sau khi opt in, bạn có 30 ngày kể từ ngày bắt đầu để đạt volume mục tiêu và nhận thưởng.',
          },
          optInDeadline: {
            title: 'Hạn Opt-In',
            desc: 'Khách hàng mới có thể opt in từ khoản nạp đầu tiên. Đừng chần chừ — mỗi ngày đều được tính trong cửa sổ 30 ngày.',
          },
        },
      },
      eligibility: {
        subTitle: 'Điều kiện',
        title: 'Ai có thể tham gia?',
        des: 'Xem lại yêu cầu điều kiện trước khi tham gia chương trình Trade to Win.',
        items: {
          whoCanJoin: {
            title: 'Ai có thể tham gia',
            desc: 'Dành riêng cho khách hàng retail. Introducing Brokers (IB) bị loại và không thể tham gia chiến dịch này.',
          },
          singleEntry: {
            title: 'Một lần tham gia',
            desc: 'Mỗi người chỉ có thể tham gia một hoạt động chương trình tại một thời điểm. Chọn tier cẩn thận trước khi opt in.',
          },
          withdrawals: {
            title: 'Cho phép rút tiền',
            desc: 'Rút tiền được phép trong suốt chiến dịch và sẽ không loại bạn khỏi chương trình.',
          },
          tradeDuration: {
            title: 'Thời gian giữ lệnh',
            desc: 'Lệnh đủ điều kiện phải mở ít nhất 3 phút để được tính là lot qualifying.',
          },
          excludedInstruments: {
            title: 'Công cụ bị loại',
            desc: 'Cổ phiếu và cặp cryptocurrency không đủ điều kiện. Tất cả công cụ supported khác đều đủ điều kiện.',
          },
          accountType: {
            title: 'Loại tài khoản',
            desc: 'Chỉ tài khoản cá nhân self-directed mới được tham gia. Tài khoản managed hoặc tài khoản giới thiệu IB không đủ điều kiện.',
          },
        },
      },
      startTrading: {
        subTitle: 'Bắt đầu',
        title: 'Bắt đầu giao dịch với WINPROFX!',
        des: 'Mỗi lot bạn giao dịch đưa bạn gần hơn đến phần thưởng độc quyền. Mở tài khoản live hôm nay và opt in chương trình Trade to Win.',
        steps: {
          register: { title: 'Đăng ký', desc: 'Tạo tài khoản live' },
          fund: { title: 'Nạp tiền', desc: 'Thực hiện khoản nạp đầu tiên' },
          trade: { title: 'Giao dịch', desc: 'Đạt mục tiêu volume lot' },
          claim: { title: 'Nhận thưởng', desc: 'Nhận phần thưởng độc quyền' },
        },
        questionsPrefix: 'Có câu hỏi? Gọi cho chúng tôi',
        questionsSuffix: 'hoặc truy cập',
      },
      ptConditions: {
        subTitle: 'Điều khoản quan trọng',
        title: 'Điều khoản & Điều kiện chương trình',
        des: 'Vui lòng đọc kỹ các điều khoản này trước khi tham gia chương trình Trade to Win.',
        items: {
          fairPlay: {
            title: 'Công bằng',
            desc: 'Dấu hiệu lạm dụng thị trường như latency arbitrage hoặc kỹ thuật giao dịch thao túng sẽ dẫn đến loại ngay lập tức.',
          },
          dispute: {
            title: 'Giải quyết tranh chấp',
            desc: 'Các vấn đề không được quy định trực tiếp sẽ được ban quản lý xử lý công bằng và có tính ràng buộc. Quyết định của ban quản lý là cuối cùng.',
          },
          liability: {
            title: 'Tuyên bố miễn trừ trách nhiệm',
            desc: 'WINPROFX không chịu trách nhiệm về bất kỳ khoản lỗ giao dịch nào. Chương trình này không thay đổi hồ sơ rủi ro hoặc chiến lược đầu tư của người tham gia.',
          },
          general: {
            title: 'Điều khoản chung',
            desc: 'WINPROFX có quyền sửa đổi hoặc chấm dứt chương trình bất kỳ lúc nào. Tất cả điều khoản WINPROFX hiện hành áp dụng bổ sung cho các điều khoản chương trình này.',
          },
        },
        riskWarning:
          'Giao dịch forex và sản phẩm đòn bẩy có rủi ro đáng kể và không phù hợp với mọi nhà đầu tư. Giao dịch có thể dẫn đến thua lỗ vượt quá khoản đầu tư ban đầu. Hãy đảm bảo bạn hiểu đầy đủ các rủi ro liên quan.',
        readFullRiskDisclosure: 'Đọc Công bố Rủi ro đầy đủ →',
      },
      rewardTiers: {
        volumeLabel: 'Lot',
        tradingVolumeLabel: 'Volume giao dịch',
        noteLabel: 'Lưu ý:',
        note: 'Đạt volume mục tiêu trong 30 ngày kể từ ngày opt-in. Cổ phiếu & cặp crypto bị loại.',
        items: {
          tier1: { prize: 'Pin dự phòng', desc: 'Luôn đủ pin ở bất cứ đâu bạn giao dịch' },
          tier2: { prize: 'Apple AirPods', desc: 'Hiệu suất pro-level trong tay bạn' },
          tier3: { prize: 'Apple Watch', desc: 'Phần thưởng tối thượng cho trader hàng đầu' },
          tier4: { prize: 'iPad', desc: 'Giao dịch thông minh hơn trên màn hình lớn hơn' },
          tier5: { prize: 'iPad Pro', desc: 'Giao dịch thông minh hơn trên màn hình pro-level lớn hơn' },
          tier6: { prize: 'iPhone MỚI NHẤT', desc: 'Thiết bị tối thượng cho trader elite' },
        },
      },
    },
    bn: {
      howItWorks: {
        subTitle: 'এটি কীভাবে কাজ করে',
        title: 'আপনার পুরস্কারের চারটি ধাপ',
        des: 'শুরু করা সহজ। এই ধাপগুলো সম্পূর্ণ করুন এবং এক্সক্লুসিভ Apple পুরস্কার জেতার পথে এগিয়ে যান।',
        steps: {
          register: {
            title: 'নিবন্ধন',
            desc: 'WINPROFX-এর সাথে live অ্যাকাউন্ট খুলুন। নতুন ক্লায়েন্টরা প্রথম ডিপোজিট থেকেই opt in করতে পারেন।',
          },
          optIn: {
            title: 'Opt In',
            desc: 'Trade to Win প্রোগ্রাম বেছে নিন এবং ট্রেডিং শুরুর আগে আপনার লক্ষ্য reward tier নির্বাচন করুন।',
          },
          trade: {
            title: 'ট্রেড',
            desc: 'যোগ্য instruments-এ ট্রেড করুন — qualifying lot গণনার জন্য প্রতিটি ট্রেড কমপক্ষে 3 মিনিট খোলা রাখুন।',
          },
          win: {
            title: 'আপনার পুরস্কার জিতুন',
            desc: '30 দিনের মধ্যে লক্ষ্য lot volume পূরণ করুন এবং এক্সক্লুসিভ পুরস্কার দাবি করুন।',
          },
        },
      },
      programPeriod: {
        subTitle: 'প্রোগ্রাম সময়কাল',
        title: 'প্রোগ্রাম কখন চলে?',
        items: {
          activeDates: {
            title: 'সক্রিয় তারিখ',
            desc: 'প্রোগ্রাম 1 মার্চ 2025 থেকে 31 মে 2026 পর্যন্ত চলে। এই সময়ে যেকোনো মুহূর্তে যোগ দিন।',
          },
          tradingTimeline: {
            title: 'ট্রেডিং সময়রেখা',
            desc: 'Opt in-এর পর, শুরুর তারিখ থেকে 30 দিনের মধ্যে লক্ষ্য volume পূরণ করুন এবং পুরস্কার দাবি করুন।',
          },
          optInDeadline: {
            title: 'Opt-In শেষ তারিখ',
            desc: 'নতুন ক্লায়েন্টরা প্রথম ডিপোজিট থেকে opt in করতে পারেন। দেরি করবেন না — প্রতিটি দিন আপনার 30-দিনের সময়সীমায় গণনা হয়।',
          },
        },
      },
      eligibility: {
        subTitle: 'যোগ্যতা',
        title: 'কে অংশ নিতে পারবেন?',
        des: 'Trade to Win প্রোগ্রামে যোগ দেওয়ার আগে যোগ্যতার প্রয়োজনীয়তা পর্যালোচনা করুন।',
        items: {
          whoCanJoin: {
            title: 'কে যোগ দিতে পারেন',
            desc: 'শুধুমাত্র retail clients-এর জন্য। Introducing Brokers (IB) বাদ এবং এই ক্যাম্পেইনে অংশ নিতে পারবেন না।',
          },
          singleEntry: {
            title: 'একক এন্ট্রি',
            desc: 'প্রতিটি অংশগ্রহণকারী এক সময়ে শুধু একটি program activity-তে যোগ দিতে পারেন। Opt in-এর আগে tier সাবধানে বেছে নিন।',
          },
          withdrawals: {
            title: 'উইথড্রয়াল অনুমোদিত',
            desc: 'ক্যাম্পেইন চলাকালীন উইথড্রয়াল অনুমোদিত এবং এতে আপনি প্রোগ্রাম থেকে বাদ পড়বেন না।',
          },
          tradeDuration: {
            title: 'ট্রেড সময়কাল',
            desc: 'যোগ্য ট্রেডগুলো qualifying lot হিসেবে গণনার জন্য কমপক্ষে 3 মিনিট খোলা থাকতে হবে।',
          },
          excludedInstruments: {
            title: 'বাদ দেওয়া instruments',
            desc: 'Stocks এবং cryptocurrency pairs এই প্রোমোশনের জন্য যোগ্য নয়। অন্যান্য supported instruments যোগ্য।',
          },
          accountType: {
            title: 'অ্যাকাউন্ট ধরন',
            desc: 'শুধু self-directed individual accounts অংশ নিতে পারে। Managed accounts বা IB-referred accounts যোগ্য নয়।',
          },
        },
      },
      startTrading: {
        subTitle: 'শুরু করুন',
        title: 'WINPROFX-এর সাথে ট্রেডিং শুরু করুন!',
        des: 'আপনি যত বেশি lots ট্রেড করবেন, তত এক্সক্লুসিভ পুরস্কারের কাছাকাছি যাবেন। আজই live অ্যাকাউন্ট খুলুন এবং Trade to Win-এ opt in করুন।',
        steps: {
          register: { title: 'নিবন্ধন', desc: 'আপনার live অ্যাকাউন্ট তৈরি করুন' },
          fund: { title: 'ফান্ড', desc: 'প্রথম ডিপোজিট করুন' },
          trade: { title: 'ট্রেড', desc: 'lot volume লক্ষ্য পূরণ করুন' },
          claim: { title: 'পুরস্কার দাবি', desc: 'আপনার এক্সক্লুসিভ পুরস্কার গ্রহণ করুন' },
        },
        questionsPrefix: 'প্রশ্ন? আমাদের কল করুন',
        questionsSuffix: 'অথবা দেখুন',
      },
      ptConditions: {
        subTitle: 'গুরুত্বপূর্ণ শর্ত',
        title: 'প্রোগ্রামের শর্তাবলী',
        des: 'Trade to Win প্রোগ্রামে অংশ নেওয়ার আগে অনুগ্রহ করে এই শর্তগুলো সাবধানে পড়ুন।',
        items: {
          fairPlay: {
            title: 'ন্যায্য খেলা',
            desc: 'latency arbitrage বা manipulative trading techniques-এর মতো market abuse-এর লক্ষণ তৎক্ষণাৎ প্রোগ্রাম থেকে বাদ দেবে।',
          },
          dispute: {
            title: 'বিরোধ নিষ্পত্তি',
            desc: 'এই শর্তে সরাসরি উল্লেখ না থাকা বিষয় management ন্যায্য ও বাধ্যতামূলকভাবে সমাধান করবে। Management-এর সিদ্ধান্ত চূড়ান্ত।',
          },
          liability: {
            title: 'দায়বদ্ধতা অস্বীকার',
            desc: 'WINPROFX কোনো trading loss-এর জন্য দায়ী থাকবে না। এই প্রোগ্রাম অংশগ্রহণকারীদের risk profile বা investment strategy পরিবর্তন করে না।',
          },
          general: {
            title: 'সাধারণ শর্ত',
            desc: 'WINPROFX যেকোনো সময় এই প্রোগ্রাম সংশোধন বা বাতিল করার অধিকার সংরক্ষণ করে। WINPROFX-এর বিদ্যমান terms and conditions এই program-specific conditions-এর অতিরিক্ত প্রযোজ্য।',
          },
        },
        riskWarning:
          'Forex এবং leveraged products-এ ট্রেডিংতে উল্লেখযোগ্য ঝুঁকি থাকে এবং সব বিনিয়োগকারীর জন্য উপযুক্ত নয়। ট্রেডিং আপনার প্রাথমিক বিনিয়োগের চেয়ে বেশি ক্ষতি করতে পারে। সম্পৃক্ত ঝুঁকি সম্পূর্ণ বুঝে নিন।',
        readFullRiskDisclosure: 'সম্পূর্ণ ঝুঁকি প্রকাশ পড়ুন →',
      },
      rewardTiers: {
        volumeLabel: 'লট',
        tradingVolumeLabel: 'ট্রেডিং ভলিউম',
        noteLabel: 'নোট:',
        note: 'Opt-in তারিখ থেকে 30 দিনের মধ্যে লক্ষ্য volume পূরণ করুন। Stocks ও crypto pairs বাদ।',
        items: {
          tier1: { prize: 'পাওয়ার ব্যাংক', desc: 'যেখানেই ট্রেড করুন, চার্জ থাকুন' },
          tier2: { prize: 'Apple AirPods', desc: 'আপনার হাতে pro-level পারফরম্যান্স' },
          tier3: { prize: 'Apple Watch', desc: 'শীর্ষ ট্রেডারদের জন্য চূড়ান্ত পুরস্কার' },
          tier4: { prize: 'iPad', desc: 'বড় স্ক্রিনে smarter ট্রেড করুন' },
          tier5: { prize: 'iPad Pro', desc: 'pro-level বড় স্ক্রিনে smarter ট্রেড করুন' },
          tier6: { prize: 'সর্বশেষ iPhone', desc: 'elite traders-এর জন্য চূড়ান্ত ডিভাইস' },
        },
      },
    },
    ms: {
      howItWorks: {
        subTitle: 'Cara Ia Berfungsi',
        title: 'Empat Langkah ke Hadiah Anda',
        des: 'Memulakan sangat mudah. Lengkapkan langkah ini dan anda sedang dalam perjalanan memenangi hadiah Apple eksklusif.',
        steps: {
          register: {
            title: 'Daftar',
            desc: 'Buka akaun live dengan WINPROFX. Pelanggan baharu boleh opt in dari deposit pertama.',
          },
          optIn: {
            title: 'Opt In',
            desc: 'Pilih program Trade to Win dan tentukan tier hadiah sasaran sebelum mula dagangan.',
          },
          trade: {
            title: 'Dagangan',
            desc: 'Dagangkan instrumen layak — tahan setiap posisi sekurang-kurangnya 3 minit untuk dikira sebagai lot layak.',
          },
          win: {
            title: 'Menangi Hadiah Anda',
            desc: 'Capai volume lot sasaran dalam 30 hari dan tuntut hadiah eksklusif anda.',
          },
        },
      },
      programPeriod: {
        subTitle: 'Tempoh Program',
        title: 'Bilakah Program Berlangsung?',
        items: {
          activeDates: {
            title: 'Tarikh Aktif',
            desc: 'Program berlangsung dari 1 Mac 2025 hingga 31 Mei 2026. Sertai pada bila-bila masa dalam tempoh ini.',
          },
          tradingTimeline: {
            title: 'Garis Masa Dagangan',
            desc: 'Selepas opt in, anda mempunyai 30 hari dari tarikh mula untuk mencapai volume sasaran dan tuntut hadiah.',
          },
          optInDeadline: {
            title: 'Tarikh Akhir Opt-In',
            desc: 'Pelanggan baharu boleh opt in dari deposit pertama. Jangan tangguh — setiap hari dikira dalam tetingkap 30 hari anda.',
          },
        },
      },
      eligibility: {
        subTitle: 'Kelayakan',
        title: 'Siapa Boleh Menyertai?',
        des: 'Semak keperluan kelayakan sebelum menyertai program Trade to Win.',
        items: {
          whoCanJoin: {
            title: 'Siapa Boleh Sertai',
            desc: 'Eksklusif untuk pelanggan runcit. Introducing Brokers (IB) dikecualikan dan tidak boleh menyertai kempen ini.',
          },
          singleEntry: {
            title: 'Kemasukan Tunggal',
            desc: 'Setiap peserta hanya boleh menyertai satu aktiviti program pada satu masa. Pilih tier dengan bijak sebelum opt in.',
          },
          withdrawals: {
            title: 'Pengeluaran Dibenarkan',
            desc: 'Pengeluaran dibenarkan sepanjang kempen dan tidak akan membatalkan kelayakan anda.',
          },
          tradeDuration: {
            title: 'Tempoh Dagangan',
            desc: 'Dagangan layak mesti dibuka sekurang-kurangnya 3 minit untuk dikira sebagai lot layak.',
          },
          excludedInstruments: {
            title: 'Instrumen Dikecualikan',
            desc: 'Saham dan pasangan cryptocurrency tidak layak untuk promosi ini. Semua instrumen supported lain layak.',
          },
          accountType: {
            title: 'Jenis Akaun',
            desc: 'Hanya akaun individu self-directed boleh menyertai. Akaun managed atau akaun rujukan IB tidak layak.',
          },
        },
      },
      startTrading: {
        subTitle: 'Mulakan',
        title: 'Mula Berdagang dengan WINPROFX!',
        des: 'Setiap lot yang anda dagangkan membawa anda lebih dekat ke hadiah eksklusif. Buka akaun live hari ini dan opt in ke program Trade to Win.',
        steps: {
          register: { title: 'Daftar', desc: 'Cipta akaun live anda' },
          fund: { title: 'Fund', desc: 'Buat deposit pertama' },
          trade: { title: 'Dagangan', desc: 'Capai sasaran volume lot' },
          claim: { title: 'Tuntut Hadiah', desc: 'Terima hadiah eksklusif anda' },
        },
        questionsPrefix: 'Soalan? Hubungi kami di',
        questionsSuffix: 'atau lawati',
      },
      ptConditions: {
        subTitle: 'Terma Penting',
        title: 'Terma & Syarat Program',
        des: 'Sila baca terma ini dengan teliti sebelum menyertai program Trade to Win.',
        items: {
          fairPlay: {
            title: 'Permainan Adil',
            desc: 'Tanda-tanda penyalahgunaan pasaran seperti latency arbitrage atau teknik dagangan manipulatif akan menyebabkan pembatalan kelayakan serta-merta.',
          },
          dispute: {
            title: 'Penyelesaian Pertikaian',
            desc: 'Isu yang tidak diuruskan secara langsung dalam terma ini akan ditangani pengurusan secara adil dan mengikat. Keputusan pengurusan adalah muktamad.',
          },
          liability: {
            title: 'Penafian Liabiliti',
            desc: 'WINPROFX tidak akan bertanggungjawab atas sebarang kerugian dagangan. Program ini tidak mengubah profil risiko atau strategi pelaburan peserta.',
          },
          general: {
            title: 'Terma Am',
            desc: 'WINPROFX berhak meminda atau menamatkan program ini pada bila-bila masa. Semua terma dan syarat WINPROFX sedia ada terpakai tambahan ke atas terma program ini.',
          },
        },
        riskWarning:
          'Dagangan forex dan produk leveraged melibatkan risiko ketara dan tidak sesuai untuk semua pelabur. Dagangan boleh menyebabkan kerugian melebihi pelaburan awal anda. Pastikan anda memahami risiko yang terlibat sepenuhnya.',
        readFullRiskDisclosure: 'Baca Pendedahan Risiko Penuh →',
      },
      rewardTiers: {
        volumeLabel: 'Lot',
        tradingVolumeLabel: 'Volume Dagangan',
        noteLabel: 'Nota:',
        note: 'Capai volume sasaran dalam 30 hari dari tarikh opt-in. Saham & pasangan crypto dikecualikan.',
        items: {
          tier1: { prize: 'Power Bank', desc: 'Kekal bertenaga di mana sahaja anda berdagang' },
          tier2: { prize: 'Apple AirPods', desc: 'Prestasi pro-level di tangan anda' },
          tier3: { prize: 'Apple Watch', desc: 'Hadiah utama untuk pedagang teratas' },
          tier4: { prize: 'iPad', desc: 'Berdagang lebih bijak pada skrin lebih besar' },
          tier5: { prize: 'iPad Pro', desc: 'Berdagang lebih bijak pada skrin pro-level lebih besar' },
          tier6: { prize: 'iPhone TERKINI', desc: 'Peranti muktamad untuk pedagang elite' },
        },
      },
    },
  })[locale]

const tradingMetaPatch = (locale) =>
  ({
    id: {
      winPromotion: {
        meta: 'Eksklusif WINPROFX · Maret - Mei 2026',
        h1: 'Program Trade to Win',
      },
      tradeToWin: { h1: 'Program Trade to Win', meta: 'Eksklusif WINPROFX' },
      introducingBroker: { meta: 'PROGRAM MITRA' },
      platform: { meta: 'PLATFORM', h1: 'Platform Trading' },
      blog: { meta: 'BLOG', h1: 'Blog WINPROFX' },
    },
    vi: {
      winPromotion: {
        meta: 'Độc quyền WINPROFX · Tháng 3 - Tháng 5 2026',
        h1: 'Chương trình Trade to Win',
      },
      tradeToWin: { h1: 'Chương trình Trade to Win', meta: 'Độc quyền WINPROFX' },
      introducingBroker: { meta: 'CHƯƠNG TRÌNH ĐỐI TÁC' },
      platform: { meta: 'NỀN TẢNG', h1: 'Nền tảng Giao dịch' },
      blog: { meta: 'BÀI VIẾT', h1: 'Bài viết' },
    },
    bn: {
      winPromotion: {
        meta: 'WINPROFX এক্সক্লুসিভ · মার্চ - মে 2026',
        h1: 'Trade to Win প্রোগ্রাম',
      },
      tradeToWin: { h1: 'Trade to Win প্রোগ্রাম', meta: 'WINPROFX এক্সক্লুসিভ' },
      introducingBroker: { meta: 'পার্টনার প্রোগ্রাম' },
      platform: { meta: 'প্ল্যাটফর্ম', h1: 'ট্রেডিং প্ল্যাটফর্ম' },
      blog: { meta: 'ব্লগ', h1: 'ব্লগ' },
      contact: { labels: { whatsapp: 'হোয়াটসঅ্যাপ' } },
    },
    ms: {
      winPromotion: {
        meta: 'Eksklusif WINPROFX · Mac - Mei 2026',
        h1: 'Program Trade to Win',
      },
      tradeToWin: { h1: 'Program Trade to Win', meta: 'Eksklusif WINPROFX' },
      introducingBroker: { meta: 'PROGRAM RAKAN KONGSI' },
      platform: { meta: 'PLATFORM', h1: 'Platform Dagangan' },
      blog: { meta: 'BLOG', h1: 'Blog WINPROFX' },
    },
  })[locale]

const smallPatches = {
  id: {
    footer: { links: { platform: 'Platform Trading' } },
    homepage: {
      award: {
        items: {
          bestForexBroker2025: 'Broker Forex Terbaik 2025',
          globalForexBroker2025: 'Broker Forex Global Tahun 2025',
          topStpBroker2025: 'Broker STP Teratas 2025',
          bestDepositWithdrawal2024: 'Broker Deposit dan Penarikan Terbaik 2024',
        },
      },
      news: { blog: { tradeToWin: { title: 'Trade untuk MENANG' } } },
    },
    learn: { articles: { whatIsMarginCall: { breadcrumb: 'Panggilan Margin' } } },
    navigation: { trading: 'Perdagangan', platform: 'Platform Trading', blog: 'Artikel' },
    seo: { dubaiProfessionalLicense: { title: 'Lisensi Profesional Dubai | WINPROFX' } },
  },
  vi: {
    footer: { links: { crypto: 'Tiền mã hóa' } },
    homepage: {
      whatTrade: { items: { crypto: { title: 'Tiền mã hóa' } } },
      award: {
        items: {
          bestForexBroker2025: 'Broker Forex Tốt nhất 2025',
          globalForexBroker2025: 'Broker Forex Toàn cầu Năm 2025',
          topStpBroker2025: 'Broker STP Hàng đầu 2025',
          bestDepositWithdrawal2024: 'Broker Nạp/Rút Tốt nhất 2024',
        },
      },
      news: { blog: { tradeToWin: { title: 'Trade để THẮNG' } } },
    },
    learn: { articles: { whatIsMarginCall: { breadcrumb: 'Gọi ký quỹ' } } },
    navigation: { crypto: 'Tiền mã hóa', blog: 'Bài viết' },
    seo: { dubaiProfessionalLicense: { title: 'Giấy phép Chuyên nghiệp Dubai | WINPROFX' } },
  },
  bn: {
    footer: { links: { platform: 'ট্রেডিং প্ল্যাটফর্ম' } },
    homepage: {
      award: {
        items: {
          bestForexBroker2025: 'সেরা Forex ব্রোকার 2025',
          globalForexBroker2025: 'বিশ্বের সেরা Forex ব্রোকার 2025',
          topStpBroker2025: 'শীর্ষ STP ব্রোকার 2025',
          bestDepositWithdrawal2024: 'সেরা ডিপোজিট ও উইথড্রয়াল ব্রোকার 2024',
        },
      },
      news: { blog: { tradeToWin: { title: 'জিততে Trade করুন' } } },
    },
    learn: { articles: { whatIsMarginCall: { breadcrumb: 'মার্জিন কল' } } },
    navigation: { trading: 'ট্রেডিং', platform: 'প্ল্যাটফর্ম', blog: 'ব্লগ' },
    seo: { dubaiProfessionalLicense: { title: 'দুবাই প্রফেশনাল লাইসেন্স | WINPROFX' } },
  },
  ms: {
    footer: { links: { platform: 'Platform Dagangan' } },
    homepage: {
      award: {
        items: {
          bestForexBroker2025: 'Broker Forex Terbaik 2025',
          globalForexBroker2025: 'Broker Forex Global Tahun 2025',
          topStpBroker2025: 'Broker STP Teratas 2025',
          bestDepositWithdrawal2024: 'Broker Deposit dan Pengeluaran Terbaik 2024',
        },
      },
      news: { blog: { tradeToWin: { title: 'Trade untuk MENANG' } } },
    },
    learn: { articles: { whatIsMarginCall: { breadcrumb: 'Panggilan Margin' } } },
    navigation: { trading: 'Dagangan', platform: 'Platform Dagangan', blog: 'Artikel' },
    seo: { dubaiProfessionalLicense: { title: 'Lesen Profesional Dubai | WINPROFX' } },
  },
}

function applyLocale(locale) {
  const files = {
    markets: marketsPatch(locale),
    tools: { economicCalendar: economicCalendarPatch(locale) },
    trading: {
      ...tradingMetaPatch(locale),
      promotionUi: promotionUiPatch(locale),
    },
  }

  if (locale === 'bn') {
    files.trading.introducingBroker = {
      advantages: {
        steps: {
          noSwap: 'সোয়াপ নেই',
          noCommission: 'কমিশন নেই',
          lowSpread: 'কম স্প্রেড',
        },
      },
    }
    files.trading.blog = {
      categories: { forex: 'Forex ট্রেডিং' },
    }
  }

  for (const [name, patch] of Object.entries(smallPatches[locale])) {
    const path = join(LOCALES_DIR, locale, `${name}.json`)
    const data = JSON.parse(readFileSync(path, 'utf8'))
    deepMerge(data, patch)
    writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
  }

  for (const [name, patch] of Object.entries(files)) {
    const path = join(LOCALES_DIR, locale, `${name}.json`)
    const data = JSON.parse(readFileSync(path, 'utf8'))
    deepMerge(data, patch)
    writeFileSync(path, `${JSON.stringify(data, null, 2)}\n`)
  }

  console.log(`Applied translations: ${locale}`)
}

for (const locale of ['id', 'vi', 'bn', 'ms']) {
  applyLocale(locale)
}

console.log('Done.')
