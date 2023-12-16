import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-snezhko-88888-бокс-l');
  this.route('i-i-s-snezhko-88888-бокс-e',
  { path: 'i-i-s-snezhko-88888-бокс-e/:id' });
  this.route('i-i-s-snezhko-88888-бокс-e.new',
  { path: 'i-i-s-snezhko-88888-бокс-e/new' });
  this.route('i-i-s-snezhko-88888-детали-l');
  this.route('i-i-s-snezhko-88888-детали-e',
  { path: 'i-i-s-snezhko-88888-детали-e/:id' });
  this.route('i-i-s-snezhko-88888-детали-e.new',
  { path: 'i-i-s-snezhko-88888-детали-e/new' });
  this.route('i-i-s-snezhko-88888-должность-l');
  this.route('i-i-s-snezhko-88888-должность-e',
  { path: 'i-i-s-snezhko-88888-должность-e/:id' });
  this.route('i-i-s-snezhko-88888-должность-e.new',
  { path: 'i-i-s-snezhko-88888-должность-e/new' });
  this.route('i-i-s-snezhko-88888-заказ-l');
  this.route('i-i-s-snezhko-88888-заказ-e',
  { path: 'i-i-s-snezhko-88888-заказ-e/:id' });
  this.route('i-i-s-snezhko-88888-заказ-e.new',
  { path: 'i-i-s-snezhko-88888-заказ-e/new' });
  this.route('i-i-s-snezhko-88888-клиент-l');
  this.route('i-i-s-snezhko-88888-клиент-e',
  { path: 'i-i-s-snezhko-88888-клиент-e/:id' });
  this.route('i-i-s-snezhko-88888-клиент-e.new',
  { path: 'i-i-s-snezhko-88888-клиент-e/new' });
  this.route('i-i-s-snezhko-88888-сотрудники-l');
  this.route('i-i-s-snezhko-88888-сотрудники-e',
  { path: 'i-i-s-snezhko-88888-сотрудники-e/:id' });
  this.route('i-i-s-snezhko-88888-сотрудники-e.new',
  { path: 'i-i-s-snezhko-88888-сотрудники-e/new' });
  this.route('i-i-s-snezhko-88888-услуга-l');
  this.route('i-i-s-snezhko-88888-услуга-e',
  { path: 'i-i-s-snezhko-88888-услуга-e/:id' });
  this.route('i-i-s-snezhko-88888-услуга-e.new',
  { path: 'i-i-s-snezhko-88888-услуга-e/new' });
});

export default Router;
