pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'tech:latest' // Docker image name
        MYSQL_HOST = 'tech-mysql-db' // MySQL service name in docker-compose file
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    echo "Cloning repository..."
                    checkout scm
                }
            }
        }

        stage('Build Application') {
            steps {
                script {
                    echo "Building the JAR..."
                    sh 'command -v mvn >/dev/null 2>&1 || { echo "Maven is not installed"; exit 1; }'
                    sh 'mvn clean package -DskipTests'  // Ensure JAR is built
                }
            }
        }

        stage('Stop & Remove Old Containers') {
            steps {
                script {
                    echo "Stopping and removing old containers..."
                    sh 'docker-compose -f docker-compose.yml down || true'
                }
            }
        }

        stage('Remove Old Docker Image') {
            steps {
                script {
                    echo "Removing old Docker image..."
                    sh "docker images -q $DOCKER_IMAGE | xargs -r docker rmi -f || true"
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "Building new Docker image..."
                    sh "docker build -t $DOCKER_IMAGE ."
                }
            }
        }

        stage('Run Docker Compose') {
            steps {
                script {
                    echo "Setting up network..."
                    sh 'docker network ls | grep -w tech-network || docker network create tech-network'
                    echo "Starting services..."
                    sh 'docker-compose -f docker-compose.yml up -d'
                }
            }
        }
    }
}
