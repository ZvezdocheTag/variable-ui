var greeting = 'hola, '
var button = document.getElementById('mybutton')
button.person_name = 'Roberto'
button.addEventListener(
  'click',
  function () {
    alert(greeting + button.person_name + '.')
  },
  false
)
