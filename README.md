# Web-host with docker
This is a NodeJS web server inside a Docker container, using Model HTTP and more.
The project is built for a Case Study about Docker as a Development platform, this project runs version 18, which is one of the better things about Docker now every developer can test the same application on node version 18, without needing to reinstall or update the NodeJS on your system. You can fork this project if you want to test or develop more on this.


## Requirment 
If you do not have docker installed on your system you will need to install it to use this, but you will need to have a compatible motherboard with VM enabled on your bios for using docker if you need some help with this check the link underneath. 
- [docker](https://www.docker.com/)
- [Window-pro](https://www.microsoft.com/en-us/d/windows-11-pro/dg7gmgf0d8h4)
- [vm-bios](https://www.simplilearn.com/enable-virtualization-windows-10-article)

## Built With

* [![Docker][Docker]][Docker-url]
* [![NodeJS][NodeJS]][Nodejs-url]

## Getting Started

Before we start building & run this project, you will need to install docker if you have not done this go back to requirements and the link to docker there. 
But if you have installed docker let’s start building the image 

    
### Building Image
We need to build an Image this will be built for the Docker file in the root folder, 
Now you can open the terminal and type in.
```
docker build -t name .
```
You may be wondering why docker build -t name .
The first command is to call upon the Docker application, and the second build is so Docker will know we are going to build an image. the third  -t it’s called tag Docker will now after this the name of the image. now the fourth is the name of the Docker image we are building. Last need to end it the dot this so docker will search for the (Dockerfile). 

### Run Container 
Now we are going to run the container with the image we build. 

Type in this in your terminal
```
docker run -p 8000:8000 server-app
```
When the container is running you will see 
```
Server is Listen on Port:8000
```

Open your browser and type in 
```
http://127.0.0.1:8000/
```


## Contributing

If you have a suggestion that will make this project better, please fork the repo and create a pull request.

1. Fork this Project 
2. Create your Feature Branch (`git checkout  -b feature/NewUpdate`)
3. Commit your Changes (`git push origin feature/NewUpdate`)
4. Push to the Branch (`git push origin feature/NewUpdate`)
5. Open a pull request 

## License

- [MIT]()