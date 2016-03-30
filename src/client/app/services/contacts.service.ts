namespace contacts {
  'use strict';

  export interface IContactsService {
    list: () => ng.IPromise<Array<contacts.IContacts>>;
    find: (id: string) => ng.IPromise<contacts.IContacts>;
    create: (contact: contacts.IContacts) => ng.IPromise<contacts.IContacts>;
  }

  export class ContactsService implements IContactsService {

    static $inject: Array<string> = ['$resource', '$q'];
    constructor(private $resource: ng.resource.IResourceService,
                private $q: ng.IQService) {
    }

    list() {

      let deferred = this.$q.defer();

      let contacts: Array<contacts.IContacts> = [];

      let success = (response: Array<contacts.IContacts>) => {

        response.forEach((element: contacts.IContacts) => {
          let contact: contacts.IContacts = {
            _id: element._id,
            firstName: element.firstName,
            lastName: element.lastName,
            phone: element.phone
          };
          contacts.push(contact);
        });

        deferred.resolve(contacts);
      };

      let resource = this.$resource('/api/contacts/');
      resource.query(success);

      return deferred.promise;
    }

    find(id: string) {

      let deferred = this.$q.defer();

      let contact: contacts.IContacts = null;

      let success = (response: contacts.IContacts) => {
        contact = {
          _id: response._id,
          firstName: response.firstName,
          lastName: response.lastName,
          phone: response.phone
        };
        console.log(contact);
        deferred.resolve(contact);
      };

      let resource = this.$resource('/api/contacts/:id/', {id: id});
      resource.get(success);

      return deferred.promise;

    }

    create(contact: contacts.IContacts) {

      let deferred = this.$q.defer();

      let success = (response: contacts.IContacts) => {
        console.log('ID: ' + response._id);
        console.log('First Name: ' + response.firstName);
        console.log('Last Name: ' + response.lastName);
        console.log('Phone: ' + response.phone);
        deferred.resolve(response);
      };

      let resource = this.$resource('/api/contacts/');
      resource.save(contact, success);

      return deferred.promise;

    }
  }

  angular
    .module('contactsApp')
    .service('ContactsService', ContactsService);
}
