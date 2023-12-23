# Dizi-izi-plan

## Как развернуть проект

- Для развёртывания проекта необходимо скачать его в нужную вам директорию, например:

``` https://github.com/dizi-izi-plan/dzp.git ```

### Перейдите в директорию '''infra/''' и выполните ряд действий:
1. В директории infra создайте файл .env с переменными окружения для работы с проектом:
```
DJANGO_KEY='django-insecure-zc))j&u4h!-r1r!8#!a_8p9q1kkt#7+64$*amhm107m$k(c*sm'
DEBUG_KEY=False
ALLOWED_HOSTS=localhost,*
DB_ENGINE=django.db.backends.postgresql
DB_NAME=test_db_name
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
DB_HOST=db
DB_PORT=5432
EMAIL_BACKEND=django.core.mail.backends.smtp.EmailBackend
EMAIL_HOST=
EMAIL_PORT=
EMAIL_HOST_USER=
DEFAULT_FROM_EMAIL=
EMAIL_HOST_PASSWORD=
```
2. Выполните команды:
```
docker-compose up -d --build
```

- Теперь нужно выполнить миграции, создать суперпользователя и собрать статику
```
docker-compose exec backend python manage.py makemigrations
docker-compose exec backend python manage.py migrate
docker-compose exec backend python manage.py createsuperuser
docker-compose exec backend python manage.py collectstatic --no-input 
```