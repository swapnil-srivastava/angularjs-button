class AppController {
    constructor($log) {
      'ngInject'

      // Buttons Object in the controller where it is being used 
        this.btn1 = {
          text: 'Check Console',
          type: 'primary',
          icon: 'face',
          onDisabled: true,
          onClick: () => { 
            $log.log("Hurray click event is working from app controller ")
            // TODO : Remove $Log 
            },
          };

          this.btn2 = {
            text: 'Diasbled',
            disabled: true,
            type: 'raised',
            onClick: () => {}            
            };

          this.btn3 = {
            text: 'Primary Raised',
            type: 'primaryRaised',
            icon: 'face',
            onClick: () => {}            
            };

          this.btn4 = {
            text: 'Warning',
            disabled: true,
            type: 'warn',
            icon: 'face',
            onClick: () => {}            
            };

          this.btn5 = {
            text: 'W - Raised',
            type: 'warnRaised',
            icon: 'face',
            onClick: () => {}           
            };

          this.btn6 = {
            text: 'Fab',
            type: 'fab',
            icon: 'account_balance_wallet',
            onClick: () => {}         
            };

          this.btn7 = {
            // text: 'FabMini',
            type: 'fabMini',
            icon: 'theaters',
            onClick: () => {}
            };

          this.btn8 = {
            type: 'iconButton',
            icon: 'alarm_on',
            onClick: () => {}
          };

      }

  }

export default AppController;