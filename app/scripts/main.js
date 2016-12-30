class App {
  constructor(){
    this.sidePanel = new SidePanel(document.querySelector('#sidePanel'));
    this.formEditor = new MainForm(document.querySelector('#formEditor'));
  }

  saveForm(){
    let json = this.formEditor.serialize();

    console.info('serialized view');
    console.info( JSON.stringify(json, null, 2));
  }
}
let app = new App();
