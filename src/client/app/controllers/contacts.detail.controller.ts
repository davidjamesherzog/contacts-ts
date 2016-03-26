namespace contacts {
  'use strict';

  interface IContactsDetailsController {
    contact: contacts.IContacts;
    find: (id: string) => void
  }

  export class ContactsDetailController implements IContactsDetailsController {

    static $inject: Array<string> = ['$stateParams', 'ContactsService'];
    constructor(private $stateParams: ng.ui.IStateParamsService,
                private ContactsService: contacts.IContactsService) {
      this.find($stateParams['id']);
    }

    //var _this = this;
    contact: contacts.IContacts = null;

    find(id: string) {
      this.ContactsService.find(id)
        .then((response) => {
          this.contact = response;
        });
    }

  }

  angular
    .module('contactsApp')
    .controller('ContactsDetailController', ContactsDetailController);

}


