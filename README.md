# ORMAE - Back End Engineer 
  
****Data****:  Assuming data from MQTT device. 

****Requirement****:
1) Nodejs - version 10+	-> Rest API to store live data into database
2) ExpressJs -> Web Application Framework
3) Mongodb -> Database
4) MQTT -> Real time data device
5) S3 -> File Storage

# Project Implementation 

*Step1:*  Connect MQTT server and subscribe the topic.

*Step2:* From topic will receive the data and stored into file, based on vehicle unique_id.

*Step3:*  At the end of step2 will update data into **MongoDB** for convenience to show in `dashboard`

*Step4:*  At the end of the day all storage files will zip and move into S3 storage (`ToDo` test and train data) based on vehicle Unique_id.

**Case 1 :  vehicle continuously moving**
Each and every time we are getting vehicle GEO location and write into file. So we can compare the data and will udpate status into MongoDb is **Active**.

**Case 2 :  vehicle not moving more than a minute**
In this case every time will get GEO location Id and will calculate the distance from previous data. So that the differnece will get less than 1  will update to status into MongoDb as **InActive**


# Additional Points   

****1) **Explain what and why the technologies you recommend should be used******:  NodeJs, MongoDB, MQTT
			**Node.js** is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

Vehicles data is unstructured. So i have chosen NoSQL database - `MongoDB`
**MongoDB** Document Database, which provides high performance and scalability along with data modelling and data management of huge sets of data in an enterprise application.

**MQTT** is a publish/subscribe protocol that allows edge-of-network devices to publish to a broker. Clients connect to this broker, which then mediates communication between the two devices. ... When another client publishes a message on a subscribed topic, the broker forwards the message to any client that has subscribed

****2) ****Deployment strategies********: Docker
`Docker` provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host

**step1**: *Clone project* ::   
  
	 git clone https://github.com/narendra-polam/nodejs.git
Note: Before run this command install Nodejs and git in your local.    
    
**step2**: *Go To Project directory*   
	 cd ORAME-test

**step3** :  Build Docker Container  

	 docker build -t narendra .  
Note: Here `narendra` is container name.    
  
**step4**:  Run Docker Image  
  
	 docker run -p 4545:8080 --name mynodejs -d narendra 
Note: Here `mynodejs` is docker image name. Code repo exposed to `4545` port  
    
**step5**:  Check logs  
  
	 docker logs -f mynodejs

****3) ******What kind of tests could be integrated in the CI/CD pipeline**********: 

` Integration test` : Integration tests verify that different modules or services used by your application work well together. For example, it can be testing the interaction with the database or making sure that microservices work together as expected. These types of tests are more expensive to run as they require multiple parts of the application to be up and running.

`Smoke testing` : Smoke tests are basic tests that check basic functionality of the application. They are meant to be quick to execute, and their goal is to give you the assurance that the major features of your system are working as expected.

`Acceptance testing` : Acceptance tests are formal tests executed to verify if a system satisfies its business requirements. They require the entire application to be up and running and focus on replicating user behaviors. But they can also go further and measure the performance of the system and reject changes if certain goals are not met.