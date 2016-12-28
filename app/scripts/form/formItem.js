class FormItem {
  constructor (template){
    this.template = template;
  }

  getElement() {
    let newNode = document.createElement('div');
    newNode.classList.add('form-group');
    newNode.innerHTML = this.template;
    return newNode;
  }
}
