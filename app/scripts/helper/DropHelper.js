class DropHelper {
  static get dropPlaceClass() {
    return 'dropPlace';
  }

  static dropEnter(element){
    if(element.querySelector(`.${DropHelper.dropPlaceClass}`)){
      return;
    }

    let dropPlace = document.createElement('div');
    dropPlace.textContent = 'Drop here';
    dropPlace.classList.add(DropHelper.dropPlaceClass, 'col-sm-12');
    element.appendChild(dropPlace);

    console.log('enter', element);
  }

  static dropLeave(element){
    let dropPlace = element.querySelector(`:scope  > .${DropHelper.dropPlaceClass}`);
    if(dropPlace) {
      dropPlace.parentNode.removeChild(dropPlace);
    }

    console.log('leave ',element);
  }

  static clearDropPlace(element){
    let dropPlace = element.querySelectorAll(`.${DropHelper.dropPlaceClass}`);
    if(dropPlace){
      dropPlace.forEach(element => element.parentNode.removeChild(element));
    }
    console.log('clear ',element);
  }
}
