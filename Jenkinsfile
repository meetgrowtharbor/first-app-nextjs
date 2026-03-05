pipeline {
    agent any

    environment {
        VERCEL_TOKEN = credentials('vercel-token')
    }

    stages {
        stage('Install') {
            steps {
                sh '''
                    npm install
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                    echo "Skipping Test, no test script found!"
                '''
            }
        }
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    npx vercel --token $VERCEL_TOKEN --prod --yes
                '''
            }
        }
    }
}