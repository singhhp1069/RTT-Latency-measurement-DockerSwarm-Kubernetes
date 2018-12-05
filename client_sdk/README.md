To start the client SDK , as client sdk is also use nodejs and to run it the dependencies must be installed 

		npm install

to start the client run following command : 

		npm start --PORT --SERVER_SOCKET_IP --SERVER_SOCKET_PORT

	--PORT : have specify the port on which client should start

	--SERVER_SOCKET_IP : Socket IP  to establish a connection to the server  the details can be found on the server frontend and will show that on which ip it should be connected.

	--SERVER_SOCKET_PORT : Socket PORT to establish a connection to the server the details can be found on the server 
	frontend.

	 command eg.  npm start 3001 19.168.2.100 3001
