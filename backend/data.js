// backend/data.js
const educationHistory = [ { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
{ id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Karangmojo', major: 'MIPA', institution: 'SMP Negeri 1 Rongkop' } 
];

const skills = [ { name: 'Vue.js', level: 'Menengah' }, { name: 'JavaScript', level:'Menengah' },
{ name: 'Tailwind CSS', level: 'Menengah' }, { name: 'Node.js', level:'Menengah' },
{ name: 'Express.js', level: 'Menengah' }, { name: 'PostgreSQL',level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Menengah' }, { name: 'HTML5 & CSS3',level: 'Menengah' }, 
];

const projects = [ 
    { title: 'Dewiji', 
    image:'/src/assets/img/Dewiji.png', 
    description:'Platform informasi tentang destinasi yang ada di daerah Yogyakarta, Sewa Mobil, dan jasa paket liburan', 
    tech: ['Vue.js','Laravel', 'SQL'], 
    link: 'https://github.com/Arupika/Dewiji' },
{ title: 'Penghitung-Luas-Bangun-Datar', 
    image:'/src/assets/img/C.png', 
    description:'aplikasi penghitung luas bangun datar dengan terminal cmd', 
    tech: ['C#'], 
    link: 'https://github.com/Ryy1412/Penghitung-Luas-Bangun-Datar.git' }
];

module.exports = { educationHistory, skills, projects };