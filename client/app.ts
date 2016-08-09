import reflectMetadata from 'reflect-metadata';
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Component } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { Parties } from '../collections/parties';
import { Mongo } from 'meteor/mongo';
 
import template from './app.html';
 
@Component({
  selector: 'app',
  template
})
class Socially { 
	parties: Mongo.Cursor<Object>;

	constructor() {
	    this.parties = Parties.find();
  }
}
 
bootstrap(Socially);