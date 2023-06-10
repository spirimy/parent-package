import capitalize from 'voca/capitalize'

function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = capitalize(`count is ${counter}`);
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}


setupCounter(document.getElementById('counter') as HTMLButtonElement)