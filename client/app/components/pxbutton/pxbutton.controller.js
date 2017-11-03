class pxbuttonController {
    constructor() {
      this.name = 'pxbutton';
    }

    getClass(type) { // eslint-disable-line class-methods-use-this
      switch (type) {
        case 'primary':
          return ['md-primary', 'plain'];
        case 'secondary':
          return ['md-secondary', 'secondary'];
        case 'important':
          return ['md-primary', 'action'];
        default:
          return ['md-primary', 'plain'];
      }
    }
  }

export default pxbuttonController;