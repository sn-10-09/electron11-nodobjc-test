# electron11-nodobjc-test

OS : Mac Catalina 10.15.7
Node : 12.18.3
Electron : 11.1.0

Trying to call a mac framework from electron js in electron 11 via nodobjc 

To run the code:

1. Clone the repo
2. cd electron-quick-start-master
2. run 'yarn' to compile
3. run 'yarn start' to execute

The 'test-framework' contains code for the MAC framework, which sends a callback to electron. 
The callback is done successfully when there are no arguments in the callback.
When the callback has a argument, the app crashes.
