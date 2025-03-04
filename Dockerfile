FROM openjdk:17-jdk-slim AS build

WORKDIR /tech
COPY target/CyfrifProTech-0.0.1-SNAPSHOT.jar tech.jar
COPY /etc/letsencrypt/cyfrifprotech.com.p12 /etc/letsencrypt/cyfrifprotech.com.p12
EXPOSE 8443
ENTRYPOINT ["java", "-jar", "tech.jar"]