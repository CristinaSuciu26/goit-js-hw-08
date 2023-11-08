import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input[type="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

let feedbackFormState = {
  email: '',
  message: '',
};

const updateAndStoreState = throttle(() => {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}, 500);

emailInput.addEventListener('input', event => {
  feedbackFormState.email = event.target.value;
  updateAndStoreState();
});

messageInput.addEventListener('input', event => {
  feedbackFormState.message = event.target.value;
  updateAndStoreState();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log(JSON.stringify(feedbackFormState));
});
