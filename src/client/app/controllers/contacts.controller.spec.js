/* jshint -W117, -W030 */
describe('Contacts Controller', function () {
  var controller;
  var contacts;

  beforeEach(function () {
    bard.appModule('contactsApp');
    bard.inject('$controller', '$q', '$rootScope', 'ContactsService');

    contacts = mockData.getMockContacts();
    spyOn(ContactsService, 'list').and.returnValue($q.when(contacts));

    controller = $controller('ContactsController');

  });

  it('should exist', function () {
    expect(controller).toBeDefined();
  });

  it('should have empty contacts array before activation', function () {
    expect(controller.contacts).toBeDefined();
  });

  describe('list', function () {

    it('should have contacts', function () {
      $rootScope.$digest();
      expect(controller.contacts.length).toBeGreaterThan(0);
    });

    it('should have mock contacts', function () {
      $rootScope.$digest();
      expect(controller.contacts.length).toEqual(contacts.length);
    });

  });

  describe('create', function () {

    it('should create new contact', function () {

      var contact = {
        name: 'test',
        phone: '555-555-5555'
      };
      spyOn(ContactsService, 'create').and.returnValue($q.when(contacts[0]));

      controller.create(contact);

      $rootScope.$digest();

      expect(controller.contacts.length).toBeGreaterThan(0);
      expect(controller.contacts.length).toEqual(contacts.length);
    });

  });

});
