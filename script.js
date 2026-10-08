// Interaksi tombol Follow
const followBtn = document.getElementById('followBtn');
let isFollowed = false;

followBtn.addEventListener('click', () => {
  isFollowed = !isFollowed;
  if (isFollowed) {
    followBtn.textContent = 'Following';
    followBtn.classList.add('followed');
  } else {
    followBtn.textContent = 'Follow';
    followBtn.classList.remove('followed');
  }
});

// Interaksi tombol Pesan
const msgBtn = document.getElementById('msgBtn');
msgBtn.addEventListener('click', () => {
  alert('Fitur pesan akan segera dibuka!');
});
