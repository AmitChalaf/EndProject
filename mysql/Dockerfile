FROM mysql:latest 

ENV MYSQL_ROOT_PASSWORD=1234
ENV MYSQL_DATABASE=FlightSystemDB

COPY flightSystem.sql /docker-entrypoint-initdb.d/flightSystem.sql
