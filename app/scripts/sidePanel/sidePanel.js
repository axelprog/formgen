class SidePanel {

  constructor (element){
    //init
    this.element = element;
    this.componentSchema = [];
    this.componentList = [];

    //loading
    $.getJSON('assets/components.json', function (json) {
      this.componentSchema = json;
      this.componentSchema.forEach( component => {
          this.componentList.push(new SidePanelElement(component));
      });
      this.redrawPanel();
    }.bind(this));
  }

  redrawPanel () {
    let listElement = this.element.querySelector('.list-group');
    listElement.innerHTML = '';
    this.componentList.forEach( component => {
      listElement.appendChild(component.getElement());
    });
  }
}
