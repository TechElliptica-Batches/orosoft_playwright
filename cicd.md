What is CI-CD ? 

caught issue early 
-- productivity increase

ROI - Return of investment
100 release = 500 min / 1 hour
manual tester - 5 min 
automation script - 1 hours

regression -
retesting - 

application , login, transactoin, billing
registration - 
bug - login empty 

smoke testing - application stability 
sanity testing

retesting 
smoke -> sanity (new functionality) -> regression

use case 
9 - 6PM
5pm IST - build
9AM - 12 - 1 bug
1PM raise developer
5PM ->.  20 hours

4 hour
5pm IST - build
5pm - 8PM - 9PM (bug)


CI-CD 

1 - automation framework 
2 - transparency emiler and status 


Jenkins, azure devops, bamboo, github workflow


1 - master and slave architecture 
1 distributed 
agents - node machine - slave machines

2 - jobs , workflow, pipelines

job structure 

1 - project mapping 
    checkout plugins

2 - triggers

    a - version control webhook - commit, tags
    b - cron jobs - schedule the job
    c - dependent job

    smoke -> sanity -> regression 

    smoke
    sanity
    regression

3 - command to execute (build step)
    npx playwright test

4 - post build
   1 - mailer (smtp)
   2 - slack / team ()
   3 - trigger deployment job


   


github   -   jenkins

1 - polling 
2 - web hook 

github developer commit - jenins per job run hona chahiye


shift left approach 

requiement -> developer -> automation testing 
BDD framework
automation framework - robust 
team - capability (AI - GenAI)
SDET 
