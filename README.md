# Logging NodeJS with the ELK Stack

This repo serves as a functioning proof-of-concept for the video [Logging Nodejs apps with ELK: Elasticsearch, Logstash, and Kibana](https://www.youtube.com/watch?v=nnpcTyHZvS8).

# Requirements

You'll need docker desktop to run the example.

# Usage

## Launch the environment

Type `make up` to bring the docker-compose environment up. This will launch the ExpressJS application server, Elasticsearch, 
Logstash, and Kibana.

## Seeding the database environment

Use `make migrate` to create the database schema (required for the `/users` endpoint) followed by `make seed` to populate 
the database with test data.

## Generate some logs

Once the environment is running, hit `http://localhost:3000` and `http://localhost:3000/users` to generate some logs.

The logs are sent to logstash using the winston-logstash-transport in `./helpers/logging.js`. Logstash is configured to send 
the logs to Elasticsearch using the config found in `elastic/logging.conf`.

Launch [Kibana](http://localhost:5601) and follow the instructions to setup the logstash index pattern. You can then view the logs 
using Kibana Discovery.

The ExpressJS `/` endpoint simply logs an info message. The `/users` endpoint logs an info message but also some key/value 
pairs that can be visualized in Kibana (and optionally reported/monitored/put on a dashboard/etc...)

Happy coding!
