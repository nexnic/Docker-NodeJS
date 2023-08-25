# Web-host with docker
This is easy setup with web-host using nodeJS and docker container. 
This is made for learning and not for use.


## Requirment 
You will need to have Docker install on your system, and your os most have support for VM technoly. if you are using windows need pro version of your os to run VM tecnology and you may need to enable VM bios. Will support this. 
- [docker](https://www.docker.com/)
- [Window-pro](https://www.microsoft.com/en-us/d/windows-11-pro/dg7gmgf0d8h4)
- [vm-bios](https://www.simplilearn.com/enable-virtualization-windows-10-article)

## Installation

Open your terminal and go to root folder of this app.

It's importent note 
command for docker is (docker).
and next we are telling docker we want to build so (build)
so we are going to tage this with name so next command is (-t)
and now you are going to name the docker image so next command is name of (name it)
now we will end this with dot this tell the docker to look after Dockerfile 
```
docker build -t name . 
```

Now it will install nodejs to this image, 
after this is finsh you can se next run
 

## Run 
let's run the docker image now, 
```
docker run -p 8000:8000  kent-top10
 ```

If you have any problem contact me 
 


## Contributing
- [jonas-schmedtmann-course-on-nodeJs](https://www.udemy.com/course/nodejs-express-mongodb-bootcamp/)
## License

- [MIT]()