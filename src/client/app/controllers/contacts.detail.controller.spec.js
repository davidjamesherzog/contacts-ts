/* jshint -W117, -W030 */
xdescribe('Contacts Detail Controller', function() {
    var controller;
    var contacts = mockData.getMockContacts();

    beforeEach(function() {
        //module('app.people');
        bard.appModule('contactsApp');
        bard.inject('$controller', '$rootScope', '$stateParams');

        var cs = {
            find: function(name) {
                return {name: 'Dave', phone: '555-555-5555'};
            }
        };
        controller = $controller('ContactsDetailController', {
            ContactsService: cs
        });
    });

    it('should exist', function() {
        expect(controller).to.exist;
    });

    describe('find', function() {
        beforeEach(function() {
            $stateParams.name = 'Dave';
        });

        it('should return contact', function() {
            expect(controller.contact).to.exist;
            expect(controller.contact.name).to.be.equal('Dave');
            expect(controller.contact.phone).to.be.equal('555-555-5555');
        });

    });

});
