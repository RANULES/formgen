const insert = () => {
  let type = document.querySelector('#type').value 
  let label = document.querySelector('#label').value 

  switch(type){
    case 'Text': 
      appendText(label)
      break
    case 'Button': 
      appendButton(label)
      break
    case 'Radio': 
      appendRadio(label)
      break
    case 'Checkbox': 
      appendCheckbox(label)
      break

  }
}

const appendText = (label = "No label") => {
  let el = document.createElement('input')

  el.setAttribute('type', 'Text')
  el.setAttribute('class', 'form-control mt-2')
  el.setAttribute('placeholder', label)

  document.querySelector('#display').append(el) 
}

const appendButton = (label = "No label") => {
  let el = document.createElement('button')

  el.setAttribute('type', 'Text')
  el.setAttribute('class', 'btn btn-primary mt-2') 
  el.textContent = label

  document.querySelector('#display').append(el)
}

const appendRadio = (label = "No label") => {
  let el = document.createElement('input')

  el.setAttribute('type', 'Radio')
  el.setAttribute('name', 'radio-group')
  el.setAttribute('id', label)
  el.setAttribute('class', 'form-check-input')

  let labelEl = document.createElement('label')
  labelEl.setAttribute('for', label)
  labelEl.setAttribute('class', 'form-check-label')
  labelEl.textContent = label

  let container = document.createElement('div')
  container.setAttribute('class', 'form-check mt-2')
  container.append(el, labelEl)

  document.querySelector('#display').append(container)
}

const appendCheckbox = (label = "No label") => {
  let el = document.createElement('input')

  el.setAttribute('type', 'Checkbox')
  el.setAttribute('id', label)
  el.setAttribute('class', 'form-check-input')

  let labelEl = document.createElement('label')
  labelEl.setAttribute('for', label)
  labelEl.setAttribute('class', 'form-check-label')
  labelEl.textContent = label

  let container = document.createElement('div')
  container.setAttribute('class', 'form-check mt-2')
  container.append(el, labelEl)

  document.querySelector('#display').append(container)
}

const removeInsertedElement = () => {
  let insertedElement = document.querySelector('#display > *:last-child');
  if (insertedElement) {
    insertedElement.remove();
  }
}
