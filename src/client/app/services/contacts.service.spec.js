/* jshint -W117, -W030 */
describe('Contacts Service', function () {
  'use strict';

  var responseObject;
  var functionObject;
  var id = '56d765240b76fee631c409ef';

  var api = {
    contacts: {
      list: {
        success: readJSON('json/api/contacts/list.json')
      },
      find: {
        success: readJSON('json/api/contacts/find.json')
      },
      create: {
        success: readJSON('json/api/contacts/create.json')
      }
    },
    error: {
      unknown: readJSON('json/api/unknownError.json')
    }
  };

  beforeEach(function () {
    bard.appModule('contactsApp');
    bard.inject('$httpBackend', 'ContactsService');
    localStorage.clear();
    localStorage['Dave'] = '555-555-5555';
    localStorage['Bob'] = '555-555-5555';

    responseObject = {};
    functionObject = {
      success: function(response) {
        responseObject = response;
      },
      failure: function(response) {
        responseObject = response;
      }
    };
    spyOn(functionObject, 'success').and.callThrough();
    spyOn(functionObject, 'failure').and.callThrough();
  });

  it('exists', function () {
    expect(ContactsService).toBeDefined();
  });

  describe('list', function() {

    it('returns a value', function () {
      $httpBackend.whenGET('/api/contacts').respond(200, api.contacts.list.success);

      ContactsService.list()
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(functionObject.success).toHaveBeenCalled();
      expect(functionObject.failure).not.toHaveBeenCalled();

      expect(responseObject.length).toEqual(5);
      expect(responseObject[0]._id).toEqual(id);
      expect(responseObject[0].firstName).toEqual('Jim');
      expect(responseObject[0].lastName).toEqual('Smith');
      expect(responseObject[0].phone).toEqual('555-555-5555');
    });

  });

  describe('find', function() {

    it('returns a value', function () {
      $httpBackend.whenGET('/api/contacts/56d765240b76fee631c409ef').respond(200, api.contacts.find.success);

      ContactsService.find(id)
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(functionObject.success).toHaveBeenCalled();
      expect(functionObject.failure).not.toHaveBeenCalled();

      expect(responseObject._id).toEqual(id);
      expect(responseObject.firstName).toEqual('Jim');
      expect(responseObject.lastName).toEqual('Smith');
      expect(responseObject.phone).toEqual('555-555-5555');
    });

  });

  describe('create', function() {

    it('adds a contact', function () {
      $httpBackend.whenPOST('/api/contacts').respond(200, api.contacts.create.success);

      var contact = {firstName: 'Jim', lastName: 'Smith', phone: '555-555-5555'};
      ContactsService.create(contact)
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(functionObject.success).toHaveBeenCalled();
      expect(functionObject.failure).not.toHaveBeenCalled();

      expect(responseObject._id).toEqual(id);
      expect(responseObject.firstName).toEqual('Jim');
      expect(responseObject.lastName).toEqual('Smith');
      expect(responseObject.phone).toEqual('555-555-5555');
    });

  });

});
