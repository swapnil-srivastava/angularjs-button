class pxbuttonController {
    constructor() {
    }
    
    getClass(type) {
      switch (type) {
        case 'primary':
          return `md-primary`;
        case 'raised':
          return `md-raised`;
        case 'primaryRaised':
          return `md-primary md-raised`;
        case 'warn':
          return 'md-warn';
        case 'warnRaised':
          return `md-warn md-raised`;
        case 'fab':
          return `md-fab`;
        case 'fabRaised':
          return `md-fab md-raised`;
        case 'fabMini':
          return `md-fab md-mini`;
        case 'iconButton':
          return `md-icon-button md-primary`;
        default:
          return `md-primary`;
      }
    }
  }

export default pxbuttonController;