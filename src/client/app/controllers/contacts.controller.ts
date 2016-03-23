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

    contacts: Array<any> = [];


    list() {
      this.contacts = this.ContactsService.list();
    }

    create(contact: contacts.IContacts) {
      this.ContactsService.create(contact);
      this.list();
      toastr.success('Created Contact - ' + contact.name, 'Success');
    }
  }

  angular
    .module('contactsApp')
    .controller('ContactsController', ContactsController);
}
