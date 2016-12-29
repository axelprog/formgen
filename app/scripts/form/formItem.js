class FormItem {
  constructor (template){
    this.template = template;
    this.createElement();
  }

  createElement(){
    let newNode = document.createElement('div');
    newNode.classList.add('form-group', 'formItem');
    // newNode.ondragenter = this.itemDragEnter.bind(this);
    // newNode.ondragover = this.itemDragOver.bind(this);
    // newNode.ondragleave = this.itemDragLeave.bind(this);
    newNode.innerHTML = this.template;

    this.element = newNode;
  }

  getElement () {
    if(!this.element){
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
