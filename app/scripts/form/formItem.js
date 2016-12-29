class FormItem {
  constructor(template, formObject) {
    this._id = GuidHelper.GenerateGuid();
    this.template = template;
    this.formObject = formObject;
    this.createElement();
  }

  static getFormItemView(element) {
    return element.classList.contains('formItem') ? element : element.closest('.formItem');
  }

  get id() {
    return this._id;
  }

  createElement() {
    let newNode = document.createElement('div');
    newNode.classList.add('form-group', 'formItem');
    newNode.dataset.id = this._id;

    newNode.innerHTML = ('<div class="pull-right hoverShow"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' + this.template);

    newNode.querySelector('.close') .onclick = this.deleteElement.bind(this);

    this.element = newNode;
  }

  getElement() {
    if (!this.element) {
      this.createElement();
    }
    return this.element;
  }

  deleteElement(){
    this.element.parentNode.removeChild(this.element);
    this.formObject.deleteItem(this._id);
  }
}
