class SidePanelElement {
  constructor (data) {
    this.html = `<li class="list-group-item" draggable="true">${data.caption}</li>`;
    this.data = data;
    this.createElement();
  }

  createElement(){
    let tempNode = document.createElement('div');
    tempNode.innerHTML = this.html;

    let element = tempNode.firstChild;
    element.ondragstart = this.itemDrag.bind(this);

    this.element = element;
  }

  itemDrag (event) {
    event.dataTransfer.setData('type', this.data.type);
    event.dataTransfer.setData('template', this.data.template);
  }

  getElement() {
    if(!this.element){
      this.createElement();
    }
    return this.element;

  }
}
