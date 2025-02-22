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

                    // Dynamically get the running MySQL container name
                    def mysqlContainer = sh(script: "docker ps --filter 'ancestor=mysql:8' --format '{{.Names}}' | grep 'tech-mysql-db'", returnStdout: true).trim()

                    echo "MySQL container detected: ${mysqlContainer}"

                    // Wait for MySQL to be ready
                    echo "Waiting for MySQL to be ready..."
                    sh """
                        count=0
                        while [ \$count -lt 30 ]; do
                            if docker exec ${mysqlContainer} mysqladmin ping -h localhost --silent; then
                                echo "MySQL is ready!"
                                exit 0
                            fi
                            echo "Waiting for MySQL... (\$count/30)"
                            sleep 5
                            count=\$((count+1))
                        done
                        echo "MySQL did not start in time."
                        exit 1
                    """

                    // Grant MySQL privileges dynamically
                    echo "Granting MySQL privileges..."
                    sh """
                        docker exec -i ${mysqlContainer} mysql -u root -proot <<EOF
                        GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' WITH GRANT OPTION;
                        FLUSH PRIVILEGES;
                        EOF
                    """
                }
            }
        }
    }
}