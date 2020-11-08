# DigsUp-UI

## Install locally
1. Clone from repo:

    ```git clone https://github.com/vnikolaou/digsup-ui.git``` 
2. Go to project's root folder:

    ```cd digsup-ui```
3. Run:  

    ```yarn install``` 

## Start the app in dev mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. Run:  

    ```yarn start```    

## Run unit tests in dev mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. For unit tests, run:  

    ```yarn test``` 


## Compile the app for prod mode
1. Go to project's root folder:

    ```cd digsup-ui```
2. Run:  

    ```yarn build```


## Run the app in prod mode (as Docker container)
1. Go to project's dist folder:

    ```cd digsup-ui```
2. Build the image:

    ```sudo docker build --rm -f Dockerfile -t digsup-ui:latest .```
3. Run a container from the new image:

    ```sudo docker run --rm -d -p 8080:80 digsup-ui:latest```
3. Open a browser and visit the address:
    ```http://localhost:8080```
    
    
## Run e2e tests 
1. Go to project's root folder:

    ```cd digsup-ui```
2. Start the app as docker container (as described above)   
3. Run:  

    ```yarn test-e2e```
4. Wait until all the tests run on Chrome and review the results    
