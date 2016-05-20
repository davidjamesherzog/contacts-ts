namespace contacts {
  'use strict';

  interface IContactsController {
    contacts: Array<any>;
    list: () => void,
    create: (contact: contacts.IContacts) => void
  }

  export class ContactsController implements IContactsController {

    static $inject: Array<string> = ['toastr', 'ContactsService'];
    constructor(private toastr: Toastr,
                private ContactsService: contacts.IContactsService) {
      this.list();
    }

    contacts: Array<contacts.IContacts> = [];

    list() {

      let success = (response) => {
        console.log('success');
        this.contacts = response;
      };

      let error = (response) => {
        toastr.error(response);
      };

      this.ContactsService.list()
        .then(success)
        .catch(error);
    }

    public create(contact: contacts.IContacts) {

      let success = (response) => {
        console.log(response);
        this.list();
        toastr.success('Created Contact - ' + contact.firstName + ' ' + contact.lastName, 'Success');
      };

      let error = (response) => {
        console.log(response);
        toastr.error(response);
      };

      this.ContactsService.create(contact)
        .then(success)
        .catch(error);
      
    }

  }

  angular
    .module('contactsApp')
    .controller('ContactsController', ContactsController);
}
