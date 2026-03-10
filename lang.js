// ================================================================
// lang.js — Multi-language toggle for Aksi Sabar Zebua Portfolio
// Supports: EN (English) | ID (Bahasa Indonesia)
// ================================================================

// --- Navigation link translations (mapped by href) ---
const NAV_TRANS = {
    '/':           { en: 'Home',        id: 'Beranda'    },
    'about':       { en: 'About',       id: 'Tentang'    },
    'experience':  { en: 'Experience',  id: 'Pengalaman' },
    'skills':      { en: 'Skills',      id: 'Keahlian'   },
    'education':   { en: 'Education',   id: 'Pendidikan' },
    'portfolio':   { en: 'Portfolio',   id: 'Portofolio' },
    'contact':     { en: 'Contact',     id: 'Kontak'     },
    'lainnya':     { en: 'Others',      id: 'Others'     }
};

// --- Biography section translations for about.html (keyed by element ID) ---
const BIO_TRANS = {
    'bio-content-1': {
        en: `<h3>Born in 2002</h3>
<p>I was born into a modest family in an area called Kalangan, Pandan District, Central Tapanuli Regency, North Sumatra. I was born on Saturday, December 14, 2002.</p>
<p>According to my parents' story, when the day of my birth arrived, we were still living in the house of Mr. Talu Gadang—a figure who was very close to our family. He patiently watched over my mother and taught my father how to calm her down before the delivery process.</p>
<p>Interestingly, on that day, Mr. Talu Gadang said, "It seems like today is not the day," and then he went fishing alone. However, it was on that very day that I was born. Although he felt a little upset that he was not there when I was born, he never regretted it. As a sign of respect, his name was immortalized in my name, "Saba Ati," which is part of my full name.</p>
<p>Originally, my name was Sabar Zebua. However, Uncle Sa'a (his name is Ama Popi) later added the name "Aksi" in front of my name. Since then, I have been known as Aksi Sabar Zebua—a name that holds family stories, togetherness, and deep meaning.</p>`,
        id: `<h3>Lahir Tahun 2002</h3>
<p>Saya lahir dari keluarga yang sederhana di sebuah kawasan bernama Kalangan, Kecamatan Pandan, Kabupaten Tapanuli Tengah, Sumatera Utara. Saya lahir pada hari Sabtu, 14 Desember 2002.</p>
<p>Menurut cerita orang tua saya, ketika hari kelahiran saya tiba, kami masih tinggal di rumah Pak Talu Gadang—sosok yang sangat dekat dengan keluarga kami. Dengan sabar, ia menjaga ibu saya dan mengajari ayah saya cara menenangkan ibu sebelum proses persalinan berlangsung.</p>
<p>Menariknya, pada hari itu Pak Talu Gadang berkata, "Sepertinya hari ini bukan harinya," lalu ia pergi memancing sendirian. Namun justru pada hari itulah saya lahir. Meskipun ia merasa sedikit kecewa karena tidak hadir saat saya dilahirkan, ia tidak pernah menyesalinya. Sebagai bentuk penghormatan, namanya diabadikan dalam nama saya, "Saba Ati," yang merupakan bagian dari nama lengkap saya.</p>
<p>Awalnya nama saya adalah Sabar Zebua. Namun kemudian, Paman Sa'a (nama beliau adalah Ama Popi) menambahkan nama "Aksi" di depan nama saya. Sejak saat itu, saya dikenal sebagai Aksi Sabar Zebua—sebuah nama yang menyimpan kisah keluarga, kebersamaan, dan makna yang mendalam.</p>`
    },
    'bio-content-2': {
        en: `<h3>Elementary school years 2009-2015</h3>
<p>In 2005, our family moved to Muara Sibuntuon, a village quite far from the city center. At that time, the surrounding environment was still very natural—full of trees and forests. Initially, we lived in the house of Bou, my father's older brother. Soon after, we rented a house located right in front of Bou's house.</p>
<p>Some time later, my father bought a plot of land by the river and built a simple house there. That's how we began to settle independently in the village.</p>
<p>In 2008, when I was six years old, I started elementary school at SD Negeri 155688 Muara Sibuntuon. When I started school, I was not a smart child, especially when it came to reading. I was not yet fluent in reading at the beginning of elementary school. However, I excelled in mathematics. Somehow, even though my reading skills were still limited, I was able to move up a grade every year—albeit with mediocre grades.</p>
<p>A major change occurred when I was in fourth grade. My homeroom teacher at the time, Ms. Rida, was known for being strict and fierce. However, it was from her that I learned a lot. She taught me to read using memorization and intensive practice. Thanks to her guidance, by the first semester of fourth grade, I was finally able to read fluently. From then on, my grades began to improve rapidly—from being at the bottom of the class, I managed to break into the top 10.</p>
<p>In fifth grade, I was able to achieve a ranking in the top 5. Then in sixth grade, I managed to become number 1 until I graduated. Many people couldn't believe my transformation, considering I wasn't an outstanding student at first. However, through this experience, I learned that passion, perseverance, and a desire to learn can overcome initial limitations. I graduated from elementary school with very satisfactory grades, and that became one of the important milestones in my life journey.</p>`,
        id: `<h3>Tahun Sekolah Dasar 2009–2015</h3>
<p>Pada tahun 2005, keluarga kami pindah ke Muara Sibuntuon, sebuah desa yang cukup jauh dari pusat kota. Saat itu, lingkungan sekitar masih sangat alami—penuh pepohonan dan hutan. Awalnya kami tinggal di rumah Bou, kakak perempuan ayah saya. Tak lama kemudian, kami menyewa rumah yang terletak tepat di depan rumah Bou.</p>
<p>Beberapa waktu kemudian, ayah saya membeli sebidang tanah di tepi sungai dan membangun rumah sederhana di sana. Begitulah kami mulai hidup mandiri di desa tersebut.</p>
<p>Pada tahun 2008, saat saya berusia enam tahun, saya mulai bersekolah di SD Negeri 155688 Muara Sibuntuon. Ketika mulai sekolah, saya bukan anak yang pintar, terutama dalam hal membaca. Saya belum lancar membaca pada awal masuk SD. Namun, saya unggul dalam pelajaran matematika. Meski kemampuan membaca saya masih terbatas, saya bisa naik kelas setiap tahun—meski dengan nilai yang biasa-biasa saja.</p>
<p>Perubahan besar terjadi saat saya duduk di kelas IV. Wali kelas saya saat itu, Bu Rida, dikenal tegas dan keras. Namun dari beliaulah saya banyak belajar. Ia mengajari saya membaca dengan metode hafalan dan latihan intensif. Berkat bimbingannya, pada semester pertama kelas IV, saya akhirnya bisa membaca dengan lancar. Sejak saat itu, nilai saya mulai meningkat pesat—dari peringkat bawah, saya berhasil masuk 10 besar.</p>
<p>Di kelas V, saya meraih peringkat 5 besar. Lalu di kelas VI, saya berhasil menjadi juara 1 hingga lulus. Banyak orang yang tidak percaya dengan perubahan saya. Namun melalui pengalaman ini, saya belajar bahwa semangat, ketekunan, dan keinginan untuk belajar bisa mengatasi keterbatasan awal. Saya lulus SD dengan nilai yang sangat memuaskan, dan itu menjadi salah satu tonggak penting dalam perjalanan hidup saya.</p>`
    },
    'bio-content-3': {
        en: `<h3>Junior High School Period 2015-2018</h3>
<p>After graduating from elementary school, I continued my education at Sibabangun 4 Public Junior High School, formerly known as Sibabangun 1 Atap Junior High School. The school changed its name just as I entered 7th grade. The junior high school was located in the same area as my former elementary school—just in a different building. The school was relatively new, and I was part of its fifth batch of students since its establishment.</p>
<p>My junior high school years were a very enjoyable time for me, although they were not without challenges. When I was in 7th grade, I took the plunge and ran for class president. It turned out that many of my friends trusted me with their votes, and I was elected. I was very happy at that time because I was able to learn how to lead and manage my classmates, while also establishing good cooperation with them.</p>
<p>I was also often entrusted to replace the student council president in leading the morning assembly at school. Although I was sometimes teased because I couldn't pronounce the letter "R" correctly, I wasn't embarrassed. Instead, I used it as motivation to continue learning and remain confident. Many teachers considered me a good leader.</p>
<p>In 8th grade, I was re-elected as class president. I always tried to create a comfortable classroom atmosphere for both teachers and friends. Academically, I consistently ranked in the top 5, which was a source of pride for me. In the same year, I also participated in the Central Tapanuli Regency Mathematics Science Olympiad and won 3rd place—a very meaningful achievement for me at that time.</p>
<p>In 9th grade, I took on a new challenge by running for student council president. Although I was not elected, I have no regrets, because I had the courage to try. I remained active in assisting the Student Council President in various activities, working closely with Ms. Dhian, the Vice Principal for Student Affairs. From this experience, I learned a lot about leadership and responsibility.</p>
<p>Finally, I completed junior high school with a joyful heart and satisfactory academic results. This period became an important foundation in building my confidence and enthusiasm to continue developing.</p>`,
        id: `<h3>Masa SMP 2015–2018</h3>
<p>Setelah lulus SD, saya melanjutkan pendidikan ke SMP Negeri Sibabangun 4, yang sebelumnya bernama SMP Negeri 1 Atap Sibabangun. Sekolah itu berganti nama tepat saat saya masuk kelas 7. Lokasinya berada di kawasan yang sama dengan SD saya dulu—hanya berbeda gedung. Sekolah ini tergolong baru, dan saya termasuk angkatan kelima sejak berdirinya.</p>
<p>Masa SMP adalah waktu yang sangat menyenangkan bagi saya, meski tidak lepas dari tantangan. Di kelas 7, saya memberanikan diri mencalonkan diri sebagai ketua kelas. Ternyata banyak teman yang memilih saya, dan saya pun terpilih. Saya sangat senang karena bisa belajar memimpin dan mengatur teman-teman sekaligus menjalin kerja sama yang baik.</p>
<p>Saya juga sering dipercaya menggantikan ketua OSIS dalam memimpin upacara pagi di sekolah. Meskipun saya kadang diejek karena tidak bisa melafalkan huruf "R" dengan benar, saya tidak merasa malu. Sebaliknya, saya jadikan itu motivasi untuk terus belajar dan tetap percaya diri. Banyak guru yang menganggap saya pemimpin yang baik.</p>
<p>Di kelas 8, saya kembali terpilih sebagai ketua kelas. Saya selalu berusaha menciptakan suasana kelas yang nyaman untuk guru maupun teman-teman. Secara akademis, saya konsisten masuk 5 besar. Pada tahun yang sama, saya mengikuti Olimpiade Sains Matematika Tingkat Kabupaten Tapanuli Tengah dan meraih juara 3—pencapaian yang sangat berarti bagi saya.</p>
<p>Di kelas 9, saya mengambil tantangan baru dengan mencalonkan diri sebagai ketua OSIS. Meskipun tidak terpilih, saya tidak menyesal karena sudah berani mencoba. Saya tetap aktif membantu Ketua OSIS dalam berbagai kegiatan bersama Bu Dhian, Wakil Kepala Sekolah Bidang Kesiswaan. Dari sini saya banyak belajar tentang kepemimpinan dan tanggung jawab.</p>
<p>Akhirnya, saya menyelesaikan SMP dengan hati gembira dan hasil akademis yang memuaskan. Masa ini menjadi fondasi penting dalam membangun rasa percaya diri saya untuk terus berkembang.</p>`
    },
    'bio-content-4': {
        en: `<h3> The Beginning of the Journey to Bekasi (2018)</h3>
<p> The year 2018 was a challenging year for me and my family. At that time, continuing my education to the next level felt very difficult due to financial constraints. There were many considerations within the family. I had decided not to continue my studies and was ready to start working to ease my parents' burden.</p>
<p>However, my parents did not approve of this decision. Every day, they prayed that God would provide a way out before I actually graduated. Then one day, my parents remembered that Uncle Sa'a's child was studying in Jakarta. That's when they came up with the idea of visiting Uncle Sa'a and asking if it would be possible for me to continue my studies there.</p>
<p>Upon arriving at Uncle Sa'a's place, he advised me to register at the Sinar Kasih Harapan Orphanage, located in Mustika Jaya, Bekasi City. After going through the administrative process and honestly explaining my family situation, I was finally accepted.</p>
<p>This decision led me on a new journey—moving to Bekasi City, a place I had never been to before. It was very far from my hometown, and this was the first time I had to live away from my parents. Despite this, with a strong determination to continue my education, I was ready to face any challenges that came my way for the sake of my future.</p>`,
        id: `<h3>Awal Perjalanan ke Bekasi (2018)</h3>
<p>Tahun 2018 adalah tahun yang penuh tantangan bagi saya dan keluarga. Melanjutkan pendidikan ke jenjang berikutnya terasa sangat sulit karena keterbatasan ekonomi. Ada banyak pertimbangan dalam keluarga. Saya sudah bertekad untuk tidak melanjutkan sekolah dan siap bekerja untuk meringankan beban orang tua.</p>
<p>Namun, orang tua saya tidak menyetujui keputusan itu. Setiap hari mereka berdoa agar Tuhan membuka jalan sebelum saya benar-benar lulus. Suatu hari, orang tua saya teringat bahwa anak Paman Sa'a sedang sekolah di Jakarta. Dari situlah muncul ide untuk menemui Paman Sa'a dan menanyakan apakah saya bisa melanjutkan sekolah di sana.</p>
<p>Setibanya di tempat Paman Sa'a, beliau menyarankan saya mendaftarkan diri ke Panti Asuhan Sinar Kasih Harapan, di Mustika Jaya, Kota Bekasi. Setelah melalui proses administrasi dan menjelaskan kondisi keluarga dengan jujur, akhirnya saya diterima.</p>
<p>Keputusan ini membawa saya pada perjalanan baru—pindah ke Kota Bekasi, tempat yang belum pernah saya kunjungi sebelumnya. Jaraknya sangat jauh dari kampung halaman, dan inilah pertama kalinya saya harus hidup berjauhan dari orang tua. Meski begitu, dengan tekad yang kuat untuk melanjutkan pendidikan, saya siap menghadapi segala tantangan demi masa depan saya.</p>`
    },
    'bio-content-5': {
        en: `<h3>Vocational School Period 2018-2021</h3>
<p>During my high school years, I lived at Yayasan Sinar Kasih Harapan, where I learned many important values such as discipline, responsibility, and perseverance. Living in the foundation environment shaped my character and taught me the importance of community, support, and personal growth.</p>
<p>At the same time, I pursued my formal education at SMK Yayasan Tinta Emas Indonesia (YATINDO). During this period, I faced various challenges that helped me grow both academically and personally. Being part of both the foundation and the school environment allowed me to develop independence and a strong work ethic from an early age.</p>
<p>Outside the classroom, I began to explore my interests in creativity and music. I developed my guitar skills and often shared my knowledge with others around me. This experience gradually built my confidence in teaching and communicating with people.</p>
<p>These formative years played an important role in shaping my perspective about education, creativity, and service to others. The experiences I gained during this time later inspired me to pursue higher education in the field of teaching and to continue developing skills in creativity, organization, and leadership.</p>`,
        id: `<h3>Masa SMK 2018–2021</h3>
<p>Selama masa SMA, saya tinggal di Yayasan Sinar Kasih Harapan, tempat saya belajar nilai-nilai penting seperti disiplin, tanggung jawab, dan ketekunan. Kehidupan di lingkungan yayasan membentuk karakter saya dan mengajarkan arti kebersamaan, dukungan, serta pertumbuhan pribadi.</p>
<p>Di saat yang sama, saya menjalani pendidikan formal di SMK Yayasan Tinta Emas Indonesia (YATINDO). Selama periode ini, saya menghadapi berbagai tantangan yang membantu saya tumbuh baik secara akademis maupun pribadi. Menjadi bagian dari lingkungan yayasan sekaligus sekolah memungkinkan saya mengembangkan kemandirian dan etos kerja yang kuat sejak dini.</p>
<p>Di luar kelas, saya mulai mengeksplorasi minat dalam kreativitas dan musik. Saya mengembangkan keterampilan gitar dan sering berbagi pengetahuan dengan orang-orang di sekitar saya. Pengalaman ini perlahan membangun rasa percaya diri dalam mengajar dan berkomunikasi.</p>
<p>Tahun-tahun pembentukan ini sangat berperan dalam membentuk perspektif saya tentang pendidikan, kreativitas, dan pengabdian kepada sesama. Pengalaman yang saya dapatkan kemudian menginspirasi saya untuk melanjutkan pendidikan tinggi di bidang pendidikan dan terus mengembangkan keterampilan dalam kreativitas, organisasi, dan kepemimpinan.</p>`
    },
    'bio-content-6': {
        en: `<h3>University Years 2021-2025</h3>
<p>My university journey began when I was accepted into Universitas Katolik Indonesia Atma Jaya, where I pursued a Bachelor's degree in Primary School Education (PGSD). During my studies, I developed a deeper understanding of education, particularly in literacy and numeracy for elementary school students.

While studying at the university, I actively looked for opportunities to grow beyond academics. I became involved in various activities, including supporting events, creative projects, and organizational work. These experiences helped me develop practical skills such as event coordination, teamwork, and operational management.</p>
<p>University life also taught me resilience and independence. Balancing academic responsibilities with work and personal development required discipline and determination. Through these experiences, I learned how to manage time effectively and continuously improve myself.

Outside the classroom, I continued to develop my creative interests, especially in music and design. Teaching acoustic guitar privately and participating in creative projects helped me strengthen my communication skills and build meaningful connections with others.</p>
<p>In 2025, I successfully graduated from Universitas Katolik Indonesia Atma Jaya. One of the most meaningful moments of my journey was when my parents came to Jakarta to attend my graduation. After the ceremony, I had the opportunity to take them around the city and show them Jakarta — a moment that meant a lot to me as a way of expressing my gratitude for their support throughout my journey.</p>`,
        id: `<h3>Tahun Universitas 2021–2025</h3>
<p>Perjalanan kuliah saya dimulai ketika saya diterima di Universitas Katolik Indonesia Atma Jaya, di mana saya mengambil program Sarjana Pendidikan Guru Sekolah Dasar (PGSD). Selama studi, saya mengembangkan pemahaman yang lebih mendalam tentang pendidikan, khususnya dalam pengajaran literasi dan numerasi untuk siswa sekolah dasar. Selagi kuliah, saya aktif mencari peluang untuk berkembang di luar akademis. Saya terlibat dalam berbagai kegiatan termasuk mendukung acara, proyek kreatif, dan kegiatan organisasi. Pengalaman-pengalaman ini membantu saya mengembangkan keterampilan praktis seperti koordinasi acara, kerja tim, dan manajemen operasional.</p>
<p>Kehidupan kampus juga mengajarkan saya tentang ketangguhan dan kemandirian. Menyeimbangkan tanggung jawab akademis dengan pekerjaan dan pengembangan diri membutuhkan disiplin dan tekad. Melalui pengalaman ini, saya belajar mengelola waktu secara efektif dan terus meningkatkan diri. Di luar kelas, saya terus mengembangkan minat kreatif saya, terutama di bidang musik dan desain. Mengajar gitar akustik secara privat dan berpartisipasi dalam proyek kreatif membantu saya memperkuat keterampilan komunikasi dan membangun hubungan yang bermakna.</p>
<p>Pada tahun 2025, saya berhasil lulus dari Universitas Katolik Indonesia Atma Jaya. Salah satu momen paling berkesan adalah ketika orang tua saya datang ke Jakarta untuk menghadiri wisuda saya. Setelah upacara, saya berkesempatan mengajak mereka berkeliling kota dan menunjukkan Jakarta kepada mereka—momen yang sangat berarti sebagai ungkapan rasa terima kasih atas dukungan mereka selama perjalanan ini.</p>`
    },
    'bio-content-7': {
        en: `<h3>Future Vision 2026 & Beyond</h3>
<p>Looking ahead, my goal is to continue growing as a professional in Operational Excellence, Event Management, and Creative Coordination. I aim to develop stronger skills in improving operational systems, managing impactful events, and supporting organizations in creating well-structured and meaningful experiences.</p>
<p>In the coming years, I want to expand my expertise by learning more about process improvement, project coordination, and creative management, while continuing to contribute to teams and organizations that value collaboration, innovation, and efficiency.</p>
<p>Beyond professional growth, I also hope to keep developing my creative interests, particularly in music and design, as these passions help me stay balanced, inspired, and connected with others.</p>
<p>Looking further into the future, my vision is to build a career where I can combine operational excellence, creativity, and leadership to create positive impact in every project and community I am part of.</p>`,
        id: `<h3>Visi Masa Depan 2026 & Seterusnya</h3>
<p>Ke depannya, tujuan saya adalah terus berkembang sebagai profesional dalam bidang Keunggulan Operasional, Manajemen Acara, dan Koordinasi Kreatif. Saya bertujuan mengembangkan keterampilan yang lebih kuat dalam meningkatkan sistem operasional, mengelola acara yang berdampak, dan mendukung organisasi dalam menciptakan pengalaman yang terstruktur dengan baik dan bermakna.</p>
<p>Dalam beberapa tahun ke depan, saya ingin memperluas keahlian dengan mempelajari lebih banyak tentang peningkatan proses, koordinasi proyek, dan manajemen kreatif, sembari terus berkontribusi pada tim dan organisasi yang menghargai kolaborasi, inovasi, dan efisiensi.</p>
<p>Selain pertumbuhan profesional, saya juga berharap dapat terus mengembangkan minat kreatif saya, terutama dalam musik dan desain, karena hasrat ini membantu saya tetap seimbang, terinspirasi, dan terhubung dengan orang lain.</p>
<p>Memandang ke masa depan yang lebih jauh, visi saya adalah membangun karier di mana saya dapat menggabungkan keunggulan operasional, kreativitas, dan kepemimpinan untuk menciptakan dampak positif di setiap proyek dan komunitas yang saya ikuti.</p>`
    }
};

// ================================================================
// Main setLang function
// ================================================================
function setLang(lang) {
    // 1. Apply data-en / data-id attributes on all elements
    document.querySelectorAll('[data-en]').forEach(function(el) {
        var val = el.getAttribute('data-' + lang);
        if (val !== null) el.innerHTML = val;
    });

    // 2. Apply biography section translations (about.html)
    Object.keys(BIO_TRANS).forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.innerHTML = BIO_TRANS[id][lang];
    });

    // 3. Translate nav links by href
    document.querySelectorAll('.nav-links a').forEach(function(a) {
        var page = a.getAttribute('href');
        if (NAV_TRANS[page]) a.textContent = NAV_TRANS[page][lang];
    });

    // 4. Update toggle button states
    var btnEn = document.getElementById('lang-btn-en');
    var btnId = document.getElementById('lang-btn-id');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
    if (btnId) btnId.classList.toggle('active', lang === 'id');

    localStorage.setItem('siteLang', lang);
}

// ================================================================
// Inject toggle widget into every page
// ================================================================
(function injectToggle() {
    var style = document.createElement('style');
    style.textContent = [
        '.lang-widget{position:fixed;top:20px;left:30px;z-index:1100;display:flex;align-items:center;',
        'background:rgba(255,255,255,0.55);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);',
        'border:1px solid rgba(255,255,255,0.85);border-radius:50px;',
        'box-shadow:0 8px 32px 0 rgba(31,38,135,0.09);overflow:hidden;}',
        '.lang-widget button{padding:9px 18px;font-family:inherit;font-weight:700;font-size:0.83rem;',
        'cursor:pointer;border:none;background:transparent;color:#475569;',
        'transition:all 0.3s cubic-bezier(0.4,0,0.2,1);letter-spacing:0.05em;}',
        '.lang-widget button.active{background:linear-gradient(135deg,#6366f1 0%,#a855f7 100%);',
        'color:#fff;border-radius:50px;box-shadow:0 4px 12px rgba(99,102,241,0.35);}',
        '.lang-widget button:hover:not(.active){color:#6366f1;}'
    ].join('');
    document.head.appendChild(style);

    var widget = document.createElement('div');
    widget.className = 'lang-widget';
    widget.innerHTML =
        '<button id="lang-btn-en" onclick="setLang(\'en\')">EN</button>' +
        '<button id="lang-btn-id" onclick="setLang(\'id\')">ID</button>';

    // Insert as first child of body
    if (document.body.firstChild) {
        document.body.insertBefore(widget, document.body.firstChild);
    } else {
        document.body.appendChild(widget);
    }
})();

// ================================================================
// Apply saved language on page load
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
    setLang(localStorage.getItem('siteLang') || 'en');
});
