## Example showing the following working together:

- Drupal 7
- AngularJS
- NodeJS (used to satisfy the grunt dependencies)
- Grunt (used to concatenate all js files into one)

### How to get this example working in your Drupal 7 website:

1. Install and enable the Drupal7 [AngularJS module](www.drupal.org/project/angularjs)
2. NodeJS must also be install and npm must be working (not going to cover that here)
3. git clone this repository into your sites/all/modules/custom/ folder
4. cd to the new location (sites/all/modules/custom/d7_ang_example)
5. Download Grunt dependencies with: npm install
6. Enable the example module in your drupal module confiuration (it will be called D7 AngularJS Example)
7. Visit your drupal site but add the following to the URL (after the domain name) /d7_ang_example
8. This should be enough to provide an idea of how to integrate a custom AngularJS module in Drupal 7

Happy angularing in Drupal 7
