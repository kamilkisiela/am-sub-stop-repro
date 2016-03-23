Meteor.startup(function(){
  if (Invoices.find({}).fetch().length === 0) {
    const file = Assets.getText('invoices.json');
    const data = JSON.parse(file);

    data.forEach((val) => Invoices.insert(val));
  }

  if (Meteor.users.find().fetch().length === 0) {
    Accounts.createUser({
      email: 'test@test.com',
      username: 'admin',
      password: 'admin',
      profile: {
        'firstName': 'Foo',
        'lastName': 'Bar'
      }
    });
  }

});
