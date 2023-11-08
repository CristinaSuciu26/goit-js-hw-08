import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

const initialTime = Number(savedTime) || 0;

player.setCurrentTime(initialTime);

player.on(
  'timeupdate',
  throttle(data => {
    const curentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', curentTime.toFixed(2));
  }, 1000)
);
