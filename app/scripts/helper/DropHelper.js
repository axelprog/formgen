{
  let dropPlace = null;

  window.DropHelper = class DropHelper {
    static get dropPlaceClass() {
      return 'dropPlace';
    }


    static createDropPlace() {
      dropPlace = document.createElement('div');
      dropPlace.textContent = 'Drop here';
      dropPlace.classList.add(DropHelper.dropPlaceClass, 'form-group');
    }

    static dropEnter(element) {
      if (element.querySelector(`.${DropHelper.dropPlaceClass}`)) {
        return;
      }

      if (dropPlace && element != dropPlace.parentNode) {
        DropHelper.dropLeave();
      }

      if (!dropPlace) {
        DropHelper.createDropPlace();
      }
      element.parentNode.insertBefore(dropPlace, element.nextSibling);
    }

    static dropLeave() {
      if (dropPlace && dropPlace.parentNode) {
        dropPlace.parentNode.removeChild(dropPlace);
      }
    }

    static clearDropPlace(element) {
      let dropPlaces = element.querySelectorAll(`.${DropHelper.dropPlaceClass}`);
      if (dropPlaces) {
        dropPlaces.forEach(element => element.parentNode.removeChild(element));
      }
    }
  }
}
