;(function(){

  // $(".step:nth-child(1)").addClass("active")
  const selector = "#contact-form"

  $(".path-step").on("click",(ev)=>{

  })

  //agarra el formulario y mete los metodos de jquery
  $(selector).find(".input").on("change",(ev)=>{
    let $input = $(ev.target)

    let $next_step = $input.parent().next(".step")

    if($next_step.length > 0){
      siguiente($next_step)
    }else{
      validar_formulario()
    }

  })
  //Helpers

  function validar_formulario(){
    if(es_valido_formulario()){

    }else{
      let $fieldset_invalido = $(selector).find(".input:invalid").first().parent()
      siguiente($fieldset_invalido)
    }
  }

  function es_valido_formulario(){
    return document.querySelector(selector).checkValidity()
  }

  function siguiente($next_step){
    $(".step.active").removeClass("active")
    $next_step.addClass("active")
    $next_step.find(".input").focus()

    // $next_input.focus()
  }

})()
