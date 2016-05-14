var contactController = function(Contact) {

  var api = {
    list: list,
    get: get,
    patch: patch,
    post: post,
    put: put,
    remove: remove,
    use: use
  };
  return api;

  function list(req, res) {

    var query = {};
    /*if (req.query.genre) {
      query.genre = req.query.genre;
    }*/

    Contact.find(query, '-__v', function(err, contacts) {
      if (err)
        res.status(500).send(err);
      else
        res.json(contacts);
    });
  }

  function get(req, res) {
    res.json(req.contact);
  }

  function patch(req, res) {
    if(req.body._id)
      delete req.body._id;

    for(var p in req.body)
    {
      req.contact[p] = req.body[p];
    }

    req.contact.save(function(err) {
      if (err)
        res.status(500).send(err);
      else{
        res.json(req.contact);
      }
    });

  }

  function post(req, res) {
    var contact = new Contact(req.body);

    //if (!req.body.title) {
    //  res.status(400);
    //  res.send('Title is required');
    //} else {
    contact.save(function(err) {
      if (err)
        res.status(500).send(err);
      else{
        res.status(201);
        res.send(contact);
      }
    });

    //}

  }

  function put(req, res) {
    req.contact.firstName = req.body.firstName;
    req.contact.lastName = req.body.lastName;
    req.contact.phone = req.body.phone;

    req.contact.save(function(err) {
      if(err)
        res.status(500).send(err);
      else{
        res.json(req.contact);
      }
    });
  }

  function remove(req, res) {
    req.contact.remove(function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(204).send('Removed');
      }
    })
  }

  function use(req, res, next) {
    Contact.findById(req.params.id, '-__v', function(err, contact) {
      if (err) {
        res.status(500).send(err);
      } else if (contact) {
        req.contact = contact;
        next();
      } else {
        res.status(404).send('no contact found');
      }
    });
  }

};

module.exports = contactController;
