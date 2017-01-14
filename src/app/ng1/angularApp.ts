import * as angular from 'angular';
import { AppComponent} from '../app.component';
import { downgradeComponent } from '@angular/upgrade/static';
export let app = () => {
    angular.module('HelloUserApp', [])
            .directive('appComponent', downgradeComponent({component: AppComponent}) as angular.IDirectiveFactory)
            .component('helloComponent', {
                template: `
                    <div>Hello World angular 1</div>
                    <div>Your name is {{$ctrl.user}}</div>
                `,
                bindings : {
                    user : '<'
                },
                controller: function () {
                    this.$onInit = function() {
                        console.log('angular 1: init called');
                    };
                    this.$onDestroy = function() {
                        console.log('angular 1: destroy called');
                    };
                }
            });

};
