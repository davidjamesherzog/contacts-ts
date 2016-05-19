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

      let success = (response) => {
        this.contact = response;
      };

      let error = (response) => {
        console.log(response);
        toastr.error(response);
      };

      this.ContactsService.find(id)
        .then(success)
        .catch(error);
    }

  }

  angular
    .module('contactsApp')
    .controller('ContactsDetailController', ContactsDetailController);

}


