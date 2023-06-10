import camelCase from 'voca/camel_case'
import submarines from '../submarines/index'

function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = camelCase(`count is ${counter}`);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)

  console.log(submarines('submarine'));
}


setupCounter(document.getElementById('counter') as HTMLButtonElement)