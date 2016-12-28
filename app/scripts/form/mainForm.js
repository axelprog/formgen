class MainForm {
  constructor(element){
    this.element = element;
    this.items = [];

    this.element.querySelector('form').ondrop = this.itemDrop.bind(this);
    this.element.querySelector('form').ondragover = this.itemDragOver.bind(this);

    //load state
  }

  itemDrop (event){
    event.preventDefault();

    var template = event.dataTransfer.getData("template");
    let newItem = new FormItem(template);
    this.items.push(newItem);
    this.element.querySelector('form').appendChild(newItem.getElement());
  }

  itemDragOver (event){
    event.preventDefault();
  }
}
