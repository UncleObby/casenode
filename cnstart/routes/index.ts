/*
 * GET home page.
CaseNode main router
Copyright(c)2015 Oliver Low
VERSION 0.1.1
Revision history:
0.1.1 2015-09-03 inception
 */
import express = require('express');

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Home', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'About CaseNode' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Contact information' });
};
