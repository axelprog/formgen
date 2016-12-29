class MainForm {
  constructor(element){
    this.element = element;
    this.form = this.element.querySelector('form');
    this.items = [];

    let form = this.element.querySelector('.panel-body');
    form.ondrop = this.itemDrop.bind(this);
    form.ondragover = this.itemDragOver.bind(this);
    form.ondragenter = this.itemDragEnter.bind(this);
    form.ondragleave = this.itemDragLeave.bind(this);

    //load state
  }

  itemDrop (event){
    event.preventDefault();

    DropHelper.clearDropPlace(this.element);
    var template = event.dataTransfer.getData('template');
    let newItem = new FormItem(template);
    this.items.push(newItem);
    this.element.querySelector('form').appendChild(newItem.getElement());
  }

  itemDragOver (event){
    event.preventDefault();
    let formItem = event.target.classList.contains('formItem') ? event.target : event.target.closest('.formItem');
    if(formItem) {
      DropHelper.dropEnter(formItem);
    }
  }

  itemDragEnter(event){
    DropHelper.dropEnter(this.form);
  };

  itemDragLeave (event) {
    DropHelper.dropLeave(this.form);
  };
}
