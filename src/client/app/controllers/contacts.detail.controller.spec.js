/* jshint -W117, -W030 */
describe('Contacts Detail Controller', function () {
  var controller;
  var spy;

  var api = {
    contacts: {
      find: {
        success: readJSON('json/api/contacts/find.json')
      }
    },
    error: {
      unknown: readJSON('json/api/unknownError.json')
    }
  };

  beforeEach(function () {
    bard.appModule('contactsApp');
    bard.inject('$controller', '$q', '$rootScope', '$stateParams', 'ContactsService');

    spyOn(ContactsService, 'find').and.returnValue($q.when(api.contacts.find.success));

    //controller = $controller('ContactsDetailController');
    controller = $controller('ContactsDetailController', {
      $stateParams: $stateParams,
      ContactsService: ContactsService
    });

  });

  it('should exist', function () {
    expect(controller).toBeDefined();
  });

  describe('find', function () {

    var id = '56d765240b76fee631c409ef';

    beforeEach(function () {
      $stateParams.id = id;
    });

    it('should return contact', function () {

      controller.find();

      $rootScope.$apply();

      /*expect(controller.contact).to.exist;
      expect(controller.contact.id).to.be.equal(id);
      expect(controller.contact.firstName).to.be.equal('Jim');
      expect(controller.contact.lastName).to.be.equal('Smith');
      expect(controller.contact.phone).to.be.equal('555-555-5555');*/
    });

  });

});
