FROM openjdk:8-jre-alpine

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
<<<<<<< HEAD
    JHIPSTER_SLEEP=0 \
    JAVA_OPTS=""
=======
    JHIPSTER_SLEEP=0
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8

# add directly the war
ADD *.war /app.war

<<<<<<< HEAD
EXPOSE 8080
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app.war
=======
VOLUME /tmp
EXPOSE 8080
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java -Djava.security.egd=file:/dev/./urandom -jar /app.war
>>>>>>> 3889c913b8266976ebe9e376a2fe1ef96ea458d8
