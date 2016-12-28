class App {
  constructor(){
    this.sidePanel = new SidePanel(document.querySelector('#sidePanel'));
    this.formEditor = new MainForm(document.querySelector('#formEditor'));
  }
}
let app = new App();
