namespace contacts {
  'use strict'

  interface IContactsDetailsController {
    contact: any;
    find: (name: string) => void
  }

  export class ContactsDetailController implements IContactsDetailsController {

    static $inject: Array<string> = ['$stateParams', 'ContactsService'];
    constructor(private $stateParams: ng.ui.IStateParamsService,
                private ContactsService: contacts.IContactsService) {
      this.find($stateParams['name']);
    }

    contact: any = null;

    find(name: string) {
      this.contact = this.ContactsService.find(name);
    }

  }

  angular
    .module('contactsApp')
    .controller('ContactsDetailController', ContactsDetailController);

}
