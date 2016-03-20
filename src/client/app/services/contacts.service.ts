namespace contacts {
  'use strict';

  export interface IContactsService {
    list: () => Array<contacts.IContacts>;
    find: (name: string) => contacts.IContacts;
    create: (contact: contacts.IContacts) => void;
  }

  export class ContactsService implements IContactsService {

    //static $inject: Array<string> = [];
    constructor() {
    }

    list() {
      let contacts: Array<contacts.IContacts> = [];

      for (let i = 0; i < localStorage.length; i++) {
        let contact: contacts.IContacts = {
          name: localStorage.key(i),
          phone: localStorage[localStorage.key(i)]
        };
        contacts.push(contact);
      }

      return contacts;
    }

    find(name: string) {

      let contact: contacts.IContacts = {
        name: name,
        phone: localStorage[name]
      };

      return contact;

    }

    create(contact: contacts.IContacts) {

      console.log('Name: ' + contact.name);
      console.log('Phone: ' + contact.phone);

      localStorage[contact.name] = contact.phone;

    }
  }

  angular
    .module('contactsApp')
    .service('ContactsService', ContactsService);
}
