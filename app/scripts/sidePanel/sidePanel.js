{
  let componentSchema =[];

  window.SidePanel = class SidePanel {

    constructor(element) {
      //init
      this.element = element;
      this.componentList = [];

      //loading
      $.getJSON('assets/components.json', function (json) {
        componentSchema = json;
        componentSchema.forEach(component => {
          this.componentList.push(new SidePanelElement(component));
        });
        this.redrawPanel();
      }.bind(this));
    }

    redrawPanel() {
      let listElement = this.element.querySelector('.list-group');
      listElement.innerHTML = '';
      this.componentList.forEach(component => {
        listElement.appendChild(component.getElement());
      });
    }

    static getTemplateByType(type){
      let component = componentSchema.filter(item => item.type === type);
      if(component && component.length > 0){
        return component[0].template;
      }
      return '';
    }
  }
}
