pipeline {
  agent any

  environment {
    DEPLOY_KEY = credentials('github-creds') // Use your ID from Jenkins credentials
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/vaibhavpatidar522/Nutra.ai', branch: 'main'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }

    stage('Docker Build') {
      steps {
        sh 'docker build -t fitness-ai-app .'
      }
    }

    stage('Deploy to EC2 (Local Jenkins Server)') {
      steps {
        sh './deploy.sh'
      }
    }
  }

  post {
    failure {
      echo 'Pipeline failed!'
    }
    success {
      echo 'Pipeline succeeded!'
    }
  }
}

