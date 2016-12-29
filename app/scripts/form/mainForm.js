class MainForm {
  constructor(element) {
    this.element = element;
    this.form = this.element.querySelector('form');

    this.items = new Map();

    let form = this.element.querySelector('.panel-body');
    form.ondrop = this.itemDrop.bind(this);
    form.ondragover = this.itemDragOver.bind(this);
    form.ondragenter = this.itemDragEnter.bind(this);
    form.ondragleave = this.itemDragLeave.bind(this);

    //load state
  }


  itemDrop(event) {
    event.preventDefault();

    DropHelper.clearDropPlace(this.element);
    let newItem = null;
    if (!event.dataTransfer.getData('isCopy')) {

      var template = event.dataTransfer.getData('template');
      newItem = new FormItem(template, this);
      this.items.set(newItem.id, newItem);

    } else {
      newItem = this.items.get(event.dataTransfer.getData('id'));
      newItem.deleteView();
    }

    let formItem = FormItem.getFormItemView(event.target);
    this.element.querySelector('form').insertBefore(newItem.getElement(), formItem ? formItem.nextSibling : null);
  }

  itemDragOver(event) {
    event.preventDefault();
    let formItem = FormItem.getFormItemView(event.target);
    if (formItem) {
      DropHelper.dropEnter(formItem);
    }
  }

  itemDragEnter(event) {
    DropHelper.dropEnter(this.form);
  };

  itemDragLeave(event) {
    DropHelper.dropLeave(this.form);
  };

  deleteItem(id) {
    this.items.delete(id);
  }
}
