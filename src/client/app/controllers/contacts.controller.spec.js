/* jshint -W117, -W030 */
xdescribe('Contacts Controller', function() {
    var controller;
    var contacts = mockData.getMockContacts();

    beforeEach(function() {
        //module('app.people');
        bard.appModule('contactsApp');
        bard.inject('$controller', '$rootScope');

        var cs = {
            list: function() {
                return contacts;
            },
            create: function() {

            }
        };
        controller = $controller('ContactsController', {
            ContactsService: cs
        });
    });

    it('should exist', function() {
        expect(controller).to.exist;
    });

    it('should have empty contacts array before activation', function() {
        expect(controller.contacts).to.exist;
    });

    describe('list', function() {
        beforeEach(function() {
            contacts = mockData.getMockContacts();
        });

        it('should have contacts', function() {
            expect(controller.contacts).to.have.length.above(0);
        });

        it('should have mock contacts', function() {
            expect(controller.contacts).to.have.length(contacts.length);
        });

    });

    describe('create', function() {

        it('should create new contact', function() {
            contacts = mockData.getMockContacts();
            var contact = {
                name: 'test',
                phone: '555-555-5555'
            };
            controller.create(contact);
            expect(controller.contacts).to.have.length.above(0);
            expect(controller.contacts).to.have.length(contacts.length);
        });

    });

});
