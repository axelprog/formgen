class FormItem {
  constructor(type, template, formObject) {
    this._id = GuidHelper.GenerateGuid();
    this.template = template;
    this.type = type;
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
    newNode.classList.add('formItem');
    newNode.dataset.id = this._id;
    newNode.setAttribute('draggable', 'true');
    newNode.ondragstart = this.itemDrag.bind(this);

    newNode.innerHTML = ('<div class="form-group"><div class="hoverShow"><button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>' + this.template +'</div>');

    newNode.querySelector('.close').onclick = this.deleteElement.bind(this);

    this.element = newNode;
  }

  getElement() {
    if (!this.element) {
      this.createElement();
    }
    return this.element;
  }

  itemDrag(event) {
    event.dataTransfer.setData('type', this.type);
    event.dataTransfer.setData('id', this._id);
    event.dataTransfer.setData('isCopy', true);
  }

  deleteElement() {
    this.deleteView();
    this.formObject.deleteItem(this._id);
  }

  deleteView() {
    this.element.parentNode.removeChild(this.element);
  }

  serialize() {
    return {type: this.type, id: this._id}
  }
}
