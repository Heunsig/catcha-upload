console.clear()
const tabMenus = document.querySelector('.cau-tab-menu')
const tabSections = document.querySelectorAll('.cau-tab')

function reset_active (elements) {
  for (let ele of elements) {
    ele.classList.remove('active')
  }
  
  for (let tab of tabSections) {
    tab.classList.remove('active')
  }
}

function open_section () {
  
}

for (let node of tabMenus.children) {
  node.addEventListener('click', e => {
    e.preventDefault()
    reset_active(tabMenus.children)
    e.target.classList.add('active')
    const tab = document.querySelector('.'+e.target.dataset.tab)
    tab.classList.add('active')
  })
}