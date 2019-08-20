const express = require('express')
const app = express()
const port = 3000

app.get('/hello',(req,res)=>{
	console.log('hello');
})
app.get('/hello-2',(req,res)=>{
	console.log('hello-2');
})
app.get('/hello-3',(req,res)=>{
	console.log('hello-3');
})
app.get('/hello-4',(req,res)=>{
	console.log('hello-4');
})