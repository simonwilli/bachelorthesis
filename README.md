# Bachelorthesis

This repo is for my bachelorthesis: Virtualisierungstechnologien und ihre divergierenden Einsatzzwecke

## Vue

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## Docker

### Build docker image

```
docker build -t simonwilli/decisionhelper .
```

### Push to dockerhub

```
docker push simonwilli/decisionhelper
```

### Run in docker

```
docker run -d -p 80:80 zhaw/prototyp-app:latest
```