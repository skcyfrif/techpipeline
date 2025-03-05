FROM openjdk:17-jdk-slim AS build

WORKDIR /tech
COPY target/CyfrifProTech-0.0.1-SNAPSHOT.jar tech.jar
EXPOSE 8443
ENTRYPOINT ["java", "-jar", "tech.jar"]