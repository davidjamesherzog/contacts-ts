/* jshint -W117, -W030 */
describe('Contacts Service', function () {
  'use strict';

  var responseObject;
  var functionObject;
  var spySuccess;
  var spyFailure;
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
    spySuccess = sinon.spy(functionObject, 'success');
    spyFailure = sinon.spy(functionObject, 'failure');

  });

  it('exists', function () {
    expect(ContactsService).to.exist;
  });

  describe('list', function() {

    it('returns a value', function () {
      $httpBackend.whenGET('/api/contacts').respond(200, api.contacts.list.success);

      ContactsService.list()
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(spySuccess).to.have.been.called;
      expect(spyFailure).not.to.have.been.called;

      expect(responseObject).to.have.length(5);
      expect(responseObject[0]._id).to.be.equal(id);
      expect(responseObject[0].firstName).to.be.equal('Jim');
      expect(responseObject[0].lastName).to.be.equal('Smith');
      expect(responseObject[0].phone).to.be.equal('555-555-5555');
    });

  });


  describe('find', function() {

    it('returns a value', function () {
      $httpBackend.whenGET('/api/contacts/56d765240b76fee631c409ef').respond(200, api.contacts.find.success);

      ContactsService.find(id)
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(spySuccess).to.have.been.called;
      expect(spyFailure).not.to.have.been.called;

      expect(responseObject._id).to.be.equal(id);
      expect(responseObject.firstName).to.be.equal('Jim');
      expect(responseObject.lastName).to.be.equal('Smith');
      expect(responseObject.phone).to.be.equal('555-555-5555');
    });

  });

  describe('create', function() {

    it('adds a contact', function () {
      $httpBackend.whenPOST('/api/contacts').respond(200, api.contacts.create.success);

      var contact = {firstName: 'Jim', lastName: 'Smith', phone: '555-555-5555'};
      ContactsService.create(contact)
        .then(functionObject.success, functionObject.failure);

      $httpBackend.flush();

      expect(spySuccess).to.have.been.called;
      expect(spyFailure).not.to.have.been.called;

      expect(responseObject._id).to.be.equal(id);
      expect(responseObject.firstName).to.be.equal('Jim');
      expect(responseObject.lastName).to.be.equal('Smith');
      expect(responseObject.phone).to.be.equal('555-555-5555');
    });

  });

});
