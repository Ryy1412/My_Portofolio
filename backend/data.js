// backend/data.js
const educationHistory = [ { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
{ id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Karangmojo', major: 'MIPA'},
{ id: 3, period: '2017 - 2020', institution: 'SMP Negeri 1 Rongkop'} 
];

const skills = [ { name: 'Vue.js', level: 'Menengah' }, { name: 'JavaScript', level:'Begginer' },
{ name: 'Tailwind CSS', level: 'Menengah' }, { name: 'Node.js', level:'Menengah' },
{ name: 'Express.js', level: 'Begginer' }, { name: 'C++',level: 'Menengah' },
{ name: 'Git & GitHub', level: 'Menengah' }, { name: 'HTML & CSS',level: 'Menengah' },
{ name: 'C#',level: 'Menengah' }, { name: 'SQL',level: 'Menengah' },  
];

const projects = [ 
    { title: 'Dewiji', 
    image:'/src/assets/img/Dewiji.png', 
    description:'Platform informasi tentang destinasi yang ada di daerah Yogyakarta, Sewa Mobil, dan jasa paket liburan', 
    tech: ['Vue.js','Laravel', 'SQL'], 
    link: 'https://github.com/Arupika/Dewiji' },
    { title: 'Penghitung Luas Bangun Datar', 
    image:'/src/assets/img/C.png', 
    description:'aplikasi penghitung luas bangun datar dengan terminal cmd', 
    tech: ['C#'], 
    link: 'https://github.com/Ryy1412/Penghitung-Luas-Bangun-Datar.git' },
    { title: 'Playlist Music', 
    image:'/src/assets/img/Play.png', 
    description:'aplikasi penghitung luas bangun datar dengan terminal cmd', 
    tech: ['C++'], 
    link: 'https://github.com/Ryy1412/Playlist-music-FP' }
];

module.exports = { educationHistory, skills, projects };