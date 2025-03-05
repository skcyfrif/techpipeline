FROM openjdk:17-jdk-slim AS build

WORKDIR /tech
COPY target/CyfrifProTech-0.0.1-SNAPSHOT.jar tech.jar
EXPOSE 2002
ENTRYPOINT ["java", "-jar", "tech.jar"]