'use strict';

fetch('http://localhost:4000/api')
  .then(response => response.json())
  .then(data => console.log(data));
