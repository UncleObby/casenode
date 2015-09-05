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

/* user route
shortcut for users to access their pages
e.g. 
	/user/AC1 - home page of user AC1
	/user/AC1/today - the today page for user AC1
	/user/AC1/config - user's personal config settings
	/user/AC1/settings - an alias for .../config
	/user/AC1/profile - edit personal profile
*/
export function user(req: express.Request, res: express.Response) {
	res.render('user', { title: 'User', user: req.url.toString() });
};

/* docgen
Document generator
e.g.
	/docgen?template=ClientCareLetter&matterID=275008
	/docgen - document generator page
*/
export function docgen(req: express.Request, res: express.Response) {
	res.render('docgen', { title: 'Document Generator' }); 
};