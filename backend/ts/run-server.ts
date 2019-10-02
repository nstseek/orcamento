import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { NodeServer } from './server';
import { port } from './variables';

/* tslint:disable: no-unused-expression */
new NodeServer(express, bodyParser, cors, port);
