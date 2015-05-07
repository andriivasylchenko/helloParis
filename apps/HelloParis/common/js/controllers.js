angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, $timeout) {

      $scope.micButton = 'button ion-ios-mic-outline mic positive';
      $scope.micActive = false;
      $scope.showIntro = true;
        $scope.showHistory = false;
        $scope.translated = false;

      $scope.TalkToMe = function () {
        $scope.micActive = true;
        $scope.showIntro = false;
        $scope.showSpinner = true;
        $scope.micButton = 'button ion-ios-mic mic positive';
        $scope.moveDown = 'css-class';
        $scope.EnglishText = '';
        $scope.FrenchText = '';
        $scope.items = [
          { english: 'test', french: 'test'},
          { english: 'test1', french: 'test1'}
        ];

              var commands = {
                  '*val': function(val) {
                      console.log('Your speech', val);
                      $scope.EnglishText = val;
                  }
              };

              // Add our commands to annyang
              annyang.addCommands(commands);

              // Start listening.
                annyang.start({ autoRestart: false, continuous: false });

          annyang.addCallback('end', function () {
              $scope.showSpinner = false;
              console.log('Speech ended');
              $scope.micButton = 'button ion-ios-mic-outline mic positive';
              $scope.showHistory = true;
              $scope.translated = true;
              $scope.$apply();
              $scope.translateToFrench($scope.EnglishText);
          });
      };

      $scope.translateToFrench = function(term) {
          console.log('English text', term);
        $scope.FrenchText = term;
          console.log('French text', $scope.FrenchText);
          $scope.$apply();
      };

        $scope.speakFrench = function (text) {
            console.log ('speak this', text);
        }

    });

