import capitalize from 'voca/capitalize'
// @ts-expect-error
import checkAppliactionStatus from '@myspiratio/child-package';

function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = capitalize(`count is ${counter}`);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  console.log(checkAppliactionStatus('some-status-code'));
}


setupCounter(document.getElementById('counter') as HTMLButtonElement)