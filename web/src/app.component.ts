import {Component, View} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { RouteConfig, RouterLink, RouterOutlet } from 'angular2/router';

@Component({
    selector: 'my-app'
})
@View({
    templateUrl: 'web/templates/test.html',
    styles: ['.selected:{background:red}']
})
export class AppComponent{
    public title = 'Hero!';
    public heroes;

    constructor(){}
}