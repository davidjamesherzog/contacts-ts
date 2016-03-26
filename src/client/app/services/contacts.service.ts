namespace contacts {
  'use strict';

  export interface IContactsService {
    list: () => ng.IPromise<Array<contacts.IContacts>>;
    find: (id: string) => ng.IPromise<contacts.IContacts>;
    create: (contact: contacts.IContacts) => void;
  }

  export class ContactsService implements IContactsService {

    static $inject: Array<string> = ['$resource', '$q'];
    constructor(private $resource: ng.resource.IResourceService,
                private $q: ng.IQService) {
    }

    list() {

      let deferred = this.$q.defer();

      let contacts: Array<contacts.IContacts> = [];

      let resource = this.$resource('/api/contacts/');
      resource.query(function(response: Array<contacts.IContacts>) {
        response.forEach(function(element: contacts.IContacts) {
          let contact: contacts.IContacts = {
            _id: element._id,
            firstName: element.firstName,
            lastName: element.lastName,
            phone: element.phone
          };
          contacts.push(contact);
        });
        deferred.resolve(contacts);
      });

      return deferred.promise;
    }

    find(id: string) {

      let deferred = this.$q.defer();

      let contact: contacts.IContacts = null;
      let resource = this.$resource('/api/contacts/:id/', {id: id});
      resource.get(function(response: contacts.IContacts) {
        contact = {
          _id: response._id,
          firstName: response.firstName,
          lastName: response.lastName,
          phone: response.phone
        };
        console.log(contact);
        deferred.resolve(contact);
      });

      return deferred.promise;

    }

    create(contact: contacts.IContacts) {

      let resource = this.$resource('/api/contacts/');
      resource.save(contact, function(response: contacts.IContacts) {
        console.log('ID: ' + response._id);
        console.log('First Name: ' + response.firstName);
        console.log('Last Name: ' + response.lastName);
        console.log('Phone: ' + response.phone);
      });

    }
  }

  angular
    .module('contactsApp')
    .service('ContactsService', ContactsService);
}
