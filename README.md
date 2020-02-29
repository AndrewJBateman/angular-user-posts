# Angular API User Posts

* App to get user details and posts from an external [JSONPlaceholder](https://jsonplaceholder.typicode.com) API.

*** Note: to open web links in a new window use: _ctrl+click on link_**

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* Angular routing module allows user to navigate between Users and Posts pages.
* Angular httpClient used to get API data.
* Sidebar with [Google Material](https://material.io/) icons and links to pages.

## Screenshots

![Example screenshot](./img/users.png).
![Example screenshot](./img/posts.png).

## Technologies

* [Angular v9.1.0](https://angular.io/)
* [RxJS Library v6.5.4](https://angular.io/guide/rx-library) used to [subscribe](http://reactivex.io/documentation/operators/subscribe.html) to the API data [observable](http://reactivex.io/documentation/observable.html).
* [Google Material](https://material.io/) icons used.

## Setup

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code Examples

* `data.service.ts` using httpClient service with functions to get users, userIds and posts.

```typescript

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}

```

## Features

* Angular httpClient used to get data from an external API.
* Material icons used.
* Updated to latest Angular 9 version with all dependency conflicts resolved.

## Status & To-Do List

* Status: Working. Simple working app that extracts API data and displays it.
* To-Do: add functionality.

## Inspiration

* [Coursetro Tutorial written version: Angular 6 Tutorial - Learn Angular 6 in this Crash Course](https://coursetro.com/posts/code/154/Angular-6-Tutorial---Learn-Angular-6-in-this-Crash-Course)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
