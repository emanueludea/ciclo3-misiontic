function Campoformulario(props) {

  return (<div class="form-group">
    <label for="number" id="number-label">{props.etiqueta}</label>
    <input type="number" id="number" min={props.min} max={props.max} required placeholder={props.placeholder}
      class="form-control" />
    <span></span>
  </div>);

}