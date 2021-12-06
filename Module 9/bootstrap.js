import BSN from 'bootstrap.native';
const PROMPT_DELAY = 3000;
const MAX_PROMPT_ATTEMPTS = 3;
const refs = {
  modal: document.querySelector('#exampleModal'),
  saveBtn: document.querySelector('button[data-subscribe]'),
};
const modal = new BSN.Modal('#exampleModal');
let promptCounter = 0;
let hasSubscribe = false;

openModal();

refs.modal.addEventListener('hide.bs.modal', openModal);

refs.saveBtn.addEventListener('click', onSaveBtnClick);

function openModal() {
  if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribe) {
    return;
  }
  setTimeout(() => {
    console.log('Opened modal');
    modal.show();
  }, PROMPT_DELAY);

  promptCounter += 1;
}

function onSaveBtnClick() {
  hasSubscribe = true;
  console.log('followed');
  modal.hide();
}
