const nav = document.querySelector('nav');

function affix (event) {
  const offset = window.pageYOffset;
  if (offset > 100) {
    return nav.classList.add('NavAffixed')
  }
  return nav.classList.remove('NavAffixed')
}

window.addEventListener('scroll', affix)