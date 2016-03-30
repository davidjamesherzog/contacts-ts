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
      this.ContactsService.list()
        .then((response) => {
          console.log('testing');
          this.contacts = response;
        })
        .catch((response) => {
          toastr.error(response);
        });
    }

    create(contact: contacts.IContacts) {
      this.ContactsService.create(contact)
        .then((response) => {
          console.log(response);
        })
        .catch((response) => {
          toastr.error(response);
        });
      this.list();
      toastr.success('Created Contact - ' + contact.firstName + ' ' + contact.lastName, 'Success');
    }

  }

  angular
    .module('contactsApp')
    .controller('ContactsController', ContactsController);
}
