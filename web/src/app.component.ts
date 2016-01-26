import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    template:`
        <h2>1111</h2>
        `
    ,
    styles: ['.selected:{background:red}']
})
export class AppComponent{
    public title = 'Hero!';
    public heroes;

    constructor(){}
}