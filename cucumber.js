export default{
    default : {
        require : [
            'features/step-def/**/*.js',
            'features/support/**/*.js'
        ],
        format: [
            'progress-bar',
            'json: reports/cucumber-report.json',
            'html: reports/cucumber-report.json'
        ],
    }
}