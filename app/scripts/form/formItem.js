class FormItem {
  constructor(template) {
    this._id = GuidHelper.GenerateGuid();
    this.template = template;
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
    newNode.innerHTML = this.template;

    this.element = newNode;
  }

  getElement() {
    if (!this.element) {
      this.createElement();
    }
    return this.element;
  }

  // itemDragEnter(event){
  //   DropHelper.dropEnter(this.element);
  // };
  //
  // itemDragOver (event) {
  //   event.preventDefault();
  // };
  //
  // itemDragLeave (event) {
  //   DropHelper.dropLeave(this.element);
  // };
}
