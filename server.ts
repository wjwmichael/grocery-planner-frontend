import express from "express";
import * as path from 'path'
import cookieParser from 'cookie-parser'
import logger =  require('morgan')
import * as http from 'http'
import config from './config.json'
export class Server{
    constructor(private app: express.Application) {
    }
  
    public async init(){
        try{
            this.app.use(logger('dev'));
            this.app.use(express.json());
            this.app.use(express.urlencoded({ extended: false }));
            this.app.use(cookieParser());
            this.app.use(express.static(path.join(__dirname, 'dist')));

            this.app.get('*', (req:any, res:any) =>{
                res.sendFile(path.resolve(__dirname + '/dist/index.html'));
            });
        }catch (err) {
            console.log({ error: err }, "Fatal error occurred", err);
            throw err;
        }
    }

    public async run(){
        try {
            let server = http.createServer(this.app);
            server.listen(config.port);
        }
        catch(err){
            console.log({ error: err }, "Fatal error occurred", err);
            throw err;
        }
    }
}