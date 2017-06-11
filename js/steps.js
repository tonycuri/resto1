;(function(){
  const selector = "#contact-form"

  //agarra el formulario y mete los metodos de jquery
  $(selector).find(".input").on("change",(ev)=>{
    let $input = $(ev.target)

    let $next_input = $input.next()

    enfocar_siguiente_input($next_input)

    console.log($el)

    console.log("cambie de valor")
  })
  //Helpers

  function validar_formulario(){

  }

  function es_valido_formulario(){

  }

  function enfocar_siguiente_input($next_input){
    $next_input.focus()
  }

})()
