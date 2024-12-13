document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== '') {
            e.preventDefault();
            const hash = this.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Redirect to Admission Page
document.querySelector('#admission-btn').addEventListener('click', function () {
    window.location.href = 'https://www.jeevanprabodhini.in/';
});

// Live Background Animation
const body = document.body;
let colorIndex = 0;
const colors = ['#f0f9ff', '#c1e9f8', '#fef9e7', '#f5c0c0'];
setInterval(() => {
    body.style.background = `linear-gradient(to bottom, ${colors[colorIndex]}, ${colors[(colorIndex + 1) % colors.length]})`;
    colorIndex = (colorIndex + 1) % colors.length;
}, 5000);

// Announcement Ticker (Optional Feature)
const announcements = [
    'Admissions for 2024-25 are now open!',
    'Join us for the Digital Business Guidance Workshop!',
    'Exam schedules have been updated.',
];
let currentAnnouncement = 0;
const announcementBar = document.querySelector('#announcement-bar');
if (announcementBar) {
    setInterval(() => {
        announcementBar.textContent = announcements[currentAnnouncement];
        currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
    }, 4000);
}
