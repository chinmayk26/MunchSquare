if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(function(registration) {
    // Then later, request a one-off sync:
    console.log('Registration successful, scope is:', registration.scope);
    navigator.serviceWorker.ready.then(function(swRegistration) {
    return swRegistration.sync.register('myFirstSync');
  })
  .catch(function(error) {
    console.log('Service worker registration failed, error:', error);
  });
  

});
}
