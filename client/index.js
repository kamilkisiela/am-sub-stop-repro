angular.module('demo', [
    'angular-meteor',
    'angular-meteor.auth'
  ])
  .run(($auth) => {
    // be logged in on next reload
    if(!Meteor.userId()) {
      Meteor.loginWithPassword('admin', 'admin');
    }
    // require user
    $auth.requireUser()
      .then((u) => {
        // subscribe
        Meteor.subscribe('invoices', {
          onStop() {
            console.error('stopped');
          },
          onReady() {
            console.info('ready');
          }
        });
        // fetch
        Invoices.find({}, {
          sort: undefined
        }).fetch();
      })
      .catch((e) => {
        // yikes!
        console.log('e', e);
      });
  });

angular.element(document).ready(() => {
  angular.bootstrap(document, ['demo'], {
    strictDi: true
  });
});
