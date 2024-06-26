# DICE205 TECHNICAL EXAM

## About The Application

Laravel 8

**Step 1**: clone the project with git

```sh
$ git clone https://github.com/mark2497/furparents-app.git
```

**Step 2**: go into the `furparents-app` folder and run composer
```sh
$ cd furparents-app
$ composer install
```

**Step 2.1**: if you want to get the last vendor versions, run composer update
```sh
$ composer update
```

**Step 3**: install node modules with npm
```sh
# with npm 
$ npm install
```

**Step 3.1**: if you want to upgrade to the last module versions, do it with npm
```sh
# with npm 
$ npm update
```

**Step 4**: run the migration
```sh
$ php artisan migrate:fresh
```

**Step 5**: Open 2 terminal and execute each command simultaneously.
In your first terminal
```sh
npm run dev
```
or
```sh
npm run watch
```
In your second terminal
```sh
php artisan serve
```

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable, creative experience to be truly fulfilling. Laravel attempts to take the pain out of development by easing common tasks used in the majority of web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, yet powerful, providing tools needed for large, robust applications. A superb combination of simplicity, elegance, and innovation give you tools you need to build any application with which you are tasked.

## Learning Laravel

Laravel has the most extensive and thorough documentation and video tutorial library of any modern web application framework. The [Laravel documentation](https://laravel.com/docs) is thorough, complete, and makes it a breeze to get started learning the framework.

If you're not in the mood to read, [Laracasts](https://laracasts.com) contains over 900 video tutorials on a range of topics including Laravel, modern PHP, unit testing, JavaScript, and more. Boost the skill level of yourself and your entire team by digging into our comprehensive video library.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](http://laravel.com/docs/contributions).

## License

The Laravel framework is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
