## Instructions for LARAVEL APP USING SAIL

### First of all open your terminal and then:

Step #1: go to the backend project

```
cd ./example-app
```

Step #2: install dependencies:

```
composer install
```

Step #3: run your docker and run command:

```
docker compose up or sail up
```

Step #4: duplicate .env-example and rename .env file:

Step #5: restart docker with command:

```
sail restart
```

======================================================

## Instructions for React APP

Step #1: go to the backend project

```
cd ./ts-rxc-app
```

Step #2: install dependencies:

```
npm install
```

Step #3: run your project:

```
npm start
```


======================================================

## If you encountered an issue related on db connection:

Find your mysql host by running this command:

```
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <docker container ID>
```

Get the docker container ID of mysql by running this command:

```
docker container ls
```

And then finally use the IP that came from finding your mysql host and put it on the .env file:

```
DB_HOST=<host from docker>
```

Then restart sail/docker

```
sail restart
```
